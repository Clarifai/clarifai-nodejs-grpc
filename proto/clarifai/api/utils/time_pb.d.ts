// package: clarifai.api.utils
// file: proto/clarifai/api/utils/time.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TimeOfDay extends jspb.Message { 
    getHours(): number;
    setHours(value: number): TimeOfDay;
    getMinutes(): number;
    setMinutes(value: number): TimeOfDay;
    getSeconds(): number;
    setSeconds(value: number): TimeOfDay;
    getNanos(): number;
    setNanos(value: number): TimeOfDay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeOfDay.AsObject;
    static toObject(includeInstance: boolean, msg: TimeOfDay): TimeOfDay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeOfDay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeOfDay;
    static deserializeBinaryFromReader(message: TimeOfDay, reader: jspb.BinaryReader): TimeOfDay;
}

export namespace TimeOfDay {
    export type AsObject = {
        hours: number,
        minutes: number,
        seconds: number,
        nanos: number,
    }
}

export class TimeOfDayRange extends jspb.Message { 

    hasStart(): boolean;
    clearStart(): void;
    getStart(): TimeOfDay | undefined;
    setStart(value?: TimeOfDay): TimeOfDayRange;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): TimeOfDay | undefined;
    setEnd(value?: TimeOfDay): TimeOfDayRange;
    getIsStartInclusive(): boolean;
    setIsStartInclusive(value: boolean): TimeOfDayRange;
    getIsEndInclusive(): boolean;
    setIsEndInclusive(value: boolean): TimeOfDayRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeOfDayRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeOfDayRange): TimeOfDayRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeOfDayRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeOfDayRange;
    static deserializeBinaryFromReader(message: TimeOfDayRange, reader: jspb.BinaryReader): TimeOfDayRange;
}

export namespace TimeOfDayRange {
    export type AsObject = {
        start?: TimeOfDay.AsObject,
        end?: TimeOfDay.AsObject,
        isStartInclusive: boolean,
        isEndInclusive: boolean,
    }
}
