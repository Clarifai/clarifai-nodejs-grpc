// package: clarifai.api
// file: proto/clarifai/api/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_clarifai_api_service_pb from "../../../proto/clarifai/api/service_pb";
import * as proto_clarifai_api_resources_pb from "../../../proto/clarifai/api/resources_pb";
import * as proto_clarifai_api_status_status_pb from "../../../proto/clarifai/api/status/status_pb";
import * as proto_clarifai_api_utils_extensions_pb from "../../../proto/clarifai/api/utils/extensions_pb";
import * as proto_clarifai_auth_scope_scope_pb from "../../../proto/clarifai/auth/scope/scope_pb";
import * as proto_clarifai_auth_util_extension_pb from "../../../proto/clarifai/auth/util/extension_pb";
import * as proto_clarifai_api_status_status_code_pb from "../../../proto/clarifai/api/status/status_code_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IV2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listConceptRelations: IV2Service_IListConceptRelations;
    postConceptRelations: IV2Service_IPostConceptRelations;
    deleteConceptRelations: IV2Service_IDeleteConceptRelations;
    getConceptCounts: IV2Service_IGetConceptCounts;
    getConcept: IV2Service_IGetConcept;
    listConcepts: IV2Service_IListConcepts;
    postConceptsSearches: IV2Service_IPostConceptsSearches;
    postConcepts: IV2Service_IPostConcepts;
    patchConcepts: IV2Service_IPatchConcepts;
    getConceptLanguage: IV2Service_IGetConceptLanguage;
    listConceptLanguages: IV2Service_IListConceptLanguages;
    postConceptLanguages: IV2Service_IPostConceptLanguages;
    patchConceptLanguages: IV2Service_IPatchConceptLanguages;
    listKnowledgeGraphs: IV2Service_IListKnowledgeGraphs;
    postKnowledgeGraphs: IV2Service_IPostKnowledgeGraphs;
    postConceptMappingJobs: IV2Service_IPostConceptMappingJobs;
    getAnnotation: IV2Service_IGetAnnotation;
    listAnnotations: IV2Service_IListAnnotations;
    postAnnotations: IV2Service_IPostAnnotations;
    patchAnnotations: IV2Service_IPatchAnnotations;
    patchAnnotationsStatus: IV2Service_IPatchAnnotationsStatus;
    deleteAnnotation: IV2Service_IDeleteAnnotation;
    deleteAnnotations: IV2Service_IDeleteAnnotations;
    postAnnotationsSearches: IV2Service_IPostAnnotationsSearches;
    getInputCount: IV2Service_IGetInputCount;
    streamInputs: IV2Service_IStreamInputs;
    getInputSamples: IV2Service_IGetInputSamples;
    getInput: IV2Service_IGetInput;
    listInputs: IV2Service_IListInputs;
    postInputs: IV2Service_IPostInputs;
    patchInputs: IV2Service_IPatchInputs;
    deleteInput: IV2Service_IDeleteInput;
    deleteInputs: IV2Service_IDeleteInputs;
    postInputsSearches: IV2Service_IPostInputsSearches;
    postModelOutputs: IV2Service_IPostModelOutputs;
    getModelType: IV2Service_IGetModelType;
    listOpenSourceLicenses: IV2Service_IListOpenSourceLicenses;
    listModelTypes: IV2Service_IListModelTypes;
    getModel: IV2Service_IGetModel;
    getModelOutputInfo: IV2Service_IGetModelOutputInfo;
    listModels: IV2Service_IListModels;
    postModelsSearches: IV2Service_IPostModelsSearches;
    postModels: IV2Service_IPostModels;
    patchModels: IV2Service_IPatchModels;
    deleteModel: IV2Service_IDeleteModel;
    deleteModels: IV2Service_IDeleteModels;
    listModelInputs: IV2Service_IListModelInputs;
    getModelVersion: IV2Service_IGetModelVersion;
    listModelVersions: IV2Service_IListModelVersions;
    postModelVersions: IV2Service_IPostModelVersions;
    patchModelVersions: IV2Service_IPatchModelVersions;
    deleteModelVersion: IV2Service_IDeleteModelVersion;
    getModelVersionMetrics: IV2Service_IGetModelVersionMetrics;
    postModelVersionMetrics: IV2Service_IPostModelVersionMetrics;
    listModelReferences: IV2Service_IListModelReferences;
    getModelVersionInputExample: IV2Service_IGetModelVersionInputExample;
    listModelVersionInputExamples: IV2Service_IListModelVersionInputExamples;
    getWorkflow: IV2Service_IGetWorkflow;
    listWorkflows: IV2Service_IListWorkflows;
    postWorkflows: IV2Service_IPostWorkflows;
    patchWorkflows: IV2Service_IPatchWorkflows;
    deleteWorkflow: IV2Service_IDeleteWorkflow;
    deleteWorkflows: IV2Service_IDeleteWorkflows;
    postWorkflowResults: IV2Service_IPostWorkflowResults;
    postWorkflowResultsSimilarity: IV2Service_IPostWorkflowResultsSimilarity;
    listWorkflowVersions: IV2Service_IListWorkflowVersions;
    getWorkflowVersion: IV2Service_IGetWorkflowVersion;
    deleteWorkflowVersions: IV2Service_IDeleteWorkflowVersions;
    patchWorkflowVersions: IV2Service_IPatchWorkflowVersions;
    getKey: IV2Service_IGetKey;
    listKeys: IV2Service_IListKeys;
    listAppKeys: IV2Service_IListAppKeys;
    deleteKey: IV2Service_IDeleteKey;
    postKeys: IV2Service_IPostKeys;
    patchKeys: IV2Service_IPatchKeys;
    myScopes: IV2Service_IMyScopes;
    listScopes: IV2Service_IListScopes;
    getApp: IV2Service_IGetApp;
    listApps: IV2Service_IListApps;
    deleteApp: IV2Service_IDeleteApp;
    postApps: IV2Service_IPostApps;
    patchApps: IV2Service_IPatchApps;
    postAppsSearches: IV2Service_IPostAppsSearches;
    postValidatePassword: IV2Service_IPostValidatePassword;
    getSearch: IV2Service_IGetSearch;
    listSearches: IV2Service_IListSearches;
    postSearches: IV2Service_IPostSearches;
    postSearchesByID: IV2Service_IPostSearchesByID;
    postAnnotationSearchMetrics: IV2Service_IPostAnnotationSearchMetrics;
    getAnnotationSearchMetrics: IV2Service_IGetAnnotationSearchMetrics;
    listAnnotationSearchMetrics: IV2Service_IListAnnotationSearchMetrics;
    deleteAnnotationSearchMetrics: IV2Service_IDeleteAnnotationSearchMetrics;
    deleteSearch: IV2Service_IDeleteSearch;
    listStatusCodes: IV2Service_IListStatusCodes;
    getStatusCode: IV2Service_IGetStatusCode;
    listCollaborators: IV2Service_IListCollaborators;
    postCollaborators: IV2Service_IPostCollaborators;
    patchCollaborators: IV2Service_IPatchCollaborators;
    deleteCollaborators: IV2Service_IDeleteCollaborators;
    listCollaborations: IV2Service_IListCollaborations;
    postAppDuplications: IV2Service_IPostAppDuplications;
    listAppDuplications: IV2Service_IListAppDuplications;
    getAppDuplication: IV2Service_IGetAppDuplication;
    postTasks: IV2Service_IPostTasks;
    getTaskAnnotationCount: IV2Service_IGetTaskAnnotationCount;
    getTaskInputCount: IV2Service_IGetTaskInputCount;
    getTask: IV2Service_IGetTask;
    listTasks: IV2Service_IListTasks;
    patchTasks: IV2Service_IPatchTasks;
    deleteTasks: IV2Service_IDeleteTasks;
    postCollectors: IV2Service_IPostCollectors;
    getCollector: IV2Service_IGetCollector;
    listCollectors: IV2Service_IListCollectors;
    patchCollectors: IV2Service_IPatchCollectors;
    deleteCollectors: IV2Service_IDeleteCollectors;
    postStatValues: IV2Service_IPostStatValues;
    postStatValuesAggregate: IV2Service_IPostStatValuesAggregate;
    postTrendingMetricsView: IV2Service_IPostTrendingMetricsView;
    listTrendingMetricsViews: IV2Service_IListTrendingMetricsViews;
}

interface IV2Service_IListConceptRelations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse> {
    path: "/clarifai.api.V2/ListConceptRelations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListConceptRelationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListConceptRelationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
}
interface IV2Service_IPostConceptRelations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse> {
    path: "/clarifai.api.V2/PostConceptRelations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostConceptRelationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostConceptRelationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
}
interface IV2Service_IDeleteConceptRelations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteConceptRelations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteConceptRelationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteConceptRelationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetConceptCounts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetConceptCountsRequest, proto_clarifai_api_service_pb.MultiConceptCountResponse> {
    path: "/clarifai.api.V2/GetConceptCounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetConceptCountsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetConceptCountsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptCountResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptCountResponse>;
}
interface IV2Service_IGetConcept extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetConceptRequest, proto_clarifai_api_service_pb.SingleConceptResponse> {
    path: "/clarifai.api.V2/GetConcept";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetConceptRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetConceptRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleConceptResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleConceptResponse>;
}
interface IV2Service_IListConcepts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse> {
    path: "/clarifai.api.V2/ListConcepts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListConceptsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListConceptsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
}
interface IV2Service_IPostConceptsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostConceptsSearchesRequest, proto_clarifai_api_service_pb.MultiConceptResponse> {
    path: "/clarifai.api.V2/PostConceptsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostConceptsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostConceptsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
}
interface IV2Service_IPostConcepts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse> {
    path: "/clarifai.api.V2/PostConcepts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostConceptsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostConceptsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
}
interface IV2Service_IPatchConcepts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse> {
    path: "/clarifai.api.V2/PatchConcepts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchConceptsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchConceptsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptResponse>;
}
interface IV2Service_IGetConceptLanguage extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetConceptLanguageRequest, proto_clarifai_api_service_pb.SingleConceptLanguageResponse> {
    path: "/clarifai.api.V2/GetConceptLanguage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetConceptLanguageRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetConceptLanguageRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;
}
interface IV2Service_IListConceptLanguages extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse> {
    path: "/clarifai.api.V2/ListConceptLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListConceptLanguagesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListConceptLanguagesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
}
interface IV2Service_IPostConceptLanguages extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse> {
    path: "/clarifai.api.V2/PostConceptLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostConceptLanguagesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostConceptLanguagesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
}
interface IV2Service_IPatchConceptLanguages extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse> {
    path: "/clarifai.api.V2/PatchConceptLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchConceptLanguagesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchConceptLanguagesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
}
interface IV2Service_IListKnowledgeGraphs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse> {
    path: "/clarifai.api.V2/ListKnowledgeGraphs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
}
interface IV2Service_IPostKnowledgeGraphs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse> {
    path: "/clarifai.api.V2/PostKnowledgeGraphs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
}
interface IV2Service_IPostConceptMappingJobs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, proto_clarifai_api_service_pb.MultiConceptMappingJobResponse> {
    path: "/clarifai.api.V2/PostConceptMappingJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostConceptMappingJobsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostConceptMappingJobsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiConceptMappingJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiConceptMappingJobResponse>;
}
interface IV2Service_IGetAnnotation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetAnnotationRequest, proto_clarifai_api_service_pb.SingleAnnotationResponse> {
    path: "/clarifai.api.V2/GetAnnotation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetAnnotationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetAnnotationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleAnnotationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleAnnotationResponse>;
}
interface IV2Service_IListAnnotations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse> {
    path: "/clarifai.api.V2/ListAnnotations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAnnotationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAnnotationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
}
interface IV2Service_IPostAnnotations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse> {
    path: "/clarifai.api.V2/PostAnnotations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAnnotationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAnnotationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
}
interface IV2Service_IPatchAnnotations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse> {
    path: "/clarifai.api.V2/PatchAnnotations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationResponse>;
}
interface IV2Service_IPatchAnnotationsStatus extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse> {
    path: "/clarifai.api.V2/PatchAnnotationsStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;
}
interface IV2Service_IDeleteAnnotation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAnnotationRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteAnnotation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAnnotationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAnnotationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IDeleteAnnotations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAnnotationsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteAnnotations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAnnotationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAnnotationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostAnnotationsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PostAnnotationsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
}
interface IV2Service_IGetInputCount extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInputCountRequest, proto_clarifai_api_service_pb.SingleInputCountResponse> {
    path: "/clarifai.api.V2/GetInputCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInputCountRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInputCountRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInputCountResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInputCountResponse>;
}
interface IV2Service_IStreamInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.StreamInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/StreamInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.StreamInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.StreamInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IGetInputSamples extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInputSamplesRequest, proto_clarifai_api_service_pb.MultiInputAnnotationResponse> {
    path: "/clarifai.api.V2/GetInputSamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInputSamplesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInputSamplesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;
}
interface IV2Service_IGetInput extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInputRequest, proto_clarifai_api_service_pb.SingleInputResponse> {
    path: "/clarifai.api.V2/GetInput";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInputRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInputRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInputResponse>;
}
interface IV2Service_IListInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/ListInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IPostInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/PostInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IPatchInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/PatchInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IDeleteInput extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteInputRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteInput";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteInputRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteInputRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IDeleteInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteInputsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostInputsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInputsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PostInputsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInputsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInputsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
}
interface IV2Service_IPostModelOutputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse> {
    path: "/clarifai.api.V2/PostModelOutputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
}
interface IV2Service_IGetModelType extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelTypeRequest, proto_clarifai_api_service_pb.SingleModelTypeResponse> {
    path: "/clarifai.api.V2/GetModelType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelTypeRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelTypeResponse>;
}
interface IV2Service_IListOpenSourceLicenses extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse> {
    path: "/clarifai.api.V2/ListOpenSourceLicenses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;
}
interface IV2Service_IListModelTypes extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelTypesRequest, proto_clarifai_api_service_pb.MultiModelTypeResponse> {
    path: "/clarifai.api.V2/ListModelTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelTypesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelTypesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelTypeResponse>;
}
interface IV2Service_IGetModel extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse> {
    path: "/clarifai.api.V2/GetModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelResponse>;
}
interface IV2Service_IGetModelOutputInfo extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse> {
    path: "/clarifai.api.V2/GetModelOutputInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelResponse>;
}
interface IV2Service_IListModels extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse> {
    path: "/clarifai.api.V2/ListModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelResponse>;
}
interface IV2Service_IPostModelsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelsSearchesRequest, proto_clarifai_api_service_pb.MultiModelResponse> {
    path: "/clarifai.api.V2/PostModelsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelResponse>;
}
interface IV2Service_IPostModels extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelsRequest, proto_clarifai_api_service_pb.SingleModelResponse> {
    path: "/clarifai.api.V2/PostModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelResponse>;
}
interface IV2Service_IPatchModels extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse> {
    path: "/clarifai.api.V2/PatchModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelResponse>;
}
interface IV2Service_IDeleteModel extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteModelRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteModelRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteModelRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IDeleteModels extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteModelsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteModelsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteModelsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListModelInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/ListModelInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IGetModelVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelVersionRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse> {
    path: "/clarifai.api.V2/GetModelVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
}
interface IV2Service_IListModelVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse> {
    path: "/clarifai.api.V2/ListModelVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelVersionResponse>;
}
interface IV2Service_IPostModelVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionsRequest, proto_clarifai_api_service_pb.SingleModelResponse> {
    path: "/clarifai.api.V2/PostModelVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelResponse>;
}
interface IV2Service_IPatchModelVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse> {
    path: "/clarifai.api.V2/PatchModelVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelVersionResponse>;
}
interface IV2Service_IDeleteModelVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteModelVersionRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteModelVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteModelVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteModelVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetModelVersionMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse> {
    path: "/clarifai.api.V2/GetModelVersionMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelVersionMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelVersionMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
}
interface IV2Service_IPostModelVersionMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse> {
    path: "/clarifai.api.V2/PostModelVersionMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionResponse>;
}
interface IV2Service_IListModelReferences extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelReferencesRequest, proto_clarifai_api_service_pb.MultiModelReferenceResponse> {
    path: "/clarifai.api.V2/ListModelReferences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelReferencesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelReferencesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelReferenceResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelReferenceResponse>;
}
interface IV2Service_IGetModelVersionInputExample extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse> {
    path: "/clarifai.api.V2/GetModelVersionInputExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;
}
interface IV2Service_IListModelVersionInputExamples extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse> {
    path: "/clarifai.api.V2/ListModelVersionInputExamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;
}
interface IV2Service_IGetWorkflow extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetWorkflowRequest, proto_clarifai_api_service_pb.SingleWorkflowResponse> {
    path: "/clarifai.api.V2/GetWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetWorkflowRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetWorkflowRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleWorkflowResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleWorkflowResponse>;
}
interface IV2Service_IListWorkflows extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse> {
    path: "/clarifai.api.V2/ListWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListWorkflowsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
}
interface IV2Service_IPostWorkflows extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse> {
    path: "/clarifai.api.V2/PostWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
}
interface IV2Service_IPatchWorkflows extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse> {
    path: "/clarifai.api.V2/PatchWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchWorkflowsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowResponse>;
}
interface IV2Service_IDeleteWorkflow extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteWorkflowRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteWorkflow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteWorkflowRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteWorkflowRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IDeleteWorkflows extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteWorkflowsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteWorkflows";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteWorkflowsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteWorkflowsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostWorkflowResults extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowResultsRequest, proto_clarifai_api_service_pb.PostWorkflowResultsResponse> {
    path: "/clarifai.api.V2/PostWorkflowResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowResultsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowResultsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;
}
interface IV2Service_IPostWorkflowResultsSimilarity extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse> {
    path: "/clarifai.api.V2/PostWorkflowResultsSimilarity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse>;
}
interface IV2Service_IListWorkflowVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionResponse> {
    path: "/clarifai.api.V2/ListWorkflowVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListWorkflowVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListWorkflowVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
}
interface IV2Service_IGetWorkflowVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetWorkflowVersionRequest, proto_clarifai_api_service_pb.SingleWorkflowVersionResponse> {
    path: "/clarifai.api.V2/GetWorkflowVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetWorkflowVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetWorkflowVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleWorkflowVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleWorkflowVersionResponse>;
}
interface IV2Service_IDeleteWorkflowVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteWorkflowVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPatchWorkflowVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionResponse> {
    path: "/clarifai.api.V2/PatchWorkflowVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
}
interface IV2Service_IGetKey extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetKeyRequest, proto_clarifai_api_service_pb.SingleKeyResponse> {
    path: "/clarifai.api.V2/GetKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetKeyRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetKeyRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleKeyResponse>;
}
interface IV2Service_IListKeys extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse> {
    path: "/clarifai.api.V2/ListKeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListKeysRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListKeysRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
}
interface IV2Service_IListAppKeys extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAppKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse> {
    path: "/clarifai.api.V2/ListAppKeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAppKeysRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAppKeysRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
}
interface IV2Service_IDeleteKey extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteKeyRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteKeyRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteKeyRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostKeys extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse> {
    path: "/clarifai.api.V2/PostKeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostKeysRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostKeysRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
}
interface IV2Service_IPatchKeys extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse> {
    path: "/clarifai.api.V2/PatchKeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchKeysRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchKeysRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiKeyResponse>;
}
interface IV2Service_IMyScopes extends grpc.MethodDefinition<proto_clarifai_api_service_pb.MyScopesRequest, proto_clarifai_api_service_pb.MultiScopeResponse> {
    path: "/clarifai.api.V2/MyScopes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.MyScopesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MyScopesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiScopeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiScopeResponse>;
}
interface IV2Service_IListScopes extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListScopesRequest, proto_clarifai_api_service_pb.MultiScopeDepsResponse> {
    path: "/clarifai.api.V2/ListScopes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListScopesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListScopesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiScopeDepsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiScopeDepsResponse>;
}
interface IV2Service_IGetApp extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetAppRequest, proto_clarifai_api_service_pb.SingleAppResponse> {
    path: "/clarifai.api.V2/GetApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetAppRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetAppRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleAppResponse>;
}
interface IV2Service_IListApps extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/ListApps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAppsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAppsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IDeleteApp extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAppRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAppRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAppRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostApps extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/PostApps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAppsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAppsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IPatchApps extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/PatchApps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAppsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAppsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IPostAppsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAppsSearchesRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/PostAppsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAppsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAppsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IPostValidatePassword extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostValidatePasswordRequest, proto_clarifai_api_service_pb.SinglePasswordValidationResponse> {
    path: "/clarifai.api.V2/PostValidatePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostValidatePasswordRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostValidatePasswordRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;
}
interface IV2Service_IGetSearch extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetSearchRequest, proto_clarifai_api_service_pb.SingleSearchResponse> {
    path: "/clarifai.api.V2/GetSearch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetSearchRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetSearchRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleSearchResponse>;
}
interface IV2Service_IListSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/ListSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
}
interface IV2Service_IPostSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PostSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
}
interface IV2Service_IPostSearchesByID extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostSearchesByIDRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PostSearchesByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostSearchesByIDRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostSearchesByIDRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
}
interface IV2Service_IPostAnnotationSearchMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse> {
    path: "/clarifai.api.V2/PostAnnotationSearchMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
}
interface IV2Service_IGetAnnotationSearchMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse> {
    path: "/clarifai.api.V2/GetAnnotationSearchMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
}
interface IV2Service_IListAnnotationSearchMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse> {
    path: "/clarifai.api.V2/ListAnnotationSearchMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
}
interface IV2Service_IDeleteAnnotationSearchMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteAnnotationSearchMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IDeleteSearch extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteSearchRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteSearch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteSearchRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteSearchRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListStatusCodes extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListStatusCodesRequest, proto_clarifai_api_service_pb.MultiStatusCodeResponse> {
    path: "/clarifai.api.V2/ListStatusCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListStatusCodesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListStatusCodesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiStatusCodeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiStatusCodeResponse>;
}
interface IV2Service_IGetStatusCode extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetStatusCodeRequest, proto_clarifai_api_service_pb.SingleStatusCodeResponse> {
    path: "/clarifai.api.V2/GetStatusCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetStatusCodeRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetStatusCodeRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleStatusCodeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleStatusCodeResponse>;
}
interface IV2Service_IListCollaborators extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse> {
    path: "/clarifai.api.V2/ListCollaborators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListCollaboratorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListCollaboratorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
}
interface IV2Service_IPostCollaborators extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse> {
    path: "/clarifai.api.V2/PostCollaborators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostCollaboratorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostCollaboratorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
}
interface IV2Service_IPatchCollaborators extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse> {
    path: "/clarifai.api.V2/PatchCollaborators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchCollaboratorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchCollaboratorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
}
interface IV2Service_IDeleteCollaborators extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteCollaborators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteCollaboratorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteCollaboratorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListCollaborations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListCollaborationsRequest, proto_clarifai_api_service_pb.MultiCollaborationsResponse> {
    path: "/clarifai.api.V2/ListCollaborations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListCollaborationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListCollaborationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollaborationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollaborationsResponse>;
}
interface IV2Service_IPostAppDuplications extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAppDuplicationsRequest, proto_clarifai_api_service_pb.MultiAppDuplicationsResponse> {
    path: "/clarifai.api.V2/PostAppDuplications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAppDuplicationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAppDuplicationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
}
interface IV2Service_IListAppDuplications extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAppDuplicationsRequest, proto_clarifai_api_service_pb.MultiAppDuplicationsResponse> {
    path: "/clarifai.api.V2/ListAppDuplications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAppDuplicationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAppDuplicationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
}
interface IV2Service_IGetAppDuplication extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetAppDuplicationRequest, proto_clarifai_api_service_pb.SingleAppDuplicationResponse> {
    path: "/clarifai.api.V2/GetAppDuplication";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetAppDuplicationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetAppDuplicationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleAppDuplicationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleAppDuplicationResponse>;
}
interface IV2Service_IPostTasks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse> {
    path: "/clarifai.api.V2/PostTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostTasksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostTasksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
}
interface IV2Service_IGetTaskAnnotationCount extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetTaskCountRequest, proto_clarifai_api_service_pb.SingleTaskCountResponse> {
    path: "/clarifai.api.V2/GetTaskAnnotationCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetTaskCountRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetTaskCountRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleTaskCountResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleTaskCountResponse>;
}
interface IV2Service_IGetTaskInputCount extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetTaskCountRequest, proto_clarifai_api_service_pb.SingleTaskCountResponse> {
    path: "/clarifai.api.V2/GetTaskInputCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetTaskCountRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetTaskCountRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleTaskCountResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleTaskCountResponse>;
}
interface IV2Service_IGetTask extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetTaskRequest, proto_clarifai_api_service_pb.SingleTaskResponse> {
    path: "/clarifai.api.V2/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleTaskResponse>;
}
interface IV2Service_IListTasks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse> {
    path: "/clarifai.api.V2/ListTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListTasksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListTasksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
}
interface IV2Service_IPatchTasks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse> {
    path: "/clarifai.api.V2/PatchTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchTasksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchTasksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTaskResponse>;
}
interface IV2Service_IDeleteTasks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteTasksRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteTasksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteTasksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostCollectors extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse> {
    path: "/clarifai.api.V2/PostCollectors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostCollectorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostCollectorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
}
interface IV2Service_IGetCollector extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetCollectorRequest, proto_clarifai_api_service_pb.SingleCollectorResponse> {
    path: "/clarifai.api.V2/GetCollector";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetCollectorRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetCollectorRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleCollectorResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleCollectorResponse>;
}
interface IV2Service_IListCollectors extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse> {
    path: "/clarifai.api.V2/ListCollectors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListCollectorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListCollectorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
}
interface IV2Service_IPatchCollectors extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse> {
    path: "/clarifai.api.V2/PatchCollectors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchCollectorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchCollectorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCollectorResponse>;
}
interface IV2Service_IDeleteCollectors extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteCollectorsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteCollectors";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteCollectorsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteCollectorsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostStatValues extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostStatValuesRequest, proto_clarifai_api_service_pb.MultiStatValueResponse> {
    path: "/clarifai.api.V2/PostStatValues";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostStatValuesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostStatValuesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiStatValueResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiStatValueResponse>;
}
interface IV2Service_IPostStatValuesAggregate extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, proto_clarifai_api_service_pb.MultiStatValueAggregateResponse> {
    path: "/clarifai.api.V2/PostStatValuesAggregate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostStatValuesAggregateRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostStatValuesAggregateRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;
}
interface IV2Service_IPostTrendingMetricsView extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostTrendingMetricsView";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListTrendingMetricsViews extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse> {
    path: "/clarifai.api.V2/ListTrendingMetricsViews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse>;
}

export const V2Service: IV2Service;

export interface IV2Server {
    listConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    postConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    deleteConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getConceptCounts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptCountsRequest, proto_clarifai_api_service_pb.MultiConceptCountResponse>;
    getConcept: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptRequest, proto_clarifai_api_service_pb.SingleConceptResponse>;
    listConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    postConceptsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptsSearchesRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    postConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    patchConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    getConceptLanguage: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptLanguageRequest, proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;
    listConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    postConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    patchConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    listKnowledgeGraphs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    postKnowledgeGraphs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    postConceptMappingJobs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, proto_clarifai_api_service_pb.MultiConceptMappingJobResponse>;
    getAnnotation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAnnotationRequest, proto_clarifai_api_service_pb.SingleAnnotationResponse>;
    listAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    postAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    patchAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    patchAnnotationsStatus: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;
    deleteAnnotation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postAnnotationsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    getInputCount: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputCountRequest, proto_clarifai_api_service_pb.SingleInputCountResponse>;
    streamInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.StreamInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    getInputSamples: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputSamplesRequest, proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;
    getInput: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputRequest, proto_clarifai_api_service_pb.SingleInputResponse>;
    listInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    postInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    patchInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    deleteInput: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteInputRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteInputsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postInputsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postModelOutputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    getModelType: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelTypeRequest, proto_clarifai_api_service_pb.SingleModelTypeResponse>;
    listOpenSourceLicenses: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;
    listModelTypes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelTypesRequest, proto_clarifai_api_service_pb.MultiModelTypeResponse>;
    getModel: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    getModelOutputInfo: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    listModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    postModelsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelsSearchesRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    postModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelsRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    patchModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    deleteModel: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listModelInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    getModelVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    listModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    postModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionsRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    patchModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    deleteModelVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelVersionRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getModelVersionMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    postModelVersionMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    listModelReferences: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelReferencesRequest, proto_clarifai_api_service_pb.MultiModelReferenceResponse>;
    getModelVersionInputExample: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;
    listModelVersionInputExamples: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;
    getWorkflow: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetWorkflowRequest, proto_clarifai_api_service_pb.SingleWorkflowResponse>;
    listWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    postWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    patchWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    deleteWorkflow: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteWorkflowRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteWorkflowsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postWorkflowResults: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowResultsRequest, proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;
    postWorkflowResultsSimilarity: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse>;
    listWorkflowVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
    getWorkflowVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetWorkflowVersionRequest, proto_clarifai_api_service_pb.SingleWorkflowVersionResponse>;
    deleteWorkflowVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    patchWorkflowVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionResponse>;
    getKey: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetKeyRequest, proto_clarifai_api_service_pb.SingleKeyResponse>;
    listKeys: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse>;
    listAppKeys: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAppKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse>;
    deleteKey: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteKeyRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postKeys: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse>;
    patchKeys: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchKeysRequest, proto_clarifai_api_service_pb.MultiKeyResponse>;
    myScopes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.MyScopesRequest, proto_clarifai_api_service_pb.MultiScopeResponse>;
    listScopes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListScopesRequest, proto_clarifai_api_service_pb.MultiScopeDepsResponse>;
    getApp: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAppRequest, proto_clarifai_api_service_pb.SingleAppResponse>;
    listApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    deleteApp: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAppRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    patchApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    postAppsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAppsSearchesRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    postValidatePassword: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostValidatePasswordRequest, proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;
    getSearch: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetSearchRequest, proto_clarifai_api_service_pb.SingleSearchResponse>;
    listSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postSearchesByID: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostSearchesByIDRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    getAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    listAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    deleteAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteSearch: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteSearchRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listStatusCodes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListStatusCodesRequest, proto_clarifai_api_service_pb.MultiStatusCodeResponse>;
    getStatusCode: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetStatusCodeRequest, proto_clarifai_api_service_pb.SingleStatusCodeResponse>;
    listCollaborators: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    postCollaborators: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    patchCollaborators: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchCollaboratorsRequest, proto_clarifai_api_service_pb.MultiCollaboratorsResponse>;
    deleteCollaborators: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listCollaborations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCollaborationsRequest, proto_clarifai_api_service_pb.MultiCollaborationsResponse>;
    postAppDuplications: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAppDuplicationsRequest, proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
    listAppDuplications: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAppDuplicationsRequest, proto_clarifai_api_service_pb.MultiAppDuplicationsResponse>;
    getAppDuplication: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAppDuplicationRequest, proto_clarifai_api_service_pb.SingleAppDuplicationResponse>;
    postTasks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse>;
    getTaskAnnotationCount: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetTaskCountRequest, proto_clarifai_api_service_pb.SingleTaskCountResponse>;
    getTaskInputCount: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetTaskCountRequest, proto_clarifai_api_service_pb.SingleTaskCountResponse>;
    getTask: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetTaskRequest, proto_clarifai_api_service_pb.SingleTaskResponse>;
    listTasks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse>;
    patchTasks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchTasksRequest, proto_clarifai_api_service_pb.MultiTaskResponse>;
    deleteTasks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteTasksRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    getCollector: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetCollectorRequest, proto_clarifai_api_service_pb.SingleCollectorResponse>;
    listCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    patchCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    deleteCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteCollectorsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postStatValues: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostStatValuesRequest, proto_clarifai_api_service_pb.MultiStatValueResponse>;
    postStatValuesAggregate: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;
    postTrendingMetricsView: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listTrendingMetricsViews: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse>;
}

export interface IV2Client {
    listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    getInput(request: proto_clarifai_api_service_pb.GetInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    getInput(request: proto_clarifai_api_service_pb.GetInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    getInput(request: proto_clarifai_api_service_pb.GetInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    getModel(request: proto_clarifai_api_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    getModel(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    getModel(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    getApp(request: proto_clarifai_api_service_pb.GetAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    getApp(request: proto_clarifai_api_service_pb.GetAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    getApp(request: proto_clarifai_api_service_pb.GetAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
    listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
    listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
}

export class V2Client extends grpc.Client implements IV2Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public listConceptRelations(request: proto_clarifai_api_service_pb.ListConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public postConceptRelations(request: proto_clarifai_api_service_pb.PostConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptRelationResponse) => void): grpc.ClientUnaryCall;
    public deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteConceptRelations(request: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    public getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    public getConceptCounts(request: proto_clarifai_api_service_pb.GetConceptCountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptCountResponse) => void): grpc.ClientUnaryCall;
    public getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    public getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    public getConcept(request: proto_clarifai_api_service_pb.GetConceptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptResponse) => void): grpc.ClientUnaryCall;
    public listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public listConcepts(request: proto_clarifai_api_service_pb.ListConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConceptsSearches(request: proto_clarifai_api_service_pb.PostConceptsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public postConcepts(request: proto_clarifai_api_service_pb.PostConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public patchConcepts(request: proto_clarifai_api_service_pb.PatchConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public getConceptLanguage(request: proto_clarifai_api_service_pb.GetConceptLanguageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public listConceptLanguages(request: proto_clarifai_api_service_pb.ListConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public postConceptLanguages(request: proto_clarifai_api_service_pb.PostConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public patchConceptLanguages(request: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptLanguageResponse) => void): grpc.ClientUnaryCall;
    public listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public listKnowledgeGraphs(request: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public postKnowledgeGraphs(request: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse) => void): grpc.ClientUnaryCall;
    public postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    public postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    public postConceptMappingJobs(request: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse) => void): grpc.ClientUnaryCall;
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postAnnotations(request: proto_clarifai_api_service_pb.PostAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotations(request: proto_clarifai_api_service_pb.PatchAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsStatus(request: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotation(request: proto_clarifai_api_service_pb.DeleteAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotations(request: proto_clarifai_api_service_pb.DeleteAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    public getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    public getInputCount(request: proto_clarifai_api_service_pb.GetInputCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputCountResponse) => void): grpc.ClientUnaryCall;
    public streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public streamInputs(request: proto_clarifai_api_service_pb.StreamInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getInputSamples(request: proto_clarifai_api_service_pb.GetInputSamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getInput(request: proto_clarifai_api_service_pb.GetInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    public getInput(request: proto_clarifai_api_service_pb.GetInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    public getInput(request: proto_clarifai_api_service_pb.GetInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputResponse) => void): grpc.ClientUnaryCall;
    public listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listInputs(request: proto_clarifai_api_service_pb.ListInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public postInputs(request: proto_clarifai_api_service_pb.PostInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public patchInputs(request: proto_clarifai_api_service_pb.PatchInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInput(request: proto_clarifai_api_service_pb.DeleteInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInputs(request: proto_clarifai_api_service_pb.DeleteInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    public getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    public getModelType(request: proto_clarifai_api_service_pb.GetModelTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelTypeResponse) => void): grpc.ClientUnaryCall;
    public listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    public listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    public listOpenSourceLicenses(request: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse) => void): grpc.ClientUnaryCall;
    public listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    public listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    public listModelTypes(request: proto_clarifai_api_service_pb.ListModelTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelTypeResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: proto_clarifai_api_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public getModelOutputInfo(request: proto_clarifai_api_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: proto_clarifai_api_service_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    public listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    public listModelReferences(request: proto_clarifai_api_service_pb.ListModelReferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelReferenceResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionInputExample(request: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionInputExamples(request: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    public getWorkflow(request: proto_clarifai_api_service_pb.GetWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowResponse) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public listWorkflows(request: proto_clarifai_api_service_pb.ListWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public postWorkflows(request: proto_clarifai_api_service_pb.PostWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflows(request: proto_clarifai_api_service_pb.PatchWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResultsSimilarity(request: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersions(request: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersion(request: proto_clarifai_api_service_pb.GetWorkflowVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflowVersions(request: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersions(request: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse) => void): grpc.ClientUnaryCall;
    public getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public getKey(request: proto_clarifai_api_service_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: proto_clarifai_api_service_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public listAppKeys(request: proto_clarifai_api_service_pb.ListAppKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteKey(request: proto_clarifai_api_service_pb.DeleteKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public postKeys(request: proto_clarifai_api_service_pb.PostKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public patchKeys(request: proto_clarifai_api_service_pb.PatchKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiKeyResponse) => void): grpc.ClientUnaryCall;
    public myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    public myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    public myScopes(request: proto_clarifai_api_service_pb.MyScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeResponse) => void): grpc.ClientUnaryCall;
    public listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    public listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    public listScopes(request: proto_clarifai_api_service_pb.ListScopesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeDepsResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: proto_clarifai_api_service_pb.GetAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: proto_clarifai_api_service_pb.GetAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: proto_clarifai_api_service_pb.GetAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: proto_clarifai_api_service_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: proto_clarifai_api_service_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postApps(request: proto_clarifai_api_service_pb.PostAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchApps(request: proto_clarifai_api_service_pb.PatchAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearches(request: proto_clarifai_api_service_pb.PostSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postSearchesByID(request: proto_clarifai_api_service_pb.PostSearchesByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationSearchMetrics(request: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteSearch(request: proto_clarifai_api_service_pb.DeleteSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public listStatusCodes(request: proto_clarifai_api_service_pb.ListStatusCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public getStatusCode(request: proto_clarifai_api_service_pb.GetStatusCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleStatusCodeResponse) => void): grpc.ClientUnaryCall;
    public listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public listCollaborators(request: proto_clarifai_api_service_pb.ListCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public postCollaborators(request: proto_clarifai_api_service_pb.PostCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public patchCollaborators(request: proto_clarifai_api_service_pb.PatchCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaboratorsResponse) => void): grpc.ClientUnaryCall;
    public deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteCollaborators(request: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    public listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    public listCollaborations(request: proto_clarifai_api_service_pb.ListCollaborationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollaborationsResponse) => void): grpc.ClientUnaryCall;
    public postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public postAppDuplications(request: proto_clarifai_api_service_pb.PostAppDuplicationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public listAppDuplications(request: proto_clarifai_api_service_pb.ListAppDuplicationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse) => void): grpc.ClientUnaryCall;
    public getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    public getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    public getAppDuplication(request: proto_clarifai_api_service_pb.GetAppDuplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppDuplicationResponse) => void): grpc.ClientUnaryCall;
    public postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public postTasks(request: proto_clarifai_api_service_pb.PostTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTaskAnnotationCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTaskInputCount(request: proto_clarifai_api_service_pb.GetTaskCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskCountResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: proto_clarifai_api_service_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleTaskResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: proto_clarifai_api_service_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public patchTasks(request: proto_clarifai_api_service_pb.PatchTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteTasks(request: proto_clarifai_api_service_pb.DeleteTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public postCollectors(request: proto_clarifai_api_service_pb.PostCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    public getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    public getCollector(request: proto_clarifai_api_service_pb.GetCollectorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleCollectorResponse) => void): grpc.ClientUnaryCall;
    public listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public listCollectors(request: proto_clarifai_api_service_pb.ListCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public patchCollectors(request: proto_clarifai_api_service_pb.PatchCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCollectorResponse) => void): grpc.ClientUnaryCall;
    public deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteCollectors(request: proto_clarifai_api_service_pb.DeleteCollectorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    public postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    public postStatValues(request: proto_clarifai_api_service_pb.PostStatValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueResponse) => void): grpc.ClientUnaryCall;
    public postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    public postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    public postStatValuesAggregate(request: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse) => void): grpc.ClientUnaryCall;
    public postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postTrendingMetricsView(request: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
    public listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
    public listTrendingMetricsViews(request: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse) => void): grpc.ClientUnaryCall;
}
