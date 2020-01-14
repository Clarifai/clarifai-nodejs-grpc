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

const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// This is the JavaScript's best way of cloning an object.
const jsonPackageDefinition = JSON.parse(JSON.stringify(packageDefinition));
const jsonService = jsonPackageDefinition["clarifai.api.V2"];
for (const methodName in jsonService) {
    if (jsonService.hasOwnProperty(methodName)) {
        jsonService[methodName].requestSerialize = (argument) => argument;
        jsonService[methodName].responseDeserialize = (data) => data;
    }
}
const jsonProtoDescriptor = grpc.loadPackageDefinition(jsonPackageDefinition);


class ClarifaiStub {
    static insecureGrpc() {
        return new grpcProtoDescriptor.clarifai.api.V2('api-grpc.clarifai.com:18080', grpc.credentials.createInsecure());
    }

    static json() {
        return new jsonProtoDescriptor.clarifai.api.V2('', null, {channelOverride: ClarifaiChannel.makeJsonChannel()});
    }
}

module.exports = {ClarifaiStub};
