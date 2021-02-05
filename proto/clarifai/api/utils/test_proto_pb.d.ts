// package: clarifai.api.utils
// file: proto/clarifai/api/utils/test_proto.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_clarifai_api_utils_extensions_pb from "../../../../proto/clarifai/api/utils/extensions_pb";

export class TestProto extends jspb.Message { 
    getId(): string;
    setId(value: string): TestProto;

    getMessage(): string;
    setMessage(value: string): TestProto;

    getValue(): number;
    setValue(value: number): TestProto;

    getImageBytes(): Uint8Array | string;
    getImageBytes_asU8(): Uint8Array;
    getImageBytes_asB64(): string;
    setImageBytes(value: Uint8Array | string): TestProto;


    hasStringOneof(): boolean;
    clearStringOneof(): void;
    getStringOneof(): string;
    setStringOneof(value: string): TestProto;


    hasBoolOneof(): boolean;
    clearBoolOneof(): void;
    getBoolOneof(): boolean;
    setBoolOneof(value: boolean): TestProto;


    hasMessageOneof(): boolean;
    clearMessageOneof(): void;
    getMessageOneof(): TestProto2 | undefined;
    setMessageOneof(value?: TestProto2): TestProto;


    getOneOfFieldCase(): TestProto.OneOfFieldCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestProto.AsObject;
    static toObject(includeInstance: boolean, msg: TestProto): TestProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestProto;
    static deserializeBinaryFromReader(message: TestProto, reader: jspb.BinaryReader): TestProto;
}

export namespace TestProto {
    export type AsObject = {
        id: string,
        message: string,
        value: number,
        imageBytes: Uint8Array | string,
        stringOneof: string,
        boolOneof: boolean,
        messageOneof?: TestProto2.AsObject,
    }

    export enum OneOfFieldCase {
        ONE_OF_FIELD_NOT_SET = 0,
    
    STRING_ONEOF = 5,

    BOOL_ONEOF = 6,

    MESSAGE_ONEOF = 7,

    }

}

export class TestProto2 extends jspb.Message { 
    getId(): string;
    setId(value: string): TestProto2;

    getFlip(): boolean;
    setFlip(value: boolean): TestProto2;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestProto2.AsObject;
    static toObject(includeInstance: boolean, msg: TestProto2): TestProto2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestProto2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestProto2;
    static deserializeBinaryFromReader(message: TestProto2, reader: jspb.BinaryReader): TestProto2;
}

export namespace TestProto2 {
    export type AsObject = {
        id: string,
        flip: boolean,
    }
}
