import  assert from 'assert';
import { describe, it } from 'mocha';
import { ClarifaiStub, grpc } from '../src/index';
import common from './common';
import fs from 'fs'

import {config} from 'dotenv'

config()

const metadata = new grpc.Metadata();
metadata.set('authorization', 'Key ' + process.env.CLARIFAI_API_KEY);

// FIXME: requires fix
describe('Integration Tests - dynamic', () => {
    it('Lists concepts', done => {
        testListConceptsDynamic(done, ClarifaiStub.grpc());
    });

    it('Predicts image URL', done => {
        testPredictImageUrlDynamic(done, ClarifaiStub.grpc());
    });

    it('Predicts image file', done => {
        testPredictImageFileDynamic(done, ClarifaiStub.grpc());
    });

    it('Failed predict', done => {
        testFailedPredictDynamic(done, ClarifaiStub.grpc());
    });

    it('List models with pagination 1', done => {
        testListModelsWithPagination1Dynamic(done, ClarifaiStub.grpc());
    });

    it('List models with pagination 2', done => {
        testListModelsWithPagination2Dynamic(done, ClarifaiStub.grpc());
    });

    it('Promise wrappers', done => {
        testPromiseWrappersDynamic(done, ClarifaiStub.grpc());
    });
});

function testListConceptsDynamic(done: Mocha.Done, stub: any) {
    stub.ListConcepts(
        {},
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error('Received status: ' + response.status.description + '\n' + response.status.details));
                return;
            }

            done();
        }
    );
}

function testPredictImageUrlDynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    // @ts-ignore
    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{ data: { image: { url: common.DOG_IMAGE_URL } } }],
        },
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error('Received status: ' + response.status.description + '\n' + response.status.details));
                return;
            }

            assert.notStrictEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testPredictImageFileDynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    const imageBytes = fs.readFileSync(common.METRO_NORTH_IMAGE_FILE_PATH);

    // @ts-ignore
    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{ data: { image: { base64: imageBytes } } }],
        },
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error('Received status: ' + response.status.description + '\n' + response.status.details));
                return;
            }

            assert.notStrictEqual(response.outputs[0].data.concepts, 0);

            done();
        }
    );
}

function testFailedPredictDynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    // @ts-ignore
    stub.PostModelOutputs(
        {
            model_id: common.GENERIC_MODEL_ID,
            inputs: [{ data: { image: { url: common.NON_EXISTING_IMAGE_URL } } }],
        },
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code === 10000) {
                done(new Error(
                    'Expected failed status, received 10000: ' +
                    response.status.description +
                    '\n' +
                    response.status.details
                ));
                return;
            }

            assert.strictEqual(response.status.description, 'Failure');

            assert.strictEqual(response.outputs[0].status.code, 30002);  // Download failed.

            done();
        }
    );
}

function testListModelsWithPagination1Dynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    // @ts-ignore
    stub.ListModels(
        {
            per_page: 2,
        },
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error('Received status: ' + response.status.description + '\n' + response.status.details));
                return;
            }

            assert.strictEqual(response.models.length, 2);

            done();
        }
    );
}

function testListModelsWithPagination2Dynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    // @ts-ignore
    stub.ListModels(
        {
            // We shouldn't have 1000*500 number of models, so the result should be empty.
            page: 1000,
            per_page: 500,
        },
        metadata,
        (err: Error | null, response: any) => {
            if (err) {
                done(err);
                return;
            }

            if (response.status.code !== 10000) {
                done(new Error('Received status: ' + response.status.description + '\n' + response.status.details));
                return;
            }

            assert.strictEqual(response.models.length, 0);

            done();
        }
    );
}

function testPromiseWrappersDynamic(done: Mocha.Done, stub: grpc.ClientUnaryCall) {
    function postInputsAsync(...params: any[]) {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            stub.PostInputs(...params, (err: Error | null, response: any) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response);
                else resolve(response);
            });
        });
    }

    function getInputAsync(...params: any[]) {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            stub.GetInput(...params, (err: Error | null, response: any) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response);
                else resolve(response);
            });
        });
    }

    function deleteInputAsync(...params: any[]) {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            stub.DeleteInput(...params, (err: Error | null, response: any) => {
                if (err !== null) reject(err);
                else if (response.status.code !== 10000) reject(response);
                else resolve(response);
            });
        });
    }
}
