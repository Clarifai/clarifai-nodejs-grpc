// package: clarifai.api
// file: proto/clarifai/api/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_clarifai_api_resources_pb from "../../../proto/clarifai/api/resources_pb";
import * as proto_clarifai_api_status_status_pb from "../../../proto/clarifai/api/status/status_pb";
import * as proto_clarifai_api_utils_extensions_pb from "../../../proto/clarifai/api/utils/extensions_pb";
import * as proto_clarifai_auth_scope_scope_pb from "../../../proto/clarifai/auth/scope/scope_pb";
import * as proto_clarifai_auth_util_extension_pb from "../../../proto/clarifai/auth/util/extension_pb";
import * as proto_clarifai_api_status_status_code_pb from "../../../proto/clarifai/api/status/status_code_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Pagination extends jspb.Message { 
    getPage(): number;
    setPage(value: number): Pagination;
    getPerPage(): number;
    setPerPage(value: number): Pagination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pagination.AsObject;
    static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pagination;
    static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
    export type AsObject = {
        page: number,
        perPage: number,
    }
}

export class GetAnnotationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationRequest;
    getAnnotationId(): string;
    setAnnotationId(value: string): GetAnnotationRequest;
    getInputId(): string;
    setInputId(value: string): GetAnnotationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnnotationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnnotationRequest): GetAnnotationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnnotationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnnotationRequest;
    static deserializeBinaryFromReader(message: GetAnnotationRequest, reader: jspb.BinaryReader): GetAnnotationRequest;
}

export namespace GetAnnotationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationId: string,
        inputId: string,
    }
}

export class ListAnnotationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): ListAnnotationsRequest;
    addIds(value: string, index?: number): string;
    clearInputIdsList(): void;
    getInputIdsList(): Array<string>;
    setInputIdsList(value: Array<string>): ListAnnotationsRequest;
    addInputIds(value: string, index?: number): string;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): ListAnnotationsRequest;
    addUserIds(value: string, index?: number): string;
    clearModelVersionIdsList(): void;
    getModelVersionIdsList(): Array<string>;
    setModelVersionIdsList(value: Array<string>): ListAnnotationsRequest;
    addModelVersionIds(value: string, index?: number): string;
    clearStatusesList(): void;
    getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
    setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): ListAnnotationsRequest;
    addStatuses(value?: proto_clarifai_api_status_status_pb.Status, index?: number): proto_clarifai_api_status_status_pb.Status;
    getListAllAnnotations(): boolean;
    setListAllAnnotations(value: boolean): ListAnnotationsRequest;
    getReturnModelOutput(): boolean;
    setReturnModelOutput(value: boolean): ListAnnotationsRequest;
    getPage(): number;
    setPage(value: number): ListAnnotationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAnnotationsRequest;
    getTaskId(): string;
    setTaskId(value: string): ListAnnotationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnnotationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnnotationsRequest): ListAnnotationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnnotationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnnotationsRequest;
    static deserializeBinaryFromReader(message: ListAnnotationsRequest, reader: jspb.BinaryReader): ListAnnotationsRequest;
}

export namespace ListAnnotationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
        inputIdsList: Array<string>,
        userIdsList: Array<string>,
        modelVersionIdsList: Array<string>,
        statusesList: Array<proto_clarifai_api_status_status_pb.Status.AsObject>,
        listAllAnnotations: boolean,
        returnModelOutput: boolean,
        page: number,
        perPage: number,
        taskId: string,
    }
}

export class PostAnnotationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationsRequest;
    clearAnnotationsList(): void;
    getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
    setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): PostAnnotationsRequest;
    addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAnnotationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAnnotationsRequest): PostAnnotationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAnnotationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAnnotationsRequest;
    static deserializeBinaryFromReader(message: PostAnnotationsRequest, reader: jspb.BinaryReader): PostAnnotationsRequest;
}

export namespace PostAnnotationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
    }
}

export class PatchAnnotationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsRequest;
    clearAnnotationsList(): void;
    getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
    setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): PatchAnnotationsRequest;
    addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;
    getAction(): string;
    setAction(value: string): PatchAnnotationsRequest;
    getDeleteIfEmptyData(): boolean;
    setDeleteIfEmptyData(value: boolean): PatchAnnotationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAnnotationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAnnotationsRequest): PatchAnnotationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAnnotationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAnnotationsRequest;
    static deserializeBinaryFromReader(message: PatchAnnotationsRequest, reader: jspb.BinaryReader): PatchAnnotationsRequest;
}

export namespace PatchAnnotationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
        action: string,
        deleteIfEmptyData: boolean,
    }
}

export class PatchAnnotationsStatusRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsStatusRequest;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): PatchAnnotationsStatusRequest;
    addUserIds(value: string, index?: number): string;
    getTaskId(): string;
    setTaskId(value: string): PatchAnnotationsStatusRequest;
    clearStatusCodesList(): void;
    getStatusCodesList(): Array<proto_clarifai_api_status_status_code_pb.StatusCode>;
    setStatusCodesList(value: Array<proto_clarifai_api_status_status_code_pb.StatusCode>): PatchAnnotationsStatusRequest;
    addStatusCodes(value: proto_clarifai_api_status_status_code_pb.StatusCode, index?: number): proto_clarifai_api_status_status_code_pb.StatusCode;
    getAction(): string;
    setAction(value: string): PatchAnnotationsStatusRequest;
    getStatusCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
    setStatusCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): PatchAnnotationsStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAnnotationsStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAnnotationsStatusRequest): PatchAnnotationsStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAnnotationsStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAnnotationsStatusRequest;
    static deserializeBinaryFromReader(message: PatchAnnotationsStatusRequest, reader: jspb.BinaryReader): PatchAnnotationsStatusRequest;
}

export namespace PatchAnnotationsStatusRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        userIdsList: Array<string>,
        taskId: string,
        statusCodesList: Array<proto_clarifai_api_status_status_code_pb.StatusCode>,
        action: string,
        statusCode: proto_clarifai_api_status_status_code_pb.StatusCode,
    }
}

export class PatchAnnotationsStatusResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): PatchAnnotationsStatusResponse;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): PatchAnnotationsStatusResponse;
    addUserIds(value: string, index?: number): string;
    getUpdatedCount(): number;
    setUpdatedCount(value: number): PatchAnnotationsStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAnnotationsStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAnnotationsStatusResponse): PatchAnnotationsStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAnnotationsStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAnnotationsStatusResponse;
    static deserializeBinaryFromReader(message: PatchAnnotationsStatusResponse, reader: jspb.BinaryReader): PatchAnnotationsStatusResponse;
}

export namespace PatchAnnotationsStatusResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        userIdsList: Array<string>,
        updatedCount: number,
    }
}

export class DeleteAnnotationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationRequest;
    getInputId(): string;
    setInputId(value: string): DeleteAnnotationRequest;
    getAnnotationId(): string;
    setAnnotationId(value: string): DeleteAnnotationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAnnotationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAnnotationRequest): DeleteAnnotationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAnnotationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAnnotationRequest;
    static deserializeBinaryFromReader(message: DeleteAnnotationRequest, reader: jspb.BinaryReader): DeleteAnnotationRequest;
}

export namespace DeleteAnnotationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputId: string,
        annotationId: string,
    }
}

export class DeleteAnnotationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteAnnotationsRequest;
    addIds(value: string, index?: number): string;
    clearInputIdsList(): void;
    getInputIdsList(): Array<string>;
    setInputIdsList(value: Array<string>): DeleteAnnotationsRequest;
    addInputIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAnnotationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAnnotationsRequest): DeleteAnnotationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAnnotationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAnnotationsRequest;
    static deserializeBinaryFromReader(message: DeleteAnnotationsRequest, reader: jspb.BinaryReader): DeleteAnnotationsRequest;
}

export namespace DeleteAnnotationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
        inputIdsList: Array<string>,
    }
}

export class SingleAnnotationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAnnotationResponse;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): proto_clarifai_api_resources_pb.Annotation | undefined;
    setAnnotation(value?: proto_clarifai_api_resources_pb.Annotation): SingleAnnotationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleAnnotationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleAnnotationResponse): SingleAnnotationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleAnnotationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleAnnotationResponse;
    static deserializeBinaryFromReader(message: SingleAnnotationResponse, reader: jspb.BinaryReader): SingleAnnotationResponse;
}

export namespace SingleAnnotationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        annotation?: proto_clarifai_api_resources_pb.Annotation.AsObject,
    }
}

export class MultiAnnotationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationResponse;
    clearAnnotationsList(): void;
    getAnnotationsList(): Array<proto_clarifai_api_resources_pb.Annotation>;
    setAnnotationsList(value: Array<proto_clarifai_api_resources_pb.Annotation>): MultiAnnotationResponse;
    addAnnotations(value?: proto_clarifai_api_resources_pb.Annotation, index?: number): proto_clarifai_api_resources_pb.Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiAnnotationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiAnnotationResponse): MultiAnnotationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiAnnotationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiAnnotationResponse;
    static deserializeBinaryFromReader(message: MultiAnnotationResponse, reader: jspb.BinaryReader): MultiAnnotationResponse;
}

export namespace MultiAnnotationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        annotationsList: Array<proto_clarifai_api_resources_pb.Annotation.AsObject>,
    }
}

export class ListAnnotationWorkersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationWorkersRequest;
    getPage(): number;
    setPage(value: number): ListAnnotationWorkersRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAnnotationWorkersRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListAnnotationWorkersRequest;
    addAdditionalFields(value: string, index?: number): string;
    getTrustedOnly(): boolean;
    setTrustedOnly(value: boolean): ListAnnotationWorkersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnnotationWorkersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnnotationWorkersRequest): ListAnnotationWorkersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnnotationWorkersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnnotationWorkersRequest;
    static deserializeBinaryFromReader(message: ListAnnotationWorkersRequest, reader: jspb.BinaryReader): ListAnnotationWorkersRequest;
}

export namespace ListAnnotationWorkersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        trustedOnly: boolean,
    }
}

export class MultiWorkerResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkerResponse;
    clearWorkersList(): void;
    getWorkersList(): Array<proto_clarifai_api_resources_pb.Worker>;
    setWorkersList(value: Array<proto_clarifai_api_resources_pb.Worker>): MultiWorkerResponse;
    addWorkers(value?: proto_clarifai_api_resources_pb.Worker, index?: number): proto_clarifai_api_resources_pb.Worker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiWorkerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiWorkerResponse): MultiWorkerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiWorkerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiWorkerResponse;
    static deserializeBinaryFromReader(message: MultiWorkerResponse, reader: jspb.BinaryReader): MultiWorkerResponse;
}

export namespace MultiWorkerResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workersList: Array<proto_clarifai_api_resources_pb.Worker.AsObject>,
    }
}

export class GetAppRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAppRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetAppRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAppRequest): GetAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAppRequest;
    static deserializeBinaryFromReader(message: GetAppRequest, reader: jspb.BinaryReader): GetAppRequest;
}

export namespace GetAppRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        additionalFieldsList: Array<string>,
    }
}

export class ListAppsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppsRequest;
    getPage(): number;
    setPage(value: number): ListAppsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAppsRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListAppsRequest;
    addAdditionalFields(value: string, index?: number): string;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListAppsRequest;

    hasSortByName(): boolean;
    clearSortByName(): void;
    getSortByName(): boolean;
    setSortByName(value: boolean): ListAppsRequest;

    hasSortByModifiedAt(): boolean;
    clearSortByModifiedAt(): void;
    getSortByModifiedAt(): boolean;
    setSortByModifiedAt(value: boolean): ListAppsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListAppsRequest;

    hasSortByStarCount(): boolean;
    clearSortByStarCount(): void;
    getSortByStarCount(): boolean;
    setSortByStarCount(value: boolean): ListAppsRequest;
    getFeaturedOnly(): boolean;
    setFeaturedOnly(value: boolean): ListAppsRequest;
    getStarredOnly(): boolean;
    setStarredOnly(value: boolean): ListAppsRequest;
    getTemplateOnly(): boolean;
    setTemplateOnly(value: boolean): ListAppsRequest;
    getSearch(): string;
    setSearch(value: string): ListAppsRequest;
    getQuery(): string;
    setQuery(value: string): ListAppsRequest;
    getName(): string;
    setName(value: string): ListAppsRequest;
    getId(): string;
    setId(value: string): ListAppsRequest;

    getSortByCase(): ListAppsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAppsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAppsRequest): ListAppsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAppsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAppsRequest;
    static deserializeBinaryFromReader(message: ListAppsRequest, reader: jspb.BinaryReader): ListAppsRequest;
}

export namespace ListAppsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        sortAscending: boolean,
        sortByName: boolean,
        sortByModifiedAt: boolean,
        sortByCreatedAt: boolean,
        sortByStarCount: boolean,
        featuredOnly: boolean,
        starredOnly: boolean,
        templateOnly: boolean,
        search: string,
        query: string,
        name: string,
        id: string,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_NAME = 6,
        SORT_BY_MODIFIED_AT = 7,
        SORT_BY_CREATED_AT = 12,
        SORT_BY_STAR_COUNT = 13,
    }

}

export class PostAppsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppsRequest;
    clearAppsList(): void;
    getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
    setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): PostAppsRequest;
    addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAppsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAppsRequest): PostAppsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAppsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAppsRequest;
    static deserializeBinaryFromReader(message: PostAppsRequest, reader: jspb.BinaryReader): PostAppsRequest;
}

export namespace PostAppsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
    }
}

export class DeleteAppRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAppRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAppRequest): DeleteAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAppRequest;
    static deserializeBinaryFromReader(message: DeleteAppRequest, reader: jspb.BinaryReader): DeleteAppRequest;
}

export namespace DeleteAppRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class PatchAppsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppsRequest;
    clearAppsList(): void;
    getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
    setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): PatchAppsRequest;
    addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;
    getAction(): string;
    setAction(value: string): PatchAppsRequest;

    hasMetadataAction(): boolean;
    clearMetadataAction(): void;
    getMetadataAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
    setMetadataAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchAppsRequest;
    getReindex(): boolean;
    setReindex(value: boolean): PatchAppsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAppsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAppsRequest): PatchAppsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAppsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAppsRequest;
    static deserializeBinaryFromReader(message: PatchAppsRequest, reader: jspb.BinaryReader): PatchAppsRequest;
}

export namespace PatchAppsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
        action: string,
        metadataAction?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
        reindex: boolean,
    }
}

export class PatchAppRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppRequest;

    hasApp(): boolean;
    clearApp(): void;
    getApp(): proto_clarifai_api_resources_pb.App | undefined;
    setApp(value?: proto_clarifai_api_resources_pb.App): PatchAppRequest;
    getAction(): string;
    setAction(value: string): PatchAppRequest;

    hasMetadataAction(): boolean;
    clearMetadataAction(): void;
    getMetadataAction(): proto_clarifai_api_resources_pb.PatchAction | undefined;
    setMetadataAction(value?: proto_clarifai_api_resources_pb.PatchAction): PatchAppRequest;
    getReindex(): boolean;
    setReindex(value: boolean): PatchAppRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAppRequest): PatchAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAppRequest;
    static deserializeBinaryFromReader(message: PatchAppRequest, reader: jspb.BinaryReader): PatchAppRequest;
}

export namespace PatchAppRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        app?: proto_clarifai_api_resources_pb.App.AsObject,
        action: string,
        metadataAction?: proto_clarifai_api_resources_pb.PatchAction.AsObject,
        reindex: boolean,
    }
}

export class PatchAppsIdsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAppsIdsRequest;
    clearIdsList(): void;
    getIdsList(): Array<IdUpdateSource>;
    setIdsList(value: Array<IdUpdateSource>): PatchAppsIdsRequest;
    addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;
    getAction(): string;
    setAction(value: string): PatchAppsIdsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAppsIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAppsIdsRequest): PatchAppsIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAppsIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAppsIdsRequest;
    static deserializeBinaryFromReader(message: PatchAppsIdsRequest, reader: jspb.BinaryReader): PatchAppsIdsRequest;
}

export namespace PatchAppsIdsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<IdUpdateSource.AsObject>,
        action: string,
    }
}

export class PostAppsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppsSearchesRequest;

    hasAppQuery(): boolean;
    clearAppQuery(): void;
    getAppQuery(): proto_clarifai_api_resources_pb.AppQuery | undefined;
    setAppQuery(value?: proto_clarifai_api_resources_pb.AppQuery): PostAppsSearchesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostAppsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAppsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAppsSearchesRequest): PostAppsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAppsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAppsSearchesRequest;
    static deserializeBinaryFromReader(message: PostAppsSearchesRequest, reader: jspb.BinaryReader): PostAppsSearchesRequest;
}

export namespace PostAppsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        appQuery?: proto_clarifai_api_resources_pb.AppQuery.AsObject,
        pagination?: Pagination.AsObject,
    }
}

export class SingleAppResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAppResponse;

    hasApp(): boolean;
    clearApp(): void;
    getApp(): proto_clarifai_api_resources_pb.App | undefined;
    setApp(value?: proto_clarifai_api_resources_pb.App): SingleAppResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleAppResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleAppResponse): SingleAppResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleAppResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleAppResponse;
    static deserializeBinaryFromReader(message: SingleAppResponse, reader: jspb.BinaryReader): SingleAppResponse;
}

export namespace SingleAppResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        app?: proto_clarifai_api_resources_pb.App.AsObject,
    }
}

export class MultiAppResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAppResponse;
    clearAppsList(): void;
    getAppsList(): Array<proto_clarifai_api_resources_pb.App>;
    setAppsList(value: Array<proto_clarifai_api_resources_pb.App>): MultiAppResponse;
    addApps(value?: proto_clarifai_api_resources_pb.App, index?: number): proto_clarifai_api_resources_pb.App;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiAppResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiAppResponse): MultiAppResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiAppResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiAppResponse;
    static deserializeBinaryFromReader(message: MultiAppResponse, reader: jspb.BinaryReader): MultiAppResponse;
}

export namespace MultiAppResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        appsList: Array<proto_clarifai_api_resources_pb.App.AsObject>,
    }
}

export class ListCollaboratorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollaboratorsRequest;
    getListAllCollaborators(): boolean;
    setListAllCollaborators(value: boolean): ListCollaboratorsRequest;
    getPage(): number;
    setPage(value: number): ListCollaboratorsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListCollaboratorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCollaboratorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCollaboratorsRequest): ListCollaboratorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCollaboratorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCollaboratorsRequest;
    static deserializeBinaryFromReader(message: ListCollaboratorsRequest, reader: jspb.BinaryReader): ListCollaboratorsRequest;
}

export namespace ListCollaboratorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        listAllCollaborators: boolean,
        page: number,
        perPage: number,
    }
}

export class PostCollaboratorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostCollaboratorsRequest;
    clearCollaboratorsList(): void;
    getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
    setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): PostCollaboratorsRequest;
    addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCollaboratorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCollaboratorsRequest): PostCollaboratorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCollaboratorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCollaboratorsRequest;
    static deserializeBinaryFromReader(message: PostCollaboratorsRequest, reader: jspb.BinaryReader): PostCollaboratorsRequest;
}

export namespace PostCollaboratorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
    }
}

export class PatchCollaboratorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchCollaboratorsRequest;
    clearCollaboratorsList(): void;
    getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
    setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): PatchCollaboratorsRequest;
    addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;
    getAction(): string;
    setAction(value: string): PatchCollaboratorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchCollaboratorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchCollaboratorsRequest): PatchCollaboratorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchCollaboratorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchCollaboratorsRequest;
    static deserializeBinaryFromReader(message: PatchCollaboratorsRequest, reader: jspb.BinaryReader): PatchCollaboratorsRequest;
}

export namespace PatchCollaboratorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
        action: string,
    }
}

export class DeleteCollaboratorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteCollaboratorsRequest;
    clearCollaboratorIdsList(): void;
    getCollaboratorIdsList(): Array<string>;
    setCollaboratorIdsList(value: Array<string>): DeleteCollaboratorsRequest;
    addCollaboratorIds(value: string, index?: number): string;
    clearUserEmailsList(): void;
    getUserEmailsList(): Array<string>;
    setUserEmailsList(value: Array<string>): DeleteCollaboratorsRequest;
    addUserEmails(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCollaboratorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCollaboratorsRequest): DeleteCollaboratorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCollaboratorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCollaboratorsRequest;
    static deserializeBinaryFromReader(message: DeleteCollaboratorsRequest, reader: jspb.BinaryReader): DeleteCollaboratorsRequest;
}

export namespace DeleteCollaboratorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collaboratorIdsList: Array<string>,
        userEmailsList: Array<string>,
    }
}

export class MultiCollaboratorsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollaboratorsResponse;
    clearCollaboratorsList(): void;
    getCollaboratorsList(): Array<proto_clarifai_api_resources_pb.Collaborator>;
    setCollaboratorsList(value: Array<proto_clarifai_api_resources_pb.Collaborator>): MultiCollaboratorsResponse;
    addCollaborators(value?: proto_clarifai_api_resources_pb.Collaborator, index?: number): proto_clarifai_api_resources_pb.Collaborator;

    hasAppOwner(): boolean;
    clearAppOwner(): void;
    getAppOwner(): proto_clarifai_api_resources_pb.User | undefined;
    setAppOwner(value?: proto_clarifai_api_resources_pb.User): MultiCollaboratorsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiCollaboratorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiCollaboratorsResponse): MultiCollaboratorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiCollaboratorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiCollaboratorsResponse;
    static deserializeBinaryFromReader(message: MultiCollaboratorsResponse, reader: jspb.BinaryReader): MultiCollaboratorsResponse;
}

export namespace MultiCollaboratorsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        collaboratorsList: Array<proto_clarifai_api_resources_pb.Collaborator.AsObject>,
        appOwner?: proto_clarifai_api_resources_pb.User.AsObject,
    }
}

export class ListCollaborationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollaborationsRequest;
    getPage(): number;
    setPage(value: number): ListCollaborationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListCollaborationsRequest;
    getTemplateOnly(): boolean;
    setTemplateOnly(value: boolean): ListCollaborationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCollaborationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCollaborationsRequest): ListCollaborationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCollaborationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCollaborationsRequest;
    static deserializeBinaryFromReader(message: ListCollaborationsRequest, reader: jspb.BinaryReader): ListCollaborationsRequest;
}

export namespace ListCollaborationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        templateOnly: boolean,
    }
}

export class MultiCollaborationsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollaborationsResponse;
    clearCollaborationsList(): void;
    getCollaborationsList(): Array<proto_clarifai_api_resources_pb.Collaboration>;
    setCollaborationsList(value: Array<proto_clarifai_api_resources_pb.Collaboration>): MultiCollaborationsResponse;
    addCollaborations(value?: proto_clarifai_api_resources_pb.Collaboration, index?: number): proto_clarifai_api_resources_pb.Collaboration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiCollaborationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiCollaborationsResponse): MultiCollaborationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiCollaborationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiCollaborationsResponse;
    static deserializeBinaryFromReader(message: MultiCollaborationsResponse, reader: jspb.BinaryReader): MultiCollaborationsResponse;
}

export namespace MultiCollaborationsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        collaborationsList: Array<proto_clarifai_api_resources_pb.Collaboration.AsObject>,
    }
}

export class GetStatusCodeRequest extends jspb.Message { 
    getStatusCodeId(): string;
    setStatusCodeId(value: string): GetStatusCodeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusCodeRequest): GetStatusCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusCodeRequest;
    static deserializeBinaryFromReader(message: GetStatusCodeRequest, reader: jspb.BinaryReader): GetStatusCodeRequest;
}

export namespace GetStatusCodeRequest {
    export type AsObject = {
        statusCodeId: string,
    }
}

export class ListStatusCodesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStatusCodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStatusCodesRequest): ListStatusCodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStatusCodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStatusCodesRequest;
    static deserializeBinaryFromReader(message: ListStatusCodesRequest, reader: jspb.BinaryReader): ListStatusCodesRequest;
}

export namespace ListStatusCodesRequest {
    export type AsObject = {
    }
}

export class SingleStatusCodeResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleStatusCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleStatusCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleStatusCodeResponse): SingleStatusCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleStatusCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleStatusCodeResponse;
    static deserializeBinaryFromReader(message: SingleStatusCodeResponse, reader: jspb.BinaryReader): SingleStatusCodeResponse;
}

export namespace SingleStatusCodeResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    }
}

export class MultiStatusCodeResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatusCodeResponse;
    clearStatusesList(): void;
    getStatusesList(): Array<proto_clarifai_api_status_status_pb.Status>;
    setStatusesList(value: Array<proto_clarifai_api_status_status_pb.Status>): MultiStatusCodeResponse;
    addStatuses(value?: proto_clarifai_api_status_status_pb.Status, index?: number): proto_clarifai_api_status_status_pb.Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiStatusCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiStatusCodeResponse): MultiStatusCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiStatusCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiStatusCodeResponse;
    static deserializeBinaryFromReader(message: MultiStatusCodeResponse, reader: jspb.BinaryReader): MultiStatusCodeResponse;
}

export namespace MultiStatusCodeResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        statusesList: Array<proto_clarifai_api_status_status_pb.Status.AsObject>,
    }
}

export class GetConceptRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptRequest;
    getConceptId(): string;
    setConceptId(value: string): GetConceptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConceptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConceptRequest): GetConceptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConceptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConceptRequest;
    static deserializeBinaryFromReader(message: GetConceptRequest, reader: jspb.BinaryReader): GetConceptRequest;
}

export namespace GetConceptRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
    }
}

export class ListConceptsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptsRequest;
    getPage(): number;
    setPage(value: number): ListConceptsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListConceptsRequest;
    getId(): string;
    setId(value: string): ListConceptsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConceptsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConceptsRequest): ListConceptsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConceptsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConceptsRequest;
    static deserializeBinaryFromReader(message: ListConceptsRequest, reader: jspb.BinaryReader): ListConceptsRequest;
}

export namespace ListConceptsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        id: string,
    }
}

export class ListModelConceptsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelConceptsRequest;
    getModelId(): string;
    setModelId(value: string): ListModelConceptsRequest;
    getVersionId(): string;
    setVersionId(value: string): ListModelConceptsRequest;
    getPage(): number;
    setPage(value: number): ListModelConceptsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelConceptsRequest;
    getSearch(): string;
    setSearch(value: string): ListModelConceptsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelConceptsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelConceptsRequest): ListModelConceptsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelConceptsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelConceptsRequest;
    static deserializeBinaryFromReader(message: ListModelConceptsRequest, reader: jspb.BinaryReader): ListModelConceptsRequest;
}

export namespace ListModelConceptsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        page: number,
        perPage: number,
        search: string,
    }
}

export class PostConceptsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptsSearchesRequest;

    hasConceptQuery(): boolean;
    clearConceptQuery(): void;
    getConceptQuery(): proto_clarifai_api_resources_pb.ConceptQuery | undefined;
    setConceptQuery(value?: proto_clarifai_api_resources_pb.ConceptQuery): PostConceptsSearchesRequest;

    hasExtraInfo(): boolean;
    clearExtraInfo(): void;
    getExtraInfo(): ConceptExtraInfoRequest | undefined;
    setExtraInfo(value?: ConceptExtraInfoRequest): PostConceptsSearchesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostConceptsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostConceptsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostConceptsSearchesRequest): PostConceptsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostConceptsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostConceptsSearchesRequest;
    static deserializeBinaryFromReader(message: PostConceptsSearchesRequest, reader: jspb.BinaryReader): PostConceptsSearchesRequest;
}

export namespace PostConceptsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptQuery?: proto_clarifai_api_resources_pb.ConceptQuery.AsObject,
        extraInfo?: ConceptExtraInfoRequest.AsObject,
        pagination?: Pagination.AsObject,
    }
}

export class ConceptExtraInfoRequest extends jspb.Message { 

    hasRankableModel(): boolean;
    clearRankableModel(): void;
    getRankableModel(): proto_clarifai_api_resources_pb.Model | undefined;
    setRankableModel(value?: proto_clarifai_api_resources_pb.Model): ConceptExtraInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptExtraInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptExtraInfoRequest): ConceptExtraInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptExtraInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptExtraInfoRequest;
    static deserializeBinaryFromReader(message: ConceptExtraInfoRequest, reader: jspb.BinaryReader): ConceptExtraInfoRequest;
}

export namespace ConceptExtraInfoRequest {
    export type AsObject = {
        rankableModel?: proto_clarifai_api_resources_pb.Model.AsObject,
    }
}

export class PostConceptsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptsRequest;
    clearConceptsList(): void;
    getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
    setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): PostConceptsRequest;
    addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostConceptsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostConceptsRequest): PostConceptsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostConceptsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostConceptsRequest;
    static deserializeBinaryFromReader(message: PostConceptsRequest, reader: jspb.BinaryReader): PostConceptsRequest;
}

export namespace PostConceptsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
    }
}

export class PatchConceptsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchConceptsRequest;
    clearConceptsList(): void;
    getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
    setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): PatchConceptsRequest;
    addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;
    getAction(): string;
    setAction(value: string): PatchConceptsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchConceptsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchConceptsRequest): PatchConceptsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchConceptsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchConceptsRequest;
    static deserializeBinaryFromReader(message: PatchConceptsRequest, reader: jspb.BinaryReader): PatchConceptsRequest;
}

export namespace PatchConceptsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
        action: string,
    }
}

export class GetConceptCountsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptCountsRequest;
    getPage(): number;
    setPage(value: number): GetConceptCountsRequest;
    getPerPage(): number;
    setPerPage(value: number): GetConceptCountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConceptCountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConceptCountsRequest): GetConceptCountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConceptCountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConceptCountsRequest;
    static deserializeBinaryFromReader(message: GetConceptCountsRequest, reader: jspb.BinaryReader): GetConceptCountsRequest;
}

export namespace GetConceptCountsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class SingleConceptResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptResponse;

    hasConcept(): boolean;
    clearConcept(): void;
    getConcept(): proto_clarifai_api_resources_pb.Concept | undefined;
    setConcept(value?: proto_clarifai_api_resources_pb.Concept): SingleConceptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleConceptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleConceptResponse): SingleConceptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleConceptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleConceptResponse;
    static deserializeBinaryFromReader(message: SingleConceptResponse, reader: jspb.BinaryReader): SingleConceptResponse;
}

export namespace SingleConceptResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        concept?: proto_clarifai_api_resources_pb.Concept.AsObject,
    }
}

export class MultiConceptResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptResponse;
    clearConceptsList(): void;
    getConceptsList(): Array<proto_clarifai_api_resources_pb.Concept>;
    setConceptsList(value: Array<proto_clarifai_api_resources_pb.Concept>): MultiConceptResponse;
    addConcepts(value?: proto_clarifai_api_resources_pb.Concept, index?: number): proto_clarifai_api_resources_pb.Concept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiConceptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiConceptResponse): MultiConceptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiConceptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiConceptResponse;
    static deserializeBinaryFromReader(message: MultiConceptResponse, reader: jspb.BinaryReader): MultiConceptResponse;
}

export namespace MultiConceptResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        conceptsList: Array<proto_clarifai_api_resources_pb.Concept.AsObject>,
    }
}

export class MultiConceptCountResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptCountResponse;
    clearConceptCountsList(): void;
    getConceptCountsList(): Array<proto_clarifai_api_resources_pb.ConceptCount>;
    setConceptCountsList(value: Array<proto_clarifai_api_resources_pb.ConceptCount>): MultiConceptCountResponse;
    addConceptCounts(value?: proto_clarifai_api_resources_pb.ConceptCount, index?: number): proto_clarifai_api_resources_pb.ConceptCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiConceptCountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiConceptCountResponse): MultiConceptCountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiConceptCountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiConceptCountResponse;
    static deserializeBinaryFromReader(message: MultiConceptCountResponse, reader: jspb.BinaryReader): MultiConceptCountResponse;
}

export namespace MultiConceptCountResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        conceptCountsList: Array<proto_clarifai_api_resources_pb.ConceptCount.AsObject>,
    }
}

export class ListConceptRelationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptRelationsRequest;
    getConceptId(): string;
    setConceptId(value: string): ListConceptRelationsRequest;
    getPredicate(): string;
    setPredicate(value: string): ListConceptRelationsRequest;
    getKnowledgeGraphId(): string;
    setKnowledgeGraphId(value: string): ListConceptRelationsRequest;
    getPage(): number;
    setPage(value: number): ListConceptRelationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListConceptRelationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConceptRelationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConceptRelationsRequest): ListConceptRelationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConceptRelationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConceptRelationsRequest;
    static deserializeBinaryFromReader(message: ListConceptRelationsRequest, reader: jspb.BinaryReader): ListConceptRelationsRequest;
}

export namespace ListConceptRelationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        predicate: string,
        knowledgeGraphId: string,
        page: number,
        perPage: number,
    }
}

export class PostConceptRelationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptRelationsRequest;
    getConceptId(): string;
    setConceptId(value: string): PostConceptRelationsRequest;
    clearConceptRelationsList(): void;
    getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
    setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): PostConceptRelationsRequest;
    addConceptRelations(value?: proto_clarifai_api_resources_pb.ConceptRelation, index?: number): proto_clarifai_api_resources_pb.ConceptRelation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostConceptRelationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostConceptRelationsRequest): PostConceptRelationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostConceptRelationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostConceptRelationsRequest;
    static deserializeBinaryFromReader(message: PostConceptRelationsRequest, reader: jspb.BinaryReader): PostConceptRelationsRequest;
}

export namespace PostConceptRelationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        conceptRelationsList: Array<proto_clarifai_api_resources_pb.ConceptRelation.AsObject>,
    }
}

export class DeleteConceptRelationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteConceptRelationsRequest;
    getConceptId(): string;
    setConceptId(value: string): DeleteConceptRelationsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteConceptRelationsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConceptRelationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConceptRelationsRequest): DeleteConceptRelationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConceptRelationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConceptRelationsRequest;
    static deserializeBinaryFromReader(message: DeleteConceptRelationsRequest, reader: jspb.BinaryReader): DeleteConceptRelationsRequest;
}

export namespace DeleteConceptRelationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        idsList: Array<string>,
    }
}

export class ListKnowledgeGraphsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListKnowledgeGraphsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKnowledgeGraphsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListKnowledgeGraphsRequest): ListKnowledgeGraphsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKnowledgeGraphsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKnowledgeGraphsRequest;
    static deserializeBinaryFromReader(message: ListKnowledgeGraphsRequest, reader: jspb.BinaryReader): ListKnowledgeGraphsRequest;
}

export namespace ListKnowledgeGraphsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class PostKnowledgeGraphsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostKnowledgeGraphsRequest;
    clearKnowledgeGraphsList(): void;
    getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
    setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): PostKnowledgeGraphsRequest;
    addKnowledgeGraphs(value?: proto_clarifai_api_resources_pb.KnowledgeGraph, index?: number): proto_clarifai_api_resources_pb.KnowledgeGraph;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostKnowledgeGraphsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostKnowledgeGraphsRequest): PostKnowledgeGraphsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostKnowledgeGraphsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostKnowledgeGraphsRequest;
    static deserializeBinaryFromReader(message: PostKnowledgeGraphsRequest, reader: jspb.BinaryReader): PostKnowledgeGraphsRequest;
}

export namespace PostKnowledgeGraphsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        knowledgeGraphsList: Array<proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject>,
    }
}

export class PostConceptMappingJobsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptMappingJobsRequest;
    clearConceptMappingJobsList(): void;
    getConceptMappingJobsList(): Array<proto_clarifai_api_resources_pb.ConceptMappingJob>;
    setConceptMappingJobsList(value: Array<proto_clarifai_api_resources_pb.ConceptMappingJob>): PostConceptMappingJobsRequest;
    addConceptMappingJobs(value?: proto_clarifai_api_resources_pb.ConceptMappingJob, index?: number): proto_clarifai_api_resources_pb.ConceptMappingJob;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostConceptMappingJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostConceptMappingJobsRequest): PostConceptMappingJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostConceptMappingJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostConceptMappingJobsRequest;
    static deserializeBinaryFromReader(message: PostConceptMappingJobsRequest, reader: jspb.BinaryReader): PostConceptMappingJobsRequest;
}

export namespace PostConceptMappingJobsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptMappingJobsList: Array<proto_clarifai_api_resources_pb.ConceptMappingJob.AsObject>,
    }
}

export class MultiConceptRelationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptRelationResponse;
    clearConceptRelationsList(): void;
    getConceptRelationsList(): Array<proto_clarifai_api_resources_pb.ConceptRelation>;
    setConceptRelationsList(value: Array<proto_clarifai_api_resources_pb.ConceptRelation>): MultiConceptRelationResponse;
    addConceptRelations(value?: proto_clarifai_api_resources_pb.ConceptRelation, index?: number): proto_clarifai_api_resources_pb.ConceptRelation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiConceptRelationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiConceptRelationResponse): MultiConceptRelationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiConceptRelationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiConceptRelationResponse;
    static deserializeBinaryFromReader(message: MultiConceptRelationResponse, reader: jspb.BinaryReader): MultiConceptRelationResponse;
}

export namespace MultiConceptRelationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        conceptRelationsList: Array<proto_clarifai_api_resources_pb.ConceptRelation.AsObject>,
    }
}

export class MultiKnowledgeGraphResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiKnowledgeGraphResponse;
    clearKnowledgeGraphsList(): void;
    getKnowledgeGraphsList(): Array<proto_clarifai_api_resources_pb.KnowledgeGraph>;
    setKnowledgeGraphsList(value: Array<proto_clarifai_api_resources_pb.KnowledgeGraph>): MultiKnowledgeGraphResponse;
    addKnowledgeGraphs(value?: proto_clarifai_api_resources_pb.KnowledgeGraph, index?: number): proto_clarifai_api_resources_pb.KnowledgeGraph;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiKnowledgeGraphResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiKnowledgeGraphResponse): MultiKnowledgeGraphResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiKnowledgeGraphResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiKnowledgeGraphResponse;
    static deserializeBinaryFromReader(message: MultiKnowledgeGraphResponse, reader: jspb.BinaryReader): MultiKnowledgeGraphResponse;
}

export namespace MultiKnowledgeGraphResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        knowledgeGraphsList: Array<proto_clarifai_api_resources_pb.KnowledgeGraph.AsObject>,
    }
}

export class MultiConceptMappingJobResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptMappingJobResponse;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): MultiConceptMappingJobResponse;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiConceptMappingJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiConceptMappingJobResponse): MultiConceptMappingJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiConceptMappingJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiConceptMappingJobResponse;
    static deserializeBinaryFromReader(message: MultiConceptMappingJobResponse, reader: jspb.BinaryReader): MultiConceptMappingJobResponse;
}

export namespace MultiConceptMappingJobResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        idsList: Array<string>,
    }
}

export class GetConceptLanguageRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetConceptLanguageRequest;
    getConceptId(): string;
    setConceptId(value: string): GetConceptLanguageRequest;
    getLanguage(): string;
    setLanguage(value: string): GetConceptLanguageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConceptLanguageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConceptLanguageRequest): GetConceptLanguageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConceptLanguageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConceptLanguageRequest;
    static deserializeBinaryFromReader(message: GetConceptLanguageRequest, reader: jspb.BinaryReader): GetConceptLanguageRequest;
}

export namespace GetConceptLanguageRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        language: string,
    }
}

export class ListConceptLanguagesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListConceptLanguagesRequest;
    getConceptId(): string;
    setConceptId(value: string): ListConceptLanguagesRequest;
    getPage(): number;
    setPage(value: number): ListConceptLanguagesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListConceptLanguagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConceptLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConceptLanguagesRequest): ListConceptLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConceptLanguagesRequest;
    static deserializeBinaryFromReader(message: ListConceptLanguagesRequest, reader: jspb.BinaryReader): ListConceptLanguagesRequest;
}

export namespace ListConceptLanguagesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        page: number,
        perPage: number,
    }
}

export class PatchConceptLanguagesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchConceptLanguagesRequest;
    getConceptId(): string;
    setConceptId(value: string): PatchConceptLanguagesRequest;
    clearConceptLanguagesList(): void;
    getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
    setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): PatchConceptLanguagesRequest;
    addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;
    getAction(): string;
    setAction(value: string): PatchConceptLanguagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchConceptLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchConceptLanguagesRequest): PatchConceptLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchConceptLanguagesRequest;
    static deserializeBinaryFromReader(message: PatchConceptLanguagesRequest, reader: jspb.BinaryReader): PatchConceptLanguagesRequest;
}

export namespace PatchConceptLanguagesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
        action: string,
    }
}

export class PostConceptLanguagesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostConceptLanguagesRequest;
    getConceptId(): string;
    setConceptId(value: string): PostConceptLanguagesRequest;
    clearConceptLanguagesList(): void;
    getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
    setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): PostConceptLanguagesRequest;
    addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostConceptLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostConceptLanguagesRequest): PostConceptLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostConceptLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostConceptLanguagesRequest;
    static deserializeBinaryFromReader(message: PostConceptLanguagesRequest, reader: jspb.BinaryReader): PostConceptLanguagesRequest;
}

export namespace PostConceptLanguagesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        conceptId: string,
        conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
    }
}

export class SingleConceptLanguageResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleConceptLanguageResponse;

    hasConceptLanguage(): boolean;
    clearConceptLanguage(): void;
    getConceptLanguage(): proto_clarifai_api_resources_pb.ConceptLanguage | undefined;
    setConceptLanguage(value?: proto_clarifai_api_resources_pb.ConceptLanguage): SingleConceptLanguageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleConceptLanguageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleConceptLanguageResponse): SingleConceptLanguageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleConceptLanguageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleConceptLanguageResponse;
    static deserializeBinaryFromReader(message: SingleConceptLanguageResponse, reader: jspb.BinaryReader): SingleConceptLanguageResponse;
}

export namespace SingleConceptLanguageResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        conceptLanguage?: proto_clarifai_api_resources_pb.ConceptLanguage.AsObject,
    }
}

export class MultiConceptLanguageResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiConceptLanguageResponse;
    clearConceptLanguagesList(): void;
    getConceptLanguagesList(): Array<proto_clarifai_api_resources_pb.ConceptLanguage>;
    setConceptLanguagesList(value: Array<proto_clarifai_api_resources_pb.ConceptLanguage>): MultiConceptLanguageResponse;
    addConceptLanguages(value?: proto_clarifai_api_resources_pb.ConceptLanguage, index?: number): proto_clarifai_api_resources_pb.ConceptLanguage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiConceptLanguageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiConceptLanguageResponse): MultiConceptLanguageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiConceptLanguageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiConceptLanguageResponse;
    static deserializeBinaryFromReader(message: MultiConceptLanguageResponse, reader: jspb.BinaryReader): MultiConceptLanguageResponse;
}

export namespace MultiConceptLanguageResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        conceptLanguagesList: Array<proto_clarifai_api_resources_pb.ConceptLanguage.AsObject>,
    }
}

export class GetInputRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputRequest;
    getInputId(): string;
    setInputId(value: string): GetInputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInputRequest): GetInputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInputRequest;
    static deserializeBinaryFromReader(message: GetInputRequest, reader: jspb.BinaryReader): GetInputRequest;
}

export namespace GetInputRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputId: string,
    }
}

export class GetVideoManifestRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetVideoManifestRequest;
    getInputId(): string;
    setInputId(value: string): GetVideoManifestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVideoManifestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVideoManifestRequest): GetVideoManifestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVideoManifestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVideoManifestRequest;
    static deserializeBinaryFromReader(message: GetVideoManifestRequest, reader: jspb.BinaryReader): GetVideoManifestRequest;
}

export namespace GetVideoManifestRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputId: string,
    }
}

export class GetInputSamplesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputSamplesRequest;
    getTaskId(): string;
    setTaskId(value: string): GetInputSamplesRequest;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): GetInputSamplesRequest;
    addUserIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInputSamplesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInputSamplesRequest): GetInputSamplesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInputSamplesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInputSamplesRequest;
    static deserializeBinaryFromReader(message: GetInputSamplesRequest, reader: jspb.BinaryReader): GetInputSamplesRequest;
}

export namespace GetInputSamplesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        taskId: string,
        userIdsList: Array<string>,
    }
}

export class ListInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInputsRequest;
    getPage(): number;
    setPage(value: number): ListInputsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListInputsRequest;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListInputsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): ListInputsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInputsRequest): ListInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInputsRequest;
    static deserializeBinaryFromReader(message: ListInputsRequest, reader: jspb.BinaryReader): ListInputsRequest;
}

export namespace ListInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        idsList: Array<string>,
    }
}

export class StreamInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): StreamInputsRequest;
    getPerPage(): number;
    setPerPage(value: number): StreamInputsRequest;
    getLastId(): string;
    setLastId(value: string): StreamInputsRequest;
    getOrderById(): boolean;
    setOrderById(value: boolean): StreamInputsRequest;
    getDescending(): boolean;
    setDescending(value: boolean): StreamInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamInputsRequest): StreamInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamInputsRequest;
    static deserializeBinaryFromReader(message: StreamInputsRequest, reader: jspb.BinaryReader): StreamInputsRequest;
}

export namespace StreamInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        perPage: number,
        lastId: string,
        orderById: boolean,
        descending: boolean,
    }
}

export class PostInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsRequest;
    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostInputsRequest;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;
    getInputsAddJobId(): string;
    setInputsAddJobId(value: string): PostInputsRequest;
    getInputIdConflictResolution(): proto_clarifai_api_resources_pb.InputIDConflictResolution;
    setInputIdConflictResolution(value: proto_clarifai_api_resources_pb.InputIDConflictResolution): PostInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInputsRequest): PostInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInputsRequest;
    static deserializeBinaryFromReader(message: PostInputsRequest, reader: jspb.BinaryReader): PostInputsRequest;
}

export namespace PostInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        inputsAddJobId: string,
        inputIdConflictResolution: proto_clarifai_api_resources_pb.InputIDConflictResolution,
    }
}

export class PatchInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchInputsRequest;
    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PatchInputsRequest;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;
    getAction(): string;
    setAction(value: string): PatchInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchInputsRequest): PatchInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchInputsRequest;
    static deserializeBinaryFromReader(message: PatchInputsRequest, reader: jspb.BinaryReader): PatchInputsRequest;
}

export namespace PatchInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        action: string,
    }
}

export class DeleteInputRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInputRequest;
    getInputId(): string;
    setInputId(value: string): DeleteInputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInputRequest): DeleteInputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInputRequest;
    static deserializeBinaryFromReader(message: DeleteInputRequest, reader: jspb.BinaryReader): DeleteInputRequest;
}

export namespace DeleteInputRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputId: string,
    }
}

export class DeleteInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInputsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteInputsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInputsRequest): DeleteInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInputsRequest;
    static deserializeBinaryFromReader(message: DeleteInputsRequest, reader: jspb.BinaryReader): DeleteInputsRequest;
}

export namespace DeleteInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class SingleInputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputResponse;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): proto_clarifai_api_resources_pb.Input | undefined;
    setInput(value?: proto_clarifai_api_resources_pb.Input): SingleInputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleInputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleInputResponse): SingleInputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleInputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleInputResponse;
    static deserializeBinaryFromReader(message: SingleInputResponse, reader: jspb.BinaryReader): SingleInputResponse;
}

export namespace SingleInputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        input?: proto_clarifai_api_resources_pb.Input.AsObject,
    }
}

export class GetVideoManifestResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetVideoManifestResponse;
    getManifestUrl(): string;
    setManifestUrl(value: string): GetVideoManifestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVideoManifestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVideoManifestResponse): GetVideoManifestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVideoManifestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVideoManifestResponse;
    static deserializeBinaryFromReader(message: GetVideoManifestResponse, reader: jspb.BinaryReader): GetVideoManifestResponse;
}

export namespace GetVideoManifestResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        manifestUrl: string,
    }
}

export class MultiInputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputResponse;
    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): MultiInputResponse;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

    hasInputsAddJob(): boolean;
    clearInputsAddJob(): void;
    getInputsAddJob(): proto_clarifai_api_resources_pb.InputsAddJob | undefined;
    setInputsAddJob(value?: proto_clarifai_api_resources_pb.InputsAddJob): MultiInputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiInputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiInputResponse): MultiInputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiInputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiInputResponse;
    static deserializeBinaryFromReader(message: MultiInputResponse, reader: jspb.BinaryReader): MultiInputResponse;
}

export namespace MultiInputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        inputsAddJob?: proto_clarifai_api_resources_pb.InputsAddJob.AsObject,
    }
}

export class MultiInputAnnotationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputAnnotationResponse;
    clearHitsList(): void;
    getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
    setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): MultiInputAnnotationResponse;
    addHits(value?: proto_clarifai_api_resources_pb.Hit, index?: number): proto_clarifai_api_resources_pb.Hit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiInputAnnotationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiInputAnnotationResponse): MultiInputAnnotationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiInputAnnotationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiInputAnnotationResponse;
    static deserializeBinaryFromReader(message: MultiInputAnnotationResponse, reader: jspb.BinaryReader): MultiInputAnnotationResponse;
}

export namespace MultiInputAnnotationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        hitsList: Array<proto_clarifai_api_resources_pb.Hit.AsObject>,
    }
}

export class SingleInputCountResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputCountResponse;

    hasCounts(): boolean;
    clearCounts(): void;
    getCounts(): proto_clarifai_api_resources_pb.InputCount | undefined;
    setCounts(value?: proto_clarifai_api_resources_pb.InputCount): SingleInputCountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleInputCountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleInputCountResponse): SingleInputCountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleInputCountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleInputCountResponse;
    static deserializeBinaryFromReader(message: SingleInputCountResponse, reader: jspb.BinaryReader): SingleInputCountResponse;
}

export namespace SingleInputCountResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        counts?: proto_clarifai_api_resources_pb.InputCount.AsObject,
    }
}

export class GetInputCountRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputCountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInputCountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInputCountRequest): GetInputCountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInputCountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInputCountRequest;
    static deserializeBinaryFromReader(message: GetInputCountRequest, reader: jspb.BinaryReader): GetInputCountRequest;
}

export namespace GetInputCountRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class ListDatasetsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetsRequest;
    getPage(): number;
    setPage(value: number): ListDatasetsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListDatasetsRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListDatasetsRequest;
    addAdditionalFields(value: string, index?: number): string;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListDatasetsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListDatasetsRequest;

    hasSortByStarCount(): boolean;
    clearSortByStarCount(): void;
    getSortByStarCount(): boolean;
    setSortByStarCount(value: boolean): ListDatasetsRequest;

    hasSortByModifiedAt(): boolean;
    clearSortByModifiedAt(): void;
    getSortByModifiedAt(): boolean;
    setSortByModifiedAt(value: boolean): ListDatasetsRequest;

    hasSortById(): boolean;
    clearSortById(): void;
    getSortById(): boolean;
    setSortById(value: boolean): ListDatasetsRequest;
    getStarredOnly(): boolean;
    setStarredOnly(value: boolean): ListDatasetsRequest;
    getBookmark(): boolean;
    setBookmark(value: boolean): ListDatasetsRequest;
    getSearch(): string;
    setSearch(value: string): ListDatasetsRequest;
    getId(): string;
    setId(value: string): ListDatasetsRequest;

    getSortByCase(): ListDatasetsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
    static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        sortAscending: boolean,
        sortByCreatedAt: boolean,
        sortByStarCount: boolean,
        sortByModifiedAt: boolean,
        sortById: boolean,
        starredOnly: boolean,
        bookmark: boolean,
        search: string,
        id: string,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_CREATED_AT = 7,
        SORT_BY_STAR_COUNT = 8,
        SORT_BY_MODIFIED_AT = 9,
        SORT_BY_ID = 11,
    }

}

export class GetDatasetRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetRequest;
    getDatasetId(): string;
    setDatasetId(value: string): GetDatasetRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetDatasetRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
    static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        additionalFieldsList: Array<string>,
    }
}

export class PostDatasetsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetsRequest;
    clearDatasetsList(): void;
    getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
    setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): PostDatasetsRequest;
    addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDatasetsRequest): PostDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDatasetsRequest;
    static deserializeBinaryFromReader(message: PostDatasetsRequest, reader: jspb.BinaryReader): PostDatasetsRequest;
}

export namespace PostDatasetsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
    }
}

export class PatchDatasetsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchDatasetsRequest;
    clearDatasetsList(): void;
    getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
    setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): PatchDatasetsRequest;
    addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;
    getAction(): string;
    setAction(value: string): PatchDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchDatasetsRequest): PatchDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchDatasetsRequest;
    static deserializeBinaryFromReader(message: PatchDatasetsRequest, reader: jspb.BinaryReader): PatchDatasetsRequest;
}

export namespace PatchDatasetsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
        action: string,
    }
}

export class DeleteDatasetsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetsRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): DeleteDatasetsRequest;
    addDatasetIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatasetsRequest): DeleteDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatasetsRequest;
    static deserializeBinaryFromReader(message: DeleteDatasetsRequest, reader: jspb.BinaryReader): DeleteDatasetsRequest;
}

export namespace DeleteDatasetsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetIdsList: Array<string>,
    }
}

export class MultiDatasetResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetResponse;
    clearDatasetsList(): void;
    getDatasetsList(): Array<proto_clarifai_api_resources_pb.Dataset>;
    setDatasetsList(value: Array<proto_clarifai_api_resources_pb.Dataset>): MultiDatasetResponse;
    addDatasets(value?: proto_clarifai_api_resources_pb.Dataset, index?: number): proto_clarifai_api_resources_pb.Dataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiDatasetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiDatasetResponse): MultiDatasetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiDatasetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiDatasetResponse;
    static deserializeBinaryFromReader(message: MultiDatasetResponse, reader: jspb.BinaryReader): MultiDatasetResponse;
}

export namespace MultiDatasetResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetsList: Array<proto_clarifai_api_resources_pb.Dataset.AsObject>,
    }
}

export class SingleDatasetResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetResponse;

    hasDataset(): boolean;
    clearDataset(): void;
    getDataset(): proto_clarifai_api_resources_pb.Dataset | undefined;
    setDataset(value?: proto_clarifai_api_resources_pb.Dataset): SingleDatasetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleDatasetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleDatasetResponse): SingleDatasetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleDatasetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleDatasetResponse;
    static deserializeBinaryFromReader(message: SingleDatasetResponse, reader: jspb.BinaryReader): SingleDatasetResponse;
}

export namespace SingleDatasetResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        dataset?: proto_clarifai_api_resources_pb.Dataset.AsObject,
    }
}

export class ListDatasetInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetInputsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): ListDatasetInputsRequest;
    getPage(): number;
    setPage(value: number): ListDatasetInputsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListDatasetInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatasetInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatasetInputsRequest): ListDatasetInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatasetInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatasetInputsRequest;
    static deserializeBinaryFromReader(message: ListDatasetInputsRequest, reader: jspb.BinaryReader): ListDatasetInputsRequest;
}

export namespace ListDatasetInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        page: number,
        perPage: number,
    }
}

export class GetDatasetInputRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetInputRequest;
    getDatasetId(): string;
    setDatasetId(value: string): GetDatasetInputRequest;
    getInputId(): string;
    setInputId(value: string): GetDatasetInputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatasetInputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatasetInputRequest): GetDatasetInputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatasetInputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatasetInputRequest;
    static deserializeBinaryFromReader(message: GetDatasetInputRequest, reader: jspb.BinaryReader): GetDatasetInputRequest;
}

export namespace GetDatasetInputRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        inputId: string,
    }
}

export class PostDatasetInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetInputsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): PostDatasetInputsRequest;
    clearDatasetInputsList(): void;
    getDatasetInputsList(): Array<proto_clarifai_api_resources_pb.DatasetInput>;
    setDatasetInputsList(value: Array<proto_clarifai_api_resources_pb.DatasetInput>): PostDatasetInputsRequest;
    addDatasetInputs(value?: proto_clarifai_api_resources_pb.DatasetInput, index?: number): proto_clarifai_api_resources_pb.DatasetInput;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setSearch(value?: proto_clarifai_api_resources_pb.Search): PostDatasetInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDatasetInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDatasetInputsRequest): PostDatasetInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDatasetInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDatasetInputsRequest;
    static deserializeBinaryFromReader(message: PostDatasetInputsRequest, reader: jspb.BinaryReader): PostDatasetInputsRequest;
}

export namespace PostDatasetInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetInputsList: Array<proto_clarifai_api_resources_pb.DatasetInput.AsObject>,
        search?: proto_clarifai_api_resources_pb.Search.AsObject,
    }
}

export class DeleteDatasetInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetInputsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): DeleteDatasetInputsRequest;
    clearInputIdsList(): void;
    getInputIdsList(): Array<string>;
    setInputIdsList(value: Array<string>): DeleteDatasetInputsRequest;
    addInputIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatasetInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatasetInputsRequest): DeleteDatasetInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatasetInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatasetInputsRequest;
    static deserializeBinaryFromReader(message: DeleteDatasetInputsRequest, reader: jspb.BinaryReader): DeleteDatasetInputsRequest;
}

export namespace DeleteDatasetInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        inputIdsList: Array<string>,
    }
}

export class MultiDatasetInputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetInputResponse;
    clearDatasetInputsList(): void;
    getDatasetInputsList(): Array<proto_clarifai_api_resources_pb.DatasetInput>;
    setDatasetInputsList(value: Array<proto_clarifai_api_resources_pb.DatasetInput>): MultiDatasetInputResponse;
    addDatasetInputs(value?: proto_clarifai_api_resources_pb.DatasetInput, index?: number): proto_clarifai_api_resources_pb.DatasetInput;

    hasBulkOperation(): boolean;
    clearBulkOperation(): void;
    getBulkOperation(): proto_clarifai_api_resources_pb.BulkOperation | undefined;
    setBulkOperation(value?: proto_clarifai_api_resources_pb.BulkOperation): MultiDatasetInputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiDatasetInputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiDatasetInputResponse): MultiDatasetInputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiDatasetInputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiDatasetInputResponse;
    static deserializeBinaryFromReader(message: MultiDatasetInputResponse, reader: jspb.BinaryReader): MultiDatasetInputResponse;
}

export namespace MultiDatasetInputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetInputsList: Array<proto_clarifai_api_resources_pb.DatasetInput.AsObject>,
        bulkOperation?: proto_clarifai_api_resources_pb.BulkOperation.AsObject,
    }
}

export class SingleDatasetInputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetInputResponse;

    hasDatasetInput(): boolean;
    clearDatasetInput(): void;
    getDatasetInput(): proto_clarifai_api_resources_pb.DatasetInput | undefined;
    setDatasetInput(value?: proto_clarifai_api_resources_pb.DatasetInput): SingleDatasetInputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleDatasetInputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleDatasetInputResponse): SingleDatasetInputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleDatasetInputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleDatasetInputResponse;
    static deserializeBinaryFromReader(message: SingleDatasetInputResponse, reader: jspb.BinaryReader): SingleDatasetInputResponse;
}

export namespace SingleDatasetInputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetInput?: proto_clarifai_api_resources_pb.DatasetInput.AsObject,
    }
}

export class ListDatasetVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetVersionsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): ListDatasetVersionsRequest;
    getPage(): number;
    setPage(value: number): ListDatasetVersionsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListDatasetVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatasetVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatasetVersionsRequest): ListDatasetVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatasetVersionsRequest;
    static deserializeBinaryFromReader(message: ListDatasetVersionsRequest, reader: jspb.BinaryReader): ListDatasetVersionsRequest;
}

export namespace ListDatasetVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        page: number,
        perPage: number,
    }
}

export class GetDatasetVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetDatasetVersionRequest;
    getDatasetId(): string;
    setDatasetId(value: string): GetDatasetVersionRequest;
    getDatasetVersionId(): string;
    setDatasetVersionId(value: string): GetDatasetVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatasetVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatasetVersionRequest): GetDatasetVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatasetVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatasetVersionRequest;
    static deserializeBinaryFromReader(message: GetDatasetVersionRequest, reader: jspb.BinaryReader): GetDatasetVersionRequest;
}

export namespace GetDatasetVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionId: string,
    }
}

export class ListDatasetVersionMetricsGroupsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListDatasetVersionMetricsGroupsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): ListDatasetVersionMetricsGroupsRequest;
    getDatasetVersionId(): string;
    setDatasetVersionId(value: string): ListDatasetVersionMetricsGroupsRequest;
    getPage(): number;
    setPage(value: number): ListDatasetVersionMetricsGroupsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListDatasetVersionMetricsGroupsRequest;
    clearParentPathsList(): void;
    getParentPathsList(): Array<string>;
    setParentPathsList(value: Array<string>): ListDatasetVersionMetricsGroupsRequest;
    addParentPaths(value: string, index?: number): string;
    clearTypesList(): void;
    getTypesList(): Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>;
    setTypesList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>): ListDatasetVersionMetricsGroupsRequest;
    addTypes(value: proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType, index?: number): proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType;
    clearValuesList(): void;
    getValuesList(): Array<google_protobuf_struct_pb.Value>;
    setValuesList(value: Array<google_protobuf_struct_pb.Value>): ListDatasetVersionMetricsGroupsRequest;
    addValues(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatasetVersionMetricsGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatasetVersionMetricsGroupsRequest): ListDatasetVersionMetricsGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatasetVersionMetricsGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatasetVersionMetricsGroupsRequest;
    static deserializeBinaryFromReader(message: ListDatasetVersionMetricsGroupsRequest, reader: jspb.BinaryReader): ListDatasetVersionMetricsGroupsRequest;
}

export namespace ListDatasetVersionMetricsGroupsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionId: string,
        page: number,
        perPage: number,
        parentPathsList: Array<string>,
        typesList: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroupType>,
        valuesList: Array<google_protobuf_struct_pb.Value.AsObject>,
    }
}

export class PostDatasetVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostDatasetVersionsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): PostDatasetVersionsRequest;
    clearDatasetVersionsList(): void;
    getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
    setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): PostDatasetVersionsRequest;
    addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostDatasetVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostDatasetVersionsRequest): PostDatasetVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostDatasetVersionsRequest;
    static deserializeBinaryFromReader(message: PostDatasetVersionsRequest, reader: jspb.BinaryReader): PostDatasetVersionsRequest;
}

export namespace PostDatasetVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
    }
}

export class PatchDatasetVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchDatasetVersionsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): PatchDatasetVersionsRequest;
    clearDatasetVersionsList(): void;
    getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
    setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): PatchDatasetVersionsRequest;
    addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;
    getAction(): string;
    setAction(value: string): PatchDatasetVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchDatasetVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchDatasetVersionsRequest): PatchDatasetVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchDatasetVersionsRequest;
    static deserializeBinaryFromReader(message: PatchDatasetVersionsRequest, reader: jspb.BinaryReader): PatchDatasetVersionsRequest;
}

export namespace PatchDatasetVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
        action: string,
    }
}

export class DeleteDatasetVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteDatasetVersionsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): DeleteDatasetVersionsRequest;
    clearDatasetVersionIdsList(): void;
    getDatasetVersionIdsList(): Array<string>;
    setDatasetVersionIdsList(value: Array<string>): DeleteDatasetVersionsRequest;
    addDatasetVersionIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatasetVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatasetVersionsRequest): DeleteDatasetVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatasetVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatasetVersionsRequest;
    static deserializeBinaryFromReader(message: DeleteDatasetVersionsRequest, reader: jspb.BinaryReader): DeleteDatasetVersionsRequest;
}

export namespace DeleteDatasetVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionIdsList: Array<string>,
    }
}

export class PutDatasetVersionExportsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutDatasetVersionExportsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): PutDatasetVersionExportsRequest;
    getDatasetVersionId(): string;
    setDatasetVersionId(value: string): PutDatasetVersionExportsRequest;
    clearExportsList(): void;
    getExportsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionExport>;
    setExportsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionExport>): PutDatasetVersionExportsRequest;
    addExports(value?: proto_clarifai_api_resources_pb.DatasetVersionExport, index?: number): proto_clarifai_api_resources_pb.DatasetVersionExport;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutDatasetVersionExportsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutDatasetVersionExportsRequest): PutDatasetVersionExportsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutDatasetVersionExportsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutDatasetVersionExportsRequest;
    static deserializeBinaryFromReader(message: PutDatasetVersionExportsRequest, reader: jspb.BinaryReader): PutDatasetVersionExportsRequest;
}

export namespace PutDatasetVersionExportsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        datasetId: string,
        datasetVersionId: string,
        exportsList: Array<proto_clarifai_api_resources_pb.DatasetVersionExport.AsObject>,
    }
}

export class MultiDatasetVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionResponse;
    clearDatasetVersionsList(): void;
    getDatasetVersionsList(): Array<proto_clarifai_api_resources_pb.DatasetVersion>;
    setDatasetVersionsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersion>): MultiDatasetVersionResponse;
    addDatasetVersions(value?: proto_clarifai_api_resources_pb.DatasetVersion, index?: number): proto_clarifai_api_resources_pb.DatasetVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiDatasetVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiDatasetVersionResponse): MultiDatasetVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiDatasetVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionResponse;
    static deserializeBinaryFromReader(message: MultiDatasetVersionResponse, reader: jspb.BinaryReader): MultiDatasetVersionResponse;
}

export namespace MultiDatasetVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetVersionsList: Array<proto_clarifai_api_resources_pb.DatasetVersion.AsObject>,
    }
}

export class MultiDatasetVersionExportResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionExportResponse;
    clearExportsList(): void;
    getExportsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionExport>;
    setExportsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionExport>): MultiDatasetVersionExportResponse;
    addExports(value?: proto_clarifai_api_resources_pb.DatasetVersionExport, index?: number): proto_clarifai_api_resources_pb.DatasetVersionExport;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiDatasetVersionExportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiDatasetVersionExportResponse): MultiDatasetVersionExportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiDatasetVersionExportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionExportResponse;
    static deserializeBinaryFromReader(message: MultiDatasetVersionExportResponse, reader: jspb.BinaryReader): MultiDatasetVersionExportResponse;
}

export namespace MultiDatasetVersionExportResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        exportsList: Array<proto_clarifai_api_resources_pb.DatasetVersionExport.AsObject>,
    }
}

export class MultiDatasetVersionMetricsGroupResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiDatasetVersionMetricsGroupResponse;
    clearDatasetVersionMetricsGroupsList(): void;
    getDatasetVersionMetricsGroupsList(): Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup>;
    setDatasetVersionMetricsGroupsList(value: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup>): MultiDatasetVersionMetricsGroupResponse;
    addDatasetVersionMetricsGroups(value?: proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup, index?: number): proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiDatasetVersionMetricsGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiDatasetVersionMetricsGroupResponse): MultiDatasetVersionMetricsGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiDatasetVersionMetricsGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiDatasetVersionMetricsGroupResponse;
    static deserializeBinaryFromReader(message: MultiDatasetVersionMetricsGroupResponse, reader: jspb.BinaryReader): MultiDatasetVersionMetricsGroupResponse;
}

export namespace MultiDatasetVersionMetricsGroupResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetVersionMetricsGroupsList: Array<proto_clarifai_api_resources_pb.DatasetVersionMetricsGroup.AsObject>,
    }
}

export class SingleDatasetVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleDatasetVersionResponse;

    hasDatasetVersion(): boolean;
    clearDatasetVersion(): void;
    getDatasetVersion(): proto_clarifai_api_resources_pb.DatasetVersion | undefined;
    setDatasetVersion(value?: proto_clarifai_api_resources_pb.DatasetVersion): SingleDatasetVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleDatasetVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleDatasetVersionResponse): SingleDatasetVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleDatasetVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleDatasetVersionResponse;
    static deserializeBinaryFromReader(message: SingleDatasetVersionResponse, reader: jspb.BinaryReader): SingleDatasetVersionResponse;
}

export namespace SingleDatasetVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasetVersion?: proto_clarifai_api_resources_pb.DatasetVersion.AsObject,
    }
}

export class PostModelOutputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelOutputsRequest;
    getModelId(): string;
    setModelId(value: string): PostModelOutputsRequest;
    getVersionId(): string;
    setVersionId(value: string): PostModelOutputsRequest;
    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostModelOutputsRequest;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): proto_clarifai_api_resources_pb.Model | undefined;
    setModel(value?: proto_clarifai_api_resources_pb.Model): PostModelOutputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelOutputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelOutputsRequest): PostModelOutputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelOutputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelOutputsRequest;
    static deserializeBinaryFromReader(message: PostModelOutputsRequest, reader: jspb.BinaryReader): PostModelOutputsRequest;
}

export namespace PostModelOutputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        model?: proto_clarifai_api_resources_pb.Model.AsObject,
    }
}

export class ListModelInputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelInputsRequest;
    getModelId(): string;
    setModelId(value: string): ListModelInputsRequest;
    getVersionId(): string;
    setVersionId(value: string): ListModelInputsRequest;
    getPage(): number;
    setPage(value: number): ListModelInputsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelInputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelInputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelInputsRequest): ListModelInputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelInputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelInputsRequest;
    static deserializeBinaryFromReader(message: ListModelInputsRequest, reader: jspb.BinaryReader): ListModelInputsRequest;
}

export namespace ListModelInputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        page: number,
        perPage: number,
    }
}

export class GetKeyRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetKeyRequest;
    getKeyId(): string;
    setKeyId(value: string): GetKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
    static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        keyId: string,
    }
}

export class ListKeysRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListKeysRequest;
    getPage(): number;
    setPage(value: number): ListKeysRequest;
    getPerPage(): number;
    setPerPage(value: number): ListKeysRequest;
    getNotExpired(): boolean;
    setNotExpired(value: boolean): ListKeysRequest;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): ListKeysRequest;
    addScopes(value: string, index?: number): string;
    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): ListKeysRequest;
    addEndpoints(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
    static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        notExpired: boolean,
        scopesList: Array<string>,
        endpointsList: Array<string>,
    }
}

export class ListAppKeysRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppKeysRequest;
    getPage(): number;
    setPage(value: number): ListAppKeysRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAppKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAppKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAppKeysRequest): ListAppKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAppKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAppKeysRequest;
    static deserializeBinaryFromReader(message: ListAppKeysRequest, reader: jspb.BinaryReader): ListAppKeysRequest;
}

export namespace ListAppKeysRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class PostKeysRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostKeysRequest;
    clearKeysList(): void;
    getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
    setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): PostKeysRequest;
    addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostKeysRequest): PostKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostKeysRequest;
    static deserializeBinaryFromReader(message: PostKeysRequest, reader: jspb.BinaryReader): PostKeysRequest;
}

export namespace PostKeysRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
    }
}

export class DeleteKeyRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteKeyRequest;
    getKeyId(): string;
    setKeyId(value: string): DeleteKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteKeyRequest): DeleteKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteKeyRequest;
    static deserializeBinaryFromReader(message: DeleteKeyRequest, reader: jspb.BinaryReader): DeleteKeyRequest;
}

export namespace DeleteKeyRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        keyId: string,
    }
}

export class PatchKeysRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchKeysRequest;
    clearKeysList(): void;
    getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
    setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): PatchKeysRequest;
    addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;
    getAction(): string;
    setAction(value: string): PatchKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchKeysRequest): PatchKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchKeysRequest;
    static deserializeBinaryFromReader(message: PatchKeysRequest, reader: jspb.BinaryReader): PatchKeysRequest;
}

export namespace PatchKeysRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
        action: string,
    }
}

export class SingleKeyResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleKeyResponse;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): proto_clarifai_api_resources_pb.Key | undefined;
    setKey(value?: proto_clarifai_api_resources_pb.Key): SingleKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleKeyResponse): SingleKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleKeyResponse;
    static deserializeBinaryFromReader(message: SingleKeyResponse, reader: jspb.BinaryReader): SingleKeyResponse;
}

export namespace SingleKeyResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        key?: proto_clarifai_api_resources_pb.Key.AsObject,
    }
}

export class MultiKeyResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiKeyResponse;
    clearKeysList(): void;
    getKeysList(): Array<proto_clarifai_api_resources_pb.Key>;
    setKeysList(value: Array<proto_clarifai_api_resources_pb.Key>): MultiKeyResponse;
    addKeys(value?: proto_clarifai_api_resources_pb.Key, index?: number): proto_clarifai_api_resources_pb.Key;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiKeyResponse): MultiKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiKeyResponse;
    static deserializeBinaryFromReader(message: MultiKeyResponse, reader: jspb.BinaryReader): MultiKeyResponse;
}

export namespace MultiKeyResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        keysList: Array<proto_clarifai_api_resources_pb.Key.AsObject>,
    }
}

export class GetModelRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelRequest;
    getModelId(): string;
    setModelId(value: string): GetModelRequest;
    getVersionId(): string;
    setVersionId(value: string): GetModelRequest;
    getLanguage(): string;
    setLanguage(value: string): GetModelRequest;
    getTrainedBefore(): boolean;
    setTrainedBefore(value: boolean): GetModelRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetModelRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelRequest;
    static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        language: string,
        trainedBefore: boolean,
        additionalFieldsList: Array<string>,
    }
}

export class ListModelsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelsRequest;
    getPage(): number;
    setPage(value: number): ListModelsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelsRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListModelsRequest;
    addAdditionalFields(value: string, index?: number): string;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListModelsRequest;

    hasSortByName(): boolean;
    clearSortByName(): void;
    getSortByName(): boolean;
    setSortByName(value: boolean): ListModelsRequest;

    hasSortByNumInputs(): boolean;
    clearSortByNumInputs(): void;
    getSortByNumInputs(): boolean;
    setSortByNumInputs(value: boolean): ListModelsRequest;

    hasSortByModifiedAt(): boolean;
    clearSortByModifiedAt(): void;
    getSortByModifiedAt(): boolean;
    setSortByModifiedAt(value: boolean): ListModelsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListModelsRequest;

    hasSortByStarCount(): boolean;
    clearSortByStarCount(): void;
    getSortByStarCount(): boolean;
    setSortByStarCount(value: boolean): ListModelsRequest;
    getModelTypeId(): string;
    setModelTypeId(value: string): ListModelsRequest;
    getTrainedOnly(): boolean;
    setTrainedOnly(value: boolean): ListModelsRequest;
    clearInputFieldsList(): void;
    getInputFieldsList(): Array<string>;
    setInputFieldsList(value: Array<string>): ListModelsRequest;
    addInputFields(value: string, index?: number): string;
    clearOutputFieldsList(): void;
    getOutputFieldsList(): Array<string>;
    setOutputFieldsList(value: Array<string>): ListModelsRequest;
    addOutputFields(value: string, index?: number): string;
    getLicense(): string;
    setLicense(value: string): ListModelsRequest;
    getFeaturedOnly(): boolean;
    setFeaturedOnly(value: boolean): ListModelsRequest;
    getStarredOnly(): boolean;
    setStarredOnly(value: boolean): ListModelsRequest;
    clearToolkitsList(): void;
    getToolkitsList(): Array<string>;
    setToolkitsList(value: Array<string>): ListModelsRequest;
    addToolkits(value: string, index?: number): string;
    clearUseCasesList(): void;
    getUseCasesList(): Array<string>;
    setUseCasesList(value: Array<string>): ListModelsRequest;
    addUseCases(value: string, index?: number): string;
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): ListModelsRequest;
    addLanguages(value: string, index?: number): string;
    getDontFetchFromMain(): boolean;
    setDontFetchFromMain(value: boolean): ListModelsRequest;
    getBookmark(): boolean;
    setBookmark(value: boolean): ListModelsRequest;
    getSearch(): string;
    setSearch(value: string): ListModelsRequest;
    getQuery(): string;
    setQuery(value: string): ListModelsRequest;
    getName(): string;
    setName(value: string): ListModelsRequest;
    getFilterByUserId(): boolean;
    setFilterByUserId(value: boolean): ListModelsRequest;

    getSortByCase(): ListModelsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
    static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        sortAscending: boolean,
        sortByName: boolean,
        sortByNumInputs: boolean,
        sortByModifiedAt: boolean,
        sortByCreatedAt: boolean,
        sortByStarCount: boolean,
        modelTypeId: string,
        trainedOnly: boolean,
        inputFieldsList: Array<string>,
        outputFieldsList: Array<string>,
        license: string,
        featuredOnly: boolean,
        starredOnly: boolean,
        toolkitsList: Array<string>,
        useCasesList: Array<string>,
        languagesList: Array<string>,
        dontFetchFromMain: boolean,
        bookmark: boolean,
        search: string,
        query: string,
        name: string,
        filterByUserId: boolean,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_NAME = 11,
        SORT_BY_NUM_INPUTS = 12,
        SORT_BY_MODIFIED_AT = 13,
        SORT_BY_CREATED_AT = 24,
        SORT_BY_STAR_COUNT = 25,
    }

}

export class GetResourceCountsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetResourceCountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResourceCountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetResourceCountsRequest): GetResourceCountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResourceCountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResourceCountsRequest;
    static deserializeBinaryFromReader(message: GetResourceCountsRequest, reader: jspb.BinaryReader): GetResourceCountsRequest;
}

export namespace GetResourceCountsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class GetResourceCountsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): GetResourceCountsResponse;
    getDatasets(): number;
    setDatasets(value: number): GetResourceCountsResponse;
    getModels(): number;
    setModels(value: number): GetResourceCountsResponse;
    getWorkflows(): number;
    setWorkflows(value: number): GetResourceCountsResponse;
    getModules(): number;
    setModules(value: number): GetResourceCountsResponse;
    getInputs(): number;
    setInputs(value: number): GetResourceCountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResourceCountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResourceCountsResponse): GetResourceCountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResourceCountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResourceCountsResponse;
    static deserializeBinaryFromReader(message: GetResourceCountsResponse, reader: jspb.BinaryReader): GetResourceCountsResponse;
}

export namespace GetResourceCountsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        datasets: number,
        models: number,
        workflows: number,
        modules: number,
        inputs: number,
    }
}

export class PatchModelToolkitsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelToolkitsRequest;
    getModelId(): string;
    setModelId(value: string): PatchModelToolkitsRequest;
    clearToolkitsList(): void;
    getToolkitsList(): Array<string>;
    setToolkitsList(value: Array<string>): PatchModelToolkitsRequest;
    addToolkits(value: string, index?: number): string;
    getAction(): string;
    setAction(value: string): PatchModelToolkitsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelToolkitsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelToolkitsRequest): PatchModelToolkitsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelToolkitsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelToolkitsRequest;
    static deserializeBinaryFromReader(message: PatchModelToolkitsRequest, reader: jspb.BinaryReader): PatchModelToolkitsRequest;
}

export namespace PatchModelToolkitsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        toolkitsList: Array<string>,
        action: string,
    }
}

export class PatchModelCheckConsentsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelCheckConsentsRequest;
    getModelId(): string;
    setModelId(value: string): PatchModelCheckConsentsRequest;
    clearCheckConsentsList(): void;
    getCheckConsentsList(): Array<string>;
    setCheckConsentsList(value: Array<string>): PatchModelCheckConsentsRequest;
    addCheckConsents(value: string, index?: number): string;
    getAction(): string;
    setAction(value: string): PatchModelCheckConsentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelCheckConsentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelCheckConsentsRequest): PatchModelCheckConsentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelCheckConsentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelCheckConsentsRequest;
    static deserializeBinaryFromReader(message: PatchModelCheckConsentsRequest, reader: jspb.BinaryReader): PatchModelCheckConsentsRequest;
}

export namespace PatchModelCheckConsentsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        checkConsentsList: Array<string>,
        action: string,
    }
}

export class PatchModelUseCasesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelUseCasesRequest;
    getModelId(): string;
    setModelId(value: string): PatchModelUseCasesRequest;
    clearUsecasesList(): void;
    getUsecasesList(): Array<string>;
    setUsecasesList(value: Array<string>): PatchModelUseCasesRequest;
    addUsecases(value: string, index?: number): string;
    getAction(): string;
    setAction(value: string): PatchModelUseCasesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelUseCasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelUseCasesRequest): PatchModelUseCasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelUseCasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelUseCasesRequest;
    static deserializeBinaryFromReader(message: PatchModelUseCasesRequest, reader: jspb.BinaryReader): PatchModelUseCasesRequest;
}

export namespace PatchModelUseCasesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        usecasesList: Array<string>,
        action: string,
    }
}

export class PatchModelLanguagesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelLanguagesRequest;
    getModelId(): string;
    setModelId(value: string): PatchModelLanguagesRequest;
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): PatchModelLanguagesRequest;
    addLanguages(value: string, index?: number): string;
    getAction(): string;
    setAction(value: string): PatchModelLanguagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelLanguagesRequest): PatchModelLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelLanguagesRequest;
    static deserializeBinaryFromReader(message: PatchModelLanguagesRequest, reader: jspb.BinaryReader): PatchModelLanguagesRequest;
}

export namespace PatchModelLanguagesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        languagesList: Array<string>,
        action: string,
    }
}

export class MultiModelToolkitResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelToolkitResponse;
    clearToolkitsList(): void;
    getToolkitsList(): Array<string>;
    setToolkitsList(value: Array<string>): MultiModelToolkitResponse;
    addToolkits(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelToolkitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelToolkitResponse): MultiModelToolkitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelToolkitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelToolkitResponse;
    static deserializeBinaryFromReader(message: MultiModelToolkitResponse, reader: jspb.BinaryReader): MultiModelToolkitResponse;
}

export namespace MultiModelToolkitResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        toolkitsList: Array<string>,
    }
}

export class MultiModelCheckConsentResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelCheckConsentResponse;
    clearCheckConsentsList(): void;
    getCheckConsentsList(): Array<string>;
    setCheckConsentsList(value: Array<string>): MultiModelCheckConsentResponse;
    addCheckConsents(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelCheckConsentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelCheckConsentResponse): MultiModelCheckConsentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelCheckConsentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelCheckConsentResponse;
    static deserializeBinaryFromReader(message: MultiModelCheckConsentResponse, reader: jspb.BinaryReader): MultiModelCheckConsentResponse;
}

export namespace MultiModelCheckConsentResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        checkConsentsList: Array<string>,
    }
}

export class MultiModelUseCaseResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelUseCaseResponse;
    clearUsecasesList(): void;
    getUsecasesList(): Array<string>;
    setUsecasesList(value: Array<string>): MultiModelUseCaseResponse;
    addUsecases(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelUseCaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelUseCaseResponse): MultiModelUseCaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelUseCaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelUseCaseResponse;
    static deserializeBinaryFromReader(message: MultiModelUseCaseResponse, reader: jspb.BinaryReader): MultiModelUseCaseResponse;
}

export namespace MultiModelUseCaseResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        usecasesList: Array<string>,
    }
}

export class MultiModelLanguageResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelLanguageResponse;
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): MultiModelLanguageResponse;
    addLanguages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelLanguageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelLanguageResponse): MultiModelLanguageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelLanguageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelLanguageResponse;
    static deserializeBinaryFromReader(message: MultiModelLanguageResponse, reader: jspb.BinaryReader): MultiModelLanguageResponse;
}

export namespace MultiModelLanguageResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        languagesList: Array<string>,
    }
}

export class PostModelsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelsRequest;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): proto_clarifai_api_resources_pb.Model | undefined;
    setModel(value?: proto_clarifai_api_resources_pb.Model): PostModelsRequest;
    clearModelsList(): void;
    getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
    setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): PostModelsRequest;
    addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelsRequest): PostModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelsRequest;
    static deserializeBinaryFromReader(message: PostModelsRequest, reader: jspb.BinaryReader): PostModelsRequest;
}

export namespace PostModelsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        model?: proto_clarifai_api_resources_pb.Model.AsObject,
        modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
    }
}

export class PatchModelsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelsRequest;
    clearModelsList(): void;
    getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
    setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): PatchModelsRequest;
    addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;
    getAction(): string;
    setAction(value: string): PatchModelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelsRequest): PatchModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelsRequest;
    static deserializeBinaryFromReader(message: PatchModelsRequest, reader: jspb.BinaryReader): PatchModelsRequest;
}

export namespace PatchModelsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
        action: string,
    }
}

export class IdUpdateSource extends jspb.Message { 
    getId(): string;
    setId(value: string): IdUpdateSource;
    getNewId(): string;
    setNewId(value: string): IdUpdateSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdUpdateSource.AsObject;
    static toObject(includeInstance: boolean, msg: IdUpdateSource): IdUpdateSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdUpdateSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdUpdateSource;
    static deserializeBinaryFromReader(message: IdUpdateSource, reader: jspb.BinaryReader): IdUpdateSource;
}

export namespace IdUpdateSource {
    export type AsObject = {
        id: string,
        newId: string,
    }
}

export class PatchModelIdsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelIdsRequest;
    clearIdsList(): void;
    getIdsList(): Array<IdUpdateSource>;
    setIdsList(value: Array<IdUpdateSource>): PatchModelIdsRequest;
    addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;
    getAction(): string;
    setAction(value: string): PatchModelIdsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelIdsRequest): PatchModelIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelIdsRequest;
    static deserializeBinaryFromReader(message: PatchModelIdsRequest, reader: jspb.BinaryReader): PatchModelIdsRequest;
}

export namespace PatchModelIdsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<IdUpdateSource.AsObject>,
        action: string,
    }
}

export class DeleteModelRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelRequest;
    getModelId(): string;
    setModelId(value: string): DeleteModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
    static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
    }
}

export class DeleteModelsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteModelsRequest;
    addIds(value: string, index?: number): string;
    getDeleteAll(): boolean;
    setDeleteAll(value: boolean): DeleteModelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteModelsRequest): DeleteModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteModelsRequest;
    static deserializeBinaryFromReader(message: DeleteModelsRequest, reader: jspb.BinaryReader): DeleteModelsRequest;
}

export namespace DeleteModelsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
        deleteAll: boolean,
    }
}

export class PostModelsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelsSearchesRequest;

    hasModelQuery(): boolean;
    clearModelQuery(): void;
    getModelQuery(): proto_clarifai_api_resources_pb.ModelQuery | undefined;
    setModelQuery(value?: proto_clarifai_api_resources_pb.ModelQuery): PostModelsSearchesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostModelsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelsSearchesRequest): PostModelsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelsSearchesRequest;
    static deserializeBinaryFromReader(message: PostModelsSearchesRequest, reader: jspb.BinaryReader): PostModelsSearchesRequest;
}

export namespace PostModelsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelQuery?: proto_clarifai_api_resources_pb.ModelQuery.AsObject,
        pagination?: Pagination.AsObject,
    }
}

export class SingleModelResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelResponse;

    hasModel(): boolean;
    clearModel(): void;
    getModel(): proto_clarifai_api_resources_pb.Model | undefined;
    setModel(value?: proto_clarifai_api_resources_pb.Model): SingleModelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModelResponse): SingleModelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModelResponse;
    static deserializeBinaryFromReader(message: SingleModelResponse, reader: jspb.BinaryReader): SingleModelResponse;
}

export namespace SingleModelResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        model?: proto_clarifai_api_resources_pb.Model.AsObject,
    }
}

export class MultiModelResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelResponse;
    clearModelsList(): void;
    getModelsList(): Array<proto_clarifai_api_resources_pb.Model>;
    setModelsList(value: Array<proto_clarifai_api_resources_pb.Model>): MultiModelResponse;
    addModels(value?: proto_clarifai_api_resources_pb.Model, index?: number): proto_clarifai_api_resources_pb.Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelResponse): MultiModelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelResponse;
    static deserializeBinaryFromReader(message: MultiModelResponse, reader: jspb.BinaryReader): MultiModelResponse;
}

export namespace MultiModelResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelsList: Array<proto_clarifai_api_resources_pb.Model.AsObject>,
    }
}

export class PatchModelVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModelVersionsRequest;
    getModelId(): string;
    setModelId(value: string): PatchModelVersionsRequest;
    clearModelVersionsList(): void;
    getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
    setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): PatchModelVersionsRequest;
    addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;
    getAction(): string;
    setAction(value: string): PatchModelVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModelVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModelVersionsRequest): PatchModelVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModelVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModelVersionsRequest;
    static deserializeBinaryFromReader(message: PatchModelVersionsRequest, reader: jspb.BinaryReader): PatchModelVersionsRequest;
}

export namespace PatchModelVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
        action: string,
    }
}

export class GetModelVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionRequest;
    getModelId(): string;
    setModelId(value: string): GetModelVersionRequest;
    getVersionId(): string;
    setVersionId(value: string): GetModelVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelVersionRequest): GetModelVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelVersionRequest;
    static deserializeBinaryFromReader(message: GetModelVersionRequest, reader: jspb.BinaryReader): GetModelVersionRequest;
}

export namespace GetModelVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
    }
}

export class ListModelVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelVersionsRequest;
    getModelId(): string;
    setModelId(value: string): ListModelVersionsRequest;
    getPage(): number;
    setPage(value: number): ListModelVersionsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelVersionsRequest;
    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): ListModelVersionsRequest;
    addConceptIds(value: string, index?: number): string;
    getTrainedOnly(): boolean;
    setTrainedOnly(value: boolean): ListModelVersionsRequest;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListModelVersionsRequest;

    hasSortByStatusCode(): boolean;
    clearSortByStatusCode(): void;
    getSortByStatusCode(): boolean;
    setSortByStatusCode(value: boolean): ListModelVersionsRequest;

    hasSortByNumInputs(): boolean;
    clearSortByNumInputs(): void;
    getSortByNumInputs(): boolean;
    setSortByNumInputs(value: boolean): ListModelVersionsRequest;

    hasSortByDescription(): boolean;
    clearSortByDescription(): void;
    getSortByDescription(): boolean;
    setSortByDescription(value: boolean): ListModelVersionsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListModelVersionsRequest;

    getSortByCase(): ListModelVersionsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelVersionsRequest): ListModelVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelVersionsRequest;
    static deserializeBinaryFromReader(message: ListModelVersionsRequest, reader: jspb.BinaryReader): ListModelVersionsRequest;
}

export namespace ListModelVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        page: number,
        perPage: number,
        conceptIdsList: Array<string>,
        trainedOnly: boolean,
        sortAscending: boolean,
        sortByStatusCode: boolean,
        sortByNumInputs: boolean,
        sortByDescription: boolean,
        sortByCreatedAt: boolean,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_STATUS_CODE = 8,
        SORT_BY_NUM_INPUTS = 9,
        SORT_BY_DESCRIPTION = 10,
        SORT_BY_CREATED_AT = 11,
    }

}

export class DeleteModelVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModelVersionRequest;
    getModelId(): string;
    setModelId(value: string): DeleteModelVersionRequest;
    getVersionId(): string;
    setVersionId(value: string): DeleteModelVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteModelVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteModelVersionRequest): DeleteModelVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteModelVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteModelVersionRequest;
    static deserializeBinaryFromReader(message: DeleteModelVersionRequest, reader: jspb.BinaryReader): DeleteModelVersionRequest;
}

export namespace DeleteModelVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
    }
}

export class SingleModelVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelVersionResponse;

    hasModelVersion(): boolean;
    clearModelVersion(): void;
    getModelVersion(): proto_clarifai_api_resources_pb.ModelVersion | undefined;
    setModelVersion(value?: proto_clarifai_api_resources_pb.ModelVersion): SingleModelVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModelVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModelVersionResponse): SingleModelVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModelVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModelVersionResponse;
    static deserializeBinaryFromReader(message: SingleModelVersionResponse, reader: jspb.BinaryReader): SingleModelVersionResponse;
}

export namespace SingleModelVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelVersion?: proto_clarifai_api_resources_pb.ModelVersion.AsObject,
    }
}

export class MultiModelVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelVersionResponse;
    clearModelVersionsList(): void;
    getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
    setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): MultiModelVersionResponse;
    addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelVersionResponse): MultiModelVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelVersionResponse;
    static deserializeBinaryFromReader(message: MultiModelVersionResponse, reader: jspb.BinaryReader): MultiModelVersionResponse;
}

export namespace MultiModelVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
    }
}

export class PostModelVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionsRequest;
    clearModelVersionsList(): void;
    getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
    setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): PostModelVersionsRequest;
    addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;
    getDescription(): string;
    setDescription(value: string): PostModelVersionsRequest;

    hasEvalInfo(): boolean;
    clearEvalInfo(): void;
    getEvalInfo(): proto_clarifai_api_resources_pb.EvalInfo | undefined;
    setEvalInfo(value?: proto_clarifai_api_resources_pb.EvalInfo): PostModelVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionsRequest): PostModelVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionsRequest;
    static deserializeBinaryFromReader(message: PostModelVersionsRequest, reader: jspb.BinaryReader): PostModelVersionsRequest;
}

export namespace PostModelVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
        description: string,
        evalInfo?: proto_clarifai_api_resources_pb.EvalInfo.AsObject,
    }
}

export class PostWorkflowVersionsUnPublishRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowVersionsUnPublishRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): PostWorkflowVersionsUnPublishRequest;
    clearPublicationsList(): void;
    getPublicationsList(): Array<WorkflowVersionUnPublishRequest>;
    setPublicationsList(value: Array<WorkflowVersionUnPublishRequest>): PostWorkflowVersionsUnPublishRequest;
    addPublications(value?: WorkflowVersionUnPublishRequest, index?: number): WorkflowVersionUnPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowVersionsUnPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowVersionsUnPublishRequest): PostWorkflowVersionsUnPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowVersionsUnPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowVersionsUnPublishRequest;
    static deserializeBinaryFromReader(message: PostWorkflowVersionsUnPublishRequest, reader: jspb.BinaryReader): PostWorkflowVersionsUnPublishRequest;
}

export namespace PostWorkflowVersionsUnPublishRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        publicationsList: Array<WorkflowVersionUnPublishRequest.AsObject>,
    }
}

export class PostWorkflowVersionsPublishRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowVersionsPublishRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): PostWorkflowVersionsPublishRequest;
    clearPublicationsList(): void;
    getPublicationsList(): Array<WorkflowVersionPublishRequest>;
    setPublicationsList(value: Array<WorkflowVersionPublishRequest>): PostWorkflowVersionsPublishRequest;
    addPublications(value?: WorkflowVersionPublishRequest, index?: number): WorkflowVersionPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowVersionsPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowVersionsPublishRequest): PostWorkflowVersionsPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowVersionsPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowVersionsPublishRequest;
    static deserializeBinaryFromReader(message: PostWorkflowVersionsPublishRequest, reader: jspb.BinaryReader): PostWorkflowVersionsPublishRequest;
}

export namespace PostWorkflowVersionsPublishRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        publicationsList: Array<WorkflowVersionPublishRequest.AsObject>,
    }
}

export class WorkflowVersionPublishRequest extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): WorkflowVersionPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowVersionPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowVersionPublishRequest): WorkflowVersionPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowVersionPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowVersionPublishRequest;
    static deserializeBinaryFromReader(message: WorkflowVersionPublishRequest, reader: jspb.BinaryReader): WorkflowVersionPublishRequest;
}

export namespace WorkflowVersionPublishRequest {
    export type AsObject = {
        versionId: string,
    }
}

export class WorkflowVersionUnPublishRequest extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): WorkflowVersionUnPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowVersionUnPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowVersionUnPublishRequest): WorkflowVersionUnPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowVersionUnPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowVersionUnPublishRequest;
    static deserializeBinaryFromReader(message: WorkflowVersionUnPublishRequest, reader: jspb.BinaryReader): WorkflowVersionUnPublishRequest;
}

export namespace WorkflowVersionUnPublishRequest {
    export type AsObject = {
        versionId: string,
    }
}

export class ModelVersionPublishRequest extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): ModelVersionPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelVersionPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ModelVersionPublishRequest): ModelVersionPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelVersionPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelVersionPublishRequest;
    static deserializeBinaryFromReader(message: ModelVersionPublishRequest, reader: jspb.BinaryReader): ModelVersionPublishRequest;
}

export namespace ModelVersionPublishRequest {
    export type AsObject = {
        versionId: string,
    }
}

export class PostModelVersionsPublishRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsPublishRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionsPublishRequest;
    clearPublicationsList(): void;
    getPublicationsList(): Array<ModelVersionPublishRequest>;
    setPublicationsList(value: Array<ModelVersionPublishRequest>): PostModelVersionsPublishRequest;
    addPublications(value?: ModelVersionPublishRequest, index?: number): ModelVersionPublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionsPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionsPublishRequest): PostModelVersionsPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionsPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionsPublishRequest;
    static deserializeBinaryFromReader(message: PostModelVersionsPublishRequest, reader: jspb.BinaryReader): PostModelVersionsPublishRequest;
}

export namespace PostModelVersionsPublishRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        publicationsList: Array<ModelVersionPublishRequest.AsObject>,
    }
}

export class ModelVersionUnpublishRequest extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): ModelVersionUnpublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelVersionUnpublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ModelVersionUnpublishRequest): ModelVersionUnpublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelVersionUnpublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelVersionUnpublishRequest;
    static deserializeBinaryFromReader(message: ModelVersionUnpublishRequest, reader: jspb.BinaryReader): ModelVersionUnpublishRequest;
}

export namespace ModelVersionUnpublishRequest {
    export type AsObject = {
        versionId: string,
    }
}

export class PostModelVersionsUnPublishRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsUnPublishRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionsUnPublishRequest;
    clearPublicationsList(): void;
    getPublicationsList(): Array<ModelVersionUnpublishRequest>;
    setPublicationsList(value: Array<ModelVersionUnpublishRequest>): PostModelVersionsUnPublishRequest;
    addPublications(value?: ModelVersionUnpublishRequest, index?: number): ModelVersionUnpublishRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionsUnPublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionsUnPublishRequest): PostModelVersionsUnPublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionsUnPublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionsUnPublishRequest;
    static deserializeBinaryFromReader(message: PostModelVersionsUnPublishRequest, reader: jspb.BinaryReader): PostModelVersionsUnPublishRequest;
}

export namespace PostModelVersionsUnPublishRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        publicationsList: Array<ModelVersionUnpublishRequest.AsObject>,
    }
}

export class PostEvaluationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostEvaluationsRequest;
    clearEvalMetricsList(): void;
    getEvalMetricsList(): Array<proto_clarifai_api_resources_pb.EvalMetrics>;
    setEvalMetricsList(value: Array<proto_clarifai_api_resources_pb.EvalMetrics>): PostEvaluationsRequest;
    addEvalMetrics(value?: proto_clarifai_api_resources_pb.EvalMetrics, index?: number): proto_clarifai_api_resources_pb.EvalMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostEvaluationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostEvaluationsRequest): PostEvaluationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostEvaluationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostEvaluationsRequest;
    static deserializeBinaryFromReader(message: PostEvaluationsRequest, reader: jspb.BinaryReader): PostEvaluationsRequest;
}

export namespace PostEvaluationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        evalMetricsList: Array<proto_clarifai_api_resources_pb.EvalMetrics.AsObject>,
    }
}

export class ListEvaluationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListEvaluationsRequest;
    getPage(): number;
    setPage(value: number): ListEvaluationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListEvaluationsRequest;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListEvaluationsRequest;

    hasSortByAppId(): boolean;
    clearSortByAppId(): void;
    getSortByAppId(): boolean;
    setSortByAppId(value: boolean): ListEvaluationsRequest;

    hasSortByRocAuc(): boolean;
    clearSortByRocAuc(): void;
    getSortByRocAuc(): boolean;
    setSortByRocAuc(value: boolean): ListEvaluationsRequest;

    hasSortByF1(): boolean;
    clearSortByF1(): void;
    getSortByF1(): boolean;
    setSortByF1(value: boolean): ListEvaluationsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListEvaluationsRequest;

    hasSortByMeanAvgPrecision(): boolean;
    clearSortByMeanAvgPrecision(): void;
    getSortByMeanAvgPrecision(): boolean;
    setSortByMeanAvgPrecision(value: boolean): ListEvaluationsRequest;

    hasSortByPrecision(): boolean;
    clearSortByPrecision(): void;
    getSortByPrecision(): boolean;
    setSortByPrecision(value: boolean): ListEvaluationsRequest;

    hasSortByRecall(): boolean;
    clearSortByRecall(): void;
    getSortByRecall(): boolean;
    setSortByRecall(value: boolean): ListEvaluationsRequest;

    hasSortByModelId(): boolean;
    clearSortByModelId(): void;
    getSortByModelId(): boolean;
    setSortByModelId(value: boolean): ListEvaluationsRequest;

    hasSortByEvalDatasetId(): boolean;
    clearSortByEvalDatasetId(): void;
    getSortByEvalDatasetId(): boolean;
    setSortByEvalDatasetId(value: boolean): ListEvaluationsRequest;

    hasSortByTrainDatasetId(): boolean;
    clearSortByTrainDatasetId(): void;
    getSortByTrainDatasetId(): boolean;
    setSortByTrainDatasetId(value: boolean): ListEvaluationsRequest;
    getModelTypeId(): string;
    setModelTypeId(value: string): ListEvaluationsRequest;
    clearEvalDatasetIdsList(): void;
    getEvalDatasetIdsList(): Array<string>;
    setEvalDatasetIdsList(value: Array<string>): ListEvaluationsRequest;
    addEvalDatasetIds(value: string, index?: number): string;
    clearTrainDatasetIdsList(): void;
    getTrainDatasetIdsList(): Array<string>;
    setTrainDatasetIdsList(value: Array<string>): ListEvaluationsRequest;
    addTrainDatasetIds(value: string, index?: number): string;
    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): ListEvaluationsRequest;
    addConceptIds(value: string, index?: number): string;
    getShowFailedMetrics(): boolean;
    setShowFailedMetrics(value: boolean): ListEvaluationsRequest;

    getSortByCase(): ListEvaluationsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEvaluationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEvaluationsRequest): ListEvaluationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEvaluationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEvaluationsRequest;
    static deserializeBinaryFromReader(message: ListEvaluationsRequest, reader: jspb.BinaryReader): ListEvaluationsRequest;
}

export namespace ListEvaluationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        sortAscending: boolean,
        sortByAppId: boolean,
        sortByRocAuc: boolean,
        sortByF1: boolean,
        sortByCreatedAt: boolean,
        sortByMeanAvgPrecision: boolean,
        sortByPrecision: boolean,
        sortByRecall: boolean,
        sortByModelId: boolean,
        sortByEvalDatasetId: boolean,
        sortByTrainDatasetId: boolean,
        modelTypeId: string,
        evalDatasetIdsList: Array<string>,
        trainDatasetIdsList: Array<string>,
        conceptIdsList: Array<string>,
        showFailedMetrics: boolean,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_APP_ID = 5,
        SORT_BY_ROC_AUC = 6,
        SORT_BY_F1 = 7,
        SORT_BY_CREATED_AT = 8,
        SORT_BY_MEAN_AVG_PRECISION = 9,
        SORT_BY_PRECISION = 10,
        SORT_BY_RECALL = 11,
        SORT_BY_MODEL_ID = 16,
        SORT_BY_EVAL_DATASET_ID = 17,
        SORT_BY_TRAIN_DATASET_ID = 18,
    }

}

export class GetEvaluationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetEvaluationRequest;
    getEvaluationId(): string;
    setEvaluationId(value: string): GetEvaluationRequest;

    hasFields(): boolean;
    clearFields(): void;
    getFields(): proto_clarifai_api_resources_pb.FieldsValue | undefined;
    setFields(value?: proto_clarifai_api_resources_pb.FieldsValue): GetEvaluationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEvaluationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEvaluationRequest): GetEvaluationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEvaluationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEvaluationRequest;
    static deserializeBinaryFromReader(message: GetEvaluationRequest, reader: jspb.BinaryReader): GetEvaluationRequest;
}

export namespace GetEvaluationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        evaluationId: string,
        fields?: proto_clarifai_api_resources_pb.FieldsValue.AsObject,
    }
}

export class PostModelVersionEvaluationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionEvaluationsRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionEvaluationsRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): PostModelVersionEvaluationsRequest;
    clearEvalMetricsList(): void;
    getEvalMetricsList(): Array<proto_clarifai_api_resources_pb.EvalMetrics>;
    setEvalMetricsList(value: Array<proto_clarifai_api_resources_pb.EvalMetrics>): PostModelVersionEvaluationsRequest;
    addEvalMetrics(value?: proto_clarifai_api_resources_pb.EvalMetrics, index?: number): proto_clarifai_api_resources_pb.EvalMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionEvaluationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionEvaluationsRequest): PostModelVersionEvaluationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionEvaluationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionEvaluationsRequest;
    static deserializeBinaryFromReader(message: PostModelVersionEvaluationsRequest, reader: jspb.BinaryReader): PostModelVersionEvaluationsRequest;
}

export namespace PostModelVersionEvaluationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionId: string,
        evalMetricsList: Array<proto_clarifai_api_resources_pb.EvalMetrics.AsObject>,
    }
}

export class ListModelVersionEvaluationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelVersionEvaluationsRequest;
    getModelId(): string;
    setModelId(value: string): ListModelVersionEvaluationsRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): ListModelVersionEvaluationsRequest;
    getPage(): number;
    setPage(value: number): ListModelVersionEvaluationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelVersionEvaluationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelVersionEvaluationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelVersionEvaluationsRequest): ListModelVersionEvaluationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelVersionEvaluationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelVersionEvaluationsRequest;
    static deserializeBinaryFromReader(message: ListModelVersionEvaluationsRequest, reader: jspb.BinaryReader): ListModelVersionEvaluationsRequest;
}

export namespace ListModelVersionEvaluationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionId: string,
        page: number,
        perPage: number,
    }
}

export class GetModelVersionEvaluationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionEvaluationRequest;
    getModelId(): string;
    setModelId(value: string): GetModelVersionEvaluationRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): GetModelVersionEvaluationRequest;
    getEvaluationId(): string;
    setEvaluationId(value: string): GetModelVersionEvaluationRequest;

    hasFields(): boolean;
    clearFields(): void;
    getFields(): proto_clarifai_api_resources_pb.FieldsValue | undefined;
    setFields(value?: proto_clarifai_api_resources_pb.FieldsValue): GetModelVersionEvaluationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelVersionEvaluationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelVersionEvaluationRequest): GetModelVersionEvaluationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelVersionEvaluationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelVersionEvaluationRequest;
    static deserializeBinaryFromReader(message: GetModelVersionEvaluationRequest, reader: jspb.BinaryReader): GetModelVersionEvaluationRequest;
}

export namespace GetModelVersionEvaluationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionId: string,
        evaluationId: string,
        fields?: proto_clarifai_api_resources_pb.FieldsValue.AsObject,
    }
}

export class SingleEvalMetricsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleEvalMetricsResponse;

    hasEvalMetrics(): boolean;
    clearEvalMetrics(): void;
    getEvalMetrics(): proto_clarifai_api_resources_pb.EvalMetrics | undefined;
    setEvalMetrics(value?: proto_clarifai_api_resources_pb.EvalMetrics): SingleEvalMetricsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleEvalMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleEvalMetricsResponse): SingleEvalMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleEvalMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleEvalMetricsResponse;
    static deserializeBinaryFromReader(message: SingleEvalMetricsResponse, reader: jspb.BinaryReader): SingleEvalMetricsResponse;
}

export namespace SingleEvalMetricsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        evalMetrics?: proto_clarifai_api_resources_pb.EvalMetrics.AsObject,
    }
}

export class MultiEvalMetricsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiEvalMetricsResponse;
    clearEvalMetricsList(): void;
    getEvalMetricsList(): Array<proto_clarifai_api_resources_pb.EvalMetrics>;
    setEvalMetricsList(value: Array<proto_clarifai_api_resources_pb.EvalMetrics>): MultiEvalMetricsResponse;
    addEvalMetrics(value?: proto_clarifai_api_resources_pb.EvalMetrics, index?: number): proto_clarifai_api_resources_pb.EvalMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiEvalMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiEvalMetricsResponse): MultiEvalMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiEvalMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiEvalMetricsResponse;
    static deserializeBinaryFromReader(message: MultiEvalMetricsResponse, reader: jspb.BinaryReader): MultiEvalMetricsResponse;
}

export namespace MultiEvalMetricsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        evalMetricsList: Array<proto_clarifai_api_resources_pb.EvalMetrics.AsObject>,
    }
}

export class PostModelVersionMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionMetricsRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionMetricsRequest;
    getVersionId(): string;
    setVersionId(value: string): PostModelVersionMetricsRequest;

    hasTestSearch(): boolean;
    clearTestSearch(): void;
    getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setTestSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionMetricsRequest;

    hasEvalInfo(): boolean;
    clearEvalInfo(): void;
    getEvalInfo(): proto_clarifai_api_resources_pb.EvalInfo | undefined;
    setEvalInfo(value?: proto_clarifai_api_resources_pb.EvalInfo): PostModelVersionMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionMetricsRequest): PostModelVersionMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionMetricsRequest;
    static deserializeBinaryFromReader(message: PostModelVersionMetricsRequest, reader: jspb.BinaryReader): PostModelVersionMetricsRequest;
}

export namespace PostModelVersionMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        testSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
        evalInfo?: proto_clarifai_api_resources_pb.EvalInfo.AsObject,
    }
}

export class GetModelVersionMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionMetricsRequest;
    getModelId(): string;
    setModelId(value: string): GetModelVersionMetricsRequest;
    getVersionId(): string;
    setVersionId(value: string): GetModelVersionMetricsRequest;

    hasFields(): boolean;
    clearFields(): void;
    getFields(): proto_clarifai_api_resources_pb.FieldsValue | undefined;
    setFields(value?: proto_clarifai_api_resources_pb.FieldsValue): GetModelVersionMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelVersionMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelVersionMetricsRequest): GetModelVersionMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelVersionMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelVersionMetricsRequest;
    static deserializeBinaryFromReader(message: GetModelVersionMetricsRequest, reader: jspb.BinaryReader): GetModelVersionMetricsRequest;
}

export namespace GetModelVersionMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        versionId: string,
        fields?: proto_clarifai_api_resources_pb.FieldsValue.AsObject,
    }
}

export class GetModelTypeRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelTypeRequest;
    getModelTypeId(): string;
    setModelTypeId(value: string): GetModelTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelTypeRequest): GetModelTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelTypeRequest;
    static deserializeBinaryFromReader(message: GetModelTypeRequest, reader: jspb.BinaryReader): GetModelTypeRequest;
}

export namespace GetModelTypeRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelTypeId: string,
    }
}

export class ListModelTypesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelTypesRequest;
    getPage(): number;
    setPage(value: number): ListModelTypesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelTypesRequest): ListModelTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelTypesRequest;
    static deserializeBinaryFromReader(message: ListModelTypesRequest, reader: jspb.BinaryReader): ListModelTypesRequest;
}

export namespace ListModelTypesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class ListOpenSourceLicensesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOpenSourceLicensesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOpenSourceLicensesRequest): ListOpenSourceLicensesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOpenSourceLicensesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOpenSourceLicensesRequest;
    static deserializeBinaryFromReader(message: ListOpenSourceLicensesRequest, reader: jspb.BinaryReader): ListOpenSourceLicensesRequest;
}

export namespace ListOpenSourceLicensesRequest {
    export type AsObject = {
    }
}

export class ListOpenSourceLicensesResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): ListOpenSourceLicensesResponse;
    clearLicensesList(): void;
    getLicensesList(): Array<string>;
    setLicensesList(value: Array<string>): ListOpenSourceLicensesResponse;
    addLicenses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOpenSourceLicensesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOpenSourceLicensesResponse): ListOpenSourceLicensesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOpenSourceLicensesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOpenSourceLicensesResponse;
    static deserializeBinaryFromReader(message: ListOpenSourceLicensesResponse, reader: jspb.BinaryReader): ListOpenSourceLicensesResponse;
}

export namespace ListOpenSourceLicensesResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        licensesList: Array<string>,
    }
}

export class SingleModelTypeResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelTypeResponse;

    hasModelType(): boolean;
    clearModelType(): void;
    getModelType(): proto_clarifai_api_resources_pb.ModelType | undefined;
    setModelType(value?: proto_clarifai_api_resources_pb.ModelType): SingleModelTypeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModelTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModelTypeResponse): SingleModelTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModelTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModelTypeResponse;
    static deserializeBinaryFromReader(message: SingleModelTypeResponse, reader: jspb.BinaryReader): SingleModelTypeResponse;
}

export namespace SingleModelTypeResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelType?: proto_clarifai_api_resources_pb.ModelType.AsObject,
    }
}

export class MultiModelTypeResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelTypeResponse;
    clearModelTypesList(): void;
    getModelTypesList(): Array<proto_clarifai_api_resources_pb.ModelType>;
    setModelTypesList(value: Array<proto_clarifai_api_resources_pb.ModelType>): MultiModelTypeResponse;
    addModelTypes(value?: proto_clarifai_api_resources_pb.ModelType, index?: number): proto_clarifai_api_resources_pb.ModelType;

    hasModelImporters(): boolean;
    clearModelImporters(): void;
    getModelImporters(): proto_clarifai_api_resources_pb.ModelTypeField | undefined;
    setModelImporters(value?: proto_clarifai_api_resources_pb.ModelTypeField): MultiModelTypeResponse;
    clearTritonCondaEnvsInfoList(): void;
    getTritonCondaEnvsInfoList(): Array<proto_clarifai_api_resources_pb.TritonCondaEnvInfo>;
    setTritonCondaEnvsInfoList(value: Array<proto_clarifai_api_resources_pb.TritonCondaEnvInfo>): MultiModelTypeResponse;
    addTritonCondaEnvsInfo(value?: proto_clarifai_api_resources_pb.TritonCondaEnvInfo, index?: number): proto_clarifai_api_resources_pb.TritonCondaEnvInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelTypeResponse): MultiModelTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelTypeResponse;
    static deserializeBinaryFromReader(message: MultiModelTypeResponse, reader: jspb.BinaryReader): MultiModelTypeResponse;
}

export namespace MultiModelTypeResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelTypesList: Array<proto_clarifai_api_resources_pb.ModelType.AsObject>,
        modelImporters?: proto_clarifai_api_resources_pb.ModelTypeField.AsObject,
        tritonCondaEnvsInfoList: Array<proto_clarifai_api_resources_pb.TritonCondaEnvInfo.AsObject>,
    }
}

export class GetModelVersionInputExampleRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModelVersionInputExampleRequest;
    getModelId(): string;
    setModelId(value: string): GetModelVersionInputExampleRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): GetModelVersionInputExampleRequest;
    getExampleId(): string;
    setExampleId(value: string): GetModelVersionInputExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModelVersionInputExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModelVersionInputExampleRequest): GetModelVersionInputExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModelVersionInputExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModelVersionInputExampleRequest;
    static deserializeBinaryFromReader(message: GetModelVersionInputExampleRequest, reader: jspb.BinaryReader): GetModelVersionInputExampleRequest;
}

export namespace GetModelVersionInputExampleRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionId: string,
        exampleId: string,
    }
}

export class ListModelVersionInputExamplesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelVersionInputExamplesRequest;
    getModelId(): string;
    setModelId(value: string): ListModelVersionInputExamplesRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): ListModelVersionInputExamplesRequest;
    getPage(): number;
    setPage(value: number): ListModelVersionInputExamplesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelVersionInputExamplesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelVersionInputExamplesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelVersionInputExamplesRequest): ListModelVersionInputExamplesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelVersionInputExamplesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelVersionInputExamplesRequest;
    static deserializeBinaryFromReader(message: ListModelVersionInputExamplesRequest, reader: jspb.BinaryReader): ListModelVersionInputExamplesRequest;
}

export namespace ListModelVersionInputExamplesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionId: string,
        page: number,
        perPage: number,
    }
}

export class SingleModelVersionInputExampleResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModelVersionInputExampleResponse;

    hasModelVersionInputExample(): boolean;
    clearModelVersionInputExample(): void;
    getModelVersionInputExample(): proto_clarifai_api_resources_pb.ModelVersionInputExample | undefined;
    setModelVersionInputExample(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample): SingleModelVersionInputExampleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModelVersionInputExampleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModelVersionInputExampleResponse): SingleModelVersionInputExampleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModelVersionInputExampleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModelVersionInputExampleResponse;
    static deserializeBinaryFromReader(message: SingleModelVersionInputExampleResponse, reader: jspb.BinaryReader): SingleModelVersionInputExampleResponse;
}

export namespace SingleModelVersionInputExampleResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelVersionInputExample?: proto_clarifai_api_resources_pb.ModelVersionInputExample.AsObject,
    }
}

export class MultiModelVersionInputExampleResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelVersionInputExampleResponse;
    clearModelVersionInputExamplesList(): void;
    getModelVersionInputExamplesList(): Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>;
    setModelVersionInputExamplesList(value: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample>): MultiModelVersionInputExampleResponse;
    addModelVersionInputExamples(value?: proto_clarifai_api_resources_pb.ModelVersionInputExample, index?: number): proto_clarifai_api_resources_pb.ModelVersionInputExample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelVersionInputExampleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelVersionInputExampleResponse): MultiModelVersionInputExampleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelVersionInputExampleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelVersionInputExampleResponse;
    static deserializeBinaryFromReader(message: MultiModelVersionInputExampleResponse, reader: jspb.BinaryReader): MultiModelVersionInputExampleResponse;
}

export namespace MultiModelVersionInputExampleResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelVersionInputExamplesList: Array<proto_clarifai_api_resources_pb.ModelVersionInputExample.AsObject>,
    }
}

export class ListModelReferencesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModelReferencesRequest;
    getModelId(): string;
    setModelId(value: string): ListModelReferencesRequest;
    getPage(): number;
    setPage(value: number): ListModelReferencesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModelReferencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelReferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelReferencesRequest): ListModelReferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelReferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelReferencesRequest;
    static deserializeBinaryFromReader(message: ListModelReferencesRequest, reader: jspb.BinaryReader): ListModelReferencesRequest;
}

export namespace ListModelReferencesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        page: number,
        perPage: number,
    }
}

export class MultiModelReferenceResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModelReferenceResponse;
    clearModelReferencesList(): void;
    getModelReferencesList(): Array<proto_clarifai_api_resources_pb.ModelReference>;
    setModelReferencesList(value: Array<proto_clarifai_api_resources_pb.ModelReference>): MultiModelReferenceResponse;
    addModelReferences(value?: proto_clarifai_api_resources_pb.ModelReference, index?: number): proto_clarifai_api_resources_pb.ModelReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModelReferenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModelReferenceResponse): MultiModelReferenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModelReferenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModelReferenceResponse;
    static deserializeBinaryFromReader(message: MultiModelReferenceResponse, reader: jspb.BinaryReader): MultiModelReferenceResponse;
}

export namespace MultiModelReferenceResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modelReferencesList: Array<proto_clarifai_api_resources_pb.ModelReference.AsObject>,
    }
}

export class MultiOutputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiOutputResponse;
    clearOutputsList(): void;
    getOutputsList(): Array<proto_clarifai_api_resources_pb.Output>;
    setOutputsList(value: Array<proto_clarifai_api_resources_pb.Output>): MultiOutputResponse;
    addOutputs(value?: proto_clarifai_api_resources_pb.Output, index?: number): proto_clarifai_api_resources_pb.Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiOutputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiOutputResponse): MultiOutputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiOutputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiOutputResponse;
    static deserializeBinaryFromReader(message: MultiOutputResponse, reader: jspb.BinaryReader): MultiOutputResponse;
}

export namespace MultiOutputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        outputsList: Array<proto_clarifai_api_resources_pb.Output.AsObject>,
    }
}

export class ListScopesRequest extends jspb.Message { 
    getKeyType(): string;
    setKeyType(value: string): ListScopesRequest;

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListScopesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScopesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScopesRequest): ListScopesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScopesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScopesRequest;
    static deserializeBinaryFromReader(message: ListScopesRequest, reader: jspb.BinaryReader): ListScopesRequest;
}

export namespace ListScopesRequest {
    export type AsObject = {
        keyType: string,
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class MyScopesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): MyScopesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyScopesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MyScopesRequest): MyScopesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyScopesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyScopesRequest;
    static deserializeBinaryFromReader(message: MyScopesRequest, reader: jspb.BinaryReader): MyScopesRequest;
}

export namespace MyScopesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class MyScopesUserRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): MyScopesUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyScopesUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MyScopesUserRequest): MyScopesUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyScopesUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyScopesUserRequest;
    static deserializeBinaryFromReader(message: MyScopesUserRequest, reader: jspb.BinaryReader): MyScopesUserRequest;
}

export namespace MyScopesUserRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class MyScopesRootRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MyScopesRootRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MyScopesRootRequest): MyScopesRootRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MyScopesRootRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MyScopesRootRequest;
    static deserializeBinaryFromReader(message: MyScopesRootRequest, reader: jspb.BinaryReader): MyScopesRootRequest;
}

export namespace MyScopesRootRequest {
    export type AsObject = {
    }
}

export class MultiScopeDepsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeDepsResponse;
    clearScopeDepsList(): void;
    getScopeDepsList(): Array<proto_clarifai_api_resources_pb.ScopeDeps>;
    setScopeDepsList(value: Array<proto_clarifai_api_resources_pb.ScopeDeps>): MultiScopeDepsResponse;
    addScopeDeps(value?: proto_clarifai_api_resources_pb.ScopeDeps, index?: number): proto_clarifai_api_resources_pb.ScopeDeps;
    clearEndpointDepsList(): void;
    getEndpointDepsList(): Array<proto_clarifai_api_resources_pb.EndpointDeps>;
    setEndpointDepsList(value: Array<proto_clarifai_api_resources_pb.EndpointDeps>): MultiScopeDepsResponse;
    addEndpointDeps(value?: proto_clarifai_api_resources_pb.EndpointDeps, index?: number): proto_clarifai_api_resources_pb.EndpointDeps;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiScopeDepsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiScopeDepsResponse): MultiScopeDepsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiScopeDepsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiScopeDepsResponse;
    static deserializeBinaryFromReader(message: MultiScopeDepsResponse, reader: jspb.BinaryReader): MultiScopeDepsResponse;
}

export namespace MultiScopeDepsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        scopeDepsList: Array<proto_clarifai_api_resources_pb.ScopeDeps.AsObject>,
        endpointDepsList: Array<proto_clarifai_api_resources_pb.EndpointDeps.AsObject>,
    }
}

export class MultiScopeResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeResponse;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): MultiScopeResponse;
    addScopes(value: string, index?: number): string;

    hasApp(): boolean;
    clearApp(): void;
    getApp(): proto_clarifai_api_resources_pb.App | undefined;
    setApp(value?: proto_clarifai_api_resources_pb.App): MultiScopeResponse;
    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): MultiScopeResponse;
    addEndpoints(value: string, index?: number): string;
    getUserFeatureFlags(): string;
    setUserFeatureFlags(value: string): MultiScopeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiScopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiScopeResponse): MultiScopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiScopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiScopeResponse;
    static deserializeBinaryFromReader(message: MultiScopeResponse, reader: jspb.BinaryReader): MultiScopeResponse;
}

export namespace MultiScopeResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        scopesList: Array<string>,
        app?: proto_clarifai_api_resources_pb.App.AsObject,
        endpointsList: Array<string>,
        userFeatureFlags: string,
    }
}

export class MultiScopeUserResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeUserResponse;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): MultiScopeUserResponse;
    addScopes(value: string, index?: number): string;
    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): MultiScopeUserResponse;
    addEndpoints(value: string, index?: number): string;
    getUserFeatureFlags(): string;
    setUserFeatureFlags(value: string): MultiScopeUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiScopeUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiScopeUserResponse): MultiScopeUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiScopeUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiScopeUserResponse;
    static deserializeBinaryFromReader(message: MultiScopeUserResponse, reader: jspb.BinaryReader): MultiScopeUserResponse;
}

export namespace MultiScopeUserResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        scopesList: Array<string>,
        endpointsList: Array<string>,
        userFeatureFlags: string,
    }
}

export class MultiScopeRootResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiScopeRootResponse;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): MultiScopeRootResponse;
    addScopes(value: string, index?: number): string;
    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): MultiScopeRootResponse;
    addEndpoints(value: string, index?: number): string;
    getUserFeatureFlags(): string;
    setUserFeatureFlags(value: string): MultiScopeRootResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiScopeRootResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiScopeRootResponse): MultiScopeRootResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiScopeRootResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiScopeRootResponse;
    static deserializeBinaryFromReader(message: MultiScopeRootResponse, reader: jspb.BinaryReader): MultiScopeRootResponse;
}

export namespace MultiScopeRootResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        scopesList: Array<string>,
        endpointsList: Array<string>,
        userFeatureFlags: string,
    }
}

export class GetSearchRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetSearchRequest;
    getId(): string;
    setId(value: string): GetSearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSearchRequest): GetSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSearchRequest;
    static deserializeBinaryFromReader(message: GetSearchRequest, reader: jspb.BinaryReader): GetSearchRequest;
}

export namespace GetSearchRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class ListSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListSearchesRequest;
    getPage(): number;
    setPage(value: number): ListSearchesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSearchesRequest): ListSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSearchesRequest;
    static deserializeBinaryFromReader(message: ListSearchesRequest, reader: jspb.BinaryReader): ListSearchesRequest;
}

export namespace ListSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class PostSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostSearchesRequest;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
    setQuery(value?: proto_clarifai_api_resources_pb.Query): PostSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSearchesRequest): PostSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSearchesRequest;
    static deserializeBinaryFromReader(message: PostSearchesRequest, reader: jspb.BinaryReader): PostSearchesRequest;
}

export namespace PostSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        query?: proto_clarifai_api_resources_pb.Query.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        pagination?: Pagination.AsObject,
    }
}

export class PatchInputsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchInputsSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchInputsSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;
    getAction(): string;
    setAction(value: string): PatchInputsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchInputsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchInputsSearchesRequest): PatchInputsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchInputsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchInputsSearchesRequest;
    static deserializeBinaryFromReader(message: PatchInputsSearchesRequest, reader: jspb.BinaryReader): PatchInputsSearchesRequest;
}

export namespace PatchInputsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        action: string,
    }
}

export class PatchAnnotationsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchAnnotationsSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;
    getAction(): string;
    setAction(value: string): PatchAnnotationsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAnnotationsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAnnotationsSearchesRequest): PatchAnnotationsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAnnotationsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAnnotationsSearchesRequest;
    static deserializeBinaryFromReader(message: PatchAnnotationsSearchesRequest, reader: jspb.BinaryReader): PatchAnnotationsSearchesRequest;
}

export namespace PatchAnnotationsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        action: string,
    }
}

export class PatchSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PatchSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;
    getAction(): string;
    setAction(value: string): PatchSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchSearchesRequest): PatchSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchSearchesRequest;
    static deserializeBinaryFromReader(message: PatchSearchesRequest, reader: jspb.BinaryReader): PatchSearchesRequest;
}

export namespace PatchSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        action: string,
    }
}

export class PostSearchesByIDRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostSearchesByIDRequest;
    getId(): string;
    setId(value: string): PostSearchesByIDRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostSearchesByIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostSearchesByIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostSearchesByIDRequest): PostSearchesByIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostSearchesByIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostSearchesByIDRequest;
    static deserializeBinaryFromReader(message: PostSearchesByIDRequest, reader: jspb.BinaryReader): PostSearchesByIDRequest;
}

export namespace PostSearchesByIDRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
        pagination?: Pagination.AsObject,
    }
}

export class DeleteSearchRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteSearchRequest;
    getId(): string;
    setId(value: string): DeleteSearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSearchRequest): DeleteSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSearchRequest;
    static deserializeBinaryFromReader(message: DeleteSearchRequest, reader: jspb.BinaryReader): DeleteSearchRequest;
}

export namespace DeleteSearchRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class PostAnnotationsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationsSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostAnnotationsSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostAnnotationsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAnnotationsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAnnotationsSearchesRequest): PostAnnotationsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAnnotationsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAnnotationsSearchesRequest;
    static deserializeBinaryFromReader(message: PostAnnotationsSearchesRequest, reader: jspb.BinaryReader): PostAnnotationsSearchesRequest;
}

export namespace PostAnnotationsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        pagination?: Pagination.AsObject,
    }
}

export class DeleteAnnotationSearchMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationSearchMetricsRequest;
    getId(): string;
    setId(value: string): DeleteAnnotationSearchMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAnnotationSearchMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAnnotationSearchMetricsRequest): DeleteAnnotationSearchMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAnnotationSearchMetricsRequest;
    static deserializeBinaryFromReader(message: DeleteAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): DeleteAnnotationSearchMetricsRequest;
}

export namespace DeleteAnnotationSearchMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class PostInputsSearchesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsSearchesRequest;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): PostInputsSearchesRequest;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): Pagination | undefined;
    setPagination(value?: Pagination): PostInputsSearchesRequest;
    getOnlyCount(): boolean;
    setOnlyCount(value: boolean): PostInputsSearchesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInputsSearchesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInputsSearchesRequest): PostInputsSearchesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInputsSearchesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInputsSearchesRequest;
    static deserializeBinaryFromReader(message: PostInputsSearchesRequest, reader: jspb.BinaryReader): PostInputsSearchesRequest;
}

export namespace PostInputsSearchesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        pagination?: Pagination.AsObject,
        onlyCount: boolean,
    }
}

export class SingleSearchResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleSearchResponse;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setSearch(value?: proto_clarifai_api_resources_pb.Search): SingleSearchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleSearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleSearchResponse): SingleSearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleSearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleSearchResponse;
    static deserializeBinaryFromReader(message: SingleSearchResponse, reader: jspb.BinaryReader): SingleSearchResponse;
}

export namespace SingleSearchResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        search?: proto_clarifai_api_resources_pb.Search.AsObject,
    }
}

export class MultiSearchResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiSearchResponse;
    getId(): string;
    setId(value: string): MultiSearchResponse;
    clearHitsList(): void;
    getHitsList(): Array<proto_clarifai_api_resources_pb.Hit>;
    setHitsList(value: Array<proto_clarifai_api_resources_pb.Hit>): MultiSearchResponse;
    addHits(value?: proto_clarifai_api_resources_pb.Hit, index?: number): proto_clarifai_api_resources_pb.Hit;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): proto_clarifai_api_resources_pb.Query | undefined;
    setQuery(value?: proto_clarifai_api_resources_pb.Query): MultiSearchResponse;
    clearSearchesList(): void;
    getSearchesList(): Array<proto_clarifai_api_resources_pb.Search>;
    setSearchesList(value: Array<proto_clarifai_api_resources_pb.Search>): MultiSearchResponse;
    addSearches(value?: proto_clarifai_api_resources_pb.Search, index?: number): proto_clarifai_api_resources_pb.Search;
    clearHitCountsList(): void;
    getHitCountsList(): Array<proto_clarifai_api_resources_pb.HitCount>;
    setHitCountsList(value: Array<proto_clarifai_api_resources_pb.HitCount>): MultiSearchResponse;
    addHitCounts(value?: proto_clarifai_api_resources_pb.HitCount, index?: number): proto_clarifai_api_resources_pb.HitCount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiSearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiSearchResponse): MultiSearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiSearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiSearchResponse;
    static deserializeBinaryFromReader(message: MultiSearchResponse, reader: jspb.BinaryReader): MultiSearchResponse;
}

export namespace MultiSearchResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        id: string,
        hitsList: Array<proto_clarifai_api_resources_pb.Hit.AsObject>,
        query?: proto_clarifai_api_resources_pb.Query.AsObject,
        searchesList: Array<proto_clarifai_api_resources_pb.Search.AsObject>,
        hitCountsList: Array<proto_clarifai_api_resources_pb.HitCount.AsObject>,
    }
}

export class PostAnnotationSearchMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationSearchMetricsRequest;
    getId(): string;
    setId(value: string): PostAnnotationSearchMetricsRequest;

    hasGroundTruth(): boolean;
    clearGroundTruth(): void;
    getGroundTruth(): proto_clarifai_api_resources_pb.Search | undefined;
    setGroundTruth(value?: proto_clarifai_api_resources_pb.Search): PostAnnotationSearchMetricsRequest;

    hasSearchToEval(): boolean;
    clearSearchToEval(): void;
    getSearchToEval(): proto_clarifai_api_resources_pb.Search | undefined;
    setSearchToEval(value?: proto_clarifai_api_resources_pb.Search): PostAnnotationSearchMetricsRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): proto_clarifai_api_resources_pb.Data | undefined;
    setData(value?: proto_clarifai_api_resources_pb.Data): PostAnnotationSearchMetricsRequest;
    getEvaluationType(): proto_clarifai_api_resources_pb.EvaluationType;
    setEvaluationType(value: proto_clarifai_api_resources_pb.EvaluationType): PostAnnotationSearchMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAnnotationSearchMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAnnotationSearchMetricsRequest): PostAnnotationSearchMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAnnotationSearchMetricsRequest;
    static deserializeBinaryFromReader(message: PostAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): PostAnnotationSearchMetricsRequest;
}

export namespace PostAnnotationSearchMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
        groundTruth?: proto_clarifai_api_resources_pb.Search.AsObject,
        searchToEval?: proto_clarifai_api_resources_pb.Search.AsObject,
        data?: proto_clarifai_api_resources_pb.Data.AsObject,
        evaluationType: proto_clarifai_api_resources_pb.EvaluationType,
    }
}

export class GetAnnotationSearchMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationSearchMetricsRequest;
    getId(): string;
    setId(value: string): GetAnnotationSearchMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnnotationSearchMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnnotationSearchMetricsRequest): GetAnnotationSearchMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnnotationSearchMetricsRequest;
    static deserializeBinaryFromReader(message: GetAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): GetAnnotationSearchMetricsRequest;
}

export namespace GetAnnotationSearchMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class ListAnnotationSearchMetricsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationSearchMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnnotationSearchMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnnotationSearchMetricsRequest): ListAnnotationSearchMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnnotationSearchMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnnotationSearchMetricsRequest;
    static deserializeBinaryFromReader(message: ListAnnotationSearchMetricsRequest, reader: jspb.BinaryReader): ListAnnotationSearchMetricsRequest;
}

export namespace ListAnnotationSearchMetricsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
    }
}

export class MultiAnnotationSearchMetricsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationSearchMetricsResponse;
    clearAnnotationSearchMetricsList(): void;
    getAnnotationSearchMetricsList(): Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>;
    setAnnotationSearchMetricsList(value: Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics>): MultiAnnotationSearchMetricsResponse;
    addAnnotationSearchMetrics(value?: proto_clarifai_api_resources_pb.AnnotationSearchMetrics, index?: number): proto_clarifai_api_resources_pb.AnnotationSearchMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiAnnotationSearchMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiAnnotationSearchMetricsResponse): MultiAnnotationSearchMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiAnnotationSearchMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiAnnotationSearchMetricsResponse;
    static deserializeBinaryFromReader(message: MultiAnnotationSearchMetricsResponse, reader: jspb.BinaryReader): MultiAnnotationSearchMetricsResponse;
}

export namespace MultiAnnotationSearchMetricsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        annotationSearchMetricsList: Array<proto_clarifai_api_resources_pb.AnnotationSearchMetrics.AsObject>,
    }
}

export class ListAnnotationFiltersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAnnotationFiltersRequest;
    getPage(): number;
    setPage(value: number): ListAnnotationFiltersRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAnnotationFiltersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAnnotationFiltersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAnnotationFiltersRequest): ListAnnotationFiltersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAnnotationFiltersRequest;
    static deserializeBinaryFromReader(message: ListAnnotationFiltersRequest, reader: jspb.BinaryReader): ListAnnotationFiltersRequest;
}

export namespace ListAnnotationFiltersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class GetAnnotationFilterRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAnnotationFilterRequest;
    getAnnotationFilterId(): string;
    setAnnotationFilterId(value: string): GetAnnotationFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAnnotationFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAnnotationFilterRequest): GetAnnotationFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAnnotationFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAnnotationFilterRequest;
    static deserializeBinaryFromReader(message: GetAnnotationFilterRequest, reader: jspb.BinaryReader): GetAnnotationFilterRequest;
}

export namespace GetAnnotationFilterRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationFilterId: string,
    }
}

export class PostAnnotationFiltersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAnnotationFiltersRequest;
    clearAnnotationFiltersList(): void;
    getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
    setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): PostAnnotationFiltersRequest;
    addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAnnotationFiltersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAnnotationFiltersRequest): PostAnnotationFiltersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAnnotationFiltersRequest;
    static deserializeBinaryFromReader(message: PostAnnotationFiltersRequest, reader: jspb.BinaryReader): PostAnnotationFiltersRequest;
}

export namespace PostAnnotationFiltersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
    }
}

export class PatchAnnotationFiltersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationFiltersRequest;
    clearAnnotationFiltersList(): void;
    getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
    setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): PatchAnnotationFiltersRequest;
    addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;
    getAction(): string;
    setAction(value: string): PatchAnnotationFiltersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAnnotationFiltersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAnnotationFiltersRequest): PatchAnnotationFiltersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAnnotationFiltersRequest;
    static deserializeBinaryFromReader(message: PatchAnnotationFiltersRequest, reader: jspb.BinaryReader): PatchAnnotationFiltersRequest;
}

export namespace PatchAnnotationFiltersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
        action: string,
    }
}

export class DeleteAnnotationFiltersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteAnnotationFiltersRequest;
    clearAnnotationFilterIdsList(): void;
    getAnnotationFilterIdsList(): Array<string>;
    setAnnotationFilterIdsList(value: Array<string>): DeleteAnnotationFiltersRequest;
    addAnnotationFilterIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAnnotationFiltersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAnnotationFiltersRequest): DeleteAnnotationFiltersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAnnotationFiltersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAnnotationFiltersRequest;
    static deserializeBinaryFromReader(message: DeleteAnnotationFiltersRequest, reader: jspb.BinaryReader): DeleteAnnotationFiltersRequest;
}

export namespace DeleteAnnotationFiltersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        annotationFilterIdsList: Array<string>,
    }
}

export class MultiAnnotationFilterResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAnnotationFilterResponse;
    clearAnnotationFiltersList(): void;
    getAnnotationFiltersList(): Array<proto_clarifai_api_resources_pb.AnnotationFilter>;
    setAnnotationFiltersList(value: Array<proto_clarifai_api_resources_pb.AnnotationFilter>): MultiAnnotationFilterResponse;
    addAnnotationFilters(value?: proto_clarifai_api_resources_pb.AnnotationFilter, index?: number): proto_clarifai_api_resources_pb.AnnotationFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiAnnotationFilterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiAnnotationFilterResponse): MultiAnnotationFilterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiAnnotationFilterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiAnnotationFilterResponse;
    static deserializeBinaryFromReader(message: MultiAnnotationFilterResponse, reader: jspb.BinaryReader): MultiAnnotationFilterResponse;
}

export namespace MultiAnnotationFilterResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        annotationFiltersList: Array<proto_clarifai_api_resources_pb.AnnotationFilter.AsObject>,
    }
}

export class SingleAnnotationFilterResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAnnotationFilterResponse;

    hasAnnotationFilter(): boolean;
    clearAnnotationFilter(): void;
    getAnnotationFilter(): proto_clarifai_api_resources_pb.AnnotationFilter | undefined;
    setAnnotationFilter(value?: proto_clarifai_api_resources_pb.AnnotationFilter): SingleAnnotationFilterResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleAnnotationFilterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleAnnotationFilterResponse): SingleAnnotationFilterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleAnnotationFilterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleAnnotationFilterResponse;
    static deserializeBinaryFromReader(message: SingleAnnotationFilterResponse, reader: jspb.BinaryReader): SingleAnnotationFilterResponse;
}

export namespace SingleAnnotationFilterResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        annotationFilter?: proto_clarifai_api_resources_pb.AnnotationFilter.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetUserRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetUserRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        additionalFieldsList: Array<string>,
    }
}

export class SingleUserResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUserResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_clarifai_api_resources_pb.User | undefined;
    setUser(value?: proto_clarifai_api_resources_pb.User): SingleUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleUserResponse): SingleUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleUserResponse;
    static deserializeBinaryFromReader(message: SingleUserResponse, reader: jspb.BinaryReader): SingleUserResponse;
}

export namespace SingleUserResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        user?: proto_clarifai_api_resources_pb.User.AsObject,
    }
}

export class PostValidatePasswordRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostValidatePasswordRequest;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): proto_clarifai_api_resources_pb.Password | undefined;
    setPassword(value?: proto_clarifai_api_resources_pb.Password): PostValidatePasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostValidatePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostValidatePasswordRequest): PostValidatePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostValidatePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostValidatePasswordRequest;
    static deserializeBinaryFromReader(message: PostValidatePasswordRequest, reader: jspb.BinaryReader): PostValidatePasswordRequest;
}

export namespace PostValidatePasswordRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        password?: proto_clarifai_api_resources_pb.Password.AsObject,
    }
}

export class SinglePasswordValidationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SinglePasswordValidationResponse;

    hasPasswordViolations(): boolean;
    clearPasswordViolations(): void;
    getPasswordViolations(): proto_clarifai_api_resources_pb.PasswordViolations | undefined;
    setPasswordViolations(value?: proto_clarifai_api_resources_pb.PasswordViolations): SinglePasswordValidationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SinglePasswordValidationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SinglePasswordValidationResponse): SinglePasswordValidationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SinglePasswordValidationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SinglePasswordValidationResponse;
    static deserializeBinaryFromReader(message: SinglePasswordValidationResponse, reader: jspb.BinaryReader): SinglePasswordValidationResponse;
}

export namespace SinglePasswordValidationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        passwordViolations?: proto_clarifai_api_resources_pb.PasswordViolations.AsObject,
    }
}

export class GetWorkflowRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): GetWorkflowRequest;
    getFavorClarifaiWorkflows(): boolean;
    setFavorClarifaiWorkflows(value: boolean): GetWorkflowRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetWorkflowRequest;
    addAdditionalFields(value: string, index?: number): string;
    getExcludeClarifaiWorkflows(): boolean;
    setExcludeClarifaiWorkflows(value: boolean): GetWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowRequest): GetWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowRequest;
    static deserializeBinaryFromReader(message: GetWorkflowRequest, reader: jspb.BinaryReader): GetWorkflowRequest;
}

export namespace GetWorkflowRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        favorClarifaiWorkflows: boolean,
        additionalFieldsList: Array<string>,
        excludeClarifaiWorkflows: boolean,
    }
}

export class ListWorkflowsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWorkflowsRequest;
    getPage(): number;
    setPage(value: number): ListWorkflowsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListWorkflowsRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListWorkflowsRequest;
    addAdditionalFields(value: string, index?: number): string;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListWorkflowsRequest;

    hasSortById(): boolean;
    clearSortById(): void;
    getSortById(): boolean;
    setSortById(value: boolean): ListWorkflowsRequest;

    hasSortByModifiedAt(): boolean;
    clearSortByModifiedAt(): void;
    getSortByModifiedAt(): boolean;
    setSortByModifiedAt(value: boolean): ListWorkflowsRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListWorkflowsRequest;

    hasSortByStarCount(): boolean;
    clearSortByStarCount(): void;
    getSortByStarCount(): boolean;
    setSortByStarCount(value: boolean): ListWorkflowsRequest;
    getFeaturedOnly(): boolean;
    setFeaturedOnly(value: boolean): ListWorkflowsRequest;
    getStarredOnly(): boolean;
    setStarredOnly(value: boolean): ListWorkflowsRequest;
    getBookmark(): boolean;
    setBookmark(value: boolean): ListWorkflowsRequest;
    getSearch(): string;
    setSearch(value: string): ListWorkflowsRequest;
    getQuery(): string;
    setQuery(value: string): ListWorkflowsRequest;
    getId(): string;
    setId(value: string): ListWorkflowsRequest;
    getSearchTerm(): string;
    setSearchTerm(value: string): ListWorkflowsRequest;

    getSortByCase(): ListWorkflowsRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorkflowsRequest): ListWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorkflowsRequest;
    static deserializeBinaryFromReader(message: ListWorkflowsRequest, reader: jspb.BinaryReader): ListWorkflowsRequest;
}

export namespace ListWorkflowsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        sortAscending: boolean,
        sortById: boolean,
        sortByModifiedAt: boolean,
        sortByCreatedAt: boolean,
        sortByStarCount: boolean,
        featuredOnly: boolean,
        starredOnly: boolean,
        bookmark: boolean,
        search: string,
        query: string,
        id: string,
        searchTerm: string,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_ID = 6,
        SORT_BY_MODIFIED_AT = 7,
        SORT_BY_CREATED_AT = 13,
        SORT_BY_STAR_COUNT = 14,
    }

}

export class PostWorkflowsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowsRequest;
    clearWorkflowsList(): void;
    getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
    setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): PostWorkflowsRequest;
    addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowsRequest): PostWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowsRequest;
    static deserializeBinaryFromReader(message: PostWorkflowsRequest, reader: jspb.BinaryReader): PostWorkflowsRequest;
}

export namespace PostWorkflowsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
    }
}

export class PatchWorkflowsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowsRequest;
    clearWorkflowsList(): void;
    getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
    setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): PatchWorkflowsRequest;
    addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;
    getAction(): string;
    setAction(value: string): PatchWorkflowsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchWorkflowsRequest): PatchWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchWorkflowsRequest;
    static deserializeBinaryFromReader(message: PatchWorkflowsRequest, reader: jspb.BinaryReader): PatchWorkflowsRequest;
}

export namespace PatchWorkflowsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
        action: string,
    }
}

export class PatchWorkflowIdsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowIdsRequest;
    clearIdsList(): void;
    getIdsList(): Array<IdUpdateSource>;
    setIdsList(value: Array<IdUpdateSource>): PatchWorkflowIdsRequest;
    addIds(value?: IdUpdateSource, index?: number): IdUpdateSource;
    getAction(): string;
    setAction(value: string): PatchWorkflowIdsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchWorkflowIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchWorkflowIdsRequest): PatchWorkflowIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchWorkflowIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchWorkflowIdsRequest;
    static deserializeBinaryFromReader(message: PatchWorkflowIdsRequest, reader: jspb.BinaryReader): PatchWorkflowIdsRequest;
}

export namespace PatchWorkflowIdsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<IdUpdateSource.AsObject>,
        action: string,
    }
}

export class DeleteWorkflowRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): DeleteWorkflowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWorkflowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWorkflowRequest): DeleteWorkflowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWorkflowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWorkflowRequest;
    static deserializeBinaryFromReader(message: DeleteWorkflowRequest, reader: jspb.BinaryReader): DeleteWorkflowRequest;
}

export namespace DeleteWorkflowRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
    }
}

export class DeleteWorkflowsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteWorkflowsRequest;
    addIds(value: string, index?: number): string;
    getDeleteAll(): boolean;
    setDeleteAll(value: boolean): DeleteWorkflowsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWorkflowsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWorkflowsRequest): DeleteWorkflowsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWorkflowsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWorkflowsRequest;
    static deserializeBinaryFromReader(message: DeleteWorkflowsRequest, reader: jspb.BinaryReader): DeleteWorkflowsRequest;
}

export namespace DeleteWorkflowsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
        deleteAll: boolean,
    }
}

export class SingleWorkflowResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowResponse;

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
    setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): SingleWorkflowResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleWorkflowResponse): SingleWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleWorkflowResponse;
    static deserializeBinaryFromReader(message: SingleWorkflowResponse, reader: jspb.BinaryReader): SingleWorkflowResponse;
}

export namespace SingleWorkflowResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workflow?: proto_clarifai_api_resources_pb.Workflow.AsObject,
    }
}

export class MultiWorkflowResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowResponse;
    clearWorkflowsList(): void;
    getWorkflowsList(): Array<proto_clarifai_api_resources_pb.Workflow>;
    setWorkflowsList(value: Array<proto_clarifai_api_resources_pb.Workflow>): MultiWorkflowResponse;
    addWorkflows(value?: proto_clarifai_api_resources_pb.Workflow, index?: number): proto_clarifai_api_resources_pb.Workflow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiWorkflowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiWorkflowResponse): MultiWorkflowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiWorkflowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiWorkflowResponse;
    static deserializeBinaryFromReader(message: MultiWorkflowResponse, reader: jspb.BinaryReader): MultiWorkflowResponse;
}

export namespace MultiWorkflowResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workflowsList: Array<proto_clarifai_api_resources_pb.Workflow.AsObject>,
    }
}

export class PostWorkflowResultsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowResultsRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): PostWorkflowResultsRequest;
    getVersionId(): string;
    setVersionId(value: string): PostWorkflowResultsRequest;
    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsRequest;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;

    hasOutputConfig(): boolean;
    clearOutputConfig(): void;
    getOutputConfig(): proto_clarifai_api_resources_pb.OutputConfig | undefined;
    setOutputConfig(value?: proto_clarifai_api_resources_pb.OutputConfig): PostWorkflowResultsRequest;
    getFavorClarifaiWorkflows(): boolean;
    setFavorClarifaiWorkflows(value: boolean): PostWorkflowResultsRequest;

    hasWorkflowState(): boolean;
    clearWorkflowState(): void;
    getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
    setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): PostWorkflowResultsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowResultsRequest): PostWorkflowResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsRequest;
    static deserializeBinaryFromReader(message: PostWorkflowResultsRequest, reader: jspb.BinaryReader): PostWorkflowResultsRequest;
}

export namespace PostWorkflowResultsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        versionId: string,
        inputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        outputConfig?: proto_clarifai_api_resources_pb.OutputConfig.AsObject,
        favorClarifaiWorkflows: boolean,
        workflowState?: proto_clarifai_api_resources_pb.WorkflowState.AsObject,
    }
}

export class PostWorkflowResultsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostWorkflowResultsResponse;

    hasWorkflow(): boolean;
    clearWorkflow(): void;
    getWorkflow(): proto_clarifai_api_resources_pb.Workflow | undefined;
    setWorkflow(value?: proto_clarifai_api_resources_pb.Workflow): PostWorkflowResultsResponse;
    clearResultsList(): void;
    getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResult>;
    setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResult>): PostWorkflowResultsResponse;
    addResults(value?: proto_clarifai_api_resources_pb.WorkflowResult, index?: number): proto_clarifai_api_resources_pb.WorkflowResult;

    hasWorkflowState(): boolean;
    clearWorkflowState(): void;
    getWorkflowState(): proto_clarifai_api_resources_pb.WorkflowState | undefined;
    setWorkflowState(value?: proto_clarifai_api_resources_pb.WorkflowState): PostWorkflowResultsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowResultsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowResultsResponse): PostWorkflowResultsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowResultsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsResponse;
    static deserializeBinaryFromReader(message: PostWorkflowResultsResponse, reader: jspb.BinaryReader): PostWorkflowResultsResponse;
}

export namespace PostWorkflowResultsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workflow?: proto_clarifai_api_resources_pb.Workflow.AsObject,
        resultsList: Array<proto_clarifai_api_resources_pb.WorkflowResult.AsObject>,
        workflowState?: proto_clarifai_api_resources_pb.WorkflowState.AsObject,
    }
}

export class PostWorkflowResultsSimilarityRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostWorkflowResultsSimilarityRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): PostWorkflowResultsSimilarityRequest;
    getVersionId(): string;
    setVersionId(value: string): PostWorkflowResultsSimilarityRequest;
    getModelVersionId(): string;
    setModelVersionId(value: string): PostWorkflowResultsSimilarityRequest;
    clearProbeInputsList(): void;
    getProbeInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setProbeInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsSimilarityRequest;
    addProbeInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;
    clearPoolInputsList(): void;
    getPoolInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setPoolInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): PostWorkflowResultsSimilarityRequest;
    addPoolInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;
    getFavorClarifaiWorkflows(): boolean;
    setFavorClarifaiWorkflows(value: boolean): PostWorkflowResultsSimilarityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowResultsSimilarityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowResultsSimilarityRequest): PostWorkflowResultsSimilarityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowResultsSimilarityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsSimilarityRequest;
    static deserializeBinaryFromReader(message: PostWorkflowResultsSimilarityRequest, reader: jspb.BinaryReader): PostWorkflowResultsSimilarityRequest;
}

export namespace PostWorkflowResultsSimilarityRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        versionId: string,
        modelVersionId: string,
        probeInputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        poolInputsList: Array<proto_clarifai_api_resources_pb.Input.AsObject>,
        favorClarifaiWorkflows: boolean,
    }
}

export class PostWorkflowResultsSimilarityResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): PostWorkflowResultsSimilarityResponse;
    clearResultsList(): void;
    getResultsList(): Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>;
    setResultsList(value: Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity>): PostWorkflowResultsSimilarityResponse;
    addResults(value?: proto_clarifai_api_resources_pb.WorkflowResultsSimilarity, index?: number): proto_clarifai_api_resources_pb.WorkflowResultsSimilarity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostWorkflowResultsSimilarityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostWorkflowResultsSimilarityResponse): PostWorkflowResultsSimilarityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostWorkflowResultsSimilarityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostWorkflowResultsSimilarityResponse;
    static deserializeBinaryFromReader(message: PostWorkflowResultsSimilarityResponse, reader: jspb.BinaryReader): PostWorkflowResultsSimilarityResponse;
}

export namespace PostWorkflowResultsSimilarityResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        resultsList: Array<proto_clarifai_api_resources_pb.WorkflowResultsSimilarity.AsObject>,
    }
}

export class ListWorkflowVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListWorkflowVersionsRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): ListWorkflowVersionsRequest;
    getPage(): number;
    setPage(value: number): ListWorkflowVersionsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListWorkflowVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWorkflowVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWorkflowVersionsRequest): ListWorkflowVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWorkflowVersionsRequest;
    static deserializeBinaryFromReader(message: ListWorkflowVersionsRequest, reader: jspb.BinaryReader): ListWorkflowVersionsRequest;
}

export namespace ListWorkflowVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        page: number,
        perPage: number,
    }
}

export class GetWorkflowVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetWorkflowVersionRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): GetWorkflowVersionRequest;
    getWorkflowVersionId(): string;
    setWorkflowVersionId(value: string): GetWorkflowVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWorkflowVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWorkflowVersionRequest): GetWorkflowVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWorkflowVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWorkflowVersionRequest;
    static deserializeBinaryFromReader(message: GetWorkflowVersionRequest, reader: jspb.BinaryReader): GetWorkflowVersionRequest;
}

export namespace GetWorkflowVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        workflowVersionId: string,
    }
}

export class DeleteWorkflowVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteWorkflowVersionsRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): DeleteWorkflowVersionsRequest;
    clearWorkflowVersionIdsList(): void;
    getWorkflowVersionIdsList(): Array<string>;
    setWorkflowVersionIdsList(value: Array<string>): DeleteWorkflowVersionsRequest;
    addWorkflowVersionIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWorkflowVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWorkflowVersionsRequest): DeleteWorkflowVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWorkflowVersionsRequest;
    static deserializeBinaryFromReader(message: DeleteWorkflowVersionsRequest, reader: jspb.BinaryReader): DeleteWorkflowVersionsRequest;
}

export namespace DeleteWorkflowVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        workflowVersionIdsList: Array<string>,
    }
}

export class PatchWorkflowVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchWorkflowVersionsRequest;
    getWorkflowId(): string;
    setWorkflowId(value: string): PatchWorkflowVersionsRequest;
    clearWorkflowVersionsList(): void;
    getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
    setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): PatchWorkflowVersionsRequest;
    addWorkflowVersions(value?: proto_clarifai_api_resources_pb.WorkflowVersion, index?: number): proto_clarifai_api_resources_pb.WorkflowVersion;
    getAction(): string;
    setAction(value: string): PatchWorkflowVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchWorkflowVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchWorkflowVersionsRequest): PatchWorkflowVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchWorkflowVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchWorkflowVersionsRequest;
    static deserializeBinaryFromReader(message: PatchWorkflowVersionsRequest, reader: jspb.BinaryReader): PatchWorkflowVersionsRequest;
}

export namespace PatchWorkflowVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        workflowId: string,
        workflowVersionsList: Array<proto_clarifai_api_resources_pb.WorkflowVersion.AsObject>,
        action: string,
    }
}

export class MultiWorkflowVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiWorkflowVersionResponse;
    clearWorkflowVersionsList(): void;
    getWorkflowVersionsList(): Array<proto_clarifai_api_resources_pb.WorkflowVersion>;
    setWorkflowVersionsList(value: Array<proto_clarifai_api_resources_pb.WorkflowVersion>): MultiWorkflowVersionResponse;
    addWorkflowVersions(value?: proto_clarifai_api_resources_pb.WorkflowVersion, index?: number): proto_clarifai_api_resources_pb.WorkflowVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiWorkflowVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiWorkflowVersionResponse): MultiWorkflowVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiWorkflowVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiWorkflowVersionResponse;
    static deserializeBinaryFromReader(message: MultiWorkflowVersionResponse, reader: jspb.BinaryReader): MultiWorkflowVersionResponse;
}

export namespace MultiWorkflowVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workflowVersionsList: Array<proto_clarifai_api_resources_pb.WorkflowVersion.AsObject>,
    }
}

export class SingleWorkflowVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleWorkflowVersionResponse;

    hasWorkflowVersion(): boolean;
    clearWorkflowVersion(): void;
    getWorkflowVersion(): proto_clarifai_api_resources_pb.WorkflowVersion | undefined;
    setWorkflowVersion(value?: proto_clarifai_api_resources_pb.WorkflowVersion): SingleWorkflowVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleWorkflowVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleWorkflowVersionResponse): SingleWorkflowVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleWorkflowVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleWorkflowVersionResponse;
    static deserializeBinaryFromReader(message: SingleWorkflowVersionResponse, reader: jspb.BinaryReader): SingleWorkflowVersionResponse;
}

export namespace SingleWorkflowVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        workflowVersion?: proto_clarifai_api_resources_pb.WorkflowVersion.AsObject,
    }
}

export class PostAppDuplicationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostAppDuplicationsRequest;
    clearAppDuplicationsList(): void;
    getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
    setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): PostAppDuplicationsRequest;
    addAppDuplications(value?: proto_clarifai_api_resources_pb.AppDuplication, index?: number): proto_clarifai_api_resources_pb.AppDuplication;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostAppDuplicationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostAppDuplicationsRequest): PostAppDuplicationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostAppDuplicationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostAppDuplicationsRequest;
    static deserializeBinaryFromReader(message: PostAppDuplicationsRequest, reader: jspb.BinaryReader): PostAppDuplicationsRequest;
}

export namespace PostAppDuplicationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        appDuplicationsList: Array<proto_clarifai_api_resources_pb.AppDuplication.AsObject>,
    }
}

export class GetAppDuplicationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAppDuplicationRequest;
    getAppDuplicationId(): string;
    setAppDuplicationId(value: string): GetAppDuplicationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAppDuplicationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAppDuplicationRequest): GetAppDuplicationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAppDuplicationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAppDuplicationRequest;
    static deserializeBinaryFromReader(message: GetAppDuplicationRequest, reader: jspb.BinaryReader): GetAppDuplicationRequest;
}

export namespace GetAppDuplicationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        appDuplicationId: string,
    }
}

export class ListAppDuplicationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListAppDuplicationsRequest;
    getPage(): number;
    setPage(value: number): ListAppDuplicationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListAppDuplicationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAppDuplicationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAppDuplicationsRequest): ListAppDuplicationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAppDuplicationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAppDuplicationsRequest;
    static deserializeBinaryFromReader(message: ListAppDuplicationsRequest, reader: jspb.BinaryReader): ListAppDuplicationsRequest;
}

export namespace ListAppDuplicationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class MultiAppDuplicationsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiAppDuplicationsResponse;
    clearAppDuplicationsList(): void;
    getAppDuplicationsList(): Array<proto_clarifai_api_resources_pb.AppDuplication>;
    setAppDuplicationsList(value: Array<proto_clarifai_api_resources_pb.AppDuplication>): MultiAppDuplicationsResponse;
    addAppDuplications(value?: proto_clarifai_api_resources_pb.AppDuplication, index?: number): proto_clarifai_api_resources_pb.AppDuplication;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiAppDuplicationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiAppDuplicationsResponse): MultiAppDuplicationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiAppDuplicationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiAppDuplicationsResponse;
    static deserializeBinaryFromReader(message: MultiAppDuplicationsResponse, reader: jspb.BinaryReader): MultiAppDuplicationsResponse;
}

export namespace MultiAppDuplicationsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        appDuplicationsList: Array<proto_clarifai_api_resources_pb.AppDuplication.AsObject>,
    }
}

export class SingleAppDuplicationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleAppDuplicationResponse;

    hasAppDuplication(): boolean;
    clearAppDuplication(): void;
    getAppDuplication(): proto_clarifai_api_resources_pb.AppDuplication | undefined;
    setAppDuplication(value?: proto_clarifai_api_resources_pb.AppDuplication): SingleAppDuplicationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleAppDuplicationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleAppDuplicationResponse): SingleAppDuplicationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleAppDuplicationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleAppDuplicationResponse;
    static deserializeBinaryFromReader(message: SingleAppDuplicationResponse, reader: jspb.BinaryReader): SingleAppDuplicationResponse;
}

export namespace SingleAppDuplicationResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        appDuplication?: proto_clarifai_api_resources_pb.AppDuplication.AsObject,
    }
}

export class PostTasksRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTasksRequest;
    clearTasksList(): void;
    getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
    setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): PostTasksRequest;
    addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostTasksRequest): PostTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostTasksRequest;
    static deserializeBinaryFromReader(message: PostTasksRequest, reader: jspb.BinaryReader): PostTasksRequest;
}

export namespace PostTasksRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
    }
}

export class GetTaskRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetTaskRequest;
    getTaskId(): string;
    setTaskId(value: string): GetTaskRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetTaskRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
    static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        taskId: string,
        additionalFieldsList: Array<string>,
    }
}

export class ListTasksRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTasksRequest;
    getPage(): number;
    setPage(value: number): ListTasksRequest;
    getPerPage(): number;
    setPerPage(value: number): ListTasksRequest;
    clearWorkerUserIdsList(): void;
    getWorkerUserIdsList(): Array<string>;
    setWorkerUserIdsList(value: Array<string>): ListTasksRequest;
    addWorkerUserIds(value: string, index?: number): string;
    clearReviewUserIdsList(): void;
    getReviewUserIdsList(): Array<string>;
    setReviewUserIdsList(value: Array<string>): ListTasksRequest;
    addReviewUserIds(value: string, index?: number): string;
    clearLabelOrderIdsList(): void;
    getLabelOrderIdsList(): Array<string>;
    setLabelOrderIdsList(value: Array<string>): ListTasksRequest;
    addLabelOrderIds(value: string, index?: number): string;
    getIncludingLabelOrderTasks(): boolean;
    setIncludingLabelOrderTasks(value: boolean): ListTasksRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListTasksRequest;
    addAdditionalFields(value: string, index?: number): string;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): ListTasksRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
    static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        workerUserIdsList: Array<string>,
        reviewUserIdsList: Array<string>,
        labelOrderIdsList: Array<string>,
        includingLabelOrderTasks: boolean,
        additionalFieldsList: Array<string>,
        idsList: Array<string>,
    }
}

export class PatchTasksRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchTasksRequest;
    clearTasksList(): void;
    getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
    setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): PatchTasksRequest;
    addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;
    getAction(): string;
    setAction(value: string): PatchTasksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchTasksRequest): PatchTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchTasksRequest;
    static deserializeBinaryFromReader(message: PatchTasksRequest, reader: jspb.BinaryReader): PatchTasksRequest;
}

export namespace PatchTasksRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
        action: string,
    }
}

export class DeleteTasksRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteTasksRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteTasksRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTasksRequest): DeleteTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTasksRequest;
    static deserializeBinaryFromReader(message: DeleteTasksRequest, reader: jspb.BinaryReader): DeleteTasksRequest;
}

export namespace DeleteTasksRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class MultiTaskResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTaskResponse;
    clearTasksList(): void;
    getTasksList(): Array<proto_clarifai_api_resources_pb.Task>;
    setTasksList(value: Array<proto_clarifai_api_resources_pb.Task>): MultiTaskResponse;
    addTasks(value?: proto_clarifai_api_resources_pb.Task, index?: number): proto_clarifai_api_resources_pb.Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiTaskResponse): MultiTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiTaskResponse;
    static deserializeBinaryFromReader(message: MultiTaskResponse, reader: jspb.BinaryReader): MultiTaskResponse;
}

export namespace MultiTaskResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        tasksList: Array<proto_clarifai_api_resources_pb.Task.AsObject>,
    }
}

export class SingleTaskResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleTaskResponse;

    hasTask(): boolean;
    clearTask(): void;
    getTask(): proto_clarifai_api_resources_pb.Task | undefined;
    setTask(value?: proto_clarifai_api_resources_pb.Task): SingleTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleTaskResponse): SingleTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleTaskResponse;
    static deserializeBinaryFromReader(message: SingleTaskResponse, reader: jspb.BinaryReader): SingleTaskResponse;
}

export namespace SingleTaskResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        task?: proto_clarifai_api_resources_pb.Task.AsObject,
    }
}

export class GetTaskCountRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetTaskCountRequest;
    getTaskId(): string;
    setTaskId(value: string): GetTaskCountRequest;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): GetTaskCountRequest;
    addUserIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskCountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskCountRequest): GetTaskCountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskCountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskCountRequest;
    static deserializeBinaryFromReader(message: GetTaskCountRequest, reader: jspb.BinaryReader): GetTaskCountRequest;
}

export namespace GetTaskCountRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        taskId: string,
        userIdsList: Array<string>,
    }
}

export class SingleTaskCountResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleTaskCountResponse;
    getAppId(): string;
    setAppId(value: string): SingleTaskCountResponse;
    getTaskId(): string;
    setTaskId(value: string): SingleTaskCountResponse;
    clearCountsList(): void;
    getCountsList(): Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>;
    setCountsList(value: Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser>): SingleTaskCountResponse;
    addCounts(value?: proto_clarifai_api_resources_pb.TaskStatusCountPerUser, index?: number): proto_clarifai_api_resources_pb.TaskStatusCountPerUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleTaskCountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleTaskCountResponse): SingleTaskCountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleTaskCountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleTaskCountResponse;
    static deserializeBinaryFromReader(message: SingleTaskCountResponse, reader: jspb.BinaryReader): SingleTaskCountResponse;
}

export namespace SingleTaskCountResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        appId: string,
        taskId: string,
        countsList: Array<proto_clarifai_api_resources_pb.TaskStatusCountPerUser.AsObject>,
    }
}

export class PostLabelOrdersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostLabelOrdersRequest;
    clearLabelOrdersList(): void;
    getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
    setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): PostLabelOrdersRequest;
    addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostLabelOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostLabelOrdersRequest): PostLabelOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostLabelOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostLabelOrdersRequest;
    static deserializeBinaryFromReader(message: PostLabelOrdersRequest, reader: jspb.BinaryReader): PostLabelOrdersRequest;
}

export namespace PostLabelOrdersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
    }
}

export class GetLabelOrderRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetLabelOrderRequest;
    getLabelOrderId(): string;
    setLabelOrderId(value: string): GetLabelOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLabelOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLabelOrderRequest): GetLabelOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLabelOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLabelOrderRequest;
    static deserializeBinaryFromReader(message: GetLabelOrderRequest, reader: jspb.BinaryReader): GetLabelOrderRequest;
}

export namespace GetLabelOrderRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        labelOrderId: string,
    }
}

export class ListLabelOrdersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListLabelOrdersRequest;
    getPage(): number;
    setPage(value: number): ListLabelOrdersRequest;
    getPerPage(): number;
    setPerPage(value: number): ListLabelOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLabelOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLabelOrdersRequest): ListLabelOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLabelOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLabelOrdersRequest;
    static deserializeBinaryFromReader(message: ListLabelOrdersRequest, reader: jspb.BinaryReader): ListLabelOrdersRequest;
}

export namespace ListLabelOrdersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class PatchLabelOrdersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchLabelOrdersRequest;
    clearLabelOrdersList(): void;
    getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
    setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): PatchLabelOrdersRequest;
    addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;
    getAction(): string;
    setAction(value: string): PatchLabelOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchLabelOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchLabelOrdersRequest): PatchLabelOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchLabelOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchLabelOrdersRequest;
    static deserializeBinaryFromReader(message: PatchLabelOrdersRequest, reader: jspb.BinaryReader): PatchLabelOrdersRequest;
}

export namespace PatchLabelOrdersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
        action: string,
    }
}

export class DeleteLabelOrdersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteLabelOrdersRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteLabelOrdersRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLabelOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLabelOrdersRequest): DeleteLabelOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLabelOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLabelOrdersRequest;
    static deserializeBinaryFromReader(message: DeleteLabelOrdersRequest, reader: jspb.BinaryReader): DeleteLabelOrdersRequest;
}

export namespace DeleteLabelOrdersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class MultiLabelOrderResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiLabelOrderResponse;
    clearLabelOrdersList(): void;
    getLabelOrdersList(): Array<proto_clarifai_api_resources_pb.LabelOrder>;
    setLabelOrdersList(value: Array<proto_clarifai_api_resources_pb.LabelOrder>): MultiLabelOrderResponse;
    addLabelOrders(value?: proto_clarifai_api_resources_pb.LabelOrder, index?: number): proto_clarifai_api_resources_pb.LabelOrder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiLabelOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiLabelOrderResponse): MultiLabelOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiLabelOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiLabelOrderResponse;
    static deserializeBinaryFromReader(message: MultiLabelOrderResponse, reader: jspb.BinaryReader): MultiLabelOrderResponse;
}

export namespace MultiLabelOrderResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        labelOrdersList: Array<proto_clarifai_api_resources_pb.LabelOrder.AsObject>,
    }
}

export class SingleLabelOrderResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleLabelOrderResponse;

    hasLabelOrder(): boolean;
    clearLabelOrder(): void;
    getLabelOrder(): proto_clarifai_api_resources_pb.LabelOrder | undefined;
    setLabelOrder(value?: proto_clarifai_api_resources_pb.LabelOrder): SingleLabelOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleLabelOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleLabelOrderResponse): SingleLabelOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleLabelOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleLabelOrderResponse;
    static deserializeBinaryFromReader(message: SingleLabelOrderResponse, reader: jspb.BinaryReader): SingleLabelOrderResponse;
}

export namespace SingleLabelOrderResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        labelOrder?: proto_clarifai_api_resources_pb.LabelOrder.AsObject,
    }
}

export class PostCollectorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostCollectorsRequest;
    clearCollectorsList(): void;
    getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
    setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): PostCollectorsRequest;
    addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostCollectorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostCollectorsRequest): PostCollectorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostCollectorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostCollectorsRequest;
    static deserializeBinaryFromReader(message: PostCollectorsRequest, reader: jspb.BinaryReader): PostCollectorsRequest;
}

export namespace PostCollectorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
    }
}

export class PatchCollectorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchCollectorsRequest;
    clearCollectorsList(): void;
    getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
    setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): PatchCollectorsRequest;
    addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;
    getAction(): string;
    setAction(value: string): PatchCollectorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchCollectorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchCollectorsRequest): PatchCollectorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchCollectorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchCollectorsRequest;
    static deserializeBinaryFromReader(message: PatchCollectorsRequest, reader: jspb.BinaryReader): PatchCollectorsRequest;
}

export namespace PatchCollectorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
        action: string,
    }
}

export class DeleteCollectorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteCollectorsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteCollectorsRequest;
    addIds(value: string, index?: number): string;
    getDeleteAll(): boolean;
    setDeleteAll(value: boolean): DeleteCollectorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCollectorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCollectorsRequest): DeleteCollectorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCollectorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCollectorsRequest;
    static deserializeBinaryFromReader(message: DeleteCollectorsRequest, reader: jspb.BinaryReader): DeleteCollectorsRequest;
}

export namespace DeleteCollectorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
        deleteAll: boolean,
    }
}

export class GetCollectorRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetCollectorRequest;
    getCollectorId(): string;
    setCollectorId(value: string): GetCollectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectorRequest): GetCollectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectorRequest;
    static deserializeBinaryFromReader(message: GetCollectorRequest, reader: jspb.BinaryReader): GetCollectorRequest;
}

export namespace GetCollectorRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        collectorId: string,
    }
}

export class ListCollectorsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListCollectorsRequest;
    getPage(): number;
    setPage(value: number): ListCollectorsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListCollectorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCollectorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCollectorsRequest): ListCollectorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCollectorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCollectorsRequest;
    static deserializeBinaryFromReader(message: ListCollectorsRequest, reader: jspb.BinaryReader): ListCollectorsRequest;
}

export namespace ListCollectorsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class MultiCollectorResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiCollectorResponse;
    clearCollectorsList(): void;
    getCollectorsList(): Array<proto_clarifai_api_resources_pb.Collector>;
    setCollectorsList(value: Array<proto_clarifai_api_resources_pb.Collector>): MultiCollectorResponse;
    addCollectors(value?: proto_clarifai_api_resources_pb.Collector, index?: number): proto_clarifai_api_resources_pb.Collector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiCollectorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiCollectorResponse): MultiCollectorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiCollectorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiCollectorResponse;
    static deserializeBinaryFromReader(message: MultiCollectorResponse, reader: jspb.BinaryReader): MultiCollectorResponse;
}

export namespace MultiCollectorResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        collectorsList: Array<proto_clarifai_api_resources_pb.Collector.AsObject>,
    }
}

export class SingleCollectorResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleCollectorResponse;

    hasCollector(): boolean;
    clearCollector(): void;
    getCollector(): proto_clarifai_api_resources_pb.Collector | undefined;
    setCollector(value?: proto_clarifai_api_resources_pb.Collector): SingleCollectorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleCollectorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleCollectorResponse): SingleCollectorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleCollectorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleCollectorResponse;
    static deserializeBinaryFromReader(message: SingleCollectorResponse, reader: jspb.BinaryReader): SingleCollectorResponse;
}

export namespace SingleCollectorResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        collector?: proto_clarifai_api_resources_pb.Collector.AsObject,
    }
}

export class PostStatValuesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostStatValuesRequest;
    clearStatValuesList(): void;
    getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
    setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): PostStatValuesRequest;
    addStatValues(value?: proto_clarifai_api_resources_pb.StatValue, index?: number): proto_clarifai_api_resources_pb.StatValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostStatValuesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostStatValuesRequest): PostStatValuesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostStatValuesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostStatValuesRequest;
    static deserializeBinaryFromReader(message: PostStatValuesRequest, reader: jspb.BinaryReader): PostStatValuesRequest;
}

export namespace PostStatValuesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        statValuesList: Array<proto_clarifai_api_resources_pb.StatValue.AsObject>,
    }
}

export class MultiStatValueResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatValueResponse;
    clearStatValuesList(): void;
    getStatValuesList(): Array<proto_clarifai_api_resources_pb.StatValue>;
    setStatValuesList(value: Array<proto_clarifai_api_resources_pb.StatValue>): MultiStatValueResponse;
    addStatValues(value?: proto_clarifai_api_resources_pb.StatValue, index?: number): proto_clarifai_api_resources_pb.StatValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiStatValueResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiStatValueResponse): MultiStatValueResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiStatValueResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiStatValueResponse;
    static deserializeBinaryFromReader(message: MultiStatValueResponse, reader: jspb.BinaryReader): MultiStatValueResponse;
}

export namespace MultiStatValueResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        statValuesList: Array<proto_clarifai_api_resources_pb.StatValue.AsObject>,
    }
}

export class PostStatValuesAggregateRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostStatValuesAggregateRequest;
    clearStatValueAggregateQueriesList(): void;
    getStatValueAggregateQueriesList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>;
    setStatValueAggregateQueriesList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery>): PostStatValuesAggregateRequest;
    addStatValueAggregateQueries(value?: proto_clarifai_api_resources_pb.StatValueAggregateQuery, index?: number): proto_clarifai_api_resources_pb.StatValueAggregateQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostStatValuesAggregateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostStatValuesAggregateRequest): PostStatValuesAggregateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostStatValuesAggregateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostStatValuesAggregateRequest;
    static deserializeBinaryFromReader(message: PostStatValuesAggregateRequest, reader: jspb.BinaryReader): PostStatValuesAggregateRequest;
}

export namespace PostStatValuesAggregateRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        statValueAggregateQueriesList: Array<proto_clarifai_api_resources_pb.StatValueAggregateQuery.AsObject>,
    }
}

export class MultiStatValueAggregateResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiStatValueAggregateResponse;
    clearStatValueAggregateResultsList(): void;
    getStatValueAggregateResultsList(): Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>;
    setStatValueAggregateResultsList(value: Array<proto_clarifai_api_resources_pb.StatValueAggregateResult>): MultiStatValueAggregateResponse;
    addStatValueAggregateResults(value?: proto_clarifai_api_resources_pb.StatValueAggregateResult, index?: number): proto_clarifai_api_resources_pb.StatValueAggregateResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiStatValueAggregateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiStatValueAggregateResponse): MultiStatValueAggregateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiStatValueAggregateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiStatValueAggregateResponse;
    static deserializeBinaryFromReader(message: MultiStatValueAggregateResponse, reader: jspb.BinaryReader): MultiStatValueAggregateResponse;
}

export namespace MultiStatValueAggregateResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        statValueAggregateResultsList: Array<proto_clarifai_api_resources_pb.StatValueAggregateResult.AsObject>,
    }
}

export class PostTrendingMetricsViewRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostTrendingMetricsViewRequest;
    getViewType(): string;
    setViewType(value: string): PostTrendingMetricsViewRequest;
    getObjectId(): string;
    setObjectId(value: string): PostTrendingMetricsViewRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostTrendingMetricsViewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostTrendingMetricsViewRequest): PostTrendingMetricsViewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostTrendingMetricsViewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostTrendingMetricsViewRequest;
    static deserializeBinaryFromReader(message: PostTrendingMetricsViewRequest, reader: jspb.BinaryReader): PostTrendingMetricsViewRequest;
}

export namespace PostTrendingMetricsViewRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        viewType: string,
        objectId: string,
    }
}

export class ListTrendingMetricsViewsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListTrendingMetricsViewsRequest;
    getViewType(): string;
    setViewType(value: string): ListTrendingMetricsViewsRequest;
    getPage(): number;
    setPage(value: number): ListTrendingMetricsViewsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListTrendingMetricsViewsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTrendingMetricsViewsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTrendingMetricsViewsRequest): ListTrendingMetricsViewsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTrendingMetricsViewsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTrendingMetricsViewsRequest;
    static deserializeBinaryFromReader(message: ListTrendingMetricsViewsRequest, reader: jspb.BinaryReader): ListTrendingMetricsViewsRequest;
}

export namespace ListTrendingMetricsViewsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        viewType: string,
        page: number,
        perPage: number,
    }
}

export class MultiTrendingMetricsViewResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTrendingMetricsViewResponse;
    clearMetricsList(): void;
    getMetricsList(): Array<proto_clarifai_api_resources_pb.TrendingMetric>;
    setMetricsList(value: Array<proto_clarifai_api_resources_pb.TrendingMetric>): MultiTrendingMetricsViewResponse;
    addMetrics(value?: proto_clarifai_api_resources_pb.TrendingMetric, index?: number): proto_clarifai_api_resources_pb.TrendingMetric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiTrendingMetricsViewResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiTrendingMetricsViewResponse): MultiTrendingMetricsViewResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiTrendingMetricsViewResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiTrendingMetricsViewResponse;
    static deserializeBinaryFromReader(message: MultiTrendingMetricsViewResponse, reader: jspb.BinaryReader): MultiTrendingMetricsViewResponse;
}

export namespace MultiTrendingMetricsViewResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        metricsList: Array<proto_clarifai_api_resources_pb.TrendingMetric.AsObject>,
    }
}

export class GetModuleRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModuleRequest;
    getModuleId(): string;
    setModuleId(value: string): GetModuleRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): GetModuleRequest;
    addAdditionalFields(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModuleRequest): GetModuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModuleRequest;
    static deserializeBinaryFromReader(message: GetModuleRequest, reader: jspb.BinaryReader): GetModuleRequest;
}

export namespace GetModuleRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        additionalFieldsList: Array<string>,
    }
}

export class ListModulesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModulesRequest;
    getPage(): number;
    setPage(value: number): ListModulesRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModulesRequest;
    clearAdditionalFieldsList(): void;
    getAdditionalFieldsList(): Array<string>;
    setAdditionalFieldsList(value: Array<string>): ListModulesRequest;
    addAdditionalFields(value: string, index?: number): string;
    getSortAscending(): boolean;
    setSortAscending(value: boolean): ListModulesRequest;

    hasSortByCreatedAt(): boolean;
    clearSortByCreatedAt(): void;
    getSortByCreatedAt(): boolean;
    setSortByCreatedAt(value: boolean): ListModulesRequest;

    hasSortByStarCount(): boolean;
    clearSortByStarCount(): void;
    getSortByStarCount(): boolean;
    setSortByStarCount(value: boolean): ListModulesRequest;

    hasSortByModifiedAt(): boolean;
    clearSortByModifiedAt(): void;
    getSortByModifiedAt(): boolean;
    setSortByModifiedAt(value: boolean): ListModulesRequest;

    hasSortById(): boolean;
    clearSortById(): void;
    getSortById(): boolean;
    setSortById(value: boolean): ListModulesRequest;
    getStarredOnly(): boolean;
    setStarredOnly(value: boolean): ListModulesRequest;
    getBookmark(): boolean;
    setBookmark(value: boolean): ListModulesRequest;
    getSearch(): string;
    setSearch(value: string): ListModulesRequest;
    getName(): string;
    setName(value: string): ListModulesRequest;
    getFilterByUserId(): boolean;
    setFilterByUserId(value: boolean): ListModulesRequest;

    getSortByCase(): ListModulesRequest.SortByCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModulesRequest): ListModulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModulesRequest;
    static deserializeBinaryFromReader(message: ListModulesRequest, reader: jspb.BinaryReader): ListModulesRequest;
}

export namespace ListModulesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
        additionalFieldsList: Array<string>,
        sortAscending: boolean,
        sortByCreatedAt: boolean,
        sortByStarCount: boolean,
        sortByModifiedAt: boolean,
        sortById: boolean,
        starredOnly: boolean,
        bookmark: boolean,
        search: string,
        name: string,
        filterByUserId: boolean,
    }

    export enum SortByCase {
        SORT_BY_NOT_SET = 0,
        SORT_BY_CREATED_AT = 7,
        SORT_BY_STAR_COUNT = 8,
        SORT_BY_MODIFIED_AT = 9,
        SORT_BY_ID = 11,
    }

}

export class PostModulesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModulesRequest;
    clearModulesList(): void;
    getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
    setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): PostModulesRequest;
    addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModulesRequest): PostModulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModulesRequest;
    static deserializeBinaryFromReader(message: PostModulesRequest, reader: jspb.BinaryReader): PostModulesRequest;
}

export namespace PostModulesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
    }
}

export class PatchModulesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModulesRequest;
    clearModulesList(): void;
    getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
    setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): PatchModulesRequest;
    addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;
    getAction(): string;
    setAction(value: string): PatchModulesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModulesRequest): PatchModulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModulesRequest;
    static deserializeBinaryFromReader(message: PatchModulesRequest, reader: jspb.BinaryReader): PatchModulesRequest;
}

export namespace PatchModulesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
        action: string,
    }
}

export class DeleteModulesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModulesRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteModulesRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteModulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteModulesRequest): DeleteModulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteModulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteModulesRequest;
    static deserializeBinaryFromReader(message: DeleteModulesRequest, reader: jspb.BinaryReader): DeleteModulesRequest;
}

export namespace DeleteModulesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class SingleModuleResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModuleResponse;

    hasModule(): boolean;
    clearModule(): void;
    getModule(): proto_clarifai_api_resources_pb.Module | undefined;
    setModule(value?: proto_clarifai_api_resources_pb.Module): SingleModuleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModuleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModuleResponse): SingleModuleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModuleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModuleResponse;
    static deserializeBinaryFromReader(message: SingleModuleResponse, reader: jspb.BinaryReader): SingleModuleResponse;
}

export namespace SingleModuleResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        module?: proto_clarifai_api_resources_pb.Module.AsObject,
    }
}

export class MultiModuleResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModuleResponse;
    clearModulesList(): void;
    getModulesList(): Array<proto_clarifai_api_resources_pb.Module>;
    setModulesList(value: Array<proto_clarifai_api_resources_pb.Module>): MultiModuleResponse;
    addModules(value?: proto_clarifai_api_resources_pb.Module, index?: number): proto_clarifai_api_resources_pb.Module;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModuleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModuleResponse): MultiModuleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModuleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModuleResponse;
    static deserializeBinaryFromReader(message: MultiModuleResponse, reader: jspb.BinaryReader): MultiModuleResponse;
}

export namespace MultiModuleResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        modulesList: Array<proto_clarifai_api_resources_pb.Module.AsObject>,
    }
}

export class GetModuleVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModuleVersionRequest;
    getModuleId(): string;
    setModuleId(value: string): GetModuleVersionRequest;
    getModuleVersionId(): string;
    setModuleVersionId(value: string): GetModuleVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModuleVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModuleVersionRequest): GetModuleVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModuleVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModuleVersionRequest;
    static deserializeBinaryFromReader(message: GetModuleVersionRequest, reader: jspb.BinaryReader): GetModuleVersionRequest;
}

export namespace GetModuleVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        moduleVersionId: string,
    }
}

export class ListModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListModuleVersionsRequest;
    getModuleId(): string;
    setModuleId(value: string): ListModuleVersionsRequest;
    getPage(): number;
    setPage(value: number): ListModuleVersionsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListModuleVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModuleVersionsRequest): ListModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModuleVersionsRequest;
    static deserializeBinaryFromReader(message: ListModuleVersionsRequest, reader: jspb.BinaryReader): ListModuleVersionsRequest;
}

export namespace ListModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        page: number,
        perPage: number,
    }
}

export class PostModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModuleVersionsRequest;
    getModuleId(): string;
    setModuleId(value: string): PostModuleVersionsRequest;
    clearModuleVersionsList(): void;
    getModuleVersionsList(): Array<proto_clarifai_api_resources_pb.ModuleVersion>;
    setModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.ModuleVersion>): PostModuleVersionsRequest;
    addModuleVersions(value?: proto_clarifai_api_resources_pb.ModuleVersion, index?: number): proto_clarifai_api_resources_pb.ModuleVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModuleVersionsRequest): PostModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModuleVersionsRequest;
    static deserializeBinaryFromReader(message: PostModuleVersionsRequest, reader: jspb.BinaryReader): PostModuleVersionsRequest;
}

export namespace PostModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        moduleVersionsList: Array<proto_clarifai_api_resources_pb.ModuleVersion.AsObject>,
    }
}

export class PatchModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchModuleVersionsRequest;
    getModuleId(): string;
    setModuleId(value: string): PatchModuleVersionsRequest;
    clearModuleVersionsList(): void;
    getModuleVersionsList(): Array<proto_clarifai_api_resources_pb.ModuleVersion>;
    setModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.ModuleVersion>): PatchModuleVersionsRequest;
    addModuleVersions(value?: proto_clarifai_api_resources_pb.ModuleVersion, index?: number): proto_clarifai_api_resources_pb.ModuleVersion;
    getAction(): string;
    setAction(value: string): PatchModuleVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchModuleVersionsRequest): PatchModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchModuleVersionsRequest;
    static deserializeBinaryFromReader(message: PatchModuleVersionsRequest, reader: jspb.BinaryReader): PatchModuleVersionsRequest;
}

export namespace PatchModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        moduleVersionsList: Array<proto_clarifai_api_resources_pb.ModuleVersion.AsObject>,
        action: string,
    }
}

export class DeleteModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteModuleVersionsRequest;
    getModuleId(): string;
    setModuleId(value: string): DeleteModuleVersionsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteModuleVersionsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteModuleVersionsRequest): DeleteModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteModuleVersionsRequest;
    static deserializeBinaryFromReader(message: DeleteModuleVersionsRequest, reader: jspb.BinaryReader): DeleteModuleVersionsRequest;
}

export namespace DeleteModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        idsList: Array<string>,
    }
}

export class GetModuleVersionUsageCountRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetModuleVersionUsageCountRequest;
    getModuleId(): string;
    setModuleId(value: string): GetModuleVersionUsageCountRequest;
    getModuleVersionId(): string;
    setModuleVersionId(value: string): GetModuleVersionUsageCountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetModuleVersionUsageCountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetModuleVersionUsageCountRequest): GetModuleVersionUsageCountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetModuleVersionUsageCountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetModuleVersionUsageCountRequest;
    static deserializeBinaryFromReader(message: GetModuleVersionUsageCountRequest, reader: jspb.BinaryReader): GetModuleVersionUsageCountRequest;
}

export namespace GetModuleVersionUsageCountRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        moduleId: string,
        moduleVersionId: string,
    }
}

export class SingleModuleVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModuleVersionResponse;

    hasModuleVersion(): boolean;
    clearModuleVersion(): void;
    getModuleVersion(): proto_clarifai_api_resources_pb.ModuleVersion | undefined;
    setModuleVersion(value?: proto_clarifai_api_resources_pb.ModuleVersion): SingleModuleVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModuleVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModuleVersionResponse): SingleModuleVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModuleVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModuleVersionResponse;
    static deserializeBinaryFromReader(message: SingleModuleVersionResponse, reader: jspb.BinaryReader): SingleModuleVersionResponse;
}

export namespace SingleModuleVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        moduleVersion?: proto_clarifai_api_resources_pb.ModuleVersion.AsObject,
    }
}

export class MultiModuleVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiModuleVersionResponse;
    clearModuleVersionsList(): void;
    getModuleVersionsList(): Array<proto_clarifai_api_resources_pb.ModuleVersion>;
    setModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.ModuleVersion>): MultiModuleVersionResponse;
    addModuleVersions(value?: proto_clarifai_api_resources_pb.ModuleVersion, index?: number): proto_clarifai_api_resources_pb.ModuleVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiModuleVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiModuleVersionResponse): MultiModuleVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiModuleVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiModuleVersionResponse;
    static deserializeBinaryFromReader(message: MultiModuleVersionResponse, reader: jspb.BinaryReader): MultiModuleVersionResponse;
}

export namespace MultiModuleVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        moduleVersionsList: Array<proto_clarifai_api_resources_pb.ModuleVersion.AsObject>,
    }
}

export class SingleModuleVersionUsageCountResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleModuleVersionUsageCountResponse;
    getUsageCount(): number;
    setUsageCount(value: number): SingleModuleVersionUsageCountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleModuleVersionUsageCountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleModuleVersionUsageCountResponse): SingleModuleVersionUsageCountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleModuleVersionUsageCountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleModuleVersionUsageCountResponse;
    static deserializeBinaryFromReader(message: SingleModuleVersionUsageCountResponse, reader: jspb.BinaryReader): SingleModuleVersionUsageCountResponse;
}

export namespace SingleModuleVersionUsageCountResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        usageCount: number,
    }
}

export class GetInstalledModuleVersionRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInstalledModuleVersionRequest;
    getInstalledModuleVersionId(): string;
    setInstalledModuleVersionId(value: string): GetInstalledModuleVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInstalledModuleVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInstalledModuleVersionRequest): GetInstalledModuleVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInstalledModuleVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInstalledModuleVersionRequest;
    static deserializeBinaryFromReader(message: GetInstalledModuleVersionRequest, reader: jspb.BinaryReader): GetInstalledModuleVersionRequest;
}

export namespace GetInstalledModuleVersionRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        installedModuleVersionId: string,
    }
}

export class ListInstalledModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInstalledModuleVersionsRequest;
    getPage(): number;
    setPage(value: number): ListInstalledModuleVersionsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListInstalledModuleVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstalledModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstalledModuleVersionsRequest): ListInstalledModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstalledModuleVersionsRequest;
    static deserializeBinaryFromReader(message: ListInstalledModuleVersionsRequest, reader: jspb.BinaryReader): ListInstalledModuleVersionsRequest;
}

export namespace ListInstalledModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class PostInstalledModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInstalledModuleVersionsRequest;
    clearInstalledModuleVersionsList(): void;
    getInstalledModuleVersionsList(): Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>;
    setInstalledModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>): PostInstalledModuleVersionsRequest;
    addInstalledModuleVersions(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion, index?: number): proto_clarifai_api_resources_pb.InstalledModuleVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInstalledModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInstalledModuleVersionsRequest): PostInstalledModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInstalledModuleVersionsRequest;
    static deserializeBinaryFromReader(message: PostInstalledModuleVersionsRequest, reader: jspb.BinaryReader): PostInstalledModuleVersionsRequest;
}

export namespace PostInstalledModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        installedModuleVersionsList: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject>,
    }
}

export class PostInstalledModuleVersionsKeyRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInstalledModuleVersionsKeyRequest;
    getInstalledModuleVersionId(): string;
    setInstalledModuleVersionId(value: string): PostInstalledModuleVersionsKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInstalledModuleVersionsKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInstalledModuleVersionsKeyRequest): PostInstalledModuleVersionsKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInstalledModuleVersionsKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInstalledModuleVersionsKeyRequest;
    static deserializeBinaryFromReader(message: PostInstalledModuleVersionsKeyRequest, reader: jspb.BinaryReader): PostInstalledModuleVersionsKeyRequest;
}

export namespace PostInstalledModuleVersionsKeyRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        installedModuleVersionId: string,
    }
}

export class DeleteInstalledModuleVersionsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteInstalledModuleVersionsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteInstalledModuleVersionsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstalledModuleVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstalledModuleVersionsRequest): DeleteInstalledModuleVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstalledModuleVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstalledModuleVersionsRequest;
    static deserializeBinaryFromReader(message: DeleteInstalledModuleVersionsRequest, reader: jspb.BinaryReader): DeleteInstalledModuleVersionsRequest;
}

export namespace DeleteInstalledModuleVersionsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class SingleInstalledModuleVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInstalledModuleVersionResponse;

    hasInstalledModuleVersion(): boolean;
    clearInstalledModuleVersion(): void;
    getInstalledModuleVersion(): proto_clarifai_api_resources_pb.InstalledModuleVersion | undefined;
    setInstalledModuleVersion(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion): SingleInstalledModuleVersionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleInstalledModuleVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleInstalledModuleVersionResponse): SingleInstalledModuleVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleInstalledModuleVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleInstalledModuleVersionResponse;
    static deserializeBinaryFromReader(message: SingleInstalledModuleVersionResponse, reader: jspb.BinaryReader): SingleInstalledModuleVersionResponse;
}

export namespace SingleInstalledModuleVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        installedModuleVersion?: proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject,
    }
}

export class MultiInstalledModuleVersionResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInstalledModuleVersionResponse;
    clearInstalledModuleVersionsList(): void;
    getInstalledModuleVersionsList(): Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>;
    setInstalledModuleVersionsList(value: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion>): MultiInstalledModuleVersionResponse;
    addInstalledModuleVersions(value?: proto_clarifai_api_resources_pb.InstalledModuleVersion, index?: number): proto_clarifai_api_resources_pb.InstalledModuleVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiInstalledModuleVersionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiInstalledModuleVersionResponse): MultiInstalledModuleVersionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiInstalledModuleVersionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiInstalledModuleVersionResponse;
    static deserializeBinaryFromReader(message: MultiInstalledModuleVersionResponse, reader: jspb.BinaryReader): MultiInstalledModuleVersionResponse;
}

export namespace MultiInstalledModuleVersionResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        installedModuleVersionsList: Array<proto_clarifai_api_resources_pb.InstalledModuleVersion.AsObject>,
    }
}

export class ListNextTaskAssignmentsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListNextTaskAssignmentsRequest;
    getTaskId(): string;
    setTaskId(value: string): ListNextTaskAssignmentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNextTaskAssignmentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNextTaskAssignmentsRequest): ListNextTaskAssignmentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNextTaskAssignmentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNextTaskAssignmentsRequest;
    static deserializeBinaryFromReader(message: ListNextTaskAssignmentsRequest, reader: jspb.BinaryReader): ListNextTaskAssignmentsRequest;
}

export namespace ListNextTaskAssignmentsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        taskId: string,
    }
}

export class PostBulkOperationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostBulkOperationsRequest;
    clearBulkOperationsList(): void;
    getBulkOperationsList(): Array<proto_clarifai_api_resources_pb.BulkOperation>;
    setBulkOperationsList(value: Array<proto_clarifai_api_resources_pb.BulkOperation>): PostBulkOperationsRequest;
    addBulkOperations(value?: proto_clarifai_api_resources_pb.BulkOperation, index?: number): proto_clarifai_api_resources_pb.BulkOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostBulkOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostBulkOperationsRequest): PostBulkOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostBulkOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostBulkOperationsRequest;
    static deserializeBinaryFromReader(message: PostBulkOperationsRequest, reader: jspb.BinaryReader): PostBulkOperationsRequest;
}

export namespace PostBulkOperationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        bulkOperationsList: Array<proto_clarifai_api_resources_pb.BulkOperation.AsObject>,
    }
}

export class ListBulkOperationsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListBulkOperationsRequest;
    getPage(): number;
    setPage(value: number): ListBulkOperationsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListBulkOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBulkOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBulkOperationsRequest): ListBulkOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBulkOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBulkOperationsRequest;
    static deserializeBinaryFromReader(message: ListBulkOperationsRequest, reader: jspb.BinaryReader): ListBulkOperationsRequest;
}

export namespace ListBulkOperationsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class GetBulkOperationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetBulkOperationRequest;
    getId(): string;
    setId(value: string): GetBulkOperationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBulkOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBulkOperationRequest): GetBulkOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBulkOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBulkOperationRequest;
    static deserializeBinaryFromReader(message: GetBulkOperationRequest, reader: jspb.BinaryReader): GetBulkOperationRequest;
}

export namespace GetBulkOperationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class CancelBulkOperationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): CancelBulkOperationRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): CancelBulkOperationRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelBulkOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelBulkOperationRequest): CancelBulkOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelBulkOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelBulkOperationRequest;
    static deserializeBinaryFromReader(message: CancelBulkOperationRequest, reader: jspb.BinaryReader): CancelBulkOperationRequest;
}

export namespace CancelBulkOperationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class DeleteBulkOperationRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteBulkOperationRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteBulkOperationRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBulkOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBulkOperationRequest): DeleteBulkOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBulkOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBulkOperationRequest;
    static deserializeBinaryFromReader(message: DeleteBulkOperationRequest, reader: jspb.BinaryReader): DeleteBulkOperationRequest;
}

export namespace DeleteBulkOperationRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class SingleBulkOperationsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleBulkOperationsResponse;

    hasBulkOperation(): boolean;
    clearBulkOperation(): void;
    getBulkOperation(): proto_clarifai_api_resources_pb.BulkOperation | undefined;
    setBulkOperation(value?: proto_clarifai_api_resources_pb.BulkOperation): SingleBulkOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleBulkOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleBulkOperationsResponse): SingleBulkOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleBulkOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleBulkOperationsResponse;
    static deserializeBinaryFromReader(message: SingleBulkOperationsResponse, reader: jspb.BinaryReader): SingleBulkOperationsResponse;
}

export namespace SingleBulkOperationsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        bulkOperation?: proto_clarifai_api_resources_pb.BulkOperation.AsObject,
    }
}

export class MultiBulkOperationsResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiBulkOperationsResponse;
    clearBulkOperationList(): void;
    getBulkOperationList(): Array<proto_clarifai_api_resources_pb.BulkOperation>;
    setBulkOperationList(value: Array<proto_clarifai_api_resources_pb.BulkOperation>): MultiBulkOperationsResponse;
    addBulkOperation(value?: proto_clarifai_api_resources_pb.BulkOperation, index?: number): proto_clarifai_api_resources_pb.BulkOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiBulkOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiBulkOperationsResponse): MultiBulkOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiBulkOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiBulkOperationsResponse;
    static deserializeBinaryFromReader(message: MultiBulkOperationsResponse, reader: jspb.BinaryReader): MultiBulkOperationsResponse;
}

export namespace MultiBulkOperationsResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        bulkOperationList: Array<proto_clarifai_api_resources_pb.BulkOperation.AsObject>,
    }
}

export class PutTaskAssignmentsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutTaskAssignmentsRequest;
    getTaskId(): string;
    setTaskId(value: string): PutTaskAssignmentsRequest;
    getInputId(): string;
    setInputId(value: string): PutTaskAssignmentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutTaskAssignmentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutTaskAssignmentsRequest): PutTaskAssignmentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutTaskAssignmentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutTaskAssignmentsRequest;
    static deserializeBinaryFromReader(message: PutTaskAssignmentsRequest, reader: jspb.BinaryReader): PutTaskAssignmentsRequest;
}

export namespace PutTaskAssignmentsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        taskId: string,
        inputId: string,
    }
}

export class ListInputsAddJobsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInputsAddJobsRequest;
    getPage(): number;
    setPage(value: number): ListInputsAddJobsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListInputsAddJobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInputsAddJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInputsAddJobsRequest): ListInputsAddJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInputsAddJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInputsAddJobsRequest;
    static deserializeBinaryFromReader(message: ListInputsAddJobsRequest, reader: jspb.BinaryReader): ListInputsAddJobsRequest;
}

export namespace ListInputsAddJobsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class GetInputsAddJobRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputsAddJobRequest;
    getId(): string;
    setId(value: string): GetInputsAddJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInputsAddJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInputsAddJobRequest): GetInputsAddJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInputsAddJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInputsAddJobRequest;
    static deserializeBinaryFromReader(message: GetInputsAddJobRequest, reader: jspb.BinaryReader): GetInputsAddJobRequest;
}

export namespace GetInputsAddJobRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class CancelInputsAddJobRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): CancelInputsAddJobRequest;
    getId(): string;
    setId(value: string): CancelInputsAddJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelInputsAddJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelInputsAddJobRequest): CancelInputsAddJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelInputsAddJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelInputsAddJobRequest;
    static deserializeBinaryFromReader(message: CancelInputsAddJobRequest, reader: jspb.BinaryReader): CancelInputsAddJobRequest;
}

export namespace CancelInputsAddJobRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        id: string,
    }
}

export class MultiInputsAddJobResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputsAddJobResponse;
    clearInputsAddJobsList(): void;
    getInputsAddJobsList(): Array<proto_clarifai_api_resources_pb.InputsAddJob>;
    setInputsAddJobsList(value: Array<proto_clarifai_api_resources_pb.InputsAddJob>): MultiInputsAddJobResponse;
    addInputsAddJobs(value?: proto_clarifai_api_resources_pb.InputsAddJob, index?: number): proto_clarifai_api_resources_pb.InputsAddJob;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiInputsAddJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiInputsAddJobResponse): MultiInputsAddJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiInputsAddJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiInputsAddJobResponse;
    static deserializeBinaryFromReader(message: MultiInputsAddJobResponse, reader: jspb.BinaryReader): MultiInputsAddJobResponse;
}

export namespace MultiInputsAddJobResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        inputsAddJobsList: Array<proto_clarifai_api_resources_pb.InputsAddJob.AsObject>,
    }
}

export class SingleInputsAddJobResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputsAddJobResponse;

    hasInputsAddJob(): boolean;
    clearInputsAddJob(): void;
    getInputsAddJob(): proto_clarifai_api_resources_pb.InputsAddJob | undefined;
    setInputsAddJob(value?: proto_clarifai_api_resources_pb.InputsAddJob): SingleInputsAddJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleInputsAddJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleInputsAddJobResponse): SingleInputsAddJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleInputsAddJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleInputsAddJobResponse;
    static deserializeBinaryFromReader(message: SingleInputsAddJobResponse, reader: jspb.BinaryReader): SingleInputsAddJobResponse;
}

export namespace SingleInputsAddJobResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        inputsAddJob?: proto_clarifai_api_resources_pb.InputsAddJob.AsObject,
    }
}

export class PostUploadsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostUploadsRequest;
    clearUploadsList(): void;
    getUploadsList(): Array<proto_clarifai_api_resources_pb.Upload>;
    setUploadsList(value: Array<proto_clarifai_api_resources_pb.Upload>): PostUploadsRequest;
    addUploads(value?: proto_clarifai_api_resources_pb.Upload, index?: number): proto_clarifai_api_resources_pb.Upload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostUploadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostUploadsRequest): PostUploadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostUploadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostUploadsRequest;
    static deserializeBinaryFromReader(message: PostUploadsRequest, reader: jspb.BinaryReader): PostUploadsRequest;
}

export namespace PostUploadsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        uploadsList: Array<proto_clarifai_api_resources_pb.Upload.AsObject>,
    }
}

export class DeleteUploadsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteUploadsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteUploadsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUploadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUploadsRequest): DeleteUploadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUploadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUploadsRequest;
    static deserializeBinaryFromReader(message: DeleteUploadsRequest, reader: jspb.BinaryReader): DeleteUploadsRequest;
}

export namespace DeleteUploadsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class ListUploadsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListUploadsRequest;
    getPage(): number;
    setPage(value: number): ListUploadsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListUploadsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUploadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUploadsRequest): ListUploadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUploadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUploadsRequest;
    static deserializeBinaryFromReader(message: ListUploadsRequest, reader: jspb.BinaryReader): ListUploadsRequest;
}

export namespace ListUploadsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class GetUploadRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetUploadRequest;
    getUploadId(): string;
    setUploadId(value: string): GetUploadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUploadRequest): GetUploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUploadRequest;
    static deserializeBinaryFromReader(message: GetUploadRequest, reader: jspb.BinaryReader): GetUploadRequest;
}

export namespace GetUploadRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        uploadId: string,
    }
}

export class SingleUploadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleUploadResponse;

    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_clarifai_api_resources_pb.Upload | undefined;
    setUpload(value?: proto_clarifai_api_resources_pb.Upload): SingleUploadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleUploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleUploadResponse): SingleUploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleUploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleUploadResponse;
    static deserializeBinaryFromReader(message: SingleUploadResponse, reader: jspb.BinaryReader): SingleUploadResponse;
}

export namespace SingleUploadResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        upload?: proto_clarifai_api_resources_pb.Upload.AsObject,
    }
}

export class MultiUploadResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiUploadResponse;
    clearUploadsList(): void;
    getUploadsList(): Array<proto_clarifai_api_resources_pb.Upload>;
    setUploadsList(value: Array<proto_clarifai_api_resources_pb.Upload>): MultiUploadResponse;
    addUploads(value?: proto_clarifai_api_resources_pb.Upload, index?: number): proto_clarifai_api_resources_pb.Upload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiUploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiUploadResponse): MultiUploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiUploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiUploadResponse;
    static deserializeBinaryFromReader(message: MultiUploadResponse, reader: jspb.BinaryReader): MultiUploadResponse;
}

export namespace MultiUploadResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        uploadsList: Array<proto_clarifai_api_resources_pb.Upload.AsObject>,
    }
}

export class PutUploadContentPartsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PutUploadContentPartsRequest;
    getUploadId(): string;
    setUploadId(value: string): PutUploadContentPartsRequest;
    clearContentPartsList(): void;
    getContentPartsList(): Array<proto_clarifai_api_resources_pb.UploadContentPart>;
    setContentPartsList(value: Array<proto_clarifai_api_resources_pb.UploadContentPart>): PutUploadContentPartsRequest;
    addContentParts(value?: proto_clarifai_api_resources_pb.UploadContentPart, index?: number): proto_clarifai_api_resources_pb.UploadContentPart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutUploadContentPartsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutUploadContentPartsRequest): PutUploadContentPartsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutUploadContentPartsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutUploadContentPartsRequest;
    static deserializeBinaryFromReader(message: PutUploadContentPartsRequest, reader: jspb.BinaryReader): PutUploadContentPartsRequest;
}

export namespace PutUploadContentPartsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        uploadId: string,
        contentPartsList: Array<proto_clarifai_api_resources_pb.UploadContentPart.AsObject>,
    }
}

export class PostInputsDataSourcesRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsDataSourcesRequest;
    clearDataSourcesList(): void;
    getDataSourcesList(): Array<proto_clarifai_api_resources_pb.InputsDataSource>;
    setDataSourcesList(value: Array<proto_clarifai_api_resources_pb.InputsDataSource>): PostInputsDataSourcesRequest;
    addDataSources(value?: proto_clarifai_api_resources_pb.InputsDataSource, index?: number): proto_clarifai_api_resources_pb.InputsDataSource;
    getCallBackUrl(): string;
    setCallBackUrl(value: string): PostInputsDataSourcesRequest;
    getAppPat(): string;
    setAppPat(value: string): PostInputsDataSourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInputsDataSourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInputsDataSourcesRequest): PostInputsDataSourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInputsDataSourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInputsDataSourcesRequest;
    static deserializeBinaryFromReader(message: PostInputsDataSourcesRequest, reader: jspb.BinaryReader): PostInputsDataSourcesRequest;
}

export namespace PostInputsDataSourcesRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        dataSourcesList: Array<proto_clarifai_api_resources_pb.InputsDataSource.AsObject>,
        callBackUrl: string,
        appPat: string,
    }
}

export class GetInputsExtractionJobRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetInputsExtractionJobRequest;
    getInputsExtractionJobId(): string;
    setInputsExtractionJobId(value: string): GetInputsExtractionJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInputsExtractionJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInputsExtractionJobRequest): GetInputsExtractionJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInputsExtractionJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInputsExtractionJobRequest;
    static deserializeBinaryFromReader(message: GetInputsExtractionJobRequest, reader: jspb.BinaryReader): GetInputsExtractionJobRequest;
}

export namespace GetInputsExtractionJobRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputsExtractionJobId: string,
    }
}

export class ListInputsExtractionJobsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListInputsExtractionJobsRequest;
    getPage(): number;
    setPage(value: number): ListInputsExtractionJobsRequest;
    getPerPage(): number;
    setPerPage(value: number): ListInputsExtractionJobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInputsExtractionJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInputsExtractionJobsRequest): ListInputsExtractionJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInputsExtractionJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInputsExtractionJobsRequest;
    static deserializeBinaryFromReader(message: ListInputsExtractionJobsRequest, reader: jspb.BinaryReader): ListInputsExtractionJobsRequest;
}

export namespace ListInputsExtractionJobsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class SingleInputsExtractionJobResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleInputsExtractionJobResponse;

    hasInputsExtractionJob(): boolean;
    clearInputsExtractionJob(): void;
    getInputsExtractionJob(): proto_clarifai_api_resources_pb.InputsExtractionJob | undefined;
    setInputsExtractionJob(value?: proto_clarifai_api_resources_pb.InputsExtractionJob): SingleInputsExtractionJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleInputsExtractionJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleInputsExtractionJobResponse): SingleInputsExtractionJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleInputsExtractionJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleInputsExtractionJobResponse;
    static deserializeBinaryFromReader(message: SingleInputsExtractionJobResponse, reader: jspb.BinaryReader): SingleInputsExtractionJobResponse;
}

export namespace SingleInputsExtractionJobResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        inputsExtractionJob?: proto_clarifai_api_resources_pb.InputsExtractionJob.AsObject,
    }
}

export class MultiInputsExtractionJobResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputsExtractionJobResponse;
    clearInputsExtractionJobsList(): void;
    getInputsExtractionJobsList(): Array<proto_clarifai_api_resources_pb.InputsExtractionJob>;
    setInputsExtractionJobsList(value: Array<proto_clarifai_api_resources_pb.InputsExtractionJob>): MultiInputsExtractionJobResponse;
    addInputsExtractionJobs(value?: proto_clarifai_api_resources_pb.InputsExtractionJob, index?: number): proto_clarifai_api_resources_pb.InputsExtractionJob;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiInputsExtractionJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiInputsExtractionJobResponse): MultiInputsExtractionJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiInputsExtractionJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiInputsExtractionJobResponse;
    static deserializeBinaryFromReader(message: MultiInputsExtractionJobResponse, reader: jspb.BinaryReader): MultiInputsExtractionJobResponse;
}

export namespace MultiInputsExtractionJobResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        inputsExtractionJobsList: Array<proto_clarifai_api_resources_pb.InputsExtractionJob.AsObject>,
    }
}

export class CancelInputsExtractionJobsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): CancelInputsExtractionJobsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): CancelInputsExtractionJobsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelInputsExtractionJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelInputsExtractionJobsRequest): CancelInputsExtractionJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelInputsExtractionJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelInputsExtractionJobsRequest;
    static deserializeBinaryFromReader(message: CancelInputsExtractionJobsRequest, reader: jspb.BinaryReader): CancelInputsExtractionJobsRequest;
}

export namespace CancelInputsExtractionJobsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class PostInputsUploadsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostInputsUploadsRequest;
    clearInputsUploadsList(): void;
    getInputsUploadsList(): Array<proto_clarifai_api_resources_pb.InputsUpload>;
    setInputsUploadsList(value: Array<proto_clarifai_api_resources_pb.InputsUpload>): PostInputsUploadsRequest;
    addInputsUploads(value?: proto_clarifai_api_resources_pb.InputsUpload, index?: number): proto_clarifai_api_resources_pb.InputsUpload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInputsUploadsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostInputsUploadsRequest): PostInputsUploadsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInputsUploadsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInputsUploadsRequest;
    static deserializeBinaryFromReader(message: PostInputsUploadsRequest, reader: jspb.BinaryReader): PostInputsUploadsRequest;
}

export namespace PostInputsUploadsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        inputsUploadsList: Array<proto_clarifai_api_resources_pb.InputsUpload.AsObject>,
    }
}

export class GetRunnerRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetRunnerRequest;
    getRunnerId(): string;
    setRunnerId(value: string): GetRunnerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRunnerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRunnerRequest): GetRunnerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRunnerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRunnerRequest;
    static deserializeBinaryFromReader(message: GetRunnerRequest, reader: jspb.BinaryReader): GetRunnerRequest;
}

export namespace GetRunnerRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        runnerId: string,
    }
}

export class ListRunnersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListRunnersRequest;
    getPage(): number;
    setPage(value: number): ListRunnersRequest;
    getPerPage(): number;
    setPerPage(value: number): ListRunnersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRunnersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRunnersRequest): ListRunnersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRunnersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRunnersRequest;
    static deserializeBinaryFromReader(message: ListRunnersRequest, reader: jspb.BinaryReader): ListRunnersRequest;
}

export namespace ListRunnersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        page: number,
        perPage: number,
    }
}

export class PostRunnersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostRunnersRequest;
    clearRunnersList(): void;
    getRunnersList(): Array<proto_clarifai_api_resources_pb.Runner>;
    setRunnersList(value: Array<proto_clarifai_api_resources_pb.Runner>): PostRunnersRequest;
    addRunners(value?: proto_clarifai_api_resources_pb.Runner, index?: number): proto_clarifai_api_resources_pb.Runner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRunnersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostRunnersRequest): PostRunnersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRunnersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRunnersRequest;
    static deserializeBinaryFromReader(message: PostRunnersRequest, reader: jspb.BinaryReader): PostRunnersRequest;
}

export namespace PostRunnersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        runnersList: Array<proto_clarifai_api_resources_pb.Runner.AsObject>,
    }
}

export class DeleteRunnersRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): DeleteRunnersRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): DeleteRunnersRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRunnersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRunnersRequest): DeleteRunnersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRunnersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRunnersRequest;
    static deserializeBinaryFromReader(message: DeleteRunnersRequest, reader: jspb.BinaryReader): DeleteRunnersRequest;
}

export namespace DeleteRunnersRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        idsList: Array<string>,
    }
}

export class SingleRunnerResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): SingleRunnerResponse;

    hasRunner(): boolean;
    clearRunner(): void;
    getRunner(): proto_clarifai_api_resources_pb.Runner | undefined;
    setRunner(value?: proto_clarifai_api_resources_pb.Runner): SingleRunnerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleRunnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleRunnerResponse): SingleRunnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleRunnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleRunnerResponse;
    static deserializeBinaryFromReader(message: SingleRunnerResponse, reader: jspb.BinaryReader): SingleRunnerResponse;
}

export namespace SingleRunnerResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        runner?: proto_clarifai_api_resources_pb.Runner.AsObject,
    }
}

export class MultiRunnerResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiRunnerResponse;
    clearRunnersList(): void;
    getRunnersList(): Array<proto_clarifai_api_resources_pb.Runner>;
    setRunnersList(value: Array<proto_clarifai_api_resources_pb.Runner>): MultiRunnerResponse;
    addRunners(value?: proto_clarifai_api_resources_pb.Runner, index?: number): proto_clarifai_api_resources_pb.Runner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRunnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRunnerResponse): MultiRunnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRunnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRunnerResponse;
    static deserializeBinaryFromReader(message: MultiRunnerResponse, reader: jspb.BinaryReader): MultiRunnerResponse;
}

export namespace MultiRunnerResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        runnersList: Array<proto_clarifai_api_resources_pb.Runner.AsObject>,
    }
}

export class ListRunnerItemsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): ListRunnerItemsRequest;
    getRunnerId(): string;
    setRunnerId(value: string): ListRunnerItemsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRunnerItemsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRunnerItemsRequest): ListRunnerItemsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRunnerItemsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRunnerItemsRequest;
    static deserializeBinaryFromReader(message: ListRunnerItemsRequest, reader: jspb.BinaryReader): ListRunnerItemsRequest;
}

export namespace ListRunnerItemsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        runnerId: string,
    }
}

export class PostRunnerItemOutputsRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostRunnerItemOutputsRequest;
    getRunnerId(): string;
    setRunnerId(value: string): PostRunnerItemOutputsRequest;
    getItemId(): string;
    setItemId(value: string): PostRunnerItemOutputsRequest;
    clearRunnerItemOutputsList(): void;
    getRunnerItemOutputsList(): Array<RunnerItemOutput>;
    setRunnerItemOutputsList(value: Array<RunnerItemOutput>): PostRunnerItemOutputsRequest;
    addRunnerItemOutputs(value?: RunnerItemOutput, index?: number): RunnerItemOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostRunnerItemOutputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostRunnerItemOutputsRequest): PostRunnerItemOutputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostRunnerItemOutputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostRunnerItemOutputsRequest;
    static deserializeBinaryFromReader(message: PostRunnerItemOutputsRequest, reader: jspb.BinaryReader): PostRunnerItemOutputsRequest;
}

export namespace PostRunnerItemOutputsRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        runnerId: string,
        itemId: string,
        runnerItemOutputsList: Array<RunnerItemOutput.AsObject>,
    }
}

export class MultiRunnerItemResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiRunnerItemResponse;
    clearItemsList(): void;
    getItemsList(): Array<RunnerItem>;
    setItemsList(value: Array<RunnerItem>): MultiRunnerItemResponse;
    addItems(value?: RunnerItem, index?: number): RunnerItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRunnerItemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRunnerItemResponse): MultiRunnerItemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRunnerItemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRunnerItemResponse;
    static deserializeBinaryFromReader(message: MultiRunnerItemResponse, reader: jspb.BinaryReader): MultiRunnerItemResponse;
}

export namespace MultiRunnerItemResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        itemsList: Array<RunnerItem.AsObject>,
    }
}

export class RunnerItem extends jspb.Message { 
    getId(): string;
    setId(value: string): RunnerItem;
    getDescription(): string;
    setDescription(value: string): RunnerItem;

    hasPostModelOutputsRequest(): boolean;
    clearPostModelOutputsRequest(): void;
    getPostModelOutputsRequest(): PostModelOutputsRequest | undefined;
    setPostModelOutputsRequest(value?: PostModelOutputsRequest): RunnerItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunnerItem.AsObject;
    static toObject(includeInstance: boolean, msg: RunnerItem): RunnerItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunnerItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunnerItem;
    static deserializeBinaryFromReader(message: RunnerItem, reader: jspb.BinaryReader): RunnerItem;
}

export namespace RunnerItem {
    export type AsObject = {
        id: string,
        description: string,
        postModelOutputsRequest?: PostModelOutputsRequest.AsObject,
    }
}

export class RunnerItemOutput extends jspb.Message { 

    hasMultiOutputResponse(): boolean;
    clearMultiOutputResponse(): void;
    getMultiOutputResponse(): MultiOutputResponse | undefined;
    setMultiOutputResponse(value?: MultiOutputResponse): RunnerItemOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunnerItemOutput.AsObject;
    static toObject(includeInstance: boolean, msg: RunnerItemOutput): RunnerItemOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunnerItemOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunnerItemOutput;
    static deserializeBinaryFromReader(message: RunnerItemOutput, reader: jspb.BinaryReader): RunnerItemOutput;
}

export namespace RunnerItemOutput {
    export type AsObject = {
        multiOutputResponse?: MultiOutputResponse.AsObject,
    }
}

export class MultiRunnerItemOutputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiRunnerItemOutputResponse;
    clearRunnerItemOutputsList(): void;
    getRunnerItemOutputsList(): Array<RunnerItemOutput>;
    setRunnerItemOutputsList(value: Array<RunnerItemOutput>): MultiRunnerItemOutputResponse;
    addRunnerItemOutputs(value?: RunnerItemOutput, index?: number): RunnerItemOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRunnerItemOutputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRunnerItemOutputResponse): MultiRunnerItemOutputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRunnerItemOutputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRunnerItemOutputResponse;
    static deserializeBinaryFromReader(message: MultiRunnerItemOutputResponse, reader: jspb.BinaryReader): MultiRunnerItemOutputResponse;
}

export namespace MultiRunnerItemOutputResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        runnerItemOutputsList: Array<RunnerItemOutput.AsObject>,
    }
}

export class PostModelVersionsTrainingTimeEstimateRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PostModelVersionsTrainingTimeEstimateRequest;
    getModelId(): string;
    setModelId(value: string): PostModelVersionsTrainingTimeEstimateRequest;
    clearModelVersionsList(): void;
    getModelVersionsList(): Array<proto_clarifai_api_resources_pb.ModelVersion>;
    setModelVersionsList(value: Array<proto_clarifai_api_resources_pb.ModelVersion>): PostModelVersionsTrainingTimeEstimateRequest;
    addModelVersions(value?: proto_clarifai_api_resources_pb.ModelVersion, index?: number): proto_clarifai_api_resources_pb.ModelVersion;
    getEstimatedInputCount(): number;
    setEstimatedInputCount(value: number): PostModelVersionsTrainingTimeEstimateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModelVersionsTrainingTimeEstimateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostModelVersionsTrainingTimeEstimateRequest): PostModelVersionsTrainingTimeEstimateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModelVersionsTrainingTimeEstimateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModelVersionsTrainingTimeEstimateRequest;
    static deserializeBinaryFromReader(message: PostModelVersionsTrainingTimeEstimateRequest, reader: jspb.BinaryReader): PostModelVersionsTrainingTimeEstimateRequest;
}

export namespace PostModelVersionsTrainingTimeEstimateRequest {
    export type AsObject = {
        userAppId?: proto_clarifai_api_resources_pb.UserAppIDSet.AsObject,
        modelId: string,
        modelVersionsList: Array<proto_clarifai_api_resources_pb.ModelVersion.AsObject>,
        estimatedInputCount: number,
    }
}

export class MultiTrainingTimeEstimateResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiTrainingTimeEstimateResponse;
    clearTrainingTimeEstimatesList(): void;
    getTrainingTimeEstimatesList(): Array<google_protobuf_duration_pb.Duration>;
    setTrainingTimeEstimatesList(value: Array<google_protobuf_duration_pb.Duration>): MultiTrainingTimeEstimateResponse;
    addTrainingTimeEstimates(value?: google_protobuf_duration_pb.Duration, index?: number): google_protobuf_duration_pb.Duration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiTrainingTimeEstimateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MultiTrainingTimeEstimateResponse): MultiTrainingTimeEstimateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiTrainingTimeEstimateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiTrainingTimeEstimateResponse;
    static deserializeBinaryFromReader(message: MultiTrainingTimeEstimateResponse, reader: jspb.BinaryReader): MultiTrainingTimeEstimateResponse;
}

export namespace MultiTrainingTimeEstimateResponse {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        trainingTimeEstimatesList: Array<google_protobuf_duration_pb.Duration.AsObject>,
    }
}

export enum OrganizationInvitationStatus {
    NOT_SET = 0,
    PENDING = 1,
    ACCEPTED = 2,
    CANCELLED = 3,
    DECLINED = 4,
    EXPIRED = 5,
}
