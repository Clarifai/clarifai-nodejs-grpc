const axios = require("axios");
const {findAppropriateUrl} = require("./methods_info");

class CustomCall {
    constructor(method) {
        this.baseUrl = "https://api.clarifai.com";

        const parts = method.split("/");
        this.methodName = parts[parts.length - 1];
    }

    sendMetadata(metadata) {
        let headers = {};
        for (const field of metadata.internalRepr) {
            headers[field[0]] = field[1][0];
        }
        this.headers = headers;
    }

    write(writeObj) {
        this.request = writeObj.message;

        const possibleParams = Object.keys(this.request);

        const r = findAppropriateUrl(this.methodName, this.request);
        if (!r) {
            throw new Error("Unknown method: " + method);
        }

        this.subUrl = r.subUrl;
        this.httpMethod = r.httpMethod;
        for (const field of r.usedFields) {
            delete this.request[field];
        }
    }

    end() {
    }

    on(eventType, callback) {
        const status = {code: 0};
        const errorStatus = {code: 1};

        if (eventType === "data") {
            this.dataCallback = callback;

        } else if (eventType === "status") {
            if (this.statusAlreadyGotten) { return; }
            this.statusAlreadyGotten = true;

            axios({
                method: this.httpMethod,
                url: this.baseUrl + this.subUrl,
                data: this.request,
                headers: this.headers,
            }).then((response) => {
                this.dataCallback(response.data);
                callback(status);
            }).catch((error) => {
                this.dataCallback(JSON.stringify(error));
                callback(errorStatus);
            });
        }
    }
}

class CustomChannel {
    createCall(method, deadline, host, parentCall, propagateFlags) {
        return new CustomCall(method);
    }
}

class ClarifaiChannel {
    static makeJsonChannel() {
        return new CustomChannel();
    }
}

module.exports = {ClarifaiChannel};
