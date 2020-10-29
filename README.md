![Clarifai logo](docs/logo.png)

# Clarifai Node.js gRPC Client

This is the official Clarifai Node.js gRPC client.

In addition to the actual gRPC channel, it is also possible to use a JSON channel, which uses
JSON & HTTP/REST, while using the same request / response handling code.

[![Build](https://github.com/Clarifai/clarifai-javascript-grpc/workflows/Run%20tests/badge.svg)](https://github.com/Clarifai/clarifai-nodejs-grpc/actions)
[![npm](https://img.shields.io/npm/v/clarifai-nodejs-grpc)](https://www.npmjs.com/package/clarifai-nodejs-grpc)


## Installation

```
npm install clarifai-nodejs-grpc
```


## Getting started

Construct the Clarifai stub, which contains all the methods available in the Clarifai API:

```javascript
const stub = ClarifaiStub.grpc();
```

> Alternatives to the encrypted gRPC channel (`ClarifaiStub.grpc()`) are:
> - the HTTPS+JSON channel (`ClarifaiStub.json()`), and
> - the unencrypted gRPC channel (`ClarifaiCStub.insecureGrpc()`).
>
> We only recommend them in special cases.

Predict concepts in a image:

```javascript
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");

stub.PostModelOutputs(
    {
        model_id: "aaa03c23b3724a16a56b629203edc62c",
        inputs: [{data: {image: {url: "YOUR_IMAGE_URL"}}}]
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

        for (const c of response.outputs[0].data.concepts) {
            console.log(c.name + ": " + c.value);
        }
    }
);
```

