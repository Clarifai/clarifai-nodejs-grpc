const grpc = require("@grpc/grpc-js");
const protoLoader = require('@grpc/proto-loader');

const {ClarifaiChannel} = require("./custom-json-channel");

const PROTO_PATH = __dirname + "/../proto";

const packageDefinition = protoLoader.loadSync(
    [
        PROTO_PATH + "/clarifai/api/status/status_code.proto",
        PROTO_PATH + "/clarifai/api/status/status.proto",
        PROTO_PATH + "/clarifai/api/resources.proto",
        PROTO_PATH + "/clarifai/api/service_processed.proto",
    ],
    {
        keepCase: true,
        longs: String,
        enums: Number,
        defaults: true,
        oneofs: true
    }
);

// This is the JavaScript's best way of cloning an object.
const jsonPackageDefinition = JSON.parse(JSON.stringify(packageDefinition));

/*
 * When sending the data over the JSON channel, if a concept doesn't have a value, the server defaults the value
 * to 1. With the gRPC channel however, all missing fields get a default value of 0. To do the same in JSON channel
 * what is done in the default gRPC channel, explicit 0 is set.
 *
 * Ideally this would be done dynamically by inspecting the "cl_default_float" custom option of the proto field, but
 * I'm not sure how to find out whether a field has this set or not.
 */
function _recursivelyAddConceptValue(obj) {
    if (obj.constructor === Array) {
        for (const elem of obj) {
            _recursivelyAddConceptValue(elem);
        }
    } else if (obj.constructor === Object) {
        for (const key of Object.keys(obj)) {
            if (key === "concepts") {
                for (const concept of obj["concepts"]) {
                    if (!concept.hasOwnProperty("value")) {
                        concept["value"] = 0;
                    }
                }
            } else if (key === "concept") {
                const concept = obj["value"]
                if (!concept.hasOwnProperty("value")) {
                    concept["value"] = 0;
                }
            } else if (key === "base64") {
                // Skip base64 so we don't unnecessarily iterate over its long data array.
            } else {
                _recursivelyAddConceptValue(obj[key]);
            }
        }
    }
}

class ClarifaiStub {
    static insecureGrpc() {
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        return new grpcProtoDescriptor.clarifai.api.V2('api-grpc.clarifai.com:18080', grpc.credentials.createInsecure());
    }

    static json() {
        const jsonService = jsonPackageDefinition["clarifai.api.V2"];
        for (const methodName in jsonService) {
            if (jsonService.hasOwnProperty(methodName)) {
                jsonService[methodName].requestSerialize = (request) => {
                    _recursivelyAddConceptValue(request);
                    return request;
                }
                jsonService[methodName].responseDeserialize = (data) => data
            }
        }

        const jsonProtoDescriptor = grpc.loadPackageDefinition(jsonPackageDefinition);
        return new jsonProtoDescriptor.clarifai.api.V2('', null, {channelOverride: ClarifaiChannel.makeJsonChannel()});
    }
}

module.exports = {ClarifaiStub};
