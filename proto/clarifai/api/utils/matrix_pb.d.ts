// package: 
// file: proto/clarifai/api/utils/matrix.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MatrixUint64 extends jspb.Message { 
    getNCols(): number;
    setNCols(value: number): MatrixUint64;
    clearDataList(): void;
    getDataList(): Array<number>;
    setDataList(value: Array<number>): MatrixUint64;
    addData(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MatrixUint64.AsObject;
    static toObject(includeInstance: boolean, msg: MatrixUint64): MatrixUint64.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MatrixUint64, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MatrixUint64;
    static deserializeBinaryFromReader(message: MatrixUint64, reader: jspb.BinaryReader): MatrixUint64;
}

export namespace MatrixUint64 {
    export type AsObject = {
        nCols: number,
        dataList: Array<number>,
    }
}
