// package: clarifai.api
// file: proto/clarifai/api/resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_clarifai_api_status_status_pb from "../../../proto/clarifai/api/status/status_pb";
import * as proto_clarifai_api_utils_extensions_pb from "../../../proto/clarifai/api/utils/extensions_pb";
import * as proto_clarifai_auth_util_extension_pb from "../../../proto/clarifai/auth/util/extension_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Annotation extends jspb.Message { 
    getId(): string;
    setId(value: string): Annotation;

    getInputId(): string;
    setInputId(value: string): Annotation;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Annotation;


    hasAnnotationInfo(): boolean;
    clearAnnotationInfo(): void;
    getAnnotationInfo(): google_protobuf_struct_pb.Struct | undefined;
    setAnnotationInfo(value?: google_protobuf_struct_pb.Struct): Annotation;

    getUserId(): string;
    setUserId(value: string): Annotation;

    getModelVersionId(): string;
    setModelVersionId(value: string): Annotation;

    getEmbedModelVersionId(): string;
    setEmbedModelVersionId(value: string): Annotation;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): Annotation;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Annotation;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Annotation;

    getTrusted(): boolean;
    setTrusted(value: boolean): Annotation;

    getInputLevel(): boolean;
    setInputLevel(value: boolean): Annotation;


    hasConsensusInfo(): boolean;
    clearConsensusInfo(): void;
    getConsensusInfo(): google_protobuf_struct_pb.Struct | undefined;
    setConsensusInfo(value?: google_protobuf_struct_pb.Struct): Annotation;

    getTaskId(): string;
    setTaskId(value: string): Annotation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Annotation.AsObject;
    static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Annotation;
    static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
    export type AsObject = {
        id: string,
        inputId: string,
        data?: Data.AsObject,
        annotationInfo?: google_protobuf_struct_pb.Struct.AsObject,
        userId: string,
        modelVersionId: string,
        embedModelVersionId: string,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        trusted: boolean,
        inputLevel: boolean,
        consensusInfo?: google_protobuf_struct_pb.Struct.AsObject,
        taskId: string,
    }
}

export class App extends jspb.Message { 
    getId(): string;
    setId(value: string): App;

    getName(): string;
    setName(value: string): App;

    getDefaultLanguage(): string;
    setDefaultLanguage(value: string): App;

    getDefaultWorkflowId(): string;
    setDefaultWorkflowId(value: string): App;

    getUserId(): string;
    setUserId(value: string): App;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;

    getLegalConsentStatus(): number;
    setLegalConsentStatus(value: number): App;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): App;

    getDescription(): string;
    setDescription(value: string): App;

    getSampleMs(): number;
    setSampleMs(value: number): App;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): App;

    getDataTierId(): string;
    setDataTierId(value: string): App;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): App.AsObject;
    static toObject(includeInstance: boolean, msg: App): App.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): App;
    static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
    export type AsObject = {
        id: string,
        name: string,
        defaultLanguage: string,
        defaultWorkflowId: string,
        userId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        legalConsentStatus: number,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        description: string,
        sampleMs: number,
        visibility?: Visibility.AsObject,
        dataTierId: string,
    }
}

export class AppQuery extends jspb.Message { 
    getName(): string;
    setName(value: string): AppQuery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppQuery.AsObject;
    static toObject(includeInstance: boolean, msg: AppQuery): AppQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppQuery;
    static deserializeBinaryFromReader(message: AppQuery, reader: jspb.BinaryReader): AppQuery;
}

export namespace AppQuery {
    export type AsObject = {
        name: string,
    }
}

export class Collaborator extends jspb.Message { 
    getId(): string;
    setId(value: string): Collaborator;


    hasApp(): boolean;
    clearApp(): void;
    getApp(): App | undefined;
    setApp(value?: App): Collaborator;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): Collaborator;

    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): Collaborator;
    addScopes(value: string, index?: number): string;

    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): Collaborator;
    addEndpoints(value: string, index?: number): string;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;


    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaborator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collaborator.AsObject;
    static toObject(includeInstance: boolean, msg: Collaborator): Collaborator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collaborator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collaborator;
    static deserializeBinaryFromReader(message: Collaborator, reader: jspb.BinaryReader): Collaborator;
}

export namespace Collaborator {
    export type AsObject = {
        id: string,
        app?: App.AsObject,
        user?: User.AsObject,
        scopesList: Array<string>,
        endpointsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Collaboration extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): App | undefined;
    setApp(value?: App): Collaboration;


    hasAppOwner(): boolean;
    clearAppOwner(): void;
    getAppOwner(): User | undefined;
    setAppOwner(value?: User): Collaboration;

    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): Collaboration;
    addScopes(value: string, index?: number): string;

    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): Collaboration;
    addEndpoints(value: string, index?: number): string;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collaboration;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collaboration.AsObject;
    static toObject(includeInstance: boolean, msg: Collaboration): Collaboration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collaboration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collaboration;
    static deserializeBinaryFromReader(message: Collaboration, reader: jspb.BinaryReader): Collaboration;
}

export namespace Collaboration {
    export type AsObject = {
        app?: App.AsObject,
        appOwner?: User.AsObject,
        scopesList: Array<string>,
        endpointsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Audio extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): Audio;

    getBase64(): Uint8Array | string;
    getBase64_asU8(): Uint8Array;
    getBase64_asB64(): string;
    setBase64(value: Uint8Array | string): Audio;

    getAllowDuplicateUrl(): boolean;
    setAllowDuplicateUrl(value: boolean): Audio;


    hasHosted(): boolean;
    clearHosted(): void;
    getHosted(): HostedURL | undefined;
    setHosted(value?: HostedURL): Audio;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Audio.AsObject;
    static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Audio;
    static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
}

export namespace Audio {
    export type AsObject = {
        url: string,
        base64: Uint8Array | string,
        allowDuplicateUrl: boolean,
        hosted?: HostedURL.AsObject,
    }
}

export class Track extends jspb.Message { 
    getId(): string;
    setId(value: string): Track;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Track;


    hasTrackInfo(): boolean;
    clearTrackInfo(): void;
    getTrackInfo(): Track.TrackInfo | undefined;
    setTrackInfo(value?: Track.TrackInfo): Track;


    hasTimeInfo(): boolean;
    clearTimeInfo(): void;
    getTimeInfo(): TimeInfo | undefined;
    setTimeInfo(value?: TimeInfo): Track;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Track.AsObject;
    static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Track;
    static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
    export type AsObject = {
        id: string,
        data?: Data.AsObject,
        trackInfo?: Track.TrackInfo.AsObject,
        timeInfo?: TimeInfo.AsObject,
    }


    export class TrackInfo extends jspb.Message { 
        getNumFrames(): number;
        setNumFrames(value: number): TrackInfo;


        hasBeginTime(): boolean;
        clearBeginTime(): void;
        getBeginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setBeginTime(value?: google_protobuf_timestamp_pb.Timestamp): TrackInfo;


        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TrackInfo;

        getQuality(): number;
        setQuality(value: number): TrackInfo;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TrackInfo.AsObject;
        static toObject(includeInstance: boolean, msg: TrackInfo): TrackInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TrackInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TrackInfo;
        static deserializeBinaryFromReader(message: TrackInfo, reader: jspb.BinaryReader): TrackInfo;
    }

    export namespace TrackInfo {
        export type AsObject = {
            numFrames: number,
            beginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            quality: number,
        }
    }

}

export class Cluster extends jspb.Message { 
    getId(): string;
    setId(value: string): Cluster;

    getCount(): number;
    setCount(value: number): Cluster;

    getScore(): number;
    setScore(value: number): Cluster;

    clearHitsList(): void;
    getHitsList(): Array<Hit>;
    setHitsList(value: Array<Hit>): Cluster;
    addHits(value?: Hit, index?: number): Hit;

    clearProjectionList(): void;
    getProjectionList(): Array<number>;
    setProjectionList(value: Array<number>): Cluster;
    addProjection(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        id: string,
        count: number,
        score: number,
        hitsList: Array<Hit.AsObject>,
        projectionList: Array<number>,
    }
}

export class Color extends jspb.Message { 
    getRawHex(): string;
    setRawHex(value: string): Color;


    hasW3c(): boolean;
    clearW3c(): void;
    getW3c(): W3C | undefined;
    setW3c(value?: W3C): Color;

    getValue(): number;
    setValue(value: number): Color;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Color.AsObject;
    static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Color;
    static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
    export type AsObject = {
        rawHex: string,
        w3c?: W3C.AsObject,
        value: number,
    }
}

export class W3C extends jspb.Message { 
    getHex(): string;
    setHex(value: string): W3C;

    getName(): string;
    setName(value: string): W3C;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): W3C.AsObject;
    static toObject(includeInstance: boolean, msg: W3C): W3C.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: W3C, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): W3C;
    static deserializeBinaryFromReader(message: W3C, reader: jspb.BinaryReader): W3C;
}

export namespace W3C {
    export type AsObject = {
        hex: string,
        name: string,
    }
}

export class UserAppIDSet extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UserAppIDSet;

    getAppId(): string;
    setAppId(value: string): UserAppIDSet;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserAppIDSet.AsObject;
    static toObject(includeInstance: boolean, msg: UserAppIDSet): UserAppIDSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserAppIDSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserAppIDSet;
    static deserializeBinaryFromReader(message: UserAppIDSet, reader: jspb.BinaryReader): UserAppIDSet;
}

export namespace UserAppIDSet {
    export type AsObject = {
        userId: string,
        appId: string,
    }
}

export class PatchAction extends jspb.Message { 
    getOp(): string;
    setOp(value: string): PatchAction;

    getMergeConflictResolution(): string;
    setMergeConflictResolution(value: string): PatchAction;

    getPath(): string;
    setPath(value: string): PatchAction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchAction.AsObject;
    static toObject(includeInstance: boolean, msg: PatchAction): PatchAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchAction;
    static deserializeBinaryFromReader(message: PatchAction, reader: jspb.BinaryReader): PatchAction;
}

export namespace PatchAction {
    export type AsObject = {
        op: string,
        mergeConflictResolution: string,
        path: string,
    }
}

export class Concept extends jspb.Message { 
    getId(): string;
    setId(value: string): Concept;

    getName(): string;
    setName(value: string): Concept;

    getValue(): number;
    setValue(value: number): Concept;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Concept;

    getLanguage(): string;
    setLanguage(value: string): Concept;

    getAppId(): string;
    setAppId(value: string): Concept;

    getDefinition(): string;
    setDefinition(value: string): Concept;

    getVocabId(): string;
    setVocabId(value: string): Concept;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): Concept;

    getUserId(): string;
    setUserId(value: string): Concept;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Concept.AsObject;
    static toObject(includeInstance: boolean, msg: Concept): Concept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Concept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Concept;
    static deserializeBinaryFromReader(message: Concept, reader: jspb.BinaryReader): Concept;
}

export namespace Concept {
    export type AsObject = {
        id: string,
        name: string,
        value: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        language: string,
        appId: string,
        definition: string,
        vocabId: string,
        visibility?: Visibility.AsObject,
        userId: string,
    }
}

export class ConceptCount extends jspb.Message { 
    getId(): string;
    setId(value: string): ConceptCount;

    getName(): string;
    setName(value: string): ConceptCount;


    hasConceptTypeCount(): boolean;
    clearConceptTypeCount(): void;
    getConceptTypeCount(): ConceptTypeCount | undefined;
    setConceptTypeCount(value?: ConceptTypeCount): ConceptCount;


    hasDetailConceptCount(): boolean;
    clearDetailConceptCount(): void;
    getDetailConceptCount(): DetailConceptCount | undefined;
    setDetailConceptCount(value?: DetailConceptCount): ConceptCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptCount.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptCount): ConceptCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptCount;
    static deserializeBinaryFromReader(message: ConceptCount, reader: jspb.BinaryReader): ConceptCount;
}

export namespace ConceptCount {
    export type AsObject = {
        id: string,
        name: string,
        conceptTypeCount?: ConceptTypeCount.AsObject,
        detailConceptCount?: DetailConceptCount.AsObject,
    }
}

export class ConceptTypeCount extends jspb.Message { 
    getPositive(): number;
    setPositive(value: number): ConceptTypeCount;

    getNegative(): number;
    setNegative(value: number): ConceptTypeCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptTypeCount.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptTypeCount): ConceptTypeCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptTypeCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptTypeCount;
    static deserializeBinaryFromReader(message: ConceptTypeCount, reader: jspb.BinaryReader): ConceptTypeCount;
}

export namespace ConceptTypeCount {
    export type AsObject = {
        positive: number,
        negative: number,
    }
}

export class DetailConceptCount extends jspb.Message { 

    hasProcessed(): boolean;
    clearProcessed(): void;
    getProcessed(): ConceptTypeCount | undefined;
    setProcessed(value?: ConceptTypeCount): DetailConceptCount;


    hasToProcess(): boolean;
    clearToProcess(): void;
    getToProcess(): ConceptTypeCount | undefined;
    setToProcess(value?: ConceptTypeCount): DetailConceptCount;


    hasErrors(): boolean;
    clearErrors(): void;
    getErrors(): ConceptTypeCount | undefined;
    setErrors(value?: ConceptTypeCount): DetailConceptCount;


    hasProcessing(): boolean;
    clearProcessing(): void;
    getProcessing(): ConceptTypeCount | undefined;
    setProcessing(value?: ConceptTypeCount): DetailConceptCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailConceptCount.AsObject;
    static toObject(includeInstance: boolean, msg: DetailConceptCount): DetailConceptCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetailConceptCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailConceptCount;
    static deserializeBinaryFromReader(message: DetailConceptCount, reader: jspb.BinaryReader): DetailConceptCount;
}

export namespace DetailConceptCount {
    export type AsObject = {
        processed?: ConceptTypeCount.AsObject,
        toProcess?: ConceptTypeCount.AsObject,
        errors?: ConceptTypeCount.AsObject,
        processing?: ConceptTypeCount.AsObject,
    }
}

export class ConceptQuery extends jspb.Message { 
    getName(): string;
    setName(value: string): ConceptQuery;

    getLanguage(): string;
    setLanguage(value: string): ConceptQuery;

    getWorkflowId(): string;
    setWorkflowId(value: string): ConceptQuery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptQuery.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptQuery): ConceptQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptQuery;
    static deserializeBinaryFromReader(message: ConceptQuery, reader: jspb.BinaryReader): ConceptQuery;
}

export namespace ConceptQuery {
    export type AsObject = {
        name: string,
        language: string,
        workflowId: string,
    }
}

export class ConceptRelation extends jspb.Message { 
    getId(): string;
    setId(value: string): ConceptRelation;


    hasSubjectConcept(): boolean;
    clearSubjectConcept(): void;
    getSubjectConcept(): Concept | undefined;
    setSubjectConcept(value?: Concept): ConceptRelation;


    hasObjectConcept(): boolean;
    clearObjectConcept(): void;
    getObjectConcept(): Concept | undefined;
    setObjectConcept(value?: Concept): ConceptRelation;

    getPredicate(): string;
    setPredicate(value: string): ConceptRelation;

    getKnowledgeGraphId(): string;
    setKnowledgeGraphId(value: string): ConceptRelation;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): ConceptRelation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptRelation.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptRelation): ConceptRelation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptRelation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptRelation;
    static deserializeBinaryFromReader(message: ConceptRelation, reader: jspb.BinaryReader): ConceptRelation;
}

export namespace ConceptRelation {
    export type AsObject = {
        id: string,
        subjectConcept?: Concept.AsObject,
        objectConcept?: Concept.AsObject,
        predicate: string,
        knowledgeGraphId: string,
        visibility?: Visibility.AsObject,
    }
}

export class KnowledgeGraph extends jspb.Message { 
    getId(): string;
    setId(value: string): KnowledgeGraph;

    getName(): string;
    setName(value: string): KnowledgeGraph;

    getDescription(): string;
    setDescription(value: string): KnowledgeGraph;

    getExamplesAppId(): string;
    setExamplesAppId(value: string): KnowledgeGraph;

    getSampledExamplesAppId(): string;
    setSampledExamplesAppId(value: string): KnowledgeGraph;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KnowledgeGraph.AsObject;
    static toObject(includeInstance: boolean, msg: KnowledgeGraph): KnowledgeGraph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KnowledgeGraph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KnowledgeGraph;
    static deserializeBinaryFromReader(message: KnowledgeGraph, reader: jspb.BinaryReader): KnowledgeGraph;
}

export namespace KnowledgeGraph {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        examplesAppId: string,
        sampledExamplesAppId: string,
    }
}

export class ConceptMappingJob extends jspb.Message { 
    getKnowledgeGraphId(): string;
    setKnowledgeGraphId(value: string): ConceptMappingJob;

    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): ConceptMappingJob;
    addConceptIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptMappingJob.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptMappingJob): ConceptMappingJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptMappingJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptMappingJob;
    static deserializeBinaryFromReader(message: ConceptMappingJob, reader: jspb.BinaryReader): ConceptMappingJob;
}

export namespace ConceptMappingJob {
    export type AsObject = {
        knowledgeGraphId: string,
        conceptIdsList: Array<string>,
    }
}

export class ConceptLanguage extends jspb.Message { 
    getId(): string;
    setId(value: string): ConceptLanguage;

    getName(): string;
    setName(value: string): ConceptLanguage;

    getDefinition(): string;
    setDefinition(value: string): ConceptLanguage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptLanguage): ConceptLanguage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptLanguage;
    static deserializeBinaryFromReader(message: ConceptLanguage, reader: jspb.BinaryReader): ConceptLanguage;
}

export namespace ConceptLanguage {
    export type AsObject = {
        id: string,
        name: string,
        definition: string,
    }
}

export class Data extends jspb.Message { 

    hasImage(): boolean;
    clearImage(): void;
    getImage(): Image | undefined;
    setImage(value?: Image): Data;


    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): Video | undefined;
    setVideo(value?: Video): Data;

    clearConceptsList(): void;
    getConceptsList(): Array<Concept>;
    setConceptsList(value: Array<Concept>): Data;
    addConcepts(value?: Concept, index?: number): Concept;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Data;


    hasGeo(): boolean;
    clearGeo(): void;
    getGeo(): Geo | undefined;
    setGeo(value?: Geo): Data;

    clearColorsList(): void;
    getColorsList(): Array<Color>;
    setColorsList(value: Array<Color>): Data;
    addColors(value?: Color, index?: number): Color;

    clearClustersList(): void;
    getClustersList(): Array<Cluster>;
    setClustersList(value: Array<Cluster>): Data;
    addClusters(value?: Cluster, index?: number): Cluster;

    clearEmbeddingsList(): void;
    getEmbeddingsList(): Array<Embedding>;
    setEmbeddingsList(value: Array<Embedding>): Data;
    addEmbeddings(value?: Embedding, index?: number): Embedding;

    clearRegionsList(): void;
    getRegionsList(): Array<Region>;
    setRegionsList(value: Array<Region>): Data;
    addRegions(value?: Region, index?: number): Region;

    clearFramesList(): void;
    getFramesList(): Array<Frame>;
    setFramesList(value: Array<Frame>): Data;
    addFrames(value?: Frame, index?: number): Frame;


    hasText(): boolean;
    clearText(): void;
    getText(): Text | undefined;
    setText(value?: Text): Data;


    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): Audio | undefined;
    setAudio(value?: Audio): Data;

    clearTracksList(): void;
    getTracksList(): Array<Track>;
    setTracksList(value: Array<Track>): Data;
    addTracks(value?: Track, index?: number): Track;

    clearTimeSegmentsList(): void;
    getTimeSegmentsList(): Array<TimeSegment>;
    setTimeSegmentsList(value: Array<TimeSegment>): Data;
    addTimeSegments(value?: TimeSegment, index?: number): TimeSegment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        image?: Image.AsObject,
        video?: Video.AsObject,
        conceptsList: Array<Concept.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        geo?: Geo.AsObject,
        colorsList: Array<Color.AsObject>,
        clustersList: Array<Cluster.AsObject>,
        embeddingsList: Array<Embedding.AsObject>,
        regionsList: Array<Region.AsObject>,
        framesList: Array<Frame.AsObject>,
        text?: Text.AsObject,
        audio?: Audio.AsObject,
        tracksList: Array<Track.AsObject>,
        timeSegmentsList: Array<TimeSegment.AsObject>,
    }
}

export class Region extends jspb.Message { 
    getId(): string;
    setId(value: string): Region;


    hasRegionInfo(): boolean;
    clearRegionInfo(): void;
    getRegionInfo(): RegionInfo | undefined;
    setRegionInfo(value?: RegionInfo): Region;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Region;

    getValue(): number;
    setValue(value: number): Region;

    getTrackId(): string;
    setTrackId(value: string): Region;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Region.AsObject;
    static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Region;
    static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
    export type AsObject = {
        id: string,
        regionInfo?: RegionInfo.AsObject,
        data?: Data.AsObject,
        value: number,
        trackId: string,
    }
}

export class RegionInfo extends jspb.Message { 

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): BoundingBox | undefined;
    setBoundingBox(value?: BoundingBox): RegionInfo;


    hasMask(): boolean;
    clearMask(): void;
    getMask(): Mask | undefined;
    setMask(value?: Mask): RegionInfo;


    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): Polygon | undefined;
    setPolygon(value?: Polygon): RegionInfo;


    hasPoint(): boolean;
    clearPoint(): void;
    getPoint(): Point | undefined;
    setPoint(value?: Point): RegionInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RegionInfo): RegionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionInfo;
    static deserializeBinaryFromReader(message: RegionInfo, reader: jspb.BinaryReader): RegionInfo;
}

export namespace RegionInfo {
    export type AsObject = {
        boundingBox?: BoundingBox.AsObject,
        mask?: Mask.AsObject,
        polygon?: Polygon.AsObject,
        point?: Point.AsObject,
    }
}

export class BoundingBox extends jspb.Message { 
    getTopRow(): number;
    setTopRow(value: number): BoundingBox;

    getLeftCol(): number;
    setLeftCol(value: number): BoundingBox;

    getBottomRow(): number;
    setBottomRow(value: number): BoundingBox;

    getRightCol(): number;
    setRightCol(value: number): BoundingBox;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoundingBox.AsObject;
    static toObject(includeInstance: boolean, msg: BoundingBox): BoundingBox.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoundingBox, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoundingBox;
    static deserializeBinaryFromReader(message: BoundingBox, reader: jspb.BinaryReader): BoundingBox;
}

export namespace BoundingBox {
    export type AsObject = {
        topRow: number,
        leftCol: number,
        bottomRow: number,
        rightCol: number,
    }
}

export class FrameInfo extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): FrameInfo;

    getTime(): number;
    setTime(value: number): FrameInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrameInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FrameInfo): FrameInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrameInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrameInfo;
    static deserializeBinaryFromReader(message: FrameInfo, reader: jspb.BinaryReader): FrameInfo;
}

export namespace FrameInfo {
    export type AsObject = {
        index: number,
        time: number,
    }
}

export class Frame extends jspb.Message { 

    hasFrameInfo(): boolean;
    clearFrameInfo(): void;
    getFrameInfo(): FrameInfo | undefined;
    setFrameInfo(value?: FrameInfo): Frame;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Frame;

    getId(): string;
    setId(value: string): Frame;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Frame.AsObject;
    static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Frame;
    static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
    export type AsObject = {
        frameInfo?: FrameInfo.AsObject,
        data?: Data.AsObject,
        id: string,
    }
}

export class Mask extends jspb.Message { 

    hasImage(): boolean;
    clearImage(): void;
    getImage(): Image | undefined;
    setImage(value?: Image): Mask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mask.AsObject;
    static toObject(includeInstance: boolean, msg: Mask): Mask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mask;
    static deserializeBinaryFromReader(message: Mask, reader: jspb.BinaryReader): Mask;
}

export namespace Mask {
    export type AsObject = {
        image?: Image.AsObject,
    }
}

export class Polygon extends jspb.Message { 
    clearPointsList(): void;
    getPointsList(): Array<Point>;
    setPointsList(value: Array<Point>): Polygon;
    addPoints(value?: Point, index?: number): Point;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Polygon.AsObject;
    static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Polygon;
    static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
    export type AsObject = {
        pointsList: Array<Point.AsObject>,
    }
}

export class Point extends jspb.Message { 
    getRow(): number;
    setRow(value: number): Point;

    getCol(): number;
    setCol(value: number): Point;

    getZ(): number;
    setZ(value: number): Point;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Point.AsObject;
    static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Point;
    static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
    export type AsObject = {
        row: number,
        col: number,
        z: number,
    }
}

export class Embedding extends jspb.Message { 
    clearVectorList(): void;
    getVectorList(): Array<number>;
    setVectorList(value: Array<number>): Embedding;
    addVector(value: number, index?: number): number;

    getNumDimensions(): number;
    setNumDimensions(value: number): Embedding;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Embedding.AsObject;
    static toObject(includeInstance: boolean, msg: Embedding): Embedding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Embedding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Embedding;
    static deserializeBinaryFromReader(message: Embedding, reader: jspb.BinaryReader): Embedding;
}

export namespace Embedding {
    export type AsObject = {
        vectorList: Array<number>,
        numDimensions: number,
    }
}

export class GeoPoint extends jspb.Message { 
    getLongitude(): number;
    setLongitude(value: number): GeoPoint;

    getLatitude(): number;
    setLatitude(value: number): GeoPoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoPoint.AsObject;
    static toObject(includeInstance: boolean, msg: GeoPoint): GeoPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoPoint;
    static deserializeBinaryFromReader(message: GeoPoint, reader: jspb.BinaryReader): GeoPoint;
}

export namespace GeoPoint {
    export type AsObject = {
        longitude: number,
        latitude: number,
    }
}

export class GeoLimit extends jspb.Message { 
    getType(): string;
    setType(value: string): GeoLimit;

    getValue(): number;
    setValue(value: number): GeoLimit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoLimit.AsObject;
    static toObject(includeInstance: boolean, msg: GeoLimit): GeoLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoLimit;
    static deserializeBinaryFromReader(message: GeoLimit, reader: jspb.BinaryReader): GeoLimit;
}

export namespace GeoLimit {
    export type AsObject = {
        type: string,
        value: number,
    }
}

export class GeoBoxedPoint extends jspb.Message { 

    hasGeoPoint(): boolean;
    clearGeoPoint(): void;
    getGeoPoint(): GeoPoint | undefined;
    setGeoPoint(value?: GeoPoint): GeoBoxedPoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoBoxedPoint.AsObject;
    static toObject(includeInstance: boolean, msg: GeoBoxedPoint): GeoBoxedPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoBoxedPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoBoxedPoint;
    static deserializeBinaryFromReader(message: GeoBoxedPoint, reader: jspb.BinaryReader): GeoBoxedPoint;
}

export namespace GeoBoxedPoint {
    export type AsObject = {
        geoPoint?: GeoPoint.AsObject,
    }
}

export class Geo extends jspb.Message { 

    hasGeoPoint(): boolean;
    clearGeoPoint(): void;
    getGeoPoint(): GeoPoint | undefined;
    setGeoPoint(value?: GeoPoint): Geo;


    hasGeoLimit(): boolean;
    clearGeoLimit(): void;
    getGeoLimit(): GeoLimit | undefined;
    setGeoLimit(value?: GeoLimit): Geo;

    clearGeoBoxList(): void;
    getGeoBoxList(): Array<GeoBoxedPoint>;
    setGeoBoxList(value: Array<GeoBoxedPoint>): Geo;
    addGeoBox(value?: GeoBoxedPoint, index?: number): GeoBoxedPoint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Geo.AsObject;
    static toObject(includeInstance: boolean, msg: Geo): Geo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Geo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Geo;
    static deserializeBinaryFromReader(message: Geo, reader: jspb.BinaryReader): Geo;
}

export namespace Geo {
    export type AsObject = {
        geoPoint?: GeoPoint.AsObject,
        geoLimit?: GeoLimit.AsObject,
        geoBoxList: Array<GeoBoxedPoint.AsObject>,
    }
}

export class Image extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): Image;

    getBase64(): Uint8Array | string;
    getBase64_asU8(): Uint8Array;
    getBase64_asB64(): string;
    setBase64(value: Uint8Array | string): Image;

    getAllowDuplicateUrl(): boolean;
    setAllowDuplicateUrl(value: boolean): Image;


    hasHosted(): boolean;
    clearHosted(): void;
    getHosted(): HostedURL | undefined;
    setHosted(value?: HostedURL): Image;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        url: string,
        base64: Uint8Array | string,
        allowDuplicateUrl: boolean,
        hosted?: HostedURL.AsObject,
    }
}

export class HostedURL extends jspb.Message { 
    getPrefix(): string;
    setPrefix(value: string): HostedURL;

    getSuffix(): string;
    setSuffix(value: string): HostedURL;

    clearSizesList(): void;
    getSizesList(): Array<string>;
    setSizesList(value: Array<string>): HostedURL;
    addSizes(value: string, index?: number): string;

    getCrossorigin(): string;
    setCrossorigin(value: string): HostedURL;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostedURL.AsObject;
    static toObject(includeInstance: boolean, msg: HostedURL): HostedURL.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostedURL, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostedURL;
    static deserializeBinaryFromReader(message: HostedURL, reader: jspb.BinaryReader): HostedURL;
}

export namespace HostedURL {
    export type AsObject = {
        prefix: string,
        suffix: string,
        sizesList: Array<string>,
        crossorigin: string,
    }
}

export class Input extends jspb.Message { 
    getId(): string;
    setId(value: string): Input;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Input;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): Input;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
    export type AsObject = {
        id: string,
        data?: Data.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    }
}

export class InputCount extends jspb.Message { 
    getProcessed(): number;
    setProcessed(value: number): InputCount;

    getToProcess(): number;
    setToProcess(value: number): InputCount;

    getErrors(): number;
    setErrors(value: number): InputCount;

    getProcessing(): number;
    setProcessing(value: number): InputCount;

    getReindexed(): number;
    setReindexed(value: number): InputCount;

    getToReindex(): number;
    setToReindex(value: number): InputCount;

    getReindexErrors(): number;
    setReindexErrors(value: number): InputCount;

    getReindexing(): number;
    setReindexing(value: number): InputCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputCount.AsObject;
    static toObject(includeInstance: boolean, msg: InputCount): InputCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputCount;
    static deserializeBinaryFromReader(message: InputCount, reader: jspb.BinaryReader): InputCount;
}

export namespace InputCount {
    export type AsObject = {
        processed: number,
        toProcess: number,
        errors: number,
        processing: number,
        reindexed: number,
        toReindex: number,
        reindexErrors: number,
        reindexing: number,
    }
}

export class WorkflowResultsSimilarity extends jspb.Message { 

    hasProbeInput(): boolean;
    clearProbeInput(): void;
    getProbeInput(): Input | undefined;
    setProbeInput(value?: Input): WorkflowResultsSimilarity;

    clearPoolResultsList(): void;
    getPoolResultsList(): Array<Hit>;
    setPoolResultsList(value: Array<Hit>): WorkflowResultsSimilarity;
    addPoolResults(value?: Hit, index?: number): Hit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowResultsSimilarity.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowResultsSimilarity): WorkflowResultsSimilarity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowResultsSimilarity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowResultsSimilarity;
    static deserializeBinaryFromReader(message: WorkflowResultsSimilarity, reader: jspb.BinaryReader): WorkflowResultsSimilarity;
}

export namespace WorkflowResultsSimilarity {
    export type AsObject = {
        probeInput?: Input.AsObject,
        poolResultsList: Array<Hit.AsObject>,
    }
}

export class Key extends jspb.Message { 
    getId(): string;
    setId(value: string): Key;

    getType(): string;
    setType(value: string): Key;

    getDescription(): string;
    setDescription(value: string): Key;

    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): Key;
    addScopes(value: string, index?: number): string;

    clearEndpointsList(): void;
    getEndpointsList(): Array<string>;
    setEndpointsList(value: Array<string>): Key;
    addEndpoints(value: string, index?: number): string;

    clearAppsList(): void;
    getAppsList(): Array<App>;
    setAppsList(value: Array<App>): Key;
    addApps(value?: App, index?: number): App;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Key;


    hasExpiresAt(): boolean;
    clearExpiresAt(): void;
    getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): Key;

    clearAuthorizedIdpIdsList(): void;
    getAuthorizedIdpIdsList(): Array<string>;
    setAuthorizedIdpIdsList(value: Array<string>): Key;
    addAuthorizedIdpIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        id: string,
        type: string,
        description: string,
        scopesList: Array<string>,
        endpointsList: Array<string>,
        appsList: Array<App.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        authorizedIdpIdsList: Array<string>,
    }
}

export class Model extends jspb.Message { 
    getId(): string;
    setId(value: string): Model;

    getName(): string;
    setName(value: string): Model;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Model;

    getAppId(): string;
    setAppId(value: string): Model;


    hasOutputInfo(): boolean;
    clearOutputInfo(): void;
    getOutputInfo(): OutputInfo | undefined;
    setOutputInfo(value?: OutputInfo): Model;


    hasModelVersion(): boolean;
    clearModelVersion(): void;
    getModelVersion(): ModelVersion | undefined;
    setModelVersion(value?: ModelVersion): Model;

    getDisplayName(): string;
    setDisplayName(value: string): Model;

    getUserId(): string;
    setUserId(value: string): Model;


    hasInputInfo(): boolean;
    clearInputInfo(): void;
    getInputInfo(): InputInfo | undefined;
    setInputInfo(value?: InputInfo): Model;


    hasTrainInfo(): boolean;
    clearTrainInfo(): void;
    getTrainInfo(): TrainInfo | undefined;
    setTrainInfo(value?: TrainInfo): Model;

    getModelTypeId(): string;
    setModelTypeId(value: string): Model;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): Model;

    getDescription(): string;
    setDescription(value: string): Model;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Model;

    getNotes(): string;
    setNotes(value: string): Model;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Model.AsObject;
    static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Model;
    static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
    export type AsObject = {
        id: string,
        name: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        appId: string,
        outputInfo?: OutputInfo.AsObject,
        modelVersion?: ModelVersion.AsObject,
        displayName: string,
        userId: string,
        inputInfo?: InputInfo.AsObject,
        trainInfo?: TrainInfo.AsObject,
        modelTypeId: string,
        visibility?: Visibility.AsObject,
        description: string,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        notes: string,
    }
}

export class ModelReference extends jspb.Message { 
    getId(): string;
    setId(value: string): ModelReference;

    getModelId(): string;
    setModelId(value: string): ModelReference;

    getUrl(): string;
    setUrl(value: string): ModelReference;

    getName(): string;
    setName(value: string): ModelReference;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): ModelReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelReference.AsObject;
    static toObject(includeInstance: boolean, msg: ModelReference): ModelReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelReference;
    static deserializeBinaryFromReader(message: ModelReference, reader: jspb.BinaryReader): ModelReference;
}

export namespace ModelReference {
    export type AsObject = {
        id: string,
        modelId: string,
        url: string,
        name: string,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ModelVersionInputExample extends jspb.Message { 
    getId(): string;
    setId(value: string): ModelVersionInputExample;

    getModelId(): string;
    setModelId(value: string): ModelVersionInputExample;

    getModelVersionId(): string;
    setModelVersionId(value: string): ModelVersionInputExample;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): ModelVersionInputExample;

    getName(): string;
    setName(value: string): ModelVersionInputExample;

    getDescription(): string;
    setDescription(value: string): ModelVersionInputExample;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelVersionInputExample.AsObject;
    static toObject(includeInstance: boolean, msg: ModelVersionInputExample): ModelVersionInputExample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelVersionInputExample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelVersionInputExample;
    static deserializeBinaryFromReader(message: ModelVersionInputExample, reader: jspb.BinaryReader): ModelVersionInputExample;
}

export namespace ModelVersionInputExample {
    export type AsObject = {
        id: string,
        modelId: string,
        modelVersionId: string,
        data?: Data.AsObject,
        name: string,
        description: string,
    }
}

export class OutputInfo extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): OutputInfo;


    hasOutputConfig(): boolean;
    clearOutputConfig(): void;
    getOutputConfig(): OutputConfig | undefined;
    setOutputConfig(value?: OutputConfig): OutputInfo;

    getMessage(): string;
    setMessage(value: string): OutputInfo;

    getType(): string;
    setType(value: string): OutputInfo;

    getTypeExt(): string;
    setTypeExt(value: string): OutputInfo;


    hasFieldsMap(): boolean;
    clearFieldsMap(): void;
    getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
    setFieldsMap(value?: google_protobuf_struct_pb.Struct): OutputInfo;


    hasParams(): boolean;
    clearParams(): void;
    getParams(): google_protobuf_struct_pb.Struct | undefined;
    setParams(value?: google_protobuf_struct_pb.Struct): OutputInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: OutputInfo): OutputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputInfo;
    static deserializeBinaryFromReader(message: OutputInfo, reader: jspb.BinaryReader): OutputInfo;
}

export namespace OutputInfo {
    export type AsObject = {
        data?: Data.AsObject,
        outputConfig?: OutputConfig.AsObject,
        message: string,
        type: string,
        typeExt: string,
        fieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
        params?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class InputInfo extends jspb.Message { 

    hasFieldsMap(): boolean;
    clearFieldsMap(): void;
    getFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
    setFieldsMap(value?: google_protobuf_struct_pb.Struct): InputInfo;


    hasParams(): boolean;
    clearParams(): void;
    getParams(): google_protobuf_struct_pb.Struct | undefined;
    setParams(value?: google_protobuf_struct_pb.Struct): InputInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputInfo.AsObject;
    static toObject(includeInstance: boolean, msg: InputInfo): InputInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputInfo;
    static deserializeBinaryFromReader(message: InputInfo, reader: jspb.BinaryReader): InputInfo;
}

export namespace InputInfo {
    export type AsObject = {
        fieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
        params?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class TrainInfo extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): google_protobuf_struct_pb.Struct | undefined;
    setParams(value?: google_protobuf_struct_pb.Struct): TrainInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TrainInfo): TrainInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainInfo;
    static deserializeBinaryFromReader(message: TrainInfo, reader: jspb.BinaryReader): TrainInfo;
}

export namespace TrainInfo {
    export type AsObject = {
        params?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class OutputConfig extends jspb.Message { 
    getConceptsMutuallyExclusive(): boolean;
    setConceptsMutuallyExclusive(value: boolean): OutputConfig;

    getClosedEnvironment(): boolean;
    setClosedEnvironment(value: boolean): OutputConfig;

    getExistingModelId(): string;
    setExistingModelId(value: string): OutputConfig;

    getLanguage(): string;
    setLanguage(value: string): OutputConfig;

    getHyperParameters(): string;
    setHyperParameters(value: string): OutputConfig;

    getMaxConcepts(): number;
    setMaxConcepts(value: number): OutputConfig;

    getMinValue(): number;
    setMinValue(value: number): OutputConfig;

    clearSelectConceptsList(): void;
    getSelectConceptsList(): Array<Concept>;
    setSelectConceptsList(value: Array<Concept>): OutputConfig;
    addSelectConcepts(value?: Concept, index?: number): Concept;

    getTrainingTimeout(): number;
    setTrainingTimeout(value: number): OutputConfig;

    getSampleMs(): number;
    setSampleMs(value: number): OutputConfig;


    hasHyperParams(): boolean;
    clearHyperParams(): void;
    getHyperParams(): google_protobuf_struct_pb.Struct | undefined;
    setHyperParams(value?: google_protobuf_struct_pb.Struct): OutputConfig;

    getEmbedModelVersionId(): string;
    setEmbedModelVersionId(value: string): OutputConfig;

    getFailOnMissingPositiveExamples(): boolean;
    setFailOnMissingPositiveExamples(value: boolean): OutputConfig;


    hasModelMetadata(): boolean;
    clearModelMetadata(): void;
    getModelMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setModelMetadata(value?: google_protobuf_struct_pb.Struct): OutputConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputConfig.AsObject;
    static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputConfig;
    static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
    export type AsObject = {
        conceptsMutuallyExclusive: boolean,
        closedEnvironment: boolean,
        existingModelId: string,
        language: string,
        hyperParameters: string,
        maxConcepts: number,
        minValue: number,
        selectConceptsList: Array<Concept.AsObject>,
        trainingTimeout: number,
        sampleMs: number,
        hyperParams?: google_protobuf_struct_pb.Struct.AsObject,
        embedModelVersionId: string,
        failOnMissingPositiveExamples: boolean,
        modelMetadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ModelType extends jspb.Message { 
    getId(): string;
    setId(value: string): ModelType;

    getTitle(): string;
    setTitle(value: string): ModelType;

    getDescription(): string;
    setDescription(value: string): ModelType;

    getType(): string;
    setType(value: string): ModelType;

    clearInputFieldsList(): void;
    getInputFieldsList(): Array<string>;
    setInputFieldsList(value: Array<string>): ModelType;
    addInputFields(value: string, index?: number): string;

    clearOutputFieldsList(): void;
    getOutputFieldsList(): Array<string>;
    setOutputFieldsList(value: Array<string>): ModelType;
    addOutputFields(value: string, index?: number): string;

    getTrainable(): boolean;
    setTrainable(value: boolean): ModelType;

    getCreatable(): boolean;
    setCreatable(value: boolean): ModelType;

    getInternalOnly(): boolean;
    setInternalOnly(value: boolean): ModelType;

    clearModelTypeFieldsList(): void;
    getModelTypeFieldsList(): Array<ModelTypeField>;
    setModelTypeFieldsList(value: Array<ModelTypeField>): ModelType;
    addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

    getRequiresSequentialFrames(): boolean;
    setRequiresSequentialFrames(value: boolean): ModelType;

    getEvaluable(): boolean;
    setEvaluable(value: boolean): ModelType;


    hasExpectedPretrainedInputFields(): boolean;
    clearExpectedPretrainedInputFields(): void;
    getExpectedPretrainedInputFields(): google_protobuf_struct_pb.Struct | undefined;
    setExpectedPretrainedInputFields(value?: google_protobuf_struct_pb.Struct): ModelType;


    hasExpectedPretrainedOutputFields(): boolean;
    clearExpectedPretrainedOutputFields(): void;
    getExpectedPretrainedOutputFields(): google_protobuf_struct_pb.Struct | undefined;
    setExpectedPretrainedOutputFields(value?: google_protobuf_struct_pb.Struct): ModelType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelType.AsObject;
    static toObject(includeInstance: boolean, msg: ModelType): ModelType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelType;
    static deserializeBinaryFromReader(message: ModelType, reader: jspb.BinaryReader): ModelType;
}

export namespace ModelType {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        type: string,
        inputFieldsList: Array<string>,
        outputFieldsList: Array<string>,
        trainable: boolean,
        creatable: boolean,
        internalOnly: boolean,
        modelTypeFieldsList: Array<ModelTypeField.AsObject>,
        requiresSequentialFrames: boolean,
        evaluable: boolean,
        expectedPretrainedInputFields?: google_protobuf_struct_pb.Struct.AsObject,
        expectedPretrainedOutputFields?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ModelTypeField extends jspb.Message { 
    getPath(): string;
    setPath(value: string): ModelTypeField;

    getFieldType(): ModelTypeField.ModelTypeFieldType;
    setFieldType(value: ModelTypeField.ModelTypeFieldType): ModelTypeField;


    hasDefaultValue(): boolean;
    clearDefaultValue(): void;
    getDefaultValue(): google_protobuf_struct_pb.Value | undefined;
    setDefaultValue(value?: google_protobuf_struct_pb.Value): ModelTypeField;

    getDescription(): string;
    setDescription(value: string): ModelTypeField;

    getPlaceholder(): string;
    setPlaceholder(value: string): ModelTypeField;

    clearModelTypeEnumOptionsList(): void;
    getModelTypeEnumOptionsList(): Array<ModelTypeEnumOption>;
    setModelTypeEnumOptionsList(value: Array<ModelTypeEnumOption>): ModelTypeField;
    addModelTypeEnumOptions(value?: ModelTypeEnumOption, index?: number): ModelTypeEnumOption;

    getInternalOnly(): boolean;
    setInternalOnly(value: boolean): ModelTypeField;

    getRequired(): boolean;
    setRequired(value: boolean): ModelTypeField;


    hasModelTypeRangeInfo(): boolean;
    clearModelTypeRangeInfo(): void;
    getModelTypeRangeInfo(): ModelTypeRangeInfo | undefined;
    setModelTypeRangeInfo(value?: ModelTypeRangeInfo): ModelTypeField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelTypeField.AsObject;
    static toObject(includeInstance: boolean, msg: ModelTypeField): ModelTypeField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelTypeField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelTypeField;
    static deserializeBinaryFromReader(message: ModelTypeField, reader: jspb.BinaryReader): ModelTypeField;
}

export namespace ModelTypeField {
    export type AsObject = {
        path: string,
        fieldType: ModelTypeField.ModelTypeFieldType,
        defaultValue?: google_protobuf_struct_pb.Value.AsObject,
        description: string,
        placeholder: string,
        modelTypeEnumOptionsList: Array<ModelTypeEnumOption.AsObject>,
        internalOnly: boolean,
        required: boolean,
        modelTypeRangeInfo?: ModelTypeRangeInfo.AsObject,
    }

    export enum ModelTypeFieldType {
    INVALID_MODEL_TYPE_FIELD_TYPE = 0,
    BOOLEAN = 1,
    STRING = 2,
    NUMBER = 3,
    ARRAY_OF_CONCEPTS = 4,
    ARRAY_OF_CONCEPTS_WITH_THRESHOLD = 5,
    RANGE = 7,
    ENUM = 8,
    COLLABORATORS = 9,
    JSON = 10,
    ARRAY_OF_NUMBERS = 11,
    WORKFLOW_EMBED_MODELS = 12,
    ARRAY_OF_STRINGS = 13,
    }

}

export class ModelTypeRangeInfo extends jspb.Message { 
    getMin(): number;
    setMin(value: number): ModelTypeRangeInfo;

    getMax(): number;
    setMax(value: number): ModelTypeRangeInfo;

    getStep(): number;
    setStep(value: number): ModelTypeRangeInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelTypeRangeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ModelTypeRangeInfo): ModelTypeRangeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelTypeRangeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelTypeRangeInfo;
    static deserializeBinaryFromReader(message: ModelTypeRangeInfo, reader: jspb.BinaryReader): ModelTypeRangeInfo;
}

export namespace ModelTypeRangeInfo {
    export type AsObject = {
        min: number,
        max: number,
        step: number,
    }
}

export class ModelTypeEnumOption extends jspb.Message { 
    getId(): string;
    setId(value: string): ModelTypeEnumOption;

    getDescription(): string;
    setDescription(value: string): ModelTypeEnumOption;

    clearModelTypeFieldsList(): void;
    getModelTypeFieldsList(): Array<ModelTypeField>;
    setModelTypeFieldsList(value: Array<ModelTypeField>): ModelTypeEnumOption;
    addModelTypeFields(value?: ModelTypeField, index?: number): ModelTypeField;

    getInternalOnly(): boolean;
    setInternalOnly(value: boolean): ModelTypeEnumOption;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelTypeEnumOption.AsObject;
    static toObject(includeInstance: boolean, msg: ModelTypeEnumOption): ModelTypeEnumOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelTypeEnumOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelTypeEnumOption;
    static deserializeBinaryFromReader(message: ModelTypeEnumOption, reader: jspb.BinaryReader): ModelTypeEnumOption;
}

export namespace ModelTypeEnumOption {
    export type AsObject = {
        id: string,
        description: string,
        modelTypeFieldsList: Array<ModelTypeField.AsObject>,
        internalOnly: boolean,
    }
}

export class ModelQuery extends jspb.Message { 
    getName(): string;
    setName(value: string): ModelQuery;

    getType(): string;
    setType(value: string): ModelQuery;

    getModelTypeId(): string;
    setModelTypeId(value: string): ModelQuery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelQuery.AsObject;
    static toObject(includeInstance: boolean, msg: ModelQuery): ModelQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelQuery;
    static deserializeBinaryFromReader(message: ModelQuery, reader: jspb.BinaryReader): ModelQuery;
}

export namespace ModelQuery {
    export type AsObject = {
        name: string,
        type: string,
        modelTypeId: string,
    }
}

export class ModelVersion extends jspb.Message { 
    getId(): string;
    setId(value: string): ModelVersion;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): ModelVersion;

    getActiveConceptCount(): number;
    setActiveConceptCount(value: number): ModelVersion;


    hasMetrics(): boolean;
    clearMetrics(): void;
    getMetrics(): EvalMetrics | undefined;
    setMetrics(value?: EvalMetrics): ModelVersion;

    getTotalInputCount(): number;
    setTotalInputCount(value: number): ModelVersion;


    hasCompletedAt(): boolean;
    clearCompletedAt(): void;
    getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;

    getDescription(): string;
    setDescription(value: string): ModelVersion;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): ModelVersion;

    getAppId(): string;
    setAppId(value: string): ModelVersion;

    getUserId(): string;
    setUserId(value: string): ModelVersion;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ModelVersion;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): ModelVersion;

    getLicense(): string;
    setLicense(value: string): ModelVersion;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelVersion.AsObject;
    static toObject(includeInstance: boolean, msg: ModelVersion): ModelVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelVersion;
    static deserializeBinaryFromReader(message: ModelVersion, reader: jspb.BinaryReader): ModelVersion;
}

export namespace ModelVersion {
    export type AsObject = {
        id: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        activeConceptCount: number,
        metrics?: EvalMetrics.AsObject,
        totalInputCount: number,
        completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
        visibility?: Visibility.AsObject,
        appId: string,
        userId: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        license: string,
    }
}

export class PretrainedModelConfig extends jspb.Message { 
    getId(): string;
    setId(value: string): PretrainedModelConfig;

    getType(): string;
    setType(value: string): PretrainedModelConfig;


    hasInputFieldsMap(): boolean;
    clearInputFieldsMap(): void;
    getInputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
    setInputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;


    hasOutputFieldsMap(): boolean;
    clearOutputFieldsMap(): void;
    getOutputFieldsMap(): google_protobuf_struct_pb.Struct | undefined;
    setOutputFieldsMap(value?: google_protobuf_struct_pb.Struct): PretrainedModelConfig;

    getDataProviderParams(): string;
    setDataProviderParams(value: string): PretrainedModelConfig;

    getModelZipUrl(): string;
    setModelZipUrl(value: string): PretrainedModelConfig;

    getOverwrite(): boolean;
    setOverwrite(value: boolean): PretrainedModelConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PretrainedModelConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PretrainedModelConfig): PretrainedModelConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PretrainedModelConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PretrainedModelConfig;
    static deserializeBinaryFromReader(message: PretrainedModelConfig, reader: jspb.BinaryReader): PretrainedModelConfig;
}

export namespace PretrainedModelConfig {
    export type AsObject = {
        id: string,
        type: string,
        inputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
        outputFieldsMap?: google_protobuf_struct_pb.Struct.AsObject,
        dataProviderParams: string,
        modelZipUrl: string,
        overwrite: boolean,
    }
}

export class TrainStats extends jspb.Message { 
    clearLossCurveList(): void;
    getLossCurveList(): Array<LossCurveEntry>;
    setLossCurveList(value: Array<LossCurveEntry>): TrainStats;
    addLossCurve(value?: LossCurveEntry, index?: number): LossCurveEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainStats.AsObject;
    static toObject(includeInstance: boolean, msg: TrainStats): TrainStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainStats;
    static deserializeBinaryFromReader(message: TrainStats, reader: jspb.BinaryReader): TrainStats;
}

export namespace TrainStats {
    export type AsObject = {
        lossCurveList: Array<LossCurveEntry.AsObject>,
    }
}

export class LossCurveEntry extends jspb.Message { 
    getEpoch(): number;
    setEpoch(value: number): LossCurveEntry;

    getGlobalStep(): number;
    setGlobalStep(value: number): LossCurveEntry;

    getCost(): number;
    setCost(value: number): LossCurveEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LossCurveEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LossCurveEntry): LossCurveEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LossCurveEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LossCurveEntry;
    static deserializeBinaryFromReader(message: LossCurveEntry, reader: jspb.BinaryReader): LossCurveEntry;
}

export namespace LossCurveEntry {
    export type AsObject = {
        epoch: number,
        globalStep: number,
        cost: number,
    }
}

export class LabelCount extends jspb.Message { 
    getConceptName(): string;
    setConceptName(value: string): LabelCount;

    getCount(): number;
    setCount(value: number): LabelCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabelCount.AsObject;
    static toObject(includeInstance: boolean, msg: LabelCount): LabelCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabelCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabelCount;
    static deserializeBinaryFromReader(message: LabelCount, reader: jspb.BinaryReader): LabelCount;
}

export namespace LabelCount {
    export type AsObject = {
        conceptName: string,
        count: number,
    }
}

export class LabelDistribution extends jspb.Message { 
    clearPositiveLabelCountsList(): void;
    getPositiveLabelCountsList(): Array<LabelCount>;
    setPositiveLabelCountsList(value: Array<LabelCount>): LabelDistribution;
    addPositiveLabelCounts(value?: LabelCount, index?: number): LabelCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabelDistribution.AsObject;
    static toObject(includeInstance: boolean, msg: LabelDistribution): LabelDistribution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LabelDistribution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabelDistribution;
    static deserializeBinaryFromReader(message: LabelDistribution, reader: jspb.BinaryReader): LabelDistribution;
}

export namespace LabelDistribution {
    export type AsObject = {
        positiveLabelCountsList: Array<LabelCount.AsObject>,
    }
}

export class CooccurrenceMatrixEntry extends jspb.Message { 
    getRow(): string;
    setRow(value: string): CooccurrenceMatrixEntry;

    getCol(): string;
    setCol(value: string): CooccurrenceMatrixEntry;

    getCount(): number;
    setCount(value: number): CooccurrenceMatrixEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CooccurrenceMatrixEntry.AsObject;
    static toObject(includeInstance: boolean, msg: CooccurrenceMatrixEntry): CooccurrenceMatrixEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CooccurrenceMatrixEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CooccurrenceMatrixEntry;
    static deserializeBinaryFromReader(message: CooccurrenceMatrixEntry, reader: jspb.BinaryReader): CooccurrenceMatrixEntry;
}

export namespace CooccurrenceMatrixEntry {
    export type AsObject = {
        row: string,
        col: string,
        count: number,
    }
}

export class CooccurrenceMatrix extends jspb.Message { 
    clearMatrixList(): void;
    getMatrixList(): Array<CooccurrenceMatrixEntry>;
    setMatrixList(value: Array<CooccurrenceMatrixEntry>): CooccurrenceMatrix;
    addMatrix(value?: CooccurrenceMatrixEntry, index?: number): CooccurrenceMatrixEntry;

    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): CooccurrenceMatrix;
    addConceptIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CooccurrenceMatrix.AsObject;
    static toObject(includeInstance: boolean, msg: CooccurrenceMatrix): CooccurrenceMatrix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CooccurrenceMatrix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CooccurrenceMatrix;
    static deserializeBinaryFromReader(message: CooccurrenceMatrix, reader: jspb.BinaryReader): CooccurrenceMatrix;
}

export namespace CooccurrenceMatrix {
    export type AsObject = {
        matrixList: Array<CooccurrenceMatrixEntry.AsObject>,
        conceptIdsList: Array<string>,
    }
}

export class ConfusionMatrixEntry extends jspb.Message { 
    getPredicted(): string;
    setPredicted(value: string): ConfusionMatrixEntry;

    getActual(): string;
    setActual(value: string): ConfusionMatrixEntry;

    getValue(): number;
    setValue(value: number): ConfusionMatrixEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfusionMatrixEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ConfusionMatrixEntry): ConfusionMatrixEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfusionMatrixEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfusionMatrixEntry;
    static deserializeBinaryFromReader(message: ConfusionMatrixEntry, reader: jspb.BinaryReader): ConfusionMatrixEntry;
}

export namespace ConfusionMatrixEntry {
    export type AsObject = {
        predicted: string,
        actual: string,
        value: number,
    }
}

export class ConfusionMatrix extends jspb.Message { 
    clearMatrixList(): void;
    getMatrixList(): Array<ConfusionMatrixEntry>;
    setMatrixList(value: Array<ConfusionMatrixEntry>): ConfusionMatrix;
    addMatrix(value?: ConfusionMatrixEntry, index?: number): ConfusionMatrixEntry;

    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): ConfusionMatrix;
    addConceptIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfusionMatrix.AsObject;
    static toObject(includeInstance: boolean, msg: ConfusionMatrix): ConfusionMatrix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfusionMatrix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfusionMatrix;
    static deserializeBinaryFromReader(message: ConfusionMatrix, reader: jspb.BinaryReader): ConfusionMatrix;
}

export namespace ConfusionMatrix {
    export type AsObject = {
        matrixList: Array<ConfusionMatrixEntry.AsObject>,
        conceptIdsList: Array<string>,
    }
}

export class ROC extends jspb.Message { 
    clearFprList(): void;
    getFprList(): Array<number>;
    setFprList(value: Array<number>): ROC;
    addFpr(value: number, index?: number): number;

    clearTprList(): void;
    getTprList(): Array<number>;
    setTprList(value: Array<number>): ROC;
    addTpr(value: number, index?: number): number;

    clearThresholdsList(): void;
    getThresholdsList(): Array<number>;
    setThresholdsList(value: Array<number>): ROC;
    addThresholds(value: number, index?: number): number;

    clearFprPerImageList(): void;
    getFprPerImageList(): Array<number>;
    setFprPerImageList(value: Array<number>): ROC;
    addFprPerImage(value: number, index?: number): number;

    clearFprPerObjectList(): void;
    getFprPerObjectList(): Array<number>;
    setFprPerObjectList(value: Array<number>): ROC;
    addFprPerObject(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ROC.AsObject;
    static toObject(includeInstance: boolean, msg: ROC): ROC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ROC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ROC;
    static deserializeBinaryFromReader(message: ROC, reader: jspb.BinaryReader): ROC;
}

export namespace ROC {
    export type AsObject = {
        fprList: Array<number>,
        tprList: Array<number>,
        thresholdsList: Array<number>,
        fprPerImageList: Array<number>,
        fprPerObjectList: Array<number>,
    }
}

export class PrecisionRecallCurve extends jspb.Message { 
    clearRecallList(): void;
    getRecallList(): Array<number>;
    setRecallList(value: Array<number>): PrecisionRecallCurve;
    addRecall(value: number, index?: number): number;

    clearPrecisionList(): void;
    getPrecisionList(): Array<number>;
    setPrecisionList(value: Array<number>): PrecisionRecallCurve;
    addPrecision(value: number, index?: number): number;

    clearThresholdsList(): void;
    getThresholdsList(): Array<number>;
    setThresholdsList(value: Array<number>): PrecisionRecallCurve;
    addThresholds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrecisionRecallCurve.AsObject;
    static toObject(includeInstance: boolean, msg: PrecisionRecallCurve): PrecisionRecallCurve.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrecisionRecallCurve, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrecisionRecallCurve;
    static deserializeBinaryFromReader(message: PrecisionRecallCurve, reader: jspb.BinaryReader): PrecisionRecallCurve;
}

export namespace PrecisionRecallCurve {
    export type AsObject = {
        recallList: Array<number>,
        precisionList: Array<number>,
        thresholdsList: Array<number>,
    }
}

export class BinaryMetrics extends jspb.Message { 
    getNumPos(): number;
    setNumPos(value: number): BinaryMetrics;

    getNumNeg(): number;
    setNumNeg(value: number): BinaryMetrics;

    getNumTot(): number;
    setNumTot(value: number): BinaryMetrics;

    getRocAuc(): number;
    setRocAuc(value: number): BinaryMetrics;

    getF1(): number;
    setF1(value: number): BinaryMetrics;


    hasConcept(): boolean;
    clearConcept(): void;
    getConcept(): Concept | undefined;
    setConcept(value?: Concept): BinaryMetrics;


    hasRocCurve(): boolean;
    clearRocCurve(): void;
    getRocCurve(): ROC | undefined;
    setRocCurve(value?: ROC): BinaryMetrics;


    hasPrecisionRecallCurve(): boolean;
    clearPrecisionRecallCurve(): void;
    getPrecisionRecallCurve(): PrecisionRecallCurve | undefined;
    setPrecisionRecallCurve(value?: PrecisionRecallCurve): BinaryMetrics;

    getAvgPrecision(): number;
    setAvgPrecision(value: number): BinaryMetrics;

    getAreaName(): string;
    setAreaName(value: string): BinaryMetrics;

    getAreaMin(): number;
    setAreaMin(value: number): BinaryMetrics;

    getAreaMax(): number;
    setAreaMax(value: number): BinaryMetrics;

    getIou(): number;
    setIou(value: number): BinaryMetrics;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BinaryMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: BinaryMetrics): BinaryMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BinaryMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BinaryMetrics;
    static deserializeBinaryFromReader(message: BinaryMetrics, reader: jspb.BinaryReader): BinaryMetrics;
}

export namespace BinaryMetrics {
    export type AsObject = {
        numPos: number,
        numNeg: number,
        numTot: number,
        rocAuc: number,
        f1: number,
        concept?: Concept.AsObject,
        rocCurve?: ROC.AsObject,
        precisionRecallCurve?: PrecisionRecallCurve.AsObject,
        avgPrecision: number,
        areaName: string,
        areaMin: number,
        areaMax: number,
        iou: number,
    }
}

export class TrackerMetrics extends jspb.Message { 
    getMotMota(): number;
    setMotMota(value: number): TrackerMetrics;

    getMotNumSwitches(): number;
    setMotNumSwitches(value: number): TrackerMetrics;

    getMorseFrag(): number;
    setMorseFrag(value: number): TrackerMetrics;

    getAvgPrecision(): number;
    setAvgPrecision(value: number): TrackerMetrics;

    getAiid(): string;
    setAiid(value: string): TrackerMetrics;

    getUniqueSwitchRate(): number;
    setUniqueSwitchRate(value: number): TrackerMetrics;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackerMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: TrackerMetrics): TrackerMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackerMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackerMetrics;
    static deserializeBinaryFromReader(message: TrackerMetrics, reader: jspb.BinaryReader): TrackerMetrics;
}

export namespace TrackerMetrics {
    export type AsObject = {
        motMota: number,
        motNumSwitches: number,
        morseFrag: number,
        avgPrecision: number,
        aiid: string,
        uniqueSwitchRate: number,
    }
}

export class EvalTestSetEntry extends jspb.Message { 
    getId(): string;
    setId(value: string): EvalTestSetEntry;

    getUrl(): string;
    setUrl(value: string): EvalTestSetEntry;


    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): EvalTestSetEntry;

    clearPredictedConceptsList(): void;
    getPredictedConceptsList(): Array<Concept>;
    setPredictedConceptsList(value: Array<Concept>): EvalTestSetEntry;
    addPredictedConcepts(value?: Concept, index?: number): Concept;

    clearGroundTruthConceptsList(): void;
    getGroundTruthConceptsList(): Array<Concept>;
    setGroundTruthConceptsList(value: Array<Concept>): EvalTestSetEntry;
    addGroundTruthConcepts(value?: Concept, index?: number): Concept;


    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): EvalTestSetEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvalTestSetEntry.AsObject;
    static toObject(includeInstance: boolean, msg: EvalTestSetEntry): EvalTestSetEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvalTestSetEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvalTestSetEntry;
    static deserializeBinaryFromReader(message: EvalTestSetEntry, reader: jspb.BinaryReader): EvalTestSetEntry;
}

export namespace EvalTestSetEntry {
    export type AsObject = {
        id: string,
        url: string,
        input?: Input.AsObject,
        predictedConceptsList: Array<Concept.AsObject>,
        groundTruthConceptsList: Array<Concept.AsObject>,
        annotation?: Annotation.AsObject,
    }
}

export class LOPQEvalResult extends jspb.Message { 
    getK(): number;
    setK(value: number): LOPQEvalResult;

    getRecallVsBruteForce(): number;
    setRecallVsBruteForce(value: number): LOPQEvalResult;

    getKendallTauVsBruteForce(): number;
    setKendallTauVsBruteForce(value: number): LOPQEvalResult;

    getMostFrequentCodePercent(): number;
    setMostFrequentCodePercent(value: number): LOPQEvalResult;

    getLopqNdcg(): number;
    setLopqNdcg(value: number): LOPQEvalResult;

    getBruteForceNdcg(): number;
    setBruteForceNdcg(value: number): LOPQEvalResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LOPQEvalResult.AsObject;
    static toObject(includeInstance: boolean, msg: LOPQEvalResult): LOPQEvalResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LOPQEvalResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LOPQEvalResult;
    static deserializeBinaryFromReader(message: LOPQEvalResult, reader: jspb.BinaryReader): LOPQEvalResult;
}

export namespace LOPQEvalResult {
    export type AsObject = {
        k: number,
        recallVsBruteForce: number,
        kendallTauVsBruteForce: number,
        mostFrequentCodePercent: number,
        lopqNdcg: number,
        bruteForceNdcg: number,
    }
}

export class MetricsSummary extends jspb.Message { 
    getTop1Accuracy(): number;
    setTop1Accuracy(value: number): MetricsSummary;

    getTop5Accuracy(): number;
    setTop5Accuracy(value: number): MetricsSummary;

    getMacroAvgRocAuc(): number;
    setMacroAvgRocAuc(value: number): MetricsSummary;

    getMacroStdRocAuc(): number;
    setMacroStdRocAuc(value: number): MetricsSummary;

    getMacroAvgF1Score(): number;
    setMacroAvgF1Score(value: number): MetricsSummary;

    getMacroStdF1Score(): number;
    setMacroStdF1Score(value: number): MetricsSummary;

    getMacroAvgPrecision(): number;
    setMacroAvgPrecision(value: number): MetricsSummary;

    getMacroAvgRecall(): number;
    setMacroAvgRecall(value: number): MetricsSummary;

    getMeanAvgPrecisionIou50(): number;
    setMeanAvgPrecisionIou50(value: number): MetricsSummary;

    getMeanAvgPrecisionIouRange(): number;
    setMeanAvgPrecisionIouRange(value: number): MetricsSummary;

    clearLopqMetricsList(): void;
    getLopqMetricsList(): Array<LOPQEvalResult>;
    setLopqMetricsList(value: Array<LOPQEvalResult>): MetricsSummary;
    addLopqMetrics(value?: LOPQEvalResult, index?: number): LOPQEvalResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricsSummary.AsObject;
    static toObject(includeInstance: boolean, msg: MetricsSummary): MetricsSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricsSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricsSummary;
    static deserializeBinaryFromReader(message: MetricsSummary, reader: jspb.BinaryReader): MetricsSummary;
}

export namespace MetricsSummary {
    export type AsObject = {
        top1Accuracy: number,
        top5Accuracy: number,
        macroAvgRocAuc: number,
        macroStdRocAuc: number,
        macroAvgF1Score: number,
        macroStdF1Score: number,
        macroAvgPrecision: number,
        macroAvgRecall: number,
        meanAvgPrecisionIou50: number,
        meanAvgPrecisionIouRange: number,
        lopqMetricsList: Array<LOPQEvalResult.AsObject>,
    }
}

export class EvalMetrics extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): EvalMetrics;

    getId(): string;
    setId(value: string): EvalMetrics;


    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): MetricsSummary | undefined;
    setSummary(value?: MetricsSummary): EvalMetrics;


    hasConfusionMatrix(): boolean;
    clearConfusionMatrix(): void;
    getConfusionMatrix(): ConfusionMatrix | undefined;
    setConfusionMatrix(value?: ConfusionMatrix): EvalMetrics;


    hasCooccurrenceMatrix(): boolean;
    clearCooccurrenceMatrix(): void;
    getCooccurrenceMatrix(): CooccurrenceMatrix | undefined;
    setCooccurrenceMatrix(value?: CooccurrenceMatrix): EvalMetrics;


    hasLabelCounts(): boolean;
    clearLabelCounts(): void;
    getLabelCounts(): LabelDistribution | undefined;
    setLabelCounts(value?: LabelDistribution): EvalMetrics;

    clearBinaryMetricsList(): void;
    getBinaryMetricsList(): Array<BinaryMetrics>;
    setBinaryMetricsList(value: Array<BinaryMetrics>): EvalMetrics;
    addBinaryMetrics(value?: BinaryMetrics, index?: number): BinaryMetrics;

    clearTestSetList(): void;
    getTestSetList(): Array<EvalTestSetEntry>;
    setTestSetList(value: Array<EvalTestSetEntry>): EvalMetrics;
    addTestSet(value?: EvalTestSetEntry, index?: number): EvalTestSetEntry;

    clearMetricsByAreaList(): void;
    getMetricsByAreaList(): Array<BinaryMetrics>;
    setMetricsByAreaList(value: Array<BinaryMetrics>): EvalMetrics;
    addMetricsByArea(value?: BinaryMetrics, index?: number): BinaryMetrics;

    clearMetricsByClassList(): void;
    getMetricsByClassList(): Array<BinaryMetrics>;
    setMetricsByClassList(value: Array<BinaryMetrics>): EvalMetrics;
    addMetricsByClass(value?: BinaryMetrics, index?: number): BinaryMetrics;

    clearTrackerMetricsList(): void;
    getTrackerMetricsList(): Array<TrackerMetrics>;
    setTrackerMetricsList(value: Array<TrackerMetrics>): EvalMetrics;
    addTrackerMetrics(value?: TrackerMetrics, index?: number): TrackerMetrics;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EvalMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: EvalMetrics): EvalMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EvalMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EvalMetrics;
    static deserializeBinaryFromReader(message: EvalMetrics, reader: jspb.BinaryReader): EvalMetrics;
}

export namespace EvalMetrics {
    export type AsObject = {
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        id: string,
        summary?: MetricsSummary.AsObject,
        confusionMatrix?: ConfusionMatrix.AsObject,
        cooccurrenceMatrix?: CooccurrenceMatrix.AsObject,
        labelCounts?: LabelDistribution.AsObject,
        binaryMetricsList: Array<BinaryMetrics.AsObject>,
        testSetList: Array<EvalTestSetEntry.AsObject>,
        metricsByAreaList: Array<BinaryMetrics.AsObject>,
        metricsByClassList: Array<BinaryMetrics.AsObject>,
        trackerMetricsList: Array<TrackerMetrics.AsObject>,
    }
}

export class FieldsValue extends jspb.Message { 
    getConfusionMatrix(): boolean;
    setConfusionMatrix(value: boolean): FieldsValue;

    getCooccurrenceMatrix(): boolean;
    setCooccurrenceMatrix(value: boolean): FieldsValue;

    getLabelCounts(): boolean;
    setLabelCounts(value: boolean): FieldsValue;

    getBinaryMetrics(): boolean;
    setBinaryMetrics(value: boolean): FieldsValue;

    getTestSet(): boolean;
    setTestSet(value: boolean): FieldsValue;

    getMetricsByArea(): boolean;
    setMetricsByArea(value: boolean): FieldsValue;

    getMetricsByClass(): boolean;
    setMetricsByClass(value: boolean): FieldsValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldsValue.AsObject;
    static toObject(includeInstance: boolean, msg: FieldsValue): FieldsValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldsValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldsValue;
    static deserializeBinaryFromReader(message: FieldsValue, reader: jspb.BinaryReader): FieldsValue;
}

export namespace FieldsValue {
    export type AsObject = {
        confusionMatrix: boolean,
        cooccurrenceMatrix: boolean,
        labelCounts: boolean,
        binaryMetrics: boolean,
        testSet: boolean,
        metricsByArea: boolean,
        metricsByClass: boolean,
    }
}

export class Output extends jspb.Message { 
    getId(): string;
    setId(value: string): Output;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): Output;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Output;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): Model | undefined;
    setModel(value?: Model): Output;


    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): Output;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Output;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        id: string,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        model?: Model.AsObject,
        input?: Input.AsObject,
        data?: Data.AsObject,
    }
}

export class ScopeDeps extends jspb.Message { 
    getScope(): string;
    setScope(value: string): ScopeDeps;

    clearDependingScopesList(): void;
    getDependingScopesList(): Array<string>;
    setDependingScopesList(value: Array<string>): ScopeDeps;
    addDependingScopes(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeDeps.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeDeps): ScopeDeps.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeDeps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeDeps;
    static deserializeBinaryFromReader(message: ScopeDeps, reader: jspb.BinaryReader): ScopeDeps;
}

export namespace ScopeDeps {
    export type AsObject = {
        scope: string,
        dependingScopesList: Array<string>,
    }
}

export class EndpointDeps extends jspb.Message { 
    getEndpoint(): string;
    setEndpoint(value: string): EndpointDeps;

    clearDependingScopesList(): void;
    getDependingScopesList(): Array<string>;
    setDependingScopesList(value: Array<string>): EndpointDeps;
    addDependingScopes(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointDeps.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointDeps): EndpointDeps.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointDeps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointDeps;
    static deserializeBinaryFromReader(message: EndpointDeps, reader: jspb.BinaryReader): EndpointDeps;
}

export namespace EndpointDeps {
    export type AsObject = {
        endpoint: string,
        dependingScopesList: Array<string>,
    }
}

export class Hit extends jspb.Message { 
    getScore(): number;
    setScore(value: number): Hit;


    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): Hit;


    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): Hit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hit.AsObject;
    static toObject(includeInstance: boolean, msg: Hit): Hit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hit;
    static deserializeBinaryFromReader(message: Hit, reader: jspb.BinaryReader): Hit;
}

export namespace Hit {
    export type AsObject = {
        score: number,
        input?: Input.AsObject,
        annotation?: Annotation.AsObject,
    }
}

export class And extends jspb.Message { 

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): And;


    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Output | undefined;
    setOutput(value?: Output): And;

    getNegate(): boolean;
    setNegate(value: boolean): And;


    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): And;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): And.AsObject;
    static toObject(includeInstance: boolean, msg: And): And.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: And, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): And;
    static deserializeBinaryFromReader(message: And, reader: jspb.BinaryReader): And;
}

export namespace And {
    export type AsObject = {
        input?: Input.AsObject,
        output?: Output.AsObject,
        negate: boolean,
        annotation?: Annotation.AsObject,
    }
}

export class Query extends jspb.Message { 
    clearAndsList(): void;
    getAndsList(): Array<And>;
    setAndsList(value: Array<And>): Query;
    addAnds(value?: And, index?: number): And;

    getLanguage(): string;
    setLanguage(value: string): Query;

    clearFiltersList(): void;
    getFiltersList(): Array<Filter>;
    setFiltersList(value: Array<Filter>): Query;
    addFilters(value?: Filter, index?: number): Filter;

    clearRanksList(): void;
    getRanksList(): Array<Rank>;
    setRanksList(value: Array<Rank>): Query;
    addRanks(value?: Rank, index?: number): Rank;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
    export type AsObject = {
        andsList: Array<And.AsObject>,
        language: string,
        filtersList: Array<Filter.AsObject>,
        ranksList: Array<Rank.AsObject>,
    }
}

export class Search extends jspb.Message { 

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): Query | undefined;
    setQuery(value?: Query): Search;

    getId(): string;
    setId(value: string): Search;

    getApplicationId(): string;
    setApplicationId(value: string): Search;

    getName(): string;
    setName(value: string): Search;


    hasAsOf(): boolean;
    clearAsOf(): void;
    getAsOf(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAsOf(value?: google_protobuf_timestamp_pb.Timestamp): Search;

    getGitHash(): string;
    setGitHash(value: string): Search;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Search;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Search;

    getAlgorithm(): string;
    setAlgorithm(value: string): Search;

    getSave(): boolean;
    setSave(value: boolean): Search;

    getMinValue(): number;
    setMinValue(value: number): Search;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): Search;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Search.AsObject;
    static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Search;
    static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
}

export namespace Search {
    export type AsObject = {
        query?: Query.AsObject,
        id: string,
        applicationId: string,
        name: string,
        asOf?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        gitHash: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        algorithm: string,
        save: boolean,
        minValue: number,
        visibility?: Visibility.AsObject,
    }
}

export class Filter extends jspb.Message { 
    getNegate(): boolean;
    setNegate(value: boolean): Filter;


    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): Filter;


    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): Filter;


    hasLastUpdatedTimeRange(): boolean;
    clearLastUpdatedTimeRange(): void;
    getLastUpdatedTimeRange(): TimeRange | undefined;
    setLastUpdatedTimeRange(value?: TimeRange): Filter;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
    export type AsObject = {
        negate: boolean,
        annotation?: Annotation.AsObject,
        input?: Input.AsObject,
        lastUpdatedTimeRange?: TimeRange.AsObject,
    }
}

export class TimeRange extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeRange;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeRange;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRange;
    static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
    export type AsObject = {
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Rank extends jspb.Message { 
    getNegate(): boolean;
    setNegate(value: boolean): Rank;


    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): Rank;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rank.AsObject;
    static toObject(includeInstance: boolean, msg: Rank): Rank.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rank;
    static deserializeBinaryFromReader(message: Rank, reader: jspb.BinaryReader): Rank;
}

export namespace Rank {
    export type AsObject = {
        negate: boolean,
        annotation?: Annotation.AsObject,
    }
}

export class AnnotationSearchMetrics extends jspb.Message { 

    hasGroundTruth(): boolean;
    clearGroundTruth(): void;
    getGroundTruth(): Search | undefined;
    setGroundTruth(value?: Search): AnnotationSearchMetrics;


    hasSearchToEval(): boolean;
    clearSearchToEval(): void;
    getSearchToEval(): Search | undefined;
    setSearchToEval(value?: Search): AnnotationSearchMetrics;


    hasMetrics(): boolean;
    clearMetrics(): void;
    getMetrics(): EvalMetrics | undefined;
    setMetrics(value?: EvalMetrics): AnnotationSearchMetrics;


    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): AnnotationSearchMetrics;

    getActiveConceptCount(): number;
    setActiveConceptCount(value: number): AnnotationSearchMetrics;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): AnnotationSearchMetrics;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnotationSearchMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: AnnotationSearchMetrics): AnnotationSearchMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnotationSearchMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnotationSearchMetrics;
    static deserializeBinaryFromReader(message: AnnotationSearchMetrics, reader: jspb.BinaryReader): AnnotationSearchMetrics;
}

export namespace AnnotationSearchMetrics {
    export type AsObject = {
        groundTruth?: Search.AsObject,
        searchToEval?: Search.AsObject,
        metrics?: EvalMetrics.AsObject,
        data?: Data.AsObject,
        activeConceptCount: number,
        visibility?: Visibility.AsObject,
    }
}

export class Text extends jspb.Message { 
    getRaw(): string;
    setRaw(value: string): Text;

    getUrl(): string;
    setUrl(value: string): Text;

    getAllowDuplicateUrl(): boolean;
    setAllowDuplicateUrl(value: boolean): Text;


    hasHosted(): boolean;
    clearHosted(): void;
    getHosted(): HostedURL | undefined;
    setHosted(value?: HostedURL): Text;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Text.AsObject;
    static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Text;
    static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
}

export namespace Text {
    export type AsObject = {
        raw: string,
        url: string,
        allowDuplicateUrl: boolean,
        hosted?: HostedURL.AsObject,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;

    getPrimaryEmail(): string;
    setPrimaryEmail(value: string): User;

    getFirstName(): string;
    setFirstName(value: string): User;

    getLastName(): string;
    setLastName(value: string): User;

    getCompanyName(): string;
    setCompanyName(value: string): User;

    getJobTitle(): string;
    setJobTitle(value: string): User;

    getJobRole(): string;
    setJobRole(value: string): User;

    getBillType(): string;
    setBillType(value: string): User;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;


    hasDateGdprConsent(): boolean;
    clearDateGdprConsent(): void;
    getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;


    hasDateTosConsent(): boolean;
    clearDateTosConsent(): void;
    getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;


    hasDateMarketingConsent(): boolean;
    clearDateMarketingConsent(): void;
    getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): User;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): User;

    clearEmailAddressesList(): void;
    getEmailAddressesList(): Array<EmailAddress>;
    setEmailAddressesList(value: Array<EmailAddress>): User;
    addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

    getIsOrgAdmin(): boolean;
    setIsOrgAdmin(value: boolean): User;

    getTwoFactorAuthEnabled(): boolean;
    setTwoFactorAuthEnabled(value: boolean): User;

    getTeamsCount(): number;
    setTeamsCount(value: number): User;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): User;


    hasUserDetail(): boolean;
    clearUserDetail(): void;
    getUserDetail(): UserDetail | undefined;
    setUserDetail(value?: UserDetail): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        primaryEmail: string,
        firstName: string,
        lastName: string,
        companyName: string,
        jobTitle: string,
        jobRole: string,
        billType: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateGdprConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateTosConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateMarketingConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        emailAddressesList: Array<EmailAddress.AsObject>,
        isOrgAdmin: boolean,
        twoFactorAuthEnabled: boolean,
        teamsCount: number,
        visibility?: Visibility.AsObject,
        userDetail?: UserDetail.AsObject,
    }
}

export class UserDetail extends jspb.Message { 
    getPrimaryEmail(): string;
    setPrimaryEmail(value: string): UserDetail;

    getBillType(): string;
    setBillType(value: string): UserDetail;


    hasDateGdprConsent(): boolean;
    clearDateGdprConsent(): void;
    getDateGdprConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateGdprConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;


    hasDateTosConsent(): boolean;
    clearDateTosConsent(): void;
    getDateTosConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateTosConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;


    hasDateMarketingConsent(): boolean;
    clearDateMarketingConsent(): void;
    getDateMarketingConsent(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateMarketingConsent(value?: google_protobuf_timestamp_pb.Timestamp): UserDetail;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): UserDetail;

    clearEmailAddressesList(): void;
    getEmailAddressesList(): Array<EmailAddress>;
    setEmailAddressesList(value: Array<EmailAddress>): UserDetail;
    addEmailAddresses(value?: EmailAddress, index?: number): EmailAddress;

    getIsOrgAdmin(): boolean;
    setIsOrgAdmin(value: boolean): UserDetail;

    getTwoFactorAuthEnabled(): boolean;
    setTwoFactorAuthEnabled(value: boolean): UserDetail;

    getTeamsCount(): number;
    setTeamsCount(value: number): UserDetail;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDetail.AsObject;
    static toObject(includeInstance: boolean, msg: UserDetail): UserDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDetail;
    static deserializeBinaryFromReader(message: UserDetail, reader: jspb.BinaryReader): UserDetail;
}

export namespace UserDetail {
    export type AsObject = {
        primaryEmail: string,
        billType: string,
        dateGdprConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateTosConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateMarketingConsent?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        emailAddressesList: Array<EmailAddress.AsObject>,
        isOrgAdmin: boolean,
        twoFactorAuthEnabled: boolean,
        teamsCount: number,
    }
}

export class EmailAddress extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): EmailAddress;

    getPrimary(): boolean;
    setPrimary(value: boolean): EmailAddress;

    getVerified(): boolean;
    setVerified(value: boolean): EmailAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailAddress.AsObject;
    static toObject(includeInstance: boolean, msg: EmailAddress): EmailAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailAddress;
    static deserializeBinaryFromReader(message: EmailAddress, reader: jspb.BinaryReader): EmailAddress;
}

export namespace EmailAddress {
    export type AsObject = {
        email: string,
        primary: boolean,
        verified: boolean,
    }
}

export class Password extends jspb.Message { 
    getPlaintext(): string;
    setPlaintext(value: string): Password;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Password.AsObject;
    static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Password;
    static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
    export type AsObject = {
        plaintext: string,
    }
}

export class PasswordViolations extends jspb.Message { 
    getMinimumLength(): boolean;
    setMinimumLength(value: boolean): PasswordViolations;

    getMaximumLength(): boolean;
    setMaximumLength(value: boolean): PasswordViolations;

    getUpperCaseNeeded(): boolean;
    setUpperCaseNeeded(value: boolean): PasswordViolations;

    getLowerCaseNeeded(): boolean;
    setLowerCaseNeeded(value: boolean): PasswordViolations;

    getNumericNeeded(): boolean;
    setNumericNeeded(value: boolean): PasswordViolations;

    getNonAlphanumericNeeded(): boolean;
    setNonAlphanumericNeeded(value: boolean): PasswordViolations;

    getPasswordReuse(): boolean;
    setPasswordReuse(value: boolean): PasswordViolations;

    getExcludeNames(): boolean;
    setExcludeNames(value: boolean): PasswordViolations;

    getExcludeEmail(): boolean;
    setExcludeEmail(value: boolean): PasswordViolations;

    getNoConfusingLetters(): boolean;
    setNoConfusingLetters(value: boolean): PasswordViolations;

    getNoSimplePasswords(): boolean;
    setNoSimplePasswords(value: boolean): PasswordViolations;

    getNoCommonVocabs(): boolean;
    setNoCommonVocabs(value: boolean): PasswordViolations;

    getNoOverlapWithOld(): boolean;
    setNoOverlapWithOld(value: boolean): PasswordViolations;

    getPasswordLifespan(): boolean;
    setPasswordLifespan(value: boolean): PasswordViolations;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PasswordViolations.AsObject;
    static toObject(includeInstance: boolean, msg: PasswordViolations): PasswordViolations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PasswordViolations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PasswordViolations;
    static deserializeBinaryFromReader(message: PasswordViolations, reader: jspb.BinaryReader): PasswordViolations;
}

export namespace PasswordViolations {
    export type AsObject = {
        minimumLength: boolean,
        maximumLength: boolean,
        upperCaseNeeded: boolean,
        lowerCaseNeeded: boolean,
        numericNeeded: boolean,
        nonAlphanumericNeeded: boolean,
        passwordReuse: boolean,
        excludeNames: boolean,
        excludeEmail: boolean,
        noConfusingLetters: boolean,
        noSimplePasswords: boolean,
        noCommonVocabs: boolean,
        noOverlapWithOld: boolean,
        passwordLifespan: boolean,
    }
}

export class Video extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): Video;

    getBase64(): Uint8Array | string;
    getBase64_asU8(): Uint8Array;
    getBase64_asB64(): string;
    setBase64(value: Uint8Array | string): Video;

    getAllowDuplicateUrl(): boolean;
    setAllowDuplicateUrl(value: boolean): Video;

    getThumbnailUrl(): string;
    setThumbnailUrl(value: string): Video;


    hasHosted(): boolean;
    clearHosted(): void;
    getHosted(): HostedURL | undefined;
    setHosted(value?: HostedURL): Video;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Video.AsObject;
    static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Video;
    static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
    export type AsObject = {
        url: string,
        base64: Uint8Array | string,
        allowDuplicateUrl: boolean,
        thumbnailUrl: string,
        hosted?: HostedURL.AsObject,
    }
}

export class Workflow extends jspb.Message { 
    getId(): string;
    setId(value: string): Workflow;

    getAppId(): string;
    setAppId(value: string): Workflow;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;

    clearNodesList(): void;
    getNodesList(): Array<WorkflowNode>;
    setNodesList(value: Array<WorkflowNode>): Workflow;
    addNodes(value?: WorkflowNode, index?: number): WorkflowNode;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Workflow;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): Workflow;

    getUserId(): string;
    setUserId(value: string): Workflow;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Workflow;


    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): WorkflowVersion | undefined;
    setVersion(value?: WorkflowVersion): Workflow;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Workflow.AsObject;
    static toObject(includeInstance: boolean, msg: Workflow): Workflow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Workflow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Workflow;
    static deserializeBinaryFromReader(message: Workflow, reader: jspb.BinaryReader): Workflow;
}

export namespace Workflow {
    export type AsObject = {
        id: string,
        appId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        nodesList: Array<WorkflowNode.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        visibility?: Visibility.AsObject,
        userId: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        version?: WorkflowVersion.AsObject,
    }
}

export class WorkflowVersion extends jspb.Message { 
    getId(): string;
    setId(value: string): WorkflowVersion;

    getWorkflowId(): string;
    setWorkflowId(value: string): WorkflowVersion;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowVersion;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowVersion;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): WorkflowVersion;

    clearNodesList(): void;
    getNodesList(): Array<WorkflowNode>;
    setNodesList(value: Array<WorkflowNode>): WorkflowVersion;
    addNodes(value?: WorkflowNode, index?: number): WorkflowNode;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): WorkflowVersion;

    getAppId(): string;
    setAppId(value: string): WorkflowVersion;

    getUserId(): string;
    setUserId(value: string): WorkflowVersion;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowVersion.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowVersion): WorkflowVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowVersion;
    static deserializeBinaryFromReader(message: WorkflowVersion, reader: jspb.BinaryReader): WorkflowVersion;
}

export namespace WorkflowVersion {
    export type AsObject = {
        id: string,
        workflowId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        visibility?: Visibility.AsObject,
        nodesList: Array<WorkflowNode.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        appId: string,
        userId: string,
    }
}

export class WorkflowNode extends jspb.Message { 
    getId(): string;
    setId(value: string): WorkflowNode;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): Model | undefined;
    setModel(value?: Model): WorkflowNode;

    clearNodeInputsList(): void;
    getNodeInputsList(): Array<NodeInput>;
    setNodeInputsList(value: Array<NodeInput>): WorkflowNode;
    addNodeInputs(value?: NodeInput, index?: number): NodeInput;

    getSuppressOutput(): boolean;
    setSuppressOutput(value: boolean): WorkflowNode;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowNode.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowNode): WorkflowNode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowNode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowNode;
    static deserializeBinaryFromReader(message: WorkflowNode, reader: jspb.BinaryReader): WorkflowNode;
}

export namespace WorkflowNode {
    export type AsObject = {
        id: string,
        model?: Model.AsObject,
        nodeInputsList: Array<NodeInput.AsObject>,
        suppressOutput: boolean,
    }
}

export class NodeInput extends jspb.Message { 
    getNodeId(): string;
    setNodeId(value: string): NodeInput;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInput.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInput): NodeInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInput;
    static deserializeBinaryFromReader(message: NodeInput, reader: jspb.BinaryReader): NodeInput;
}

export namespace NodeInput {
    export type AsObject = {
        nodeId: string,
    }
}

export class WorkflowResult extends jspb.Message { 
    getId(): string;
    setId(value: string): WorkflowResult;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): WorkflowResult;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowResult;


    hasModel(): boolean;
    clearModel(): void;
    getModel(): Model | undefined;
    setModel(value?: Model): WorkflowResult;


    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): WorkflowResult;

    clearOutputsList(): void;
    getOutputsList(): Array<Output>;
    setOutputsList(value: Array<Output>): WorkflowResult;
    addOutputs(value?: Output, index?: number): Output;

    getSuppressOutput(): boolean;
    setSuppressOutput(value: boolean): WorkflowResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowResult.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowResult): WorkflowResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowResult;
    static deserializeBinaryFromReader(message: WorkflowResult, reader: jspb.BinaryReader): WorkflowResult;
}

export namespace WorkflowResult {
    export type AsObject = {
        id: string,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        model?: Model.AsObject,
        input?: Input.AsObject,
        outputsList: Array<Output.AsObject>,
        suppressOutput: boolean,
    }
}

export class WorkflowState extends jspb.Message { 
    getId(): string;
    setId(value: string): WorkflowState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorkflowState.AsObject;
    static toObject(includeInstance: boolean, msg: WorkflowState): WorkflowState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorkflowState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorkflowState;
    static deserializeBinaryFromReader(message: WorkflowState, reader: jspb.BinaryReader): WorkflowState;
}

export namespace WorkflowState {
    export type AsObject = {
        id: string,
    }
}

export class AppDuplication extends jspb.Message { 
    getId(): string;
    setId(value: string): AppDuplication;

    getNewAppId(): string;
    setNewAppId(value: string): AppDuplication;

    getNewAppName(): string;
    setNewAppName(value: string): AppDuplication;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): AppDuplication;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AppDuplication;


    hasLastModifiedAt(): boolean;
    clearLastModifiedAt(): void;
    getLastModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): AppDuplication;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): AppDuplicationFilters | undefined;
    setFilter(value?: AppDuplicationFilters): AppDuplication;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppDuplication.AsObject;
    static toObject(includeInstance: boolean, msg: AppDuplication): AppDuplication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppDuplication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppDuplication;
    static deserializeBinaryFromReader(message: AppDuplication, reader: jspb.BinaryReader): AppDuplication;
}

export namespace AppDuplication {
    export type AsObject = {
        id: string,
        newAppId: string,
        newAppName: string,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastModifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        filter?: AppDuplicationFilters.AsObject,
    }
}

export class AppDuplicationFilters extends jspb.Message { 
    getCopyInputs(): boolean;
    setCopyInputs(value: boolean): AppDuplicationFilters;

    getCopyConcepts(): boolean;
    setCopyConcepts(value: boolean): AppDuplicationFilters;

    getCopyAnnotations(): boolean;
    setCopyAnnotations(value: boolean): AppDuplicationFilters;

    getCopyModels(): boolean;
    setCopyModels(value: boolean): AppDuplicationFilters;

    getCopyWorkflows(): boolean;
    setCopyWorkflows(value: boolean): AppDuplicationFilters;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppDuplicationFilters.AsObject;
    static toObject(includeInstance: boolean, msg: AppDuplicationFilters): AppDuplicationFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppDuplicationFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppDuplicationFilters;
    static deserializeBinaryFromReader(message: AppDuplicationFilters, reader: jspb.BinaryReader): AppDuplicationFilters;
}

export namespace AppDuplicationFilters {
    export type AsObject = {
        copyInputs: boolean,
        copyConcepts: boolean,
        copyAnnotations: boolean,
        copyModels: boolean,
        copyWorkflows: boolean,
    }
}

export class Task extends jspb.Message { 
    getId(): string;
    setId(value: string): Task;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;


    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    getType(): Task.TaskType;
    setType(value: Task.TaskType): Task;

    getDescription(): string;
    setDescription(value: string): Task;


    hasWorker(): boolean;
    clearWorker(): void;
    getWorker(): TaskWorker | undefined;
    setWorker(value?: TaskWorker): Task;

    clearConceptIdsList(): void;
    getConceptIdsList(): Array<string>;
    setConceptIdsList(value: Array<string>): Task;
    addConceptIds(value: string, index?: number): string;


    hasInputSource(): boolean;
    clearInputSource(): void;
    getInputSource(): TaskInputSource | undefined;
    setInputSource(value?: TaskInputSource): Task;

    getSampleMs(): number;
    setSampleMs(value: number): Task;


    hasAiAssistant(): boolean;
    clearAiAssistant(): void;
    getAiAssistant(): TaskAIAssistant | undefined;
    setAiAssistant(value?: TaskAIAssistant): Task;


    hasReview(): boolean;
    clearReview(): void;
    getReview(): TaskReview | undefined;
    setReview(value?: TaskReview): Task;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): Task;

    getName(): string;
    setName(value: string): Task;


    hasAiAssistParams(): boolean;
    clearAiAssistParams(): void;
    getAiAssistParams(): AiAssistParameters | undefined;
    setAiAssistParams(value?: AiAssistParameters): Task;


    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): Visibility | undefined;
    setVisibility(value?: Visibility): Task;

    getAppId(): string;
    setAppId(value: string): Task;

    getUserId(): string;
    setUserId(value: string): Task;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        type: Task.TaskType,
        description: string,
        worker?: TaskWorker.AsObject,
        conceptIdsList: Array<string>,
        inputSource?: TaskInputSource.AsObject,
        sampleMs: number,
        aiAssistant?: TaskAIAssistant.AsObject,
        review?: TaskReview.AsObject,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
        name: string,
        aiAssistParams?: AiAssistParameters.AsObject,
        visibility?: Visibility.AsObject,
        appId: string,
        userId: string,
    }

    export enum TaskType {
    TYPE_NOT_SET = 0,
    CONCEPTS_CLASSIFICATION = 1,
    BOUNDING_BOX_DETECTION = 2,
    POLYGON_DETECTION = 3,
    }

}

export class AiAssistParameters extends jspb.Message { 
    getMinThreshold(): number;
    setMinThreshold(value: number): AiAssistParameters;

    getMaxThreshold(): number;
    setMaxThreshold(value: number): AiAssistParameters;

    clearConceptRelationIdsList(): void;
    getConceptRelationIdsList(): Array<string>;
    setConceptRelationIdsList(value: Array<string>): AiAssistParameters;
    addConceptRelationIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AiAssistParameters.AsObject;
    static toObject(includeInstance: boolean, msg: AiAssistParameters): AiAssistParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AiAssistParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AiAssistParameters;
    static deserializeBinaryFromReader(message: AiAssistParameters, reader: jspb.BinaryReader): AiAssistParameters;
}

export namespace AiAssistParameters {
    export type AsObject = {
        minThreshold: number,
        maxThreshold: number,
        conceptRelationIdsList: Array<string>,
    }
}

export class TaskWorker extends jspb.Message { 
    getStrategy(): TaskWorker.TaskWorkerStrategy;
    setStrategy(value: TaskWorker.TaskWorkerStrategy): TaskWorker;

    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): TaskWorker;
    addUserIds(value: string, index?: number): string;


    hasPartitionedStrategyInfo(): boolean;
    clearPartitionedStrategyInfo(): void;
    getPartitionedStrategyInfo(): TaskWorkerPartitionedStrategyInfo | undefined;
    setPartitionedStrategyInfo(value?: TaskWorkerPartitionedStrategyInfo): TaskWorker;


    getStrategyInfoCase(): TaskWorker.StrategyInfoCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskWorker.AsObject;
    static toObject(includeInstance: boolean, msg: TaskWorker): TaskWorker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskWorker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskWorker;
    static deserializeBinaryFromReader(message: TaskWorker, reader: jspb.BinaryReader): TaskWorker;
}

export namespace TaskWorker {
    export type AsObject = {
        strategy: TaskWorker.TaskWorkerStrategy,
        userIdsList: Array<string>,
        partitionedStrategyInfo?: TaskWorkerPartitionedStrategyInfo.AsObject,
    }

    export enum TaskWorkerStrategy {
    WORKER_STRATEGY_NOT_SET = 0,
    PARTITIONED = 2,
    FULL = 3,
    }


    export enum StrategyInfoCase {
        STRATEGY_INFO_NOT_SET = 0,
    
    PARTITIONED_STRATEGY_INFO = 3,

    }

}

export class TaskWorkerPartitionedStrategyInfo extends jspb.Message { 
    getType(): TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy;
    setType(value: TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy): TaskWorkerPartitionedStrategyInfo;

    getWorkersPerInput(): number;
    setWorkersPerInput(value: number): TaskWorkerPartitionedStrategyInfo;


    hasWeights(): boolean;
    clearWeights(): void;
    getWeights(): google_protobuf_struct_pb.Struct | undefined;
    setWeights(value?: google_protobuf_struct_pb.Struct): TaskWorkerPartitionedStrategyInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskWorkerPartitionedStrategyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TaskWorkerPartitionedStrategyInfo): TaskWorkerPartitionedStrategyInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskWorkerPartitionedStrategyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskWorkerPartitionedStrategyInfo;
    static deserializeBinaryFromReader(message: TaskWorkerPartitionedStrategyInfo, reader: jspb.BinaryReader): TaskWorkerPartitionedStrategyInfo;
}

export namespace TaskWorkerPartitionedStrategyInfo {
    export type AsObject = {
        type: TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy,
        workersPerInput: number,
        weights?: google_protobuf_struct_pb.Struct.AsObject,
    }

    export enum TaskWorkerPartitionedStrategy {
    PARTITIONED_WORKER_STRATEGY_NOT_SET = 0,
    EVENLY = 1,
    WEIGHTED = 2,
    }

}

export class TaskInputSource extends jspb.Message { 
    getType(): TaskInputSource.TaskInputSourceType;
    setType(value: TaskInputSource.TaskInputSourceType): TaskInputSource;

    getId(): string;
    setId(value: string): TaskInputSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskInputSource.AsObject;
    static toObject(includeInstance: boolean, msg: TaskInputSource): TaskInputSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskInputSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskInputSource;
    static deserializeBinaryFromReader(message: TaskInputSource, reader: jspb.BinaryReader): TaskInputSource;
}

export namespace TaskInputSource {
    export type AsObject = {
        type: TaskInputSource.TaskInputSourceType,
        id: string,
    }

    export enum TaskInputSourceType {
    INPUT_SOURCE_TYPE_NOT_SET = 0,
    ALL_INPUTS = 1,
    SAVED_SEARCH = 2,
    }

}

export class TaskReview extends jspb.Message { 
    getStrategy(): TaskReview.TaskReviewStrategy;
    setStrategy(value: TaskReview.TaskReviewStrategy): TaskReview;

    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): TaskReview;
    addUserIds(value: string, index?: number): string;


    hasManualStrategyInfo(): boolean;
    clearManualStrategyInfo(): void;
    getManualStrategyInfo(): TaskReviewManualStrategyInfo | undefined;
    setManualStrategyInfo(value?: TaskReviewManualStrategyInfo): TaskReview;


    hasConsensusStrategyInfo(): boolean;
    clearConsensusStrategyInfo(): void;
    getConsensusStrategyInfo(): TaskReviewConsensusStrategyInfo | undefined;
    setConsensusStrategyInfo(value?: TaskReviewConsensusStrategyInfo): TaskReview;


    getStrategyInfoCase(): TaskReview.StrategyInfoCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskReview.AsObject;
    static toObject(includeInstance: boolean, msg: TaskReview): TaskReview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskReview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskReview;
    static deserializeBinaryFromReader(message: TaskReview, reader: jspb.BinaryReader): TaskReview;
}

export namespace TaskReview {
    export type AsObject = {
        strategy: TaskReview.TaskReviewStrategy,
        userIdsList: Array<string>,
        manualStrategyInfo?: TaskReviewManualStrategyInfo.AsObject,
        consensusStrategyInfo?: TaskReviewConsensusStrategyInfo.AsObject,
    }

    export enum TaskReviewStrategy {
    TASK_REVIEW_STRATEGY_NOT_SET = 0,
    NONE = 1,
    MANUAL = 2,
    CONSENSUS = 3,
    }


    export enum StrategyInfoCase {
        STRATEGY_INFO_NOT_SET = 0,
    
    MANUAL_STRATEGY_INFO = 3,

    CONSENSUS_STRATEGY_INFO = 4,

    }

}

export class TaskReviewManualStrategyInfo extends jspb.Message { 
    getSamplePercentage(): number;
    setSamplePercentage(value: number): TaskReviewManualStrategyInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskReviewManualStrategyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TaskReviewManualStrategyInfo): TaskReviewManualStrategyInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskReviewManualStrategyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskReviewManualStrategyInfo;
    static deserializeBinaryFromReader(message: TaskReviewManualStrategyInfo, reader: jspb.BinaryReader): TaskReviewManualStrategyInfo;
}

export namespace TaskReviewManualStrategyInfo {
    export type AsObject = {
        samplePercentage: number,
    }
}

export class TaskReviewConsensusStrategyInfo extends jspb.Message { 
    getApprovalThreshold(): number;
    setApprovalThreshold(value: number): TaskReviewConsensusStrategyInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskReviewConsensusStrategyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TaskReviewConsensusStrategyInfo): TaskReviewConsensusStrategyInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskReviewConsensusStrategyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskReviewConsensusStrategyInfo;
    static deserializeBinaryFromReader(message: TaskReviewConsensusStrategyInfo, reader: jspb.BinaryReader): TaskReviewConsensusStrategyInfo;
}

export namespace TaskReviewConsensusStrategyInfo {
    export type AsObject = {
        approvalThreshold: number,
    }
}

export class TaskAIAssistant extends jspb.Message { 
    getWorkflowId(): string;
    setWorkflowId(value: string): TaskAIAssistant;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskAIAssistant.AsObject;
    static toObject(includeInstance: boolean, msg: TaskAIAssistant): TaskAIAssistant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskAIAssistant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskAIAssistant;
    static deserializeBinaryFromReader(message: TaskAIAssistant, reader: jspb.BinaryReader): TaskAIAssistant;
}

export namespace TaskAIAssistant {
    export type AsObject = {
        workflowId: string,
    }
}

export class TaskStatusCountPerUser extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): TaskStatusCountPerUser;

    getPending(): number;
    setPending(value: number): TaskStatusCountPerUser;

    getAwaitingReview(): number;
    setAwaitingReview(value: number): TaskStatusCountPerUser;

    getSuccess(): number;
    setSuccess(value: number): TaskStatusCountPerUser;

    getReviewDenied(): number;
    setReviewDenied(value: number): TaskStatusCountPerUser;

    getAwaitingConsensusReview(): number;
    setAwaitingConsensusReview(value: number): TaskStatusCountPerUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatusCountPerUser.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatusCountPerUser): TaskStatusCountPerUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatusCountPerUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatusCountPerUser;
    static deserializeBinaryFromReader(message: TaskStatusCountPerUser, reader: jspb.BinaryReader): TaskStatusCountPerUser;
}

export namespace TaskStatusCountPerUser {
    export type AsObject = {
        userId: string,
        pending: number,
        awaitingReview: number,
        success: number,
        reviewDenied: number,
        awaitingConsensusReview: number,
    }
}

export class Collector extends jspb.Message { 
    getId(): string;
    setId(value: string): Collector;

    getDescription(): string;
    setDescription(value: string): Collector;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Collector;

    getPreQueueWorkflowId(): string;
    setPreQueueWorkflowId(value: string): Collector;

    getPostQueueWorkflowId(): string;
    setPostQueueWorkflowId(value: string): Collector;


    hasCollectorSource(): boolean;
    clearCollectorSource(): void;
    getCollectorSource(): CollectorSource | undefined;
    setCollectorSource(value?: CollectorSource): Collector;


    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_clarifai_api_status_status_pb.Status | undefined;
    setStatus(value?: proto_clarifai_api_status_status_pb.Status): Collector;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collector.AsObject;
    static toObject(includeInstance: boolean, msg: Collector): Collector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collector;
    static deserializeBinaryFromReader(message: Collector, reader: jspb.BinaryReader): Collector;
}

export namespace Collector {
    export type AsObject = {
        id: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        preQueueWorkflowId: string,
        postQueueWorkflowId: string,
        collectorSource?: CollectorSource.AsObject,
        status?: proto_clarifai_api_status_status_pb.Status.AsObject,
    }
}

export class CollectorSource extends jspb.Message { 

    hasApiPostModelOutputsCollectorSource(): boolean;
    clearApiPostModelOutputsCollectorSource(): void;
    getApiPostModelOutputsCollectorSource(): APIPostModelOutputsCollectorSource | undefined;
    setApiPostModelOutputsCollectorSource(value?: APIPostModelOutputsCollectorSource): CollectorSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectorSource.AsObject;
    static toObject(includeInstance: boolean, msg: CollectorSource): CollectorSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectorSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectorSource;
    static deserializeBinaryFromReader(message: CollectorSource, reader: jspb.BinaryReader): CollectorSource;
}

export namespace CollectorSource {
    export type AsObject = {
        apiPostModelOutputsCollectorSource?: APIPostModelOutputsCollectorSource.AsObject,
    }
}

export class APIPostModelOutputsCollectorSource extends jspb.Message { 
    getModelUserId(): string;
    setModelUserId(value: string): APIPostModelOutputsCollectorSource;

    getModelAppId(): string;
    setModelAppId(value: string): APIPostModelOutputsCollectorSource;

    getModelId(): string;
    setModelId(value: string): APIPostModelOutputsCollectorSource;

    getModelVersionId(): string;
    setModelVersionId(value: string): APIPostModelOutputsCollectorSource;

    getPostInputsKeyId(): string;
    setPostInputsKeyId(value: string): APIPostModelOutputsCollectorSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): APIPostModelOutputsCollectorSource.AsObject;
    static toObject(includeInstance: boolean, msg: APIPostModelOutputsCollectorSource): APIPostModelOutputsCollectorSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: APIPostModelOutputsCollectorSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): APIPostModelOutputsCollectorSource;
    static deserializeBinaryFromReader(message: APIPostModelOutputsCollectorSource, reader: jspb.BinaryReader): APIPostModelOutputsCollectorSource;
}

export namespace APIPostModelOutputsCollectorSource {
    export type AsObject = {
        modelUserId: string,
        modelAppId: string,
        modelId: string,
        modelVersionId: string,
        postInputsKeyId: string,
    }
}

export class StatValue extends jspb.Message { 

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValue;

    getValue(): number;
    setValue(value: number): StatValue;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): StatValue;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatValue.AsObject;
    static toObject(includeInstance: boolean, msg: StatValue): StatValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatValue;
    static deserializeBinaryFromReader(message: StatValue, reader: jspb.BinaryReader): StatValue;
}

export namespace StatValue {
    export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        value: number,
        tagsList: Array<string>,
    }
}

export class StatValueAggregateResult extends jspb.Message { 
    clearStatValueAggregatesList(): void;
    getStatValueAggregatesList(): Array<StatValueAggregate>;
    setStatValueAggregatesList(value: Array<StatValueAggregate>): StatValueAggregateResult;
    addStatValueAggregates(value?: StatValueAggregate, index?: number): StatValueAggregate;


    hasStatValueAggregateQuery(): boolean;
    clearStatValueAggregateQuery(): void;
    getStatValueAggregateQuery(): StatValueAggregateQuery | undefined;
    setStatValueAggregateQuery(value?: StatValueAggregateQuery): StatValueAggregateResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatValueAggregateResult.AsObject;
    static toObject(includeInstance: boolean, msg: StatValueAggregateResult): StatValueAggregateResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatValueAggregateResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatValueAggregateResult;
    static deserializeBinaryFromReader(message: StatValueAggregateResult, reader: jspb.BinaryReader): StatValueAggregateResult;
}

export namespace StatValueAggregateResult {
    export type AsObject = {
        statValueAggregatesList: Array<StatValueAggregate.AsObject>,
        statValueAggregateQuery?: StatValueAggregateQuery.AsObject,
    }
}

export class StatValueAggregate extends jspb.Message { 

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregate;

    getAggregateValue(): number;
    setAggregateValue(value: number): StatValueAggregate;

    getCount(): number;
    setCount(value: number): StatValueAggregate;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): StatValueAggregate;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatValueAggregate.AsObject;
    static toObject(includeInstance: boolean, msg: StatValueAggregate): StatValueAggregate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatValueAggregate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatValueAggregate;
    static deserializeBinaryFromReader(message: StatValueAggregate, reader: jspb.BinaryReader): StatValueAggregate;
}

export namespace StatValueAggregate {
    export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        aggregateValue: number,
        count: number,
        tagsList: Array<string>,
    }
}

export class StatValueAggregateQuery extends jspb.Message { 
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): StatValueAggregateQuery;
    addTags(value: string, index?: number): string;

    clearTagGroupsList(): void;
    getTagGroupsList(): Array<string>;
    setTagGroupsList(value: Array<string>): StatValueAggregateQuery;
    addTagGroups(value: string, index?: number): string;

    getStatValueAggType(): StatValueAggType;
    setStatValueAggType(value: StatValueAggType): StatValueAggregateQuery;

    getStatTimeAggType(): StatTimeAggType;
    setStatTimeAggType(value: StatTimeAggType): StatValueAggregateQuery;


    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregateQuery;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): StatValueAggregateQuery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatValueAggregateQuery.AsObject;
    static toObject(includeInstance: boolean, msg: StatValueAggregateQuery): StatValueAggregateQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatValueAggregateQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatValueAggregateQuery;
    static deserializeBinaryFromReader(message: StatValueAggregateQuery, reader: jspb.BinaryReader): StatValueAggregateQuery;
}

export namespace StatValueAggregateQuery {
    export type AsObject = {
        tagsList: Array<string>,
        tagGroupsList: Array<string>,
        statValueAggType: StatValueAggType,
        statTimeAggType: StatTimeAggType,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Visibility extends jspb.Message { 
    getGettable(): Visibility.Gettable;
    setGettable(value: Visibility.Gettable): Visibility;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Visibility.AsObject;
    static toObject(includeInstance: boolean, msg: Visibility): Visibility.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Visibility, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Visibility;
    static deserializeBinaryFromReader(message: Visibility, reader: jspb.BinaryReader): Visibility;
}

export namespace Visibility {
    export type AsObject = {
        gettable: Visibility.Gettable,
    }

    export enum Gettable {
    UNKNOWN_VISIBILITY = 0,
    PRIVATE = 10,
    ORG = 30,
    PUBLIC = 50,
    }

}

export class TrendingMetric extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): TrendingMetric;

    getAppId(): string;
    setAppId(value: string): TrendingMetric;

    getObjectId(): string;
    setObjectId(value: string): TrendingMetric;

    getViewCount(): number;
    setViewCount(value: number): TrendingMetric;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrendingMetric.AsObject;
    static toObject(includeInstance: boolean, msg: TrendingMetric): TrendingMetric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrendingMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrendingMetric;
    static deserializeBinaryFromReader(message: TrendingMetric, reader: jspb.BinaryReader): TrendingMetric;
}

export namespace TrendingMetric {
    export type AsObject = {
        userId: string,
        appId: string,
        objectId: string,
        viewCount: number,
    }
}

export class TimeSegment extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): TimeSegment;


    hasTimeInfo(): boolean;
    clearTimeInfo(): void;
    getTimeInfo(): TimeInfo | undefined;
    setTimeInfo(value?: TimeInfo): TimeSegment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSegment.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSegment): TimeSegment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSegment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSegment;
    static deserializeBinaryFromReader(message: TimeSegment, reader: jspb.BinaryReader): TimeSegment;
}

export namespace TimeSegment {
    export type AsObject = {
        data?: Data.AsObject,
        timeInfo?: TimeInfo.AsObject,
    }
}

export class TimeInfo extends jspb.Message { 
    getNumFrames(): number;
    setNumFrames(value: number): TimeInfo;


    hasBeginTime(): boolean;
    clearBeginTime(): void;
    getBeginTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBeginTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeInfo;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TimeInfo): TimeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeInfo;
    static deserializeBinaryFromReader(message: TimeInfo, reader: jspb.BinaryReader): TimeInfo;
}

export namespace TimeInfo {
    export type AsObject = {
        numFrames: number,
        beginTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum ExpirationAction {
    EXPIRATION_ACTION_NOT_SET = 0,
    DELAY = 1,
    EXPIRY = 2,
}

export enum LicenseScope {
    LICENSE_SCOPE_NOT_SET = 0,
    PREDICT = 1,
    TRAIN = 2,
    SEARCH = 3,
}

export enum ValueComparator {
    CONCEPT_THRESHOLD_NOT_SET = 0,
    GREATER_THAN = 1,
    GREATER_THAN_OR_EQUAL = 2,
    LESS_THAN = 3,
    LESS_THAN_OR_EQUAL = 4,
    EQUAL = 5,
}

export enum EvaluationType {
    CLASSIFICATION = 0,
    DETECTION = 1,
}

export enum APIEventType {
    API_EVENT_TYPE_NOT_SET = 0,
    ON_PREM_PREDICT = 1,
    ON_PREM_TRAIN = 2,
    ON_PREM_SEARCH = 3,
}

export enum UsageIntervalType {
    UNDEF = 0,
    DAY = 1,
    MONTH = 2,
    YEAR = 3,
}

export enum RoleType {
    TEAM = 0,
    ORG = 1,
}

export enum StatValueAggType {
    SUM = 0,
    AVG = 1,
}

export enum StatTimeAggType {
    NO_TIME_AGG = 0,
    YEAR = 1,
    MONTH = 2,
    WEEK = 3,
    DAY = 4,
    HOUR = 5,
    MINUTE = 6,
}

export enum ValidationErrorType {
    VALIDATION_ERROR_TYPE_NOT_SET = 0,
    RESTRICTED = 1,
    DATABASE = 2,
    FORMAT = 3,
}

export enum TagCategoryName {
    UNCATEGORIZED = 0,
    USE_CASE = 1,
    LANGUAGE = 2,
    LICENCE = 3,
    TOOLKIT = 4,
}
