const assert = require("assert");
const {describe, it} = require("mocha");

const {grpc} = require('../src/index');
const {V2Client} = require("../proto/clarifai/api/service_grpc_pb");
const service = require("../proto/clarifai/api/service_pb");
const resources = require("../proto/clarifai/api/resources_pb");

const common = require("./common");

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + process.env.CLARIFAI_API_KEY);

describe("Integration Tests - static", () => {
    it("List concepts", done => {
        testListConcepts(done);
    });

    it("Predict image URL", done => {
        testPredictImageUrl(done);
    });

    it("Predict image file", done => {
        testPredictImageFile(done);
    });

    it("Failed predict", done => {
        testFailedPredict(done);
    });

    it("List models with pagination 1", done => {
        testListModelsWithPagination1(done);
    });

    it("List models with pagination 2", done => {
        testListModelsWithPagination2(done);
    });

    it("Promise wrappers", done => {
        testPromiseWrappers(done);
    });
});

function makeClarifaiClient() {
    return new V2Client("api.clarifai.com", grpc.ChannelCredentials.createSsl());
}

function testListConcepts(done) {
    const client = makeClarifaiClient();

    client.listConcepts(
        new service.ListConceptsRequest(),
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() !== 10000) {
                done(new Error("Received status: " + response.getStatus().getDescription() + "\n" + response.getStatus().getDetails()));
                return;
            }

            done();
        }
    );
}

function testPredictImageUrl(done) {
    const clarifai = makeClarifaiClient();

    const request = new service.PostModelOutputsRequest()
        .setModelId(common.GENERIC_MODEL_ID);
    request.addInputs(
        new resources.Input()
            .setData(
                new resources.Data()
                    .setImage(
                        new resources.Image()
                            .setUrl(common.DOG_IMAGE_URL)
                    )
            )
    );

    clarifai.postModelOutputs(
        request,
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() !== 10000) {
                done(new Error("Received status: " + response.getStatus().getDescription() + "\n" + response.getStatus().getDetails()));
                return;
            }

            assert.notStrictEqual(response.getOutputsList()[0].getData().getConceptsList().length, 0);

            done();
        }
    );
}

function testPredictImageFile(done) {
    const clarifai = makeClarifaiClient();

    const fs = require("fs");
    const imageBytes = fs.readFileSync(common.METRO_NORTH_IMAGE_FILE_PATH);

    const request = new service.PostModelOutputsRequest();
    request.setModelId(common.GENERIC_MODEL_ID);
    request.addInputs(
        new resources.Input()
            .setData(
                new resources.Data()
                    .setImage(
                        new resources.Image()
                            .setBase64(imageBytes)
                    )
            )
    );

    clarifai.postModelOutputs(
        request,
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() !== 10000) {
                done(new Error("Received status: " + response.getStatus().getDescription() + "\n" + response.getStatus().getDetails()));
                return;
            }

            assert.notStrictEqual(response.getOutputsList()[0].getData().getConceptsList(), 0);

            done();
        }
    );
}

function testFailedPredict(done) {
    const clarifai = makeClarifaiClient();

    const request = new service.PostModelOutputsRequest()
        .setModelId(common.GENERIC_MODEL_ID);
    request.addInputs(
        new resources.Input()
            .setData(
                new resources.Data()
                    .setImage(
                        new resources.Image()
                            .setUrl(common.NON_EXISTING_IMAGE_URL)
                    )
            )
    );

    clarifai.postModelOutputs(
        request,
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() === 10000) {
                done(new Error(
                    "Expected failed status, received 10000: " +
                    response.getStatus().getDescription() +
                    "\n" +
                    response.getStatus().getDetails()
                ));
                return;
            }

            assert.strictEqual(response.getStatus().getDescription(), "Failure");

            assert.strictEqual(response.getOutputsList()[0].getStatus().getCode(), 30002);  // Download failed.

            done();
        }
    );
}

function testListModelsWithPagination1(done) {
    const clarifai = makeClarifaiClient();

    clarifai.listModels(
        new service.ListModelsRequest()
            .setPerPage(2),
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() !== 10000) {
                done(new Error("Received status: " + response.getStatus().getDescription() + "\n" + response.getStatus().getDetails()));
                return;
            }

            assert.strictEqual(response.getModelsList().length, 2);

            done();
        }
    );
}

function testListModelsWithPagination2(done) {
    const clarifai = makeClarifaiClient();

    clarifai.listModels(
        // We shouldn 't have 1000*500 number of models, so the result should be empty.
        new service.ListModelsRequest()
            .setPage(1000)
            .setPerPage(500),
        metadata,
        (err, response) => {
            if (err) {
                done(err);
                return;
            }

            if (response.getStatus().getCode() !== 10000) {
                done(new Error("Received status: " + response.getStatus().getDescription() + "\n" + response.getStatus().getDetails()));
                return;
            }

            assert.strictEqual(response.getModelsList().length, 0);

            done();
        }
    );
}

function testPromiseWrappers(done) {
    const clarifai = makeClarifaiClient();

    function postInputsAsync(request, metadata) {
        return new Promise((resolve, reject) => {
            clarifai.postInputs(request, metadata, (err, response) => {
                if (err !== null) reject(err);
                else if (response.getStatus().getCode() !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    function getInputAsync(request, metadata) {
        return new Promise((resolve, reject) => {
            clarifai.getInput(request, metadata, (err, response) => {
                if (err !== null) reject(err);
                else if (response.getStatus().getCode() !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    function deleteInputAsync(request, metadata) {
        return new Promise((resolve, reject) => {
            clarifai.deleteInput(request, metadata, (err, response) => {
                if (err !== null) reject(err);
                else if (response.getStatus().getCode() !== 10000) reject(response)
                else resolve(response);
            });
        })
    }

    const data = new resources.Data();
    data.setImage(
        new resources.Image()
            .setUrl(common.DOG_IMAGE_URL)
            .setAllowDuplicateUrl(true)
    );
    data.addConcepts(
        new resources.Concept()
            .setId("dog")
    );
    const postInputsRequest = new service.PostInputsRequest();
    postInputsRequest.addInputs(
        new resources.Input()
            .setData(data)
        );

    postInputsAsync(
        postInputsRequest,
        metadata
    )
        .then(response => {
            return getInputAsync(
                new service.GetInputRequest()
                    .setInputId(response.getInputsList()[0].getId()),
                metadata
            )
        })
        .then(response => {
            // We didn't set any concept value, so it should be set to 0 by default.
            assert.strictEqual(response.getInput().getData().getConceptsList()[0].getValue(), 0);

            return deleteInputAsync(
                new service.DeleteInputRequest().setInputId(response.getInput().getId()),
                metadata
            );
        })
        .then(response => {
            done();
        })
        .catch(err => {
            if (err.status) {
                done(new Error(
                    "Received status: " + err.getStatus().getCode() + " " + err.getStatus().getDescription() + " " + err.getStatus().getDetails() +
                    ". Full response:\n" + JSON.stringify(err, null, 2)
                ));
            } else {
            	console.log("Got error: " + err);
                done(new Error(err));
            }
        });
}
