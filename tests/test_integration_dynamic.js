const assert = require("assert");
const {describe, it} = require("mocha");

const {ClarifaiStub, grpc} = require('../src/index');

const common = require("./common");

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + process.env.CLARIFAI_API_KEY);

describe("Integration Tests - dynamic", () => {
    it ("Lists concepts", done => {
        testListConceptsDynamic(done, ClarifaiStub.grpc());
    });

    it("Predicts image URL", done => {
        testPredictImageUrlDynamic(done, ClarifaiStub.grpc());
    });

    it("Predicts image file", done => {
        testPredictImageFileDynamic(done, ClarifaiStub.grpc());
    });

    it("Failed predict", done => {
        testFailedPredictDynamic(done, ClarifaiStub.grpc());
    });

    it("List models with pagination 1", done => {
        testListModelsWithPagination1Dynamic(done, ClarifaiStub.grpc());
    });

    it("List models with pagination 2", done => {
        testListModelsWithPagination2Dynamic(done, ClarifaiStub.grpc());
    });

    it("Promise wrappers", done => {
        testPromiseWrappersDynamic(done, ClarifaiStub.grpc());
    });
});

function testListConceptsDynamic(done, stub) {
    stub.ListConcepts(
        {},
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error("Received status: " + response.status.description + "\n" + response.status.details));
                return;
            }

            done();
        }
    );
}

function testPredictImageUrlDynamic(done, stub) {
    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{data: {image: {url: common.DOG_IMAGE_URL}}}]
        },
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error("Received status: " + response.status.description + "\n" + response.status.details));
                return;
            }

            assert.notStrictEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testPredictImageFileDynamic(done, stub) {
    const fs = require("fs");
    const imageBytes = fs.readFileSync(common.METRO_NORTH_IMAGE_FILE_PATH);

    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{data: {image: {base64: imageBytes}}}]
        },
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error("Received status: " + response.status.description + "\n" + response.status.details));
                return;
            }

            assert.notStrictEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testFailedPredictDynamic(done, stub) {
    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{data: {image: {url: common.NON_EXISTING_IMAGE_URL}}}]
        },
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code === 10000) {
                done(new Error(
                    "Expected failed status, received 10000: " +
                    response.status.description +
                    "\n" +
                    response.status.details
                ));
                return;
            }

            assert.strictEqual(response.outputs[0].status.code, 30002);  // Download failed.

            done();
        }
    );
}

function testListModelsWithPagination1Dynamic(done, stub) {
    stub.ListModels(
        {
            per_page: 2
        },
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error("Received status: " + response.status.description + "\n" + response.status.details));
                return;
            }

            assert.strictEqual(response.models.length, 2);

            done();
        }
    );
}

function testListModelsWithPagination2Dynamic(done, stub) {
    stub.ListModels(
        {
            // We shouldn 't have 1000*500 number of models, so the result should be empty.
            page: 1000,
            per_page: 500
        },
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error("Received status: " + response.status.description + "\n" + response.status.details));
                return;
            }

            assert.strictEqual(response.models.length, 0);

            done();
        }
    );
}

function testPromiseWrappersDynamic(done, stub) {
    function postInputsAsync(...params) {
        return new Promise((resolve, reject) => {
            stub.PostInputs(...params, (err, response) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    function getInputAsync(...params) {
        return new Promise((resolve, reject) => {
            stub.GetInput(...params, (err, response) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    function deleteInputAsync(...params) {
        return new Promise((resolve, reject) => {
            stub.DeleteInput(...params, (err, response) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    postInputsAsync(
        {
            inputs: [
                {
                    data: {
                        image: {
                            url: common.DOG_IMAGE_URL,
                            allow_duplicate_url: true
                        },
                        concepts: [
                            {
                                id: "dog"
                            }
                        ]
                    }
                }
            ]
        },
        metadata
    )
        .then(response => {
            return getInputAsync(
                {
                    input_id: response.inputs[0].id
                },
                metadata
            )
        })
        .then(response => {
            // We didn't set any concept value, so it should be set to 0 by default.
            assert.strictEqual(response.input.data.concepts[0].value, 0);

            return deleteInputAsync(
                {
                    input_id: response.input.id
                },
                metadata
            );
        })
        .then(response => {
            done();
        })
        .catch(err => {
            if (err.status) {
                done(new Error(
                    "Received status: " + err.status.code + " " + err.status.description + " " + err.status.details +
                    ". Full response:\n" + JSON.stringify(err, null, 2)
                ));
            } else {
                done(new Error(err));
            }
        });
}
