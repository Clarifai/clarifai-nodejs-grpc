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

const path = require('path');
const PROTO_PATH = __dirname + "/../proto";
const MAX_MESSAGE_LENGTH = 1024 * 1024 * 1024 // 1GB

const packageDefinition = protoLoader.loadSync(
    [
        "proto/clarifai/api/status/status.proto",
        "proto/clarifai/api/resources.proto",
        "proto/clarifai/api/service_processed.proto",
        "proto/clarifai/api/utils/matrix.proto",
    ],
    {
        keepCase: true,
        longs: String,
        enums: Number,
        defaults: true,
        oneofs: true,
        includeDirs: [
            __dirname + "/..",
            path.dirname(require.resolve('protobufjs/package.json')),
        ]
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
            'grpc.max_receive_message_length': MAX_MESSAGE_LENGTH,
            'grpc.max_send_message_length': MAX_MESSAGE_LENGTH,
        };
        return new grpcProtoDescriptor.clarifai.api.V2(base, grpc.ChannelCredentials.createSsl(), options);
    }

    static insecureGrpc() {
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        const options = {
            'grpc.max_receive_message_length': MAX_MESSAGE_LENGTH,
            'grpc.max_send_message_length': MAX_MESSAGE_LENGTH,
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
