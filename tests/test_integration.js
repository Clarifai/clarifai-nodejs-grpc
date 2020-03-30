const assert = require("assert");
const grpc = require("@grpc/grpc-js");
const {describe, it} = require("mocha");

const {ClarifaiStub} = require('../src/index');

describe("Integration Tests", () => {
    it ("Lists concepts on JSON channel", done => {
        testListingConcepts(done, ClarifaiStub.json());
    });

    it ("Lists concepts on gRPC channel", done => {
        testListingConcepts(done, ClarifaiStub.insecureGrpc());
    });

    it("Predicts image on JSON channel", done => {
        testPredictingImage(done, ClarifaiStub.json());
    });

    it("Predicts image on gRPC channel", done => {
        testPredictingImage(done, ClarifaiStub.insecureGrpc());
    });
});

function testListingConcepts(done, stub) {
    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Key " + process.env.CLARIFAI_API_KEY);

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

function testPredictingImage(done, stub) {
    const metadata = new grpc.Metadata();
    metadata.set("authorization", "Key " + process.env.CLARIFAI_API_KEY);

    stub.PostModelOutputs(
        {
            model_id: "aaa03c23b3724a16a56b629203edc62c",
            inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
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
