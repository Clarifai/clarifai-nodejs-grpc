![Clarifai logo](docs/logo.png)

# Clarifai Node.js gRPC Client

This is the official Clarifai Node.js gRPC client.

In addition to the actual gRPC channel, it is also possible to use a JSON channel, which uses
JSON & HTTP/REST, while using the same request / response handling code.


## Getting started

Construct the stub variant you want to use:

```javascript
// Construct one of the stubs you want to use
const stub = ClarifaiStub.json();
const stub = ClarifaiStub.insecureGrpc();
```

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

