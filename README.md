![Clarifai logo](docs/logo.png)

# Clarifai Node.js gRPC Client

This is the official Clarifai gRPC Node.js client for interacting with our powerful recognition
[API](https://docs.clarifai.com).
Clarifai provides a platform for data scientists, developers, researchers and enterprises to master the entire
artificial intelligence lifecycle. Gather valuable business insights from images, video and text using computer vision
and natural language processing.

* Try the Clarifai demo at: https://clarifai.com/demo
* Sign up for a free account at: https://portal.clarifai.com/signup
* Read the documentation at: https://docs.clarifai.com/


[![npm](https://img.shields.io/npm/v/clarifai-nodejs-grpc)](https://www.npmjs.com/package/clarifai-nodejs-grpc)
[![Build](https://github.com/Clarifai/clarifai-javascript-grpc/workflows/Run%20tests/badge.svg)](https://github.com/Clarifai/clarifai-nodejs-grpc/actions)

## Installation

```
npm install clarifai-nodejs-grpc
```

## Versioning

This library doesn't use semantic versioning. The first two version numbers (`X.Y` out of `X.Y.Z`) follow the API (backend) versioning, and
whenever the API gets updated, this library follows it.

The third version number (`Z` out of `X.Y.Z`) is used by this library for any independent releases of library-specific improvements and bug fixes.


## Getting started

There are two approaches to using this library: the dynamic and the static. The former has been around for a longer
time, but latter provides type annotations via TypeScript declaration files which improves the IDE auto-completion
experience to be more developer-friendly. Both approaches provide the exact same API capabilities.

### The dynamic approach

Construct the Clarifai stub, which contains all the methods available in the Clarifai API, and the `Metadata`
object that's used to authenticate:

```javascript
const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");
```

Predict concepts in an image:

```javascript
stub.PostModelOutputs(
    {
        // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
        model_id: "aaa03c23b3724a16a56b629203edc62c",
        inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
    },
    metadata,
    (err, response) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }

        if (response.status.code !== 10000) {
            console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
            return;
        }

        console.log("Predicted concepts, with confidence values:")
        for (const c of response.outputs[0].data.concepts) {
            console.log(c.name + ": " + c.value);
        }
    }
);
```

See more [in the Clarifai API Guide docs](https://docs.clarifai.com/api-guide/api-overview). Also see 
[the integration tests](tests/test_integration_dynamic.js).

> Note: Do not require the `grpc` library directly via `const grpc = require("@grpc/grpc-js");`. This produces
> authentication issues (via `grpc.Metadata`) whenever any other co-installed libraries have the `@grpc/grpc-js`
> dependency (of a different version). Instead, require `grpc` as shown above.


### The static approach

Create the `V2Client` object with which you access all the Clarifai API functionality, and the `Metadata`
object that's used to authenticate:

```javascript
const {grpc} = require("clarifai-nodejs-grpc");
const service = require("clarifai-nodejs-grpc/proto/clarifai/api/service_pb");
const resources = require("clarifai-nodejs-grpc/proto/clarifai/api/resources_pb");
const {StatusCode} = require("clarifai-nodejs-grpc/proto/clarifai/api/status/status_code_pb");
const {V2Client} = require("clarifai-nodejs-grpc/proto/clarifai/api/service_grpc_pb");

const clarifai = new V2Client("api.clarifai.com", grpc.ChannelCredentials.createSsl());

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");
```

Predict concepts in an image:

```javascript
const request = new service.PostModelOutputsRequest();
// This is the model ID of a publicly available General model. You may use any other public or custom model ID.
request.setModelId("aaa03c23b3724a16a56b629203edc62c");
request.addInputs(
    new resources.Input()
        .setData(
            new resources.Data()
                .setImage(
                    new resources.Image()
                        .setUrl("https://samples.clarifai.com/dog2.jpeg")
                )
        )
)

clarifai.postModelOutputs(
    request,
    metadata,
    (error, response) => {
        if (error) {
            throw error;
        }

        if (response.getStatus().getCode() !== StatusCode.SUCCESS) {
            throw "Error: " + response.getStatus();
        }

        console.log("Predicted concepts, with confidence values:")
        for (const concept of response.getOutputsList()[0].getData().getConceptsList()) {
            console.log(concept.getName() + " " + concept.getValue());
        }
    }
)
```

See more [in the Clarifai API Guide docs](https://docs.clarifai.com/api-guide/api-overview). Also see
[the integration tests](tests/test_integration.js).

> Note: Currently, the NodeJS gRPC code examples [in the Clarifai documentation](https://docs.clarifai.com/api-guide/api-overview) 
show only the dynamic approach. These code examples can easily be translated to the static approach, since the structure 
is the same for both of them. The difference is only in the syntax.
