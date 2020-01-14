const Protobuf = require("protobufjs");

const PROTO_PATH = __dirname + "/../proto";

const filenames = [
    PROTO_PATH + "/clarifai/api/status/status_code.proto",
    PROTO_PATH + "/clarifai/api/status/status.proto",
    PROTO_PATH + "/clarifai/api/resources.proto",
    PROTO_PATH + "/clarifai/api/service_processed.proto",
];
let options = {
    keepCase: true,
    longs: String,
    enums: Number,
    defaults: false,
    oneofs: true
};


function findAppropriateUrl(name, request) {
    let bestMatchUrl = undefined;
    let bestMatchCount = -1;

    let allFields = [];
    let bestMatchUrlFields = undefined;

    const methodsInfo = extractMethodsInfo(filenames, options);

    const info = methodsInfo[name];
    if (!info) {
        return undefined;
    }

    for (const availableUrl of info.availableUrls) {
        let allArgumentsTranslated = true;

        let url = availableUrl;
        let count = 0;
        let urlFields = extractRequiredUrlParameters(url);
        for (const field of urlFields) {
            count++;

            const fieldValue = request[field];
            if (!fieldValue) {
                allArgumentsTranslated = false;
                break;
            }

            url = url.replace("{" + field + "}", fieldValue);
        }

        allFields.push(info.availableUrls);

        if (allArgumentsTranslated) {
            if (bestMatchCount < count) {
                bestMatchUrl = url;
                bestMatchUrlFields = urlFields;
                bestMatchCount = count;
            }
        }
    }

    if (!bestMatchUrl) {
        throw new Error("You must set one case of the following fields in your request proto: " + allFields);
    }

    return {"httpMethod": info["httpMethod"], "subUrl": bestMatchUrl, "usedFields": bestMatchUrlFields};
}


function extractRequiredUrlParameters(url) {
    const openings = [];
    const closes = [];
    for (let i=0; i<url.length;i++) {
        if (url[i] === "{") openings.push(i);
        if (url[i] === "}") closes.push(i);
    }

    const fields = [];
    for (let i = 0; i < openings.length; i++) {
        fields.push(url.substring(openings[i] + 1, closes[i]));
    }
    return fields;
}


function extractMethodsInfo(filenames, options) {
    const methodsInfo = {};

    const root = new Protobuf.Root();
    const loadedRoot = root.loadSync(filenames, options);

    const methods = loadedRoot.nested.clarifai.nested.api.V2.methods;

    for (const methodName in methods) {
        if (!methods.hasOwnProperty(methodName)) continue;

        const methodInfo = {
            httpMethod: undefined,
            availableUrls: [],
        };

        const options = methods[methodName].options;
        for (const fieldName in options) {
            if (!fieldName.startsWith("(google.api.http).")) continue;

            if (![".get", ".post", ".patch", ".delete"].some(s => fieldName.endsWith(s))) {
                // This field doesn't describe a HTTP endpoint.
                continue;
            }

            const fieldNameParts = fieldName.split(".");
            methodInfo.httpMethod = fieldNameParts[fieldNameParts.length - 1];

            methodInfo.availableUrls.push(options[fieldName]);
        }

        if (methodInfo.httpMethod) {
            methodsInfo[methodName] = methodInfo;
        } else {
            console.log("Warning, strange method info: " + methodInfo);
        }
    }

    return methodsInfo;
}

module.exports = {findAppropriateUrl};
