const axios = require("axios");
const {findAppropriateUrl} = require("./methods_info");

/**
 * This recursively goes through the object/array and serialized any "base64" field that has Buffer value to a BASE64
 * string.
 */
function stringifyBase64(obj) {
    if (obj.constructor === Array) {
        return obj.map(stringifyBase64);
    } else if (obj.constructor === Object) {
        const processedObject = {}
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === "base64") {
                    if (Buffer.isBuffer(obj[key])) {
                        processedObject[key] = obj[key].toString("base64");
                    } else if (typeof obj[key] === 'string' || obj[key] instanceof String) {
                        // Here we assume the value is already in BASE64.
                        processedObject[key] = obj[key];
                    } else {
                        throw new Error("base64 has incorrect type, only Buffer and string (base64) are supported.");
                    }
                } else {
                    processedObject[key] = stringifyBase64(obj[key]);
                }
            }
        }
        return processedObject;
    } else {
        return obj;
    }
}

function prepareGetParameters(request) {
    let encodedParameters = {};
    for (const key in request) {
        if (request.hasOwnProperty(key)) {
            let value = request[key];

            if (value.constructor == Object) {
                let subObj = prepareGetParameters(value);
                for (const subKey in subObj) {
                    if (subObj.hasOwnProperty(subKey)) {
                        const subValue = subObj[subKey];
                        encodedParameters[key + "." + subKey] = subValue;
                    }
                }
            } else {
                encodedParameters[key] = String(value);
            }
        }
    }
    return encodedParameters;
}

function encodeGetParameters(request) {
    let url = "";

    const additionalParametersObject = prepareGetParameters(request);
    if (Object.keys(additionalParametersObject).length > 0) {
        let p = [];
        for (const k in additionalParametersObject) {
            p.push(k + "=" + additionalParametersObject[k]);
        }
        url = "?" + p.join("&");
    }
    return url;
}

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
        this.request = stringifyBase64(writeObj.message);

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

            let url = this.baseUrl + this.subUrl;
            let data;
            if (this.httpMethod === "get") {
                data = null;
                url += encodeGetParameters(this.request);
            } else {
                data = this.request;
            }

            axios({
                method: this.httpMethod,
                url: url,
                data: data,
                headers: this.headers,
            }).then((response) => {
                this.dataCallback(response.data);
                callback(status);
            }).catch((error) => {
                if (error.response && error.response.data) {
                    this.dataCallback(error.response.data);
                    callback(status);
                } else {
                    this.dataCallback(JSON.stringify(error));
                    callback(errorStatus);
                }
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
