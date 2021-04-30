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
    }
}

export class PatchAnnotationsStatusRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): PatchAnnotationsStatusRequest;

    getStatusCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
    setStatusCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): PatchAnnotationsStatusRequest;

    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): PatchAnnotationsStatusRequest;
    addUserIds(value: string, index?: number): string;

    getTaskId(): string;
    setTaskId(value: string): PatchAnnotationsStatusRequest;

    getAction(): string;
    setAction(value: string): PatchAnnotationsStatusRequest;


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
        statusCode: proto_clarifai_api_status_status_code_pb.StatusCode,
        userIdsList: Array<string>,
        taskId: string,
        action: string,
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

export class GetAppRequest extends jspb.Message { 

    hasUserAppId(): boolean;
    clearUserAppId(): void;
    getUserAppId(): proto_clarifai_api_resources_pb.UserAppIDSet | undefined;
    setUserAppId(value?: proto_clarifai_api_resources_pb.UserAppIDSet): GetAppRequest;


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

    getName(): string;
    setName(value: string): ListAppsRequest;


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
        name: string,
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
        pagination?: Pagination.AsObject,
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

export class MultiInputResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): MultiInputResponse;

    clearInputsList(): void;
    getInputsList(): Array<proto_clarifai_api_resources_pb.Input>;
    setInputsList(value: Array<proto_clarifai_api_resources_pb.Input>): MultiInputResponse;
    addInputs(value?: proto_clarifai_api_resources_pb.Input, index?: number): proto_clarifai_api_resources_pb.Input;


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

    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): ListModelsRequest;
    addIds(value: string, index?: number): string;

    getName(): string;
    setName(value: string): ListModelsRequest;

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
        idsList: Array<string>,
        name: string,
        modelTypeId: string,
        trainedOnly: boolean,
        inputFieldsList: Array<string>,
        outputFieldsList: Array<string>,
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


    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;


    hasTrainSearch(): boolean;
    clearTrainSearch(): void;
    getTrainSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setTrainSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;


    hasTestSearch(): boolean;
    clearTestSearch(): void;
    getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setTestSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionsRequest;

    getEvaluateAfterTraining(): boolean;
    setEvaluateAfterTraining(value: boolean): PostModelVersionsRequest;

    getDescription(): string;
    setDescription(value: string): PostModelVersionsRequest;


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
        search?: proto_clarifai_api_resources_pb.Search.AsObject,
        trainSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
        testSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
        evaluateAfterTraining: boolean,
        description: string,
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

    getMaxExamples(): number;
    setMaxExamples(value: number): PostModelVersionMetricsRequest;


    hasTestSearch(): boolean;
    clearTestSearch(): void;
    getTestSearch(): proto_clarifai_api_resources_pb.Search | undefined;
    setTestSearch(value?: proto_clarifai_api_resources_pb.Search): PostModelVersionMetricsRequest;


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
        maxExamples: number,
        testSearch?: proto_clarifai_api_resources_pb.Search.AsObject,
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

    getId(): string;
    setId(value: string): ListWorkflowsRequest;


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
        id: string,
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

    getIncludingLabelOrderTasks(): boolean;
    setIncludingLabelOrderTasks(value: boolean): ListTasksRequest;


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
        includingLabelOrderTasks: boolean,
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

export enum OrganizationInvitationStatus {
    NOT_SET = 0,
    PENDING = 1,
    ACCEPTED = 2,
    CANCELLED = 3,
    DECLINED = 4,
    EXPIRED = 5,
}
