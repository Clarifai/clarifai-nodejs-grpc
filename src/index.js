let grpc;
try {
    grpc = require("clarifai-nodejs-grpc/node_modules/@grpc/grpc-js");
} catch {
    grpc = require("@grpc/grpc-js");
}

let protoLoader;
try {
    protoLoader = require("clarifai-nodejs-grpc/node_modules/@grpc/proto-loader");
} catch {
    protoLoader = require('@grpc/proto-loader');
}

const PROTO_PATH = __dirname + "/../proto";

const packageDefinition = protoLoader.loadSync(
    [
        PROTO_PATH + "/clarifai/api/status/status_code.proto",
        PROTO_PATH + "/clarifai/api/status/status.proto",
        PROTO_PATH + "/clarifai/api/resources.proto",
        PROTO_PATH + "/clarifai/api/service_processed.proto",
	PROTO_PATH + "/clarifai/api/utils/matrix.proto",
    ],
    {
        keepCase: true,
        longs: String,
        enums: Number,
        defaults: true,
        oneofs: true
    }
);

class ClarifaiStub {
    static grpc(base = undefined) {
        if (base === undefined)
            base = process.env.CLARIFAI_GRPC_BASE;
        if (base === undefined)
            base = "api.clarifai.com"
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const options = {
            'grpc.max_receive_message_length': 128 *1024 * 1024, // 128 MB
          };
        return new grpcProtoDescriptor.clarifai.api.V2(base, grpc.ChannelCredentials.createSsl(), options);
    }

    static insecureGrpc() {
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const options = {
            'grpc.max_receive_message_length': 128 *1024 * 1024, // 128 MB
          };
        return new grpcProtoDescriptor.clarifai.api.V2('api-grpc.clarifai.com:18080', grpc.credentials.createInsecure(), options);
    }

    /**
     * @deprecated ClarifaiStub.json() is not supported anymore, ClarifaiStub.grpc() will be used instead. Please switch
     * to the latter.
     */
    static json() {
        console.warn("ClarifaiStub.json() is not supported anymore, ClarifaiStub.grpc() will be used instead. Please switch to the latter.");
        return ClarifaiStub.grpc();
    }
}

module.exports = {ClarifaiStub, grpc};
