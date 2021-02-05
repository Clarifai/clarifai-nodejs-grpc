// package: clarifai.auth.scope
// file: proto/clarifai/auth/scope/scope.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class ScopeList extends jspb.Message { 
    clearScopesList(): void;
    getScopesList(): Array<S>;
    setScopesList(value: Array<S>): ScopeList;
    addScopes(value: S, index?: number): S;

    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): ScopeList;
    addEndpoints(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeList.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeList): ScopeList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeList;
    static deserializeBinaryFromReader(message: ScopeList, reader: jspb.BinaryReader): ScopeList;
}

export namespace ScopeList {
    export type AsObject = {
        scopesList: Array<S>,
        endpointsList: Array<string>,
    }
}

export const clarfaiExposed: jspb.ExtensionFieldInfo<boolean>;

export const clarifaiDependingScopes: jspb.ExtensionFieldInfo<S>;

export enum S {
    UNDEF = 0,
    ALL = 1,
    PREDICT = 2,
    SEARCH = 3,
    INPUTS_ADD = 4,
    INPUTS_GET = 5,
    INPUTS_PATCH = 7,
    INPUTS_DELETE = 8,
    OUTPUTS_PATCH = 9,
    CONCEPTS_ADD = 10,
    CONCEPTS_GET = 11,
    CONCEPTS_PATCH = 12,
    CONCEPTS_DELETE = 13,
    MODELS_ADD = 14,
    MODELS_GET = 15,
    MODELS_PATCH = 16,
    MODELS_DELETE = 17,
    MODELS_TRAIN = 26,
    MODELS_SYNC = 27,
    WORKFLOWS_ADD = 18,
    WORKFLOWS_GET = 19,
    WORKFLOWS_PATCH = 20,
    WORKFLOWS_DELETE = 21,
    WORKFLOWMETRICS_GET = 96,
    WORKFLOWMETRICS_ADD = 97,
    WORKFLOWMETRICS_DELETE = 98,
    TSNEVISUALIZATIONS_ADD = 24,
    TSNEVISUALIZATIONS_GET = 25,
    ANNOTATIONS_ADD = 37,
    ANNOTATIONS_GET = 38,
    ANNOTATIONS_PATCH = 39,
    ANNOTATIONS_DELETE = 40,
    COLLECTORS_ADD = 41,
    COLLECTORS_GET = 42,
    COLLECTORS_DELETE = 43,
    APPS_ADD = 44,
    APPS_GET = 45,
    APPS_DELETE = 46,
    KEYS_ADD = 47,
    KEYS_GET = 48,
    KEYS_DELETE = 49,
    COLLABORATORS_ADD = 51,
    COLLABORATORS_GET = 50,
    COLLABORATORS_DELETE = 52,
    METRICS_ADD = 54,
    METRICS_GET = 53,
    METRICS_DELETE = 63,
    TASKS_ADD = 55,
    TASKS_GET = 56,
    TASKS_DELETE = 70,
    PASSWORDPOLICIES_ADD = 57,
    PASSWORDPOLICIES_GET = 58,
    PASSWORDPOLICIES_DELETE = 59,
    LABELORDERS_GET = 67,
    LABELORDERS_ADD = 68,
    LABELORDERS_DELETE = 69,
    USERFEATURECONFIGS_GET = 71,
    FINDDUPLICATEANNOTATIONSJOBS_ADD = 102,
    FINDDUPLICATEANNOTATIONSJOBS_GET = 103,
    FINDDUPLICATEANNOTATIONSJOBS_DELETE = 104,
}
