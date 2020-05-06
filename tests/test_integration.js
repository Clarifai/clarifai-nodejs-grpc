const assert = require("assert");
const grpc = require("@grpc/grpc-js");
const {describe, it} = require("mocha");

const {ClarifaiStub} = require('../src/index');

const DOG_IMAGE_URL = "https://samples.clarifai.com/dog2.jpeg";
const NON_EXISTING_IMAGE_URL = "https://example.com/non-existing.jpg";
const METRO_NORTH_IMAGE_FILE_PATH = "tests/assets/metro-north.jpg";

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + process.env.CLARIFAI_API_KEY);


describe("Integration Tests", () => {
    it ("Lists concepts on JSON channel", done => {
        testListingConcepts(done, ClarifaiStub.json());
    });

    it ("Lists concepts on gRPC channel", done => {
        testListingConcepts(done, ClarifaiStub.insecureGrpc());
    });

    it("Predicts image URL on JSON channel", done => {
        testPredictingImageUrl(done, ClarifaiStub.json());
    });

    it("Predicts image URL on gRPC channel", done => {
        testPredictingImageUrl(done, ClarifaiStub.insecureGrpc());
    });

    it("Predicts image file on JSON channel", done => {
        testPredictingImageFile(done, ClarifaiStub.json());
    });

    it("Predicts image file on gRPC channel", done => {
        testPredictingImageFile(done, ClarifaiStub.insecureGrpc());
    });

    it("Failed predict on JSON channel", done => {
        testFailedPredict(done, ClarifaiStub.json());
    });

    it("Failed predict on gRPC channel", done => {
        testFailedPredict(done, ClarifaiStub.insecureGrpc());
    });

    it("List models with pagination 1 on JSON channel", done => {
        testListModelsWithPagination1(done, ClarifaiStub.json());
    });

    it("List models with pagination 1 on gRPC channel", done => {
        testListModelsWithPagination1(done, ClarifaiStub.insecureGrpc());
    });

    it("List models with pagination 2 on JSON channel", done => {
        testListModelsWithPagination2(done, ClarifaiStub.json());
    });

    it("List models with pagination 2 on gRPC channel", done => {
        testListModelsWithPagination2(done, ClarifaiStub.insecureGrpc());
    });
});

function testListingConcepts(done, stub) {
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

function testPredictingImageUrl(done, stub) {
    stub.PostModelOutputs(
        {
            model_id: "aaa03c23b3724a16a56b629203edc62c",
            inputs: [{data: {image: {url: DOG_IMAGE_URL}}}]
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

            assert.notEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testPredictingImageFile(done, stub) {
    const fs = require("fs");
    const imageBytes = fs.readFileSync(METRO_NORTH_IMAGE_FILE_PATH);

    stub.PostModelOutputs(
        {
            model_id: "aaa03c23b3724a16a56b629203edc62c",
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

            assert.notEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testFailedPredict(done, stub) {
    stub.PostModelOutputs(
        {
            model_id: "aaa03c23b3724a16a56b629203edc62c",
            inputs: [{data: {image: {url: NON_EXISTING_IMAGE_URL}}}]
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

            assert.strictEqual(response.status.description, "Failure");

            assert.strictEqual(response.outputs[0].status.code, 30002);  // Download failed.

            done();
        }
    );
}

function testListModelsWithPagination1(done, stub) {
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

function testListModelsWithPagination2(done, stub) {
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
