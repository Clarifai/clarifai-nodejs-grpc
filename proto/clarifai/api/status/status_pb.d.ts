// package: clarifai.api.status
// file: proto/clarifai/api/status/status.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_clarifai_auth_util_extension_pb from "../../../../proto/clarifai/auth/util/extension_pb";
import * as proto_clarifai_api_status_status_code_pb from "../../../../proto/clarifai/api/status/status_code_pb";

export class Status extends jspb.Message { 
    getCode(): proto_clarifai_api_status_status_code_pb.StatusCode;
    setCode(value: proto_clarifai_api_status_status_code_pb.StatusCode): Status;
    getDescription(): string;
    setDescription(value: string): Status;
    getDetails(): string;
    setDetails(value: string): Status;
    clearStackTraceList(): void;
    getStackTraceList(): Array<string>;
    setStackTraceList(value: Array<string>): Status;
    addStackTrace(value: string, index?: number): string;
    getPercentCompleted(): number;
    setPercentCompleted(value: number): Status;
    getTimeRemaining(): number;
    setTimeRemaining(value: number): Status;
    getReqId(): string;
    setReqId(value: string): Status;
    getInternalDetails(): string;
    setInternalDetails(value: string): Status;

    hasRedirectInfo(): boolean;
    clearRedirectInfo(): void;
    getRedirectInfo(): RedirectInfo | undefined;
    setRedirectInfo(value?: RedirectInfo): Status;
    getDeveloperNotes(): string;
    setDeveloperNotes(value: string): Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        code: proto_clarifai_api_status_status_code_pb.StatusCode,
        description: string,
        details: string,
        stackTraceList: Array<string>,
        percentCompleted: number,
        timeRemaining: number,
        reqId: string,
        internalDetails: string,
        redirectInfo?: RedirectInfo.AsObject,
        developerNotes: string,
    }
}

export class RedirectInfo extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): RedirectInfo;
    getResourceType(): string;
    setResourceType(value: string): RedirectInfo;
    getOldResourceId(): string;
    setOldResourceId(value: string): RedirectInfo;
    getNewResourceId(): string;
    setNewResourceId(value: string): RedirectInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedirectInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RedirectInfo): RedirectInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedirectInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedirectInfo;
    static deserializeBinaryFromReader(message: RedirectInfo, reader: jspb.BinaryReader): RedirectInfo;
}

export namespace RedirectInfo {
    export type AsObject = {
        url: string,
        resourceType: string,
        oldResourceId: string,
        newResourceId: string,
    }
}

export class BaseResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Status | undefined;
    setStatus(value?: Status): BaseResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BaseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BaseResponse;
    static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

export namespace BaseResponse {
    export type AsObject = {
        status?: Status.AsObject,
    }
}
