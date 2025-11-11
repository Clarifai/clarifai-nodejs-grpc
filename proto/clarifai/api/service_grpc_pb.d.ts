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
    listModelConcepts: IV2Service_IListModelConcepts;
    postConceptsSearches: IV2Service_IPostConceptsSearches;
    postConcepts: IV2Service_IPostConcepts;
    patchConcepts: IV2Service_IPatchConcepts;
    getConceptLanguage: IV2Service_IGetConceptLanguage;
    listConceptLanguages: IV2Service_IListConceptLanguages;
    postConceptLanguages: IV2Service_IPostConceptLanguages;
    patchConceptLanguages: IV2Service_IPatchConceptLanguages;
    listKnowledgeGraphs: IV2Service_IListKnowledgeGraphs;
    postKnowledgeGraphs: IV2Service_IPostKnowledgeGraphs;
    getAnnotation: IV2Service_IGetAnnotation;
    listAnnotations: IV2Service_IListAnnotations;
    postTrackAnnotationsSearches: IV2Service_IPostTrackAnnotationsSearches;
    postAnnotations: IV2Service_IPostAnnotations;
    patchAnnotations: IV2Service_IPatchAnnotations;
    patchAnnotationsStatus: IV2Service_IPatchAnnotationsStatus;
    deleteAnnotation: IV2Service_IDeleteAnnotation;
    deleteAnnotations: IV2Service_IDeleteAnnotations;
    listAnnotationTracks: IV2Service_IListAnnotationTracks;
    postAnnotationTracks: IV2Service_IPostAnnotationTracks;
    patchAnnotationTracks: IV2Service_IPatchAnnotationTracks;
    deleteAnnotationTracks: IV2Service_IDeleteAnnotationTracks;
    patchAnnotationsSearches: IV2Service_IPatchAnnotationsSearches;
    postAnnotationsSearches: IV2Service_IPostAnnotationsSearches;
    listAnnotationWorkers: IV2Service_IListAnnotationWorkers;
    getInputCount: IV2Service_IGetInputCount;
    streamInputs: IV2Service_IStreamInputs;
    getInputSamples: IV2Service_IGetInputSamples;
    getInput: IV2Service_IGetInput;
    getInputVideoManifest: IV2Service_IGetInputVideoManifest;
    listInputs: IV2Service_IListInputs;
    postInputs: IV2Service_IPostInputs;
    patchInputs: IV2Service_IPatchInputs;
    deleteInput: IV2Service_IDeleteInput;
    deleteInputs: IV2Service_IDeleteInputs;
    patchInputsSearches: IV2Service_IPatchInputsSearches;
    postInputsSearches: IV2Service_IPostInputsSearches;
    postModelOutputs: IV2Service_IPostModelOutputs;
    generateModelOutputs: IV2Service_IGenerateModelOutputs;
    streamModelOutputs: IV2Service_IStreamModelOutputs;
    listDatasets: IV2Service_IListDatasets;
    getDataset: IV2Service_IGetDataset;
    postDatasets: IV2Service_IPostDatasets;
    patchDatasets: IV2Service_IPatchDatasets;
    deleteDatasets: IV2Service_IDeleteDatasets;
    listDatasetInputs: IV2Service_IListDatasetInputs;
    getDatasetInput: IV2Service_IGetDatasetInput;
    postDatasetInputs: IV2Service_IPostDatasetInputs;
    deleteDatasetInputs: IV2Service_IDeleteDatasetInputs;
    listDatasetVersions: IV2Service_IListDatasetVersions;
    getDatasetVersion: IV2Service_IGetDatasetVersion;
    listDatasetVersionMetricsGroups: IV2Service_IListDatasetVersionMetricsGroups;
    postDatasetVersions: IV2Service_IPostDatasetVersions;
    patchDatasetVersions: IV2Service_IPatchDatasetVersions;
    deleteDatasetVersions: IV2Service_IDeleteDatasetVersions;
    putDatasetVersionExports: IV2Service_IPutDatasetVersionExports;
    getModelType: IV2Service_IGetModelType;
    listOpenSourceLicenses: IV2Service_IListOpenSourceLicenses;
    listModelTypes: IV2Service_IListModelTypes;
    getModel: IV2Service_IGetModel;
    getModelOutputInfo: IV2Service_IGetModelOutputInfo;
    listModels: IV2Service_IListModels;
    getResourceCounts: IV2Service_IGetResourceCounts;
    postModelsSearches: IV2Service_IPostModelsSearches;
    postModels: IV2Service_IPostModels;
    patchModels: IV2Service_IPatchModels;
    patchModelIds: IV2Service_IPatchModelIds;
    deleteModel: IV2Service_IDeleteModel;
    deleteModels: IV2Service_IDeleteModels;
    patchModelCheckConsents: IV2Service_IPatchModelCheckConsents;
    patchModelToolkits: IV2Service_IPatchModelToolkits;
    patchModelUseCases: IV2Service_IPatchModelUseCases;
    patchModelLanguages: IV2Service_IPatchModelLanguages;
    listModelInputs: IV2Service_IListModelInputs;
    getModelVersion: IV2Service_IGetModelVersion;
    listModelVersions: IV2Service_IListModelVersions;
    postWorkflowVersionsUnPublish: IV2Service_IPostWorkflowVersionsUnPublish;
    postWorkflowVersionsPublish: IV2Service_IPostWorkflowVersionsPublish;
    postModelVersionsPublish: IV2Service_IPostModelVersionsPublish;
    postModelVersionsUnPublish: IV2Service_IPostModelVersionsUnPublish;
    postModelVersions: IV2Service_IPostModelVersions;
    patchModelVersions: IV2Service_IPatchModelVersions;
    deleteModelVersion: IV2Service_IDeleteModelVersion;
    postModelVersionsUpload: IV2Service_IPostModelVersionsUpload;
    postModelMigration: IV2Service_IPostModelMigration;
    putModelVersionExports: IV2Service_IPutModelVersionExports;
    getModelVersionExport: IV2Service_IGetModelVersionExport;
    getModelVersionMetrics: IV2Service_IGetModelVersionMetrics;
    postModelVersionMetrics: IV2Service_IPostModelVersionMetrics;
    postModelVersionEvaluations: IV2Service_IPostModelVersionEvaluations;
    listModelVersionEvaluations: IV2Service_IListModelVersionEvaluations;
    getModelVersionEvaluation: IV2Service_IGetModelVersionEvaluation;
    postEvaluations: IV2Service_IPostEvaluations;
    listEvaluations: IV2Service_IListEvaluations;
    getEvaluation: IV2Service_IGetEvaluation;
    listModelReferences: IV2Service_IListModelReferences;
    getModelVersionInputExample: IV2Service_IGetModelVersionInputExample;
    listModelVersionInputExamples: IV2Service_IListModelVersionInputExamples;
    getWorkflow: IV2Service_IGetWorkflow;
    listWorkflows: IV2Service_IListWorkflows;
    postWorkflows: IV2Service_IPostWorkflows;
    patchWorkflows: IV2Service_IPatchWorkflows;
    patchWorkflowIds: IV2Service_IPatchWorkflowIds;
    deleteWorkflow: IV2Service_IDeleteWorkflow;
    deleteWorkflows: IV2Service_IDeleteWorkflows;
    postWorkflowResults: IV2Service_IPostWorkflowResults;
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
    myScopesUser: IV2Service_IMyScopesUser;
    myScopesRoot: IV2Service_IMyScopesRoot;
    listScopes: IV2Service_IListScopes;
    getApp: IV2Service_IGetApp;
    listApps: IV2Service_IListApps;
    deleteApp: IV2Service_IDeleteApp;
    postApps: IV2Service_IPostApps;
    patchApps: IV2Service_IPatchApps;
    patchAppsDetails: IV2Service_IPatchAppsDetails;
    patchAppsIds: IV2Service_IPatchAppsIds;
    patchApp: IV2Service_IPatchApp;
    postAppsSearches: IV2Service_IPostAppsSearches;
    getUser: IV2Service_IGetUser;
    postValidatePassword: IV2Service_IPostValidatePassword;
    getSearch: IV2Service_IGetSearch;
    listSearches: IV2Service_IListSearches;
    patchSearches: IV2Service_IPatchSearches;
    postSearches: IV2Service_IPostSearches;
    postSearchesByID: IV2Service_IPostSearchesByID;
    postAnnotationSearchMetrics: IV2Service_IPostAnnotationSearchMetrics;
    getAnnotationSearchMetrics: IV2Service_IGetAnnotationSearchMetrics;
    listAnnotationSearchMetrics: IV2Service_IListAnnotationSearchMetrics;
    deleteAnnotationSearchMetrics: IV2Service_IDeleteAnnotationSearchMetrics;
    deleteSearch: IV2Service_IDeleteSearch;
    listAnnotationFilters: IV2Service_IListAnnotationFilters;
    getAnnotationFilter: IV2Service_IGetAnnotationFilter;
    postAnnotationFilters: IV2Service_IPostAnnotationFilters;
    patchAnnotationFilters: IV2Service_IPatchAnnotationFilters;
    deleteAnnotationFilters: IV2Service_IDeleteAnnotationFilters;
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
    postLabelOrders: IV2Service_IPostLabelOrders;
    getLabelOrder: IV2Service_IGetLabelOrder;
    listLabelOrders: IV2Service_IListLabelOrders;
    patchLabelOrders: IV2Service_IPatchLabelOrders;
    deleteLabelOrders: IV2Service_IDeleteLabelOrders;
    postCollectors: IV2Service_IPostCollectors;
    getCollector: IV2Service_IGetCollector;
    listCollectors: IV2Service_IListCollectors;
    patchCollectors: IV2Service_IPatchCollectors;
    deleteCollectors: IV2Service_IDeleteCollectors;
    postStatValues: IV2Service_IPostStatValues;
    postStatValuesAggregate: IV2Service_IPostStatValuesAggregate;
    getModule: IV2Service_IGetModule;
    listModules: IV2Service_IListModules;
    postModules: IV2Service_IPostModules;
    patchModules: IV2Service_IPatchModules;
    deleteModules: IV2Service_IDeleteModules;
    getModuleVersion: IV2Service_IGetModuleVersion;
    listModuleVersions: IV2Service_IListModuleVersions;
    postModuleVersions: IV2Service_IPostModuleVersions;
    patchModuleVersions: IV2Service_IPatchModuleVersions;
    deleteModuleVersions: IV2Service_IDeleteModuleVersions;
    getModuleVersionUsageCount: IV2Service_IGetModuleVersionUsageCount;
    getInstalledModuleVersion: IV2Service_IGetInstalledModuleVersion;
    listInstalledModuleVersions: IV2Service_IListInstalledModuleVersions;
    postInstalledModuleVersions: IV2Service_IPostInstalledModuleVersions;
    deleteInstalledModuleVersions: IV2Service_IDeleteInstalledModuleVersions;
    postInstalledModuleVersionsKey: IV2Service_IPostInstalledModuleVersionsKey;
    postBulkOperations: IV2Service_IPostBulkOperations;
    listBulkOperations: IV2Service_IListBulkOperations;
    getBulkOperation: IV2Service_IGetBulkOperation;
    cancelBulkOperations: IV2Service_ICancelBulkOperations;
    deleteBulkOperations: IV2Service_IDeleteBulkOperations;
    listNextTaskAssignments: IV2Service_IListNextTaskAssignments;
    putTaskAssignments: IV2Service_IPutTaskAssignments;
    listInputsAddJobs: IV2Service_IListInputsAddJobs;
    getInputsAddJob: IV2Service_IGetInputsAddJob;
    cancelInputsAddJob: IV2Service_ICancelInputsAddJob;
    postUploads: IV2Service_IPostUploads;
    putUploadContentParts: IV2Service_IPutUploadContentParts;
    getUpload: IV2Service_IGetUpload;
    listUploads: IV2Service_IListUploads;
    deleteUploads: IV2Service_IDeleteUploads;
    postInputsDataSources: IV2Service_IPostInputsDataSources;
    getInputsExtractionJob: IV2Service_IGetInputsExtractionJob;
    listInputsExtractionJobs: IV2Service_IListInputsExtractionJobs;
    cancelInputsExtractionJobs: IV2Service_ICancelInputsExtractionJobs;
    postInputsUploads: IV2Service_IPostInputsUploads;
    listPipelineVersionRuns: IV2Service_IListPipelineVersionRuns;
    getRunner: IV2Service_IGetRunner;
    listRunners: IV2Service_IListRunners;
    postRunners: IV2Service_IPostRunners;
    patchRunners: IV2Service_IPatchRunners;
    deleteRunners: IV2Service_IDeleteRunners;
    listRunnerItems: IV2Service_IListRunnerItems;
    postRunnerItemOutputs: IV2Service_IPostRunnerItemOutputs;
    processRunnerItems: IV2Service_IProcessRunnerItems;
    postModelVersionsTrainingTimeEstimate: IV2Service_IPostModelVersionsTrainingTimeEstimate;
    listCloudProviders: IV2Service_IListCloudProviders;
    listCloudRegions: IV2Service_IListCloudRegions;
    listInstanceTypes: IV2Service_IListInstanceTypes;
    getComputeCluster: IV2Service_IGetComputeCluster;
    listComputeClusters: IV2Service_IListComputeClusters;
    postComputeClusters: IV2Service_IPostComputeClusters;
    deleteComputeClusters: IV2Service_IDeleteComputeClusters;
    getNodepool: IV2Service_IGetNodepool;
    listNodepools: IV2Service_IListNodepools;
    postNodepools: IV2Service_IPostNodepools;
    patchNodepools: IV2Service_IPatchNodepools;
    deleteNodepools: IV2Service_IDeleteNodepools;
    getDeployment: IV2Service_IGetDeployment;
    listDeployments: IV2Service_IListDeployments;
    postDeployments: IV2Service_IPostDeployments;
    patchDeployments: IV2Service_IPatchDeployments;
    deleteDeployments: IV2Service_IDeleteDeployments;
    postAuditLogSearches: IV2Service_IPostAuditLogSearches;
    listWorkflowEvaluationTemplates: IV2Service_IListWorkflowEvaluationTemplates;
    postLogEntries: IV2Service_IPostLogEntries;
    listLogEntries: IV2Service_IListLogEntries;
    streamLogEntries: IV2Service_IStreamLogEntries;
    postComputePlaneMetrics: IV2Service_IPostComputePlaneMetrics;
    postWorkflowVersionEvaluations: IV2Service_IPostWorkflowVersionEvaluations;
    getWorkflowVersionEvaluation: IV2Service_IGetWorkflowVersionEvaluation;
    listWorkflowVersionEvaluations: IV2Service_IListWorkflowVersionEvaluations;
    patchWorkflowVersionEvaluations: IV2Service_IPatchWorkflowVersionEvaluations;
    listWorkflowVersionEvaluationData: IV2Service_IListWorkflowVersionEvaluationData;
    postWorkflowVersionEvaluationData: IV2Service_IPostWorkflowVersionEvaluationData;
    postPipelines: IV2Service_IPostPipelines;
    getPipeline: IV2Service_IGetPipeline;
    listPipelines: IV2Service_IListPipelines;
    patchPipelines: IV2Service_IPatchPipelines;
    deletePipelines: IV2Service_IDeletePipelines;
    getPipelineVersion: IV2Service_IGetPipelineVersion;
    listPipelineVersions: IV2Service_IListPipelineVersions;
    patchPipelineVersions: IV2Service_IPatchPipelineVersions;
    deletePipelineVersions: IV2Service_IDeletePipelineVersions;
    getPipelineVersionRun: IV2Service_IGetPipelineVersionRun;
    postPipelineVersionRuns: IV2Service_IPostPipelineVersionRuns;
    patchPipelineVersionRuns: IV2Service_IPatchPipelineVersionRuns;
    postPipelineSteps: IV2Service_IPostPipelineSteps;
    getPipelineStep: IV2Service_IGetPipelineStep;
    listPipelineSteps: IV2Service_IListPipelineSteps;
    postPipelineStepVersionsUpload: IV2Service_IPostPipelineStepVersionsUpload;
    listPipelineStepVersions: IV2Service_IListPipelineStepVersions;
    getPipelineStepVersion: IV2Service_IGetPipelineStepVersion;
    getSecret: IV2Service_IGetSecret;
    listSecrets: IV2Service_IListSecrets;
    postSecrets: IV2Service_IPostSecrets;
    patchSecrets: IV2Service_IPatchSecrets;
    deleteSecrets: IV2Service_IDeleteSecrets;
    postMetricsQuery: IV2Service_IPostMetricsQuery;
    listMetricLabels: IV2Service_IListMetricLabels;
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
interface IV2Service_IListModelConcepts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse> {
    path: "/clarifai.api.V2/ListModelConcepts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelConceptsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelConceptsRequest>;
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
interface IV2Service_IPostTrackAnnotationsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse> {
    path: "/clarifai.api.V2/PostTrackAnnotationsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest>;
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
interface IV2Service_IListAnnotationTracks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse> {
    path: "/clarifai.api.V2/ListAnnotationTracks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAnnotationTracksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAnnotationTracksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
}
interface IV2Service_IPostAnnotationTracks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse> {
    path: "/clarifai.api.V2/PostAnnotationTracks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAnnotationTracksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAnnotationTracksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
}
interface IV2Service_IPatchAnnotationTracks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse> {
    path: "/clarifai.api.V2/PatchAnnotationTracks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationTracksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationTracksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
}
interface IV2Service_IDeleteAnnotationTracks extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteAnnotationTracks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPatchAnnotationsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PatchAnnotationsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
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
interface IV2Service_IListAnnotationWorkers extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, proto_clarifai_api_service_pb.MultiWorkerResponse> {
    path: "/clarifai.api.V2/ListAnnotationWorkers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAnnotationWorkersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAnnotationWorkersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkerResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkerResponse>;
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
interface IV2Service_IGetInputVideoManifest extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetVideoManifestRequest, proto_clarifai_api_service_pb.GetVideoManifestResponse> {
    path: "/clarifai.api.V2/GetInputVideoManifest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetVideoManifestRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetVideoManifestRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetVideoManifestResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetVideoManifestResponse>;
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
interface IV2Service_IPatchInputsSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchInputsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PatchInputsSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchInputsSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchInputsSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSearchResponse>;
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
interface IV2Service_IGenerateModelOutputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse> {
    path: "/clarifai.api.V2/GenerateModelOutputs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
}
interface IV2Service_IStreamModelOutputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse> {
    path: "/clarifai.api.V2/StreamModelOutputs";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelOutputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiOutputResponse>;
}
interface IV2Service_IListDatasets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse> {
    path: "/clarifai.api.V2/ListDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListDatasetsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListDatasetsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
}
interface IV2Service_IGetDataset extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetDatasetRequest, proto_clarifai_api_service_pb.SingleDatasetResponse> {
    path: "/clarifai.api.V2/GetDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetDatasetRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetDatasetRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleDatasetResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleDatasetResponse>;
}
interface IV2Service_IPostDatasets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse> {
    path: "/clarifai.api.V2/PostDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostDatasetsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostDatasetsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
}
interface IV2Service_IPatchDatasets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse> {
    path: "/clarifai.api.V2/PatchDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchDatasetsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchDatasetsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetResponse>;
}
interface IV2Service_IDeleteDatasets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteDatasetsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteDatasetsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteDatasetsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListDatasetInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListDatasetInputsRequest, proto_clarifai_api_service_pb.MultiDatasetInputResponse> {
    path: "/clarifai.api.V2/ListDatasetInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListDatasetInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListDatasetInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
}
interface IV2Service_IGetDatasetInput extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetDatasetInputRequest, proto_clarifai_api_service_pb.SingleDatasetInputResponse> {
    path: "/clarifai.api.V2/GetDatasetInput";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetDatasetInputRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetDatasetInputRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleDatasetInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleDatasetInputResponse>;
}
interface IV2Service_IPostDatasetInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostDatasetInputsRequest, proto_clarifai_api_service_pb.MultiDatasetInputResponse> {
    path: "/clarifai.api.V2/PostDatasetInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostDatasetInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostDatasetInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
}
interface IV2Service_IDeleteDatasetInputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteDatasetInputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteDatasetInputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteDatasetInputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListDatasetVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse> {
    path: "/clarifai.api.V2/ListDatasetVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListDatasetVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListDatasetVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
}
interface IV2Service_IGetDatasetVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetDatasetVersionRequest, proto_clarifai_api_service_pb.SingleDatasetVersionResponse> {
    path: "/clarifai.api.V2/GetDatasetVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetDatasetVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetDatasetVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleDatasetVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleDatasetVersionResponse>;
}
interface IV2Service_IListDatasetVersionMetricsGroups extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse> {
    path: "/clarifai.api.V2/ListDatasetVersionMetricsGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse>;
}
interface IV2Service_IPostDatasetVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse> {
    path: "/clarifai.api.V2/PostDatasetVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostDatasetVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostDatasetVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
}
interface IV2Service_IPatchDatasetVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse> {
    path: "/clarifai.api.V2/PatchDatasetVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchDatasetVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchDatasetVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
}
interface IV2Service_IDeleteDatasetVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteDatasetVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPutDatasetVersionExports extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse> {
    path: "/clarifai.api.V2/PutDatasetVersionExports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse>;
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
interface IV2Service_IGetResourceCounts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetResourceCountsRequest, proto_clarifai_api_service_pb.GetResourceCountsResponse> {
    path: "/clarifai.api.V2/GetResourceCounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetResourceCountsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetResourceCountsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetResourceCountsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetResourceCountsResponse>;
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
interface IV2Service_IPatchModelIds extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelIdsRequest, proto_clarifai_api_service_pb.MultiModelResponse> {
    path: "/clarifai.api.V2/PatchModelIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelIdsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelIdsRequest>;
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
interface IV2Service_IPatchModelCheckConsents extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, proto_clarifai_api_service_pb.MultiModelCheckConsentResponse> {
    path: "/clarifai.api.V2/PatchModelCheckConsents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelCheckConsentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelCheckConsentResponse>;
}
interface IV2Service_IPatchModelToolkits extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelToolkitsRequest, proto_clarifai_api_service_pb.MultiModelToolkitResponse> {
    path: "/clarifai.api.V2/PatchModelToolkits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelToolkitsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelToolkitsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelToolkitResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelToolkitResponse>;
}
interface IV2Service_IPatchModelUseCases extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelUseCasesRequest, proto_clarifai_api_service_pb.MultiModelUseCaseResponse> {
    path: "/clarifai.api.V2/PatchModelUseCases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelUseCasesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelUseCasesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelUseCaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelUseCaseResponse>;
}
interface IV2Service_IPatchModelLanguages extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModelLanguagesRequest, proto_clarifai_api_service_pb.MultiModelLanguageResponse> {
    path: "/clarifai.api.V2/PatchModelLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModelLanguagesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModelLanguagesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModelLanguageResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModelLanguageResponse>;
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
interface IV2Service_IPostWorkflowVersionsUnPublish extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostWorkflowVersionsUnPublish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostWorkflowVersionsPublish extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostWorkflowVersionsPublish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostModelVersionsPublish extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostModelVersionsPublish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsPublishRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsPublishRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostModelVersionsUnPublish extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostModelVersionsUnPublish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
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
interface IV2Service_IPostModelVersionsUpload extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse> {
    path: "/clarifai.api.V2/PostModelVersionsUpload";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
}
interface IV2Service_IPostModelMigration extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelMigrationRequest, proto_clarifai_api_service_pb.SingleModelResponse> {
    path: "/clarifai.api.V2/PostModelMigration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelMigrationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelMigrationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelResponse>;
}
interface IV2Service_IPutModelVersionExports extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PutModelVersionExportsRequest, proto_clarifai_api_service_pb.SingleModelVersionExportResponse> {
    path: "/clarifai.api.V2/PutModelVersionExports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PutModelVersionExportsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PutModelVersionExportsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
}
interface IV2Service_IGetModelVersionExport extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelVersionExportRequest, proto_clarifai_api_service_pb.SingleModelVersionExportResponse> {
    path: "/clarifai.api.V2/GetModelVersionExport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelVersionExportRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelVersionExportRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
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
interface IV2Service_IPostModelVersionEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse> {
    path: "/clarifai.api.V2/PostModelVersionEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
}
interface IV2Service_IListModelVersionEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse> {
    path: "/clarifai.api.V2/ListModelVersionEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
}
interface IV2Service_IGetModelVersionEvaluation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, proto_clarifai_api_service_pb.SingleEvalMetricsResponse> {
    path: "/clarifai.api.V2/GetModelVersionEvaluation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
}
interface IV2Service_IPostEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse> {
    path: "/clarifai.api.V2/PostEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
}
interface IV2Service_IListEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse> {
    path: "/clarifai.api.V2/ListEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
}
interface IV2Service_IGetEvaluation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetEvaluationRequest, proto_clarifai_api_service_pb.SingleEvalMetricsResponse> {
    path: "/clarifai.api.V2/GetEvaluation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetEvaluationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetEvaluationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
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
interface IV2Service_IPatchWorkflowIds extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse> {
    path: "/clarifai.api.V2/PatchWorkflowIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchWorkflowIdsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchWorkflowIdsRequest>;
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
interface IV2Service_IMyScopesUser extends grpc.MethodDefinition<proto_clarifai_api_service_pb.MyScopesUserRequest, proto_clarifai_api_service_pb.MultiScopeUserResponse> {
    path: "/clarifai.api.V2/MyScopesUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.MyScopesUserRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MyScopesUserRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiScopeUserResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiScopeUserResponse>;
}
interface IV2Service_IMyScopesRoot extends grpc.MethodDefinition<proto_clarifai_api_service_pb.MyScopesRootRequest, proto_clarifai_api_service_pb.MultiScopeRootResponse> {
    path: "/clarifai.api.V2/MyScopesRoot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.MyScopesRootRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MyScopesRootRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiScopeRootResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiScopeRootResponse>;
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
interface IV2Service_IPatchAppsDetails extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAppsDetailsRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/PatchAppsDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAppsDetailsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAppsDetailsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IPatchAppsIds extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAppsIdsRequest, proto_clarifai_api_service_pb.MultiAppResponse> {
    path: "/clarifai.api.V2/PatchAppsIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAppsIdsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAppsIdsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAppResponse>;
}
interface IV2Service_IPatchApp extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAppRequest, proto_clarifai_api_service_pb.SingleAppResponse> {
    path: "/clarifai.api.V2/PatchApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAppRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAppRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleAppResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleAppResponse>;
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
interface IV2Service_IGetUser extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetUserRequest, proto_clarifai_api_service_pb.SingleUserResponse> {
    path: "/clarifai.api.V2/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleUserResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleUserResponse>;
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
interface IV2Service_IPatchSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse> {
    path: "/clarifai.api.V2/PatchSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchSearchesRequest>;
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
interface IV2Service_IListAnnotationFilters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse> {
    path: "/clarifai.api.V2/ListAnnotationFilters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListAnnotationFiltersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListAnnotationFiltersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
}
interface IV2Service_IGetAnnotationFilter extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetAnnotationFilterRequest, proto_clarifai_api_service_pb.SingleAnnotationFilterResponse> {
    path: "/clarifai.api.V2/GetAnnotationFilter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetAnnotationFilterRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetAnnotationFilterRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleAnnotationFilterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleAnnotationFilterResponse>;
}
interface IV2Service_IPostAnnotationFilters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse> {
    path: "/clarifai.api.V2/PostAnnotationFilters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAnnotationFiltersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAnnotationFiltersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
}
interface IV2Service_IPatchAnnotationFilters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse> {
    path: "/clarifai.api.V2/PatchAnnotationFilters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
}
interface IV2Service_IDeleteAnnotationFilters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteAnnotationFilters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest>;
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
interface IV2Service_IPostLabelOrders extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse> {
    path: "/clarifai.api.V2/PostLabelOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostLabelOrdersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostLabelOrdersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
}
interface IV2Service_IGetLabelOrder extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetLabelOrderRequest, proto_clarifai_api_service_pb.SingleLabelOrderResponse> {
    path: "/clarifai.api.V2/GetLabelOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetLabelOrderRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetLabelOrderRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleLabelOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleLabelOrderResponse>;
}
interface IV2Service_IListLabelOrders extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse> {
    path: "/clarifai.api.V2/ListLabelOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListLabelOrdersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListLabelOrdersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
}
interface IV2Service_IPatchLabelOrders extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse> {
    path: "/clarifai.api.V2/PatchLabelOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchLabelOrdersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchLabelOrdersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
}
interface IV2Service_IDeleteLabelOrders extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteLabelOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteLabelOrdersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteLabelOrdersRequest>;
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
interface IV2Service_IGetModule extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModuleRequest, proto_clarifai_api_service_pb.SingleModuleResponse> {
    path: "/clarifai.api.V2/GetModule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModuleRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModuleRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModuleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModuleResponse>;
}
interface IV2Service_IListModules extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse> {
    path: "/clarifai.api.V2/ListModules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModulesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModulesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
}
interface IV2Service_IPostModules extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse> {
    path: "/clarifai.api.V2/PostModules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModulesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModulesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
}
interface IV2Service_IPatchModules extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse> {
    path: "/clarifai.api.V2/PatchModules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModulesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModulesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleResponse>;
}
interface IV2Service_IDeleteModules extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteModulesRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteModules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteModulesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteModulesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetModuleVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModuleVersionRequest, proto_clarifai_api_service_pb.SingleModuleVersionResponse> {
    path: "/clarifai.api.V2/GetModuleVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModuleVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModuleVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModuleVersionResponse>;
}
interface IV2Service_IListModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse> {
    path: "/clarifai.api.V2/ListModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
}
interface IV2Service_IPostModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse> {
    path: "/clarifai.api.V2/PostModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
}
interface IV2Service_IPatchModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse> {
    path: "/clarifai.api.V2/PatchModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
}
interface IV2Service_IDeleteModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetModuleVersionUsageCount extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse> {
    path: "/clarifai.api.V2/GetModuleVersionUsageCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse>;
}
interface IV2Service_IGetInstalledModuleVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse> {
    path: "/clarifai.api.V2/GetInstalledModuleVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse>;
}
interface IV2Service_IListInstalledModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse> {
    path: "/clarifai.api.V2/ListInstalledModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
}
interface IV2Service_IPostInstalledModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse> {
    path: "/clarifai.api.V2/PostInstalledModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
}
interface IV2Service_IDeleteInstalledModuleVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteInstalledModuleVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostInstalledModuleVersionsKey extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, proto_clarifai_api_service_pb.SingleKeyResponse> {
    path: "/clarifai.api.V2/PostInstalledModuleVersionsKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleKeyResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleKeyResponse>;
}
interface IV2Service_IPostBulkOperations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostBulkOperationsRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse> {
    path: "/clarifai.api.V2/PostBulkOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostBulkOperationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostBulkOperationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
}
interface IV2Service_IListBulkOperations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListBulkOperationsRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse> {
    path: "/clarifai.api.V2/ListBulkOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListBulkOperationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListBulkOperationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
}
interface IV2Service_IGetBulkOperation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetBulkOperationRequest, proto_clarifai_api_service_pb.SingleBulkOperationsResponse> {
    path: "/clarifai.api.V2/GetBulkOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetBulkOperationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetBulkOperationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleBulkOperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleBulkOperationsResponse>;
}
interface IV2Service_ICancelBulkOperations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.CancelBulkOperationRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse> {
    path: "/clarifai.api.V2/CancelBulkOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.CancelBulkOperationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.CancelBulkOperationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
}
interface IV2Service_IDeleteBulkOperations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteBulkOperationRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteBulkOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteBulkOperationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteBulkOperationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListNextTaskAssignments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, proto_clarifai_api_service_pb.MultiInputResponse> {
    path: "/clarifai.api.V2/ListNextTaskAssignments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputResponse>;
}
interface IV2Service_IPutTaskAssignments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, proto_clarifai_api_service_pb.MultiTaskAssignmentResponse> {
    path: "/clarifai.api.V2/PutTaskAssignments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PutTaskAssignmentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PutTaskAssignmentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTaskAssignmentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTaskAssignmentResponse>;
}
interface IV2Service_IListInputsAddJobs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListInputsAddJobsRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse> {
    path: "/clarifai.api.V2/ListInputsAddJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListInputsAddJobsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListInputsAddJobsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
}
interface IV2Service_IGetInputsAddJob extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInputsAddJobRequest, proto_clarifai_api_service_pb.SingleInputsAddJobResponse> {
    path: "/clarifai.api.V2/GetInputsAddJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInputsAddJobRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInputsAddJobRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
}
interface IV2Service_ICancelInputsAddJob extends grpc.MethodDefinition<proto_clarifai_api_service_pb.CancelInputsAddJobRequest, proto_clarifai_api_service_pb.SingleInputsAddJobResponse> {
    path: "/clarifai.api.V2/CancelInputsAddJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.CancelInputsAddJobRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.CancelInputsAddJobRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
}
interface IV2Service_IPostUploads extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostUploadsRequest, proto_clarifai_api_service_pb.MultiUploadResponse> {
    path: "/clarifai.api.V2/PostUploads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostUploadsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostUploadsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiUploadResponse>;
}
interface IV2Service_IPutUploadContentParts extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PutUploadContentPartsRequest, proto_clarifai_api_service_pb.SingleUploadResponse> {
    path: "/clarifai.api.V2/PutUploadContentParts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PutUploadContentPartsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PutUploadContentPartsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleUploadResponse>;
}
interface IV2Service_IGetUpload extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetUploadRequest, proto_clarifai_api_service_pb.SingleUploadResponse> {
    path: "/clarifai.api.V2/GetUpload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetUploadRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetUploadRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleUploadResponse>;
}
interface IV2Service_IListUploads extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListUploadsRequest, proto_clarifai_api_service_pb.MultiUploadResponse> {
    path: "/clarifai.api.V2/ListUploads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListUploadsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListUploadsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiUploadResponse>;
}
interface IV2Service_IDeleteUploads extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteUploadsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteUploads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteUploadsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteUploadsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostInputsDataSources extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse> {
    path: "/clarifai.api.V2/PostInputsDataSources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInputsDataSourcesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInputsDataSourcesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
}
interface IV2Service_IGetInputsExtractionJob extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse> {
    path: "/clarifai.api.V2/GetInputsExtractionJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetInputsExtractionJobRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetInputsExtractionJobRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse>;
}
interface IV2Service_IListInputsExtractionJobs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse> {
    path: "/clarifai.api.V2/ListInputsExtractionJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
}
interface IV2Service_ICancelInputsExtractionJobs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse> {
    path: "/clarifai.api.V2/CancelInputsExtractionJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
}
interface IV2Service_IPostInputsUploads extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostInputsUploadsRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse> {
    path: "/clarifai.api.V2/PostInputsUploads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostInputsUploadsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostInputsUploadsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
}
interface IV2Service_IListPipelineVersionRuns extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse> {
    path: "/clarifai.api.V2/ListPipelineVersionRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
}
interface IV2Service_IGetRunner extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetRunnerRequest, proto_clarifai_api_service_pb.SingleRunnerResponse> {
    path: "/clarifai.api.V2/GetRunner";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetRunnerRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetRunnerRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleRunnerResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleRunnerResponse>;
}
interface IV2Service_IListRunners extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse> {
    path: "/clarifai.api.V2/ListRunners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListRunnersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListRunnersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
}
interface IV2Service_IPostRunners extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse> {
    path: "/clarifai.api.V2/PostRunners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostRunnersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostRunnersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
}
interface IV2Service_IPatchRunners extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse> {
    path: "/clarifai.api.V2/PatchRunners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchRunnersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchRunnersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerResponse>;
}
interface IV2Service_IDeleteRunners extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteRunnersRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteRunners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteRunnersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteRunnersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListRunnerItems extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListRunnerItemsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse> {
    path: "/clarifai.api.V2/ListRunnerItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListRunnerItemsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListRunnerItemsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
}
interface IV2Service_IPostRunnerItemOutputs extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse> {
    path: "/clarifai.api.V2/PostRunnerItemOutputs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse>;
}
interface IV2Service_IProcessRunnerItems extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse> {
    path: "/clarifai.api.V2/ProcessRunnerItems";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
}
interface IV2Service_IPostModelVersionsTrainingTimeEstimate extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse> {
    path: "/clarifai.api.V2/PostModelVersionsTrainingTimeEstimate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse>;
}
interface IV2Service_IListCloudProviders extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListCloudProvidersRequest, proto_clarifai_api_service_pb.MultiCloudProviderResponse> {
    path: "/clarifai.api.V2/ListCloudProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListCloudProvidersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListCloudProvidersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCloudProviderResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCloudProviderResponse>;
}
interface IV2Service_IListCloudRegions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListCloudRegionsRequest, proto_clarifai_api_service_pb.MultiCloudRegionResponse> {
    path: "/clarifai.api.V2/ListCloudRegions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListCloudRegionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListCloudRegionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiCloudRegionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiCloudRegionResponse>;
}
interface IV2Service_IListInstanceTypes extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListInstanceTypesRequest, proto_clarifai_api_service_pb.MultiInstanceTypeResponse> {
    path: "/clarifai.api.V2/ListInstanceTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListInstanceTypesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListInstanceTypesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiInstanceTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiInstanceTypeResponse>;
}
interface IV2Service_IGetComputeCluster extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetComputeClusterRequest, proto_clarifai_api_service_pb.SingleComputeClusterResponse> {
    path: "/clarifai.api.V2/GetComputeCluster";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetComputeClusterRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetComputeClusterRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleComputeClusterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleComputeClusterResponse>;
}
interface IV2Service_IListComputeClusters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListComputeClustersRequest, proto_clarifai_api_service_pb.MultiComputeClusterResponse> {
    path: "/clarifai.api.V2/ListComputeClusters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListComputeClustersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListComputeClustersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
}
interface IV2Service_IPostComputeClusters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostComputeClustersRequest, proto_clarifai_api_service_pb.MultiComputeClusterResponse> {
    path: "/clarifai.api.V2/PostComputeClusters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostComputeClustersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostComputeClustersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
}
interface IV2Service_IDeleteComputeClusters extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteComputeClustersRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteComputeClusters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteComputeClustersRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteComputeClustersRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetNodepool extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetNodepoolRequest, proto_clarifai_api_service_pb.SingleNodepoolResponse> {
    path: "/clarifai.api.V2/GetNodepool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetNodepoolRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetNodepoolRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleNodepoolResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleNodepoolResponse>;
}
interface IV2Service_IListNodepools extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse> {
    path: "/clarifai.api.V2/ListNodepools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListNodepoolsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListNodepoolsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
}
interface IV2Service_IPostNodepools extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse> {
    path: "/clarifai.api.V2/PostNodepools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostNodepoolsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostNodepoolsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
}
interface IV2Service_IPatchNodepools extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse> {
    path: "/clarifai.api.V2/PatchNodepools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchNodepoolsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchNodepoolsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiNodepoolResponse>;
}
interface IV2Service_IDeleteNodepools extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteNodepoolsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteNodepools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteNodepoolsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteNodepoolsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetDeployment extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetDeploymentRequest, proto_clarifai_api_service_pb.SingleDeploymentResponse> {
    path: "/clarifai.api.V2/GetDeployment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetDeploymentRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetDeploymentRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleDeploymentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleDeploymentResponse>;
}
interface IV2Service_IListDeployments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse> {
    path: "/clarifai.api.V2/ListDeployments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListDeploymentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListDeploymentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
}
interface IV2Service_IPostDeployments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse> {
    path: "/clarifai.api.V2/PostDeployments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostDeploymentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostDeploymentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
}
interface IV2Service_IPatchDeployments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse> {
    path: "/clarifai.api.V2/PatchDeployments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchDeploymentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchDeploymentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiDeploymentResponse>;
}
interface IV2Service_IDeleteDeployments extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteDeploymentsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeleteDeployments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteDeploymentsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteDeploymentsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostAuditLogSearches extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, proto_clarifai_api_service_pb.MultiAuditLogEntryResponse> {
    path: "/clarifai.api.V2/PostAuditLogSearches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostAuditLogSearchesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostAuditLogSearchesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiAuditLogEntryResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiAuditLogEntryResponse>;
}
interface IV2Service_IListWorkflowEvaluationTemplates extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse> {
    path: "/clarifai.api.V2/ListWorkflowEvaluationTemplates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse>;
}
interface IV2Service_IPostLogEntries extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostLogEntriesRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostLogEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostLogEntriesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostLogEntriesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IListLogEntries extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListLogEntriesRequest, proto_clarifai_api_service_pb.MultiLogEntryResponse> {
    path: "/clarifai.api.V2/ListLogEntries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListLogEntriesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListLogEntriesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
}
interface IV2Service_IStreamLogEntries extends grpc.MethodDefinition<proto_clarifai_api_service_pb.StreamLogEntriesRequest, proto_clarifai_api_service_pb.MultiLogEntryResponse> {
    path: "/clarifai.api.V2/StreamLogEntries";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.StreamLogEntriesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.StreamLogEntriesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
}
interface IV2Service_IPostComputePlaneMetrics extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/PostComputePlaneMetrics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IPostWorkflowVersionEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse> {
    path: "/clarifai.api.V2/PostWorkflowVersionEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
}
interface IV2Service_IGetWorkflowVersionEvaluation extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse> {
    path: "/clarifai.api.V2/GetWorkflowVersionEvaluation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse>;
}
interface IV2Service_IListWorkflowVersionEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse> {
    path: "/clarifai.api.V2/ListWorkflowVersionEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
}
interface IV2Service_IPatchWorkflowVersionEvaluations extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse> {
    path: "/clarifai.api.V2/PatchWorkflowVersionEvaluations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
}
interface IV2Service_IListWorkflowVersionEvaluationData extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse> {
    path: "/clarifai.api.V2/ListWorkflowVersionEvaluationData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
}
interface IV2Service_IPostWorkflowVersionEvaluationData extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse> {
    path: "/clarifai.api.V2/PostWorkflowVersionEvaluationData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
}
interface IV2Service_IPostPipelines extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse> {
    path: "/clarifai.api.V2/PostPipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostPipelinesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostPipelinesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
}
interface IV2Service_IGetPipeline extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetPipelineRequest, proto_clarifai_api_service_pb.SinglePipelineResponse> {
    path: "/clarifai.api.V2/GetPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetPipelineRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetPipelineRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePipelineResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePipelineResponse>;
}
interface IV2Service_IListPipelines extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse> {
    path: "/clarifai.api.V2/ListPipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListPipelinesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListPipelinesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
}
interface IV2Service_IPatchPipelines extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse> {
    path: "/clarifai.api.V2/PatchPipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchPipelinesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchPipelinesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineResponse>;
}
interface IV2Service_IDeletePipelines extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeletePipelinesRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeletePipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeletePipelinesRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeletePipelinesRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetPipelineVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetPipelineVersionRequest, proto_clarifai_api_service_pb.SinglePipelineVersionResponse> {
    path: "/clarifai.api.V2/GetPipelineVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetPipelineVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetPipelineVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePipelineVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePipelineVersionResponse>;
}
interface IV2Service_IListPipelineVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListPipelineVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionResponse> {
    path: "/clarifai.api.V2/ListPipelineVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListPipelineVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListPipelineVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
}
interface IV2Service_IPatchPipelineVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionResponse> {
    path: "/clarifai.api.V2/PatchPipelineVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchPipelineVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchPipelineVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
}
interface IV2Service_IDeletePipelineVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse> {
    path: "/clarifai.api.V2/DeletePipelineVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeletePipelineVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeletePipelineVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_status_status_pb.BaseResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_status_status_pb.BaseResponse>;
}
interface IV2Service_IGetPipelineVersionRun extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse> {
    path: "/clarifai.api.V2/GetPipelineVersionRun";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetPipelineVersionRunRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetPipelineVersionRunRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse>;
}
interface IV2Service_IPostPipelineVersionRuns extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse> {
    path: "/clarifai.api.V2/PostPipelineVersionRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
}
interface IV2Service_IPatchPipelineVersionRuns extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse> {
    path: "/clarifai.api.V2/PatchPipelineVersionRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
}
interface IV2Service_IPostPipelineSteps extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostPipelineStepsRequest, proto_clarifai_api_service_pb.MultiPipelineStepResponse> {
    path: "/clarifai.api.V2/PostPipelineSteps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostPipelineStepsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostPipelineStepsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
}
interface IV2Service_IGetPipelineStep extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetPipelineStepRequest, proto_clarifai_api_service_pb.SinglePipelineStepResponse> {
    path: "/clarifai.api.V2/GetPipelineStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetPipelineStepRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetPipelineStepRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePipelineStepResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePipelineStepResponse>;
}
interface IV2Service_IListPipelineSteps extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListPipelineStepsRequest, proto_clarifai_api_service_pb.MultiPipelineStepResponse> {
    path: "/clarifai.api.V2/ListPipelineSteps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListPipelineStepsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListPipelineStepsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
}
interface IV2Service_IPostPipelineStepVersionsUpload extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse> {
    path: "/clarifai.api.V2/PostPipelineStepVersionsUpload";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
}
interface IV2Service_IListPipelineStepVersions extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse> {
    path: "/clarifai.api.V2/ListPipelineStepVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse>;
}
interface IV2Service_IGetPipelineStepVersion extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse> {
    path: "/clarifai.api.V2/GetPipelineStepVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetPipelineStepVersionRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetPipelineStepVersionRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse>;
}
interface IV2Service_IGetSecret extends grpc.MethodDefinition<proto_clarifai_api_service_pb.GetSecretRequest, proto_clarifai_api_service_pb.SingleSecretResponse> {
    path: "/clarifai.api.V2/GetSecret";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.GetSecretRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.GetSecretRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.SingleSecretResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.SingleSecretResponse>;
}
interface IV2Service_IListSecrets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse> {
    path: "/clarifai.api.V2/ListSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListSecretsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListSecretsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
}
interface IV2Service_IPostSecrets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse> {
    path: "/clarifai.api.V2/PostSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostSecretsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostSecretsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
}
interface IV2Service_IPatchSecrets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PatchSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse> {
    path: "/clarifai.api.V2/PatchSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PatchSecretsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PatchSecretsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
}
interface IV2Service_IDeleteSecrets extends grpc.MethodDefinition<proto_clarifai_api_service_pb.DeleteSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse> {
    path: "/clarifai.api.V2/DeleteSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.DeleteSecretsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.DeleteSecretsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiSecretResponse>;
}
interface IV2Service_IPostMetricsQuery extends grpc.MethodDefinition<proto_clarifai_api_service_pb.PostMetricsQueryRequest, proto_clarifai_api_service_pb.MetricsQueryResponse> {
    path: "/clarifai.api.V2/PostMetricsQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.PostMetricsQueryRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.PostMetricsQueryRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MetricsQueryResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MetricsQueryResponse>;
}
interface IV2Service_IListMetricLabels extends grpc.MethodDefinition<proto_clarifai_api_service_pb.ListMetricLabelsRequest, proto_clarifai_api_service_pb.MultiMetricLabelsResponse> {
    path: "/clarifai.api.V2/ListMetricLabels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_clarifai_api_service_pb.ListMetricLabelsRequest>;
    requestDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.ListMetricLabelsRequest>;
    responseSerialize: grpc.serialize<proto_clarifai_api_service_pb.MultiMetricLabelsResponse>;
    responseDeserialize: grpc.deserialize<proto_clarifai_api_service_pb.MultiMetricLabelsResponse>;
}

export const V2Service: IV2Service;

export interface IV2Server {
    listConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    postConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptRelationsRequest, proto_clarifai_api_service_pb.MultiConceptRelationResponse>;
    deleteConceptRelations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteConceptRelationsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getConceptCounts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptCountsRequest, proto_clarifai_api_service_pb.MultiConceptCountResponse>;
    getConcept: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptRequest, proto_clarifai_api_service_pb.SingleConceptResponse>;
    listConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    listModelConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    postConceptsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptsSearchesRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    postConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    patchConcepts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchConceptsRequest, proto_clarifai_api_service_pb.MultiConceptResponse>;
    getConceptLanguage: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetConceptLanguageRequest, proto_clarifai_api_service_pb.SingleConceptLanguageResponse>;
    listConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    postConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    patchConceptLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchConceptLanguagesRequest, proto_clarifai_api_service_pb.MultiConceptLanguageResponse>;
    listKnowledgeGraphs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    postKnowledgeGraphs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest, proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse>;
    getAnnotation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAnnotationRequest, proto_clarifai_api_service_pb.SingleAnnotationResponse>;
    listAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    postTrackAnnotationsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    postAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    patchAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationsRequest, proto_clarifai_api_service_pb.MultiAnnotationResponse>;
    patchAnnotationsStatus: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest, proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse>;
    deleteAnnotation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteAnnotations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listAnnotationTracks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    postAnnotationTracks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    patchAnnotationTracks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, proto_clarifai_api_service_pb.MultiAnnotationTrackResponse>;
    deleteAnnotationTracks: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    patchAnnotationsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postAnnotationsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    listAnnotationWorkers: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, proto_clarifai_api_service_pb.MultiWorkerResponse>;
    getInputCount: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputCountRequest, proto_clarifai_api_service_pb.SingleInputCountResponse>;
    streamInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.StreamInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    getInputSamples: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputSamplesRequest, proto_clarifai_api_service_pb.MultiInputAnnotationResponse>;
    getInput: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputRequest, proto_clarifai_api_service_pb.SingleInputResponse>;
    getInputVideoManifest: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetVideoManifestRequest, proto_clarifai_api_service_pb.GetVideoManifestResponse>;
    listInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    postInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    patchInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    deleteInput: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteInputRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteInputsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    patchInputsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchInputsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postInputsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postModelOutputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    generateModelOutputs: grpc.handleServerStreamingCall<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    streamModelOutputs: grpc.handleBidiStreamingCall<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    listDatasets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse>;
    getDataset: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetDatasetRequest, proto_clarifai_api_service_pb.SingleDatasetResponse>;
    postDatasets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse>;
    patchDatasets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchDatasetsRequest, proto_clarifai_api_service_pb.MultiDatasetResponse>;
    deleteDatasets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteDatasetsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listDatasetInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListDatasetInputsRequest, proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
    getDatasetInput: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetDatasetInputRequest, proto_clarifai_api_service_pb.SingleDatasetInputResponse>;
    postDatasetInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostDatasetInputsRequest, proto_clarifai_api_service_pb.MultiDatasetInputResponse>;
    deleteDatasetInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listDatasetVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    getDatasetVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetDatasetVersionRequest, proto_clarifai_api_service_pb.SingleDatasetVersionResponse>;
    listDatasetVersionMetricsGroups: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse>;
    postDatasetVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    patchDatasetVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionResponse>;
    deleteDatasetVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    putDatasetVersionExports: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse>;
    getModelType: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelTypeRequest, proto_clarifai_api_service_pb.SingleModelTypeResponse>;
    listOpenSourceLicenses: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest, proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse>;
    listModelTypes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelTypesRequest, proto_clarifai_api_service_pb.MultiModelTypeResponse>;
    getModel: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    getModelOutputInfo: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    listModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    getResourceCounts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetResourceCountsRequest, proto_clarifai_api_service_pb.GetResourceCountsResponse>;
    postModelsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelsSearchesRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    postModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelsRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    patchModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelsRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    patchModelIds: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelIdsRequest, proto_clarifai_api_service_pb.MultiModelResponse>;
    deleteModel: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteModels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    patchModelCheckConsents: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, proto_clarifai_api_service_pb.MultiModelCheckConsentResponse>;
    patchModelToolkits: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelToolkitsRequest, proto_clarifai_api_service_pb.MultiModelToolkitResponse>;
    patchModelUseCases: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelUseCasesRequest, proto_clarifai_api_service_pb.MultiModelUseCaseResponse>;
    patchModelLanguages: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelLanguagesRequest, proto_clarifai_api_service_pb.MultiModelLanguageResponse>;
    listModelInputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelInputsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    getModelVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    listModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    postWorkflowVersionsUnPublish: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postWorkflowVersionsPublish: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postModelVersionsPublish: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postModelVersionsUnPublish: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionsRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    patchModelVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModelVersionsRequest, proto_clarifai_api_service_pb.MultiModelVersionResponse>;
    deleteModelVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModelVersionRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postModelVersionsUpload: grpc.handleBidiStreamingCall<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    postModelMigration: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelMigrationRequest, proto_clarifai_api_service_pb.SingleModelResponse>;
    putModelVersionExports: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PutModelVersionExportsRequest, proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
    getModelVersionExport: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionExportRequest, proto_clarifai_api_service_pb.SingleModelVersionExportResponse>;
    getModelVersionMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    postModelVersionMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, proto_clarifai_api_service_pb.SingleModelVersionResponse>;
    postModelVersionEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    listModelVersionEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    getModelVersionEvaluation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
    postEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    listEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListEvaluationsRequest, proto_clarifai_api_service_pb.MultiEvalMetricsResponse>;
    getEvaluation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetEvaluationRequest, proto_clarifai_api_service_pb.SingleEvalMetricsResponse>;
    listModelReferences: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelReferencesRequest, proto_clarifai_api_service_pb.MultiModelReferenceResponse>;
    getModelVersionInputExample: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest, proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse>;
    listModelVersionInputExamples: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest, proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse>;
    getWorkflow: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetWorkflowRequest, proto_clarifai_api_service_pb.SingleWorkflowResponse>;
    listWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    postWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    patchWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchWorkflowsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    patchWorkflowIds: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, proto_clarifai_api_service_pb.MultiWorkflowResponse>;
    deleteWorkflow: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteWorkflowRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteWorkflows: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteWorkflowsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postWorkflowResults: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowResultsRequest, proto_clarifai_api_service_pb.PostWorkflowResultsResponse>;
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
    myScopesUser: grpc.handleUnaryCall<proto_clarifai_api_service_pb.MyScopesUserRequest, proto_clarifai_api_service_pb.MultiScopeUserResponse>;
    myScopesRoot: grpc.handleUnaryCall<proto_clarifai_api_service_pb.MyScopesRootRequest, proto_clarifai_api_service_pb.MultiScopeRootResponse>;
    listScopes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListScopesRequest, proto_clarifai_api_service_pb.MultiScopeDepsResponse>;
    getApp: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAppRequest, proto_clarifai_api_service_pb.SingleAppResponse>;
    listApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    deleteApp: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAppRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    patchApps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAppsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    patchAppsDetails: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAppsDetailsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    patchAppsIds: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAppsIdsRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    patchApp: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAppRequest, proto_clarifai_api_service_pb.SingleAppResponse>;
    postAppsSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAppsSearchesRequest, proto_clarifai_api_service_pb.MultiAppResponse>;
    getUser: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetUserRequest, proto_clarifai_api_service_pb.SingleUserResponse>;
    postValidatePassword: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostValidatePasswordRequest, proto_clarifai_api_service_pb.SinglePasswordValidationResponse>;
    getSearch: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetSearchRequest, proto_clarifai_api_service_pb.SingleSearchResponse>;
    listSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    patchSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostSearchesRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postSearchesByID: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostSearchesByIDRequest, proto_clarifai_api_service_pb.MultiSearchResponse>;
    postAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    getAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    listAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest, proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse>;
    deleteAnnotationSearchMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    deleteSearch: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteSearchRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listAnnotationFilters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    getAnnotationFilter: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetAnnotationFilterRequest, proto_clarifai_api_service_pb.SingleAnnotationFilterResponse>;
    postAnnotationFilters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    patchAnnotationFilters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, proto_clarifai_api_service_pb.MultiAnnotationFilterResponse>;
    deleteAnnotationFilters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
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
    postLabelOrders: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    getLabelOrder: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetLabelOrderRequest, proto_clarifai_api_service_pb.SingleLabelOrderResponse>;
    listLabelOrders: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    patchLabelOrders: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchLabelOrdersRequest, proto_clarifai_api_service_pb.MultiLabelOrderResponse>;
    deleteLabelOrders: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    getCollector: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetCollectorRequest, proto_clarifai_api_service_pb.SingleCollectorResponse>;
    listCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    patchCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchCollectorsRequest, proto_clarifai_api_service_pb.MultiCollectorResponse>;
    deleteCollectors: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteCollectorsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postStatValues: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostStatValuesRequest, proto_clarifai_api_service_pb.MultiStatValueResponse>;
    postStatValuesAggregate: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostStatValuesAggregateRequest, proto_clarifai_api_service_pb.MultiStatValueAggregateResponse>;
    getModule: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModuleRequest, proto_clarifai_api_service_pb.SingleModuleResponse>;
    listModules: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse>;
    postModules: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse>;
    patchModules: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModulesRequest, proto_clarifai_api_service_pb.MultiModuleResponse>;
    deleteModules: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModulesRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getModuleVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModuleVersionRequest, proto_clarifai_api_service_pb.SingleModuleVersionResponse>;
    listModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    postModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    patchModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchModuleVersionsRequest, proto_clarifai_api_service_pb.MultiModuleVersionResponse>;
    deleteModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getModuleVersionUsageCount: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse>;
    getInstalledModuleVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse>;
    listInstalledModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
    postInstalledModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse>;
    deleteInstalledModuleVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postInstalledModuleVersionsKey: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, proto_clarifai_api_service_pb.SingleKeyResponse>;
    postBulkOperations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostBulkOperationsRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    listBulkOperations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListBulkOperationsRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    getBulkOperation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetBulkOperationRequest, proto_clarifai_api_service_pb.SingleBulkOperationsResponse>;
    cancelBulkOperations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.CancelBulkOperationRequest, proto_clarifai_api_service_pb.MultiBulkOperationsResponse>;
    deleteBulkOperations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteBulkOperationRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listNextTaskAssignments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, proto_clarifai_api_service_pb.MultiInputResponse>;
    putTaskAssignments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, proto_clarifai_api_service_pb.MultiTaskAssignmentResponse>;
    listInputsAddJobs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInputsAddJobsRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    getInputsAddJob: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputsAddJobRequest, proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
    cancelInputsAddJob: grpc.handleUnaryCall<proto_clarifai_api_service_pb.CancelInputsAddJobRequest, proto_clarifai_api_service_pb.SingleInputsAddJobResponse>;
    postUploads: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostUploadsRequest, proto_clarifai_api_service_pb.MultiUploadResponse>;
    putUploadContentParts: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PutUploadContentPartsRequest, proto_clarifai_api_service_pb.SingleUploadResponse>;
    getUpload: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetUploadRequest, proto_clarifai_api_service_pb.SingleUploadResponse>;
    listUploads: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListUploadsRequest, proto_clarifai_api_service_pb.MultiUploadResponse>;
    deleteUploads: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteUploadsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postInputsDataSources: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    getInputsExtractionJob: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse>;
    listInputsExtractionJobs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
    cancelInputsExtractionJobs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse>;
    postInputsUploads: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostInputsUploadsRequest, proto_clarifai_api_service_pb.MultiInputsAddJobResponse>;
    listPipelineVersionRuns: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    getRunner: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetRunnerRequest, proto_clarifai_api_service_pb.SingleRunnerResponse>;
    listRunners: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse>;
    postRunners: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse>;
    patchRunners: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchRunnersRequest, proto_clarifai_api_service_pb.MultiRunnerResponse>;
    deleteRunners: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteRunnersRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listRunnerItems: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListRunnerItemsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    postRunnerItemOutputs: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse>;
    processRunnerItems: grpc.handleBidiStreamingCall<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    postModelVersionsTrainingTimeEstimate: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse>;
    listCloudProviders: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCloudProvidersRequest, proto_clarifai_api_service_pb.MultiCloudProviderResponse>;
    listCloudRegions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListCloudRegionsRequest, proto_clarifai_api_service_pb.MultiCloudRegionResponse>;
    listInstanceTypes: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListInstanceTypesRequest, proto_clarifai_api_service_pb.MultiInstanceTypeResponse>;
    getComputeCluster: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetComputeClusterRequest, proto_clarifai_api_service_pb.SingleComputeClusterResponse>;
    listComputeClusters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListComputeClustersRequest, proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
    postComputeClusters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostComputeClustersRequest, proto_clarifai_api_service_pb.MultiComputeClusterResponse>;
    deleteComputeClusters: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteComputeClustersRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getNodepool: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetNodepoolRequest, proto_clarifai_api_service_pb.SingleNodepoolResponse>;
    listNodepools: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    postNodepools: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    patchNodepools: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchNodepoolsRequest, proto_clarifai_api_service_pb.MultiNodepoolResponse>;
    deleteNodepools: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteNodepoolsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getDeployment: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetDeploymentRequest, proto_clarifai_api_service_pb.SingleDeploymentResponse>;
    listDeployments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    postDeployments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    patchDeployments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchDeploymentsRequest, proto_clarifai_api_service_pb.MultiDeploymentResponse>;
    deleteDeployments: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteDeploymentsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postAuditLogSearches: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, proto_clarifai_api_service_pb.MultiAuditLogEntryResponse>;
    listWorkflowEvaluationTemplates: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse>;
    postLogEntries: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostLogEntriesRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    listLogEntries: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListLogEntriesRequest, proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    streamLogEntries: grpc.handleServerStreamingCall<proto_clarifai_api_service_pb.StreamLogEntriesRequest, proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    postComputePlaneMetrics: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    postWorkflowVersionEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    getWorkflowVersionEvaluation: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse>;
    listWorkflowVersionEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    patchWorkflowVersionEvaluations: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse>;
    listWorkflowVersionEvaluationData: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
    postWorkflowVersionEvaluationData: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse>;
    postPipelines: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse>;
    getPipeline: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetPipelineRequest, proto_clarifai_api_service_pb.SinglePipelineResponse>;
    listPipelines: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse>;
    patchPipelines: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchPipelinesRequest, proto_clarifai_api_service_pb.MultiPipelineResponse>;
    deletePipelines: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeletePipelinesRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getPipelineVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetPipelineVersionRequest, proto_clarifai_api_service_pb.SinglePipelineVersionResponse>;
    listPipelineVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListPipelineVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
    patchPipelineVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionResponse>;
    deletePipelineVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, proto_clarifai_api_status_status_pb.BaseResponse>;
    getPipelineVersionRun: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse>;
    postPipelineVersionRuns: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    patchPipelineVersionRuns: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse>;
    postPipelineSteps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostPipelineStepsRequest, proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
    getPipelineStep: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetPipelineStepRequest, proto_clarifai_api_service_pb.SinglePipelineStepResponse>;
    listPipelineSteps: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListPipelineStepsRequest, proto_clarifai_api_service_pb.MultiPipelineStepResponse>;
    postPipelineStepVersionsUpload: grpc.handleBidiStreamingCall<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    listPipelineStepVersions: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse>;
    getPipelineStepVersion: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse>;
    getSecret: grpc.handleUnaryCall<proto_clarifai_api_service_pb.GetSecretRequest, proto_clarifai_api_service_pb.SingleSecretResponse>;
    listSecrets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse>;
    postSecrets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse>;
    patchSecrets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PatchSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse>;
    deleteSecrets: grpc.handleUnaryCall<proto_clarifai_api_service_pb.DeleteSecretsRequest, proto_clarifai_api_service_pb.MultiSecretResponse>;
    postMetricsQuery: grpc.handleUnaryCall<proto_clarifai_api_service_pb.PostMetricsQueryRequest, proto_clarifai_api_service_pb.MetricsQueryResponse>;
    listMetricLabels: grpc.handleUnaryCall<proto_clarifai_api_service_pb.ListMetricLabelsRequest, proto_clarifai_api_service_pb.MultiMetricLabelsResponse>;
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
    listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
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
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
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
    listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
    listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
    listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
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
    getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
    getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
    getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
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
    patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    generateModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;
    generateModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;
    streamModelOutputs(): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    streamModelOutputs(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    streamModelOutputs(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
    putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
    putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
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
    getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsUpload(): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    postModelVersionsUpload(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    postModelVersionsUpload(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
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
    patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
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
    myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
    myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
    myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
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
    patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    getUser(request: proto_clarifai_api_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: proto_clarifai_api_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: proto_clarifai_api_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
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
    listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
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
    postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
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
    getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    processRunnerItems(): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    processRunnerItems(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    processRunnerItems(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    streamLogEntries(request: proto_clarifai_api_service_pb.StreamLogEntriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    streamLogEntries(request: proto_clarifai_api_service_pb.StreamLogEntriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    postPipelineStepVersionsUpload(): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    postPipelineStepVersionsUpload(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    postPipelineStepVersionsUpload(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
    listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
    listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
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
    public listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
    public listModelConcepts(request: proto_clarifai_api_service_pb.ListModelConceptsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiConceptResponse) => void): grpc.ClientUnaryCall;
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
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public getAnnotation(request: proto_clarifai_api_service_pb.GetAnnotationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public listAnnotations(request: proto_clarifai_api_service_pb.ListAnnotationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
    public postTrackAnnotationsSearches(request: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationResponse) => void): grpc.ClientUnaryCall;
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
    public listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationTracks(request: proto_clarifai_api_service_pb.ListAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationTracks(request: proto_clarifai_api_service_pb.PostAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationTracks(request: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationTracks(request: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationsSearches(request: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationsSearches(request: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationWorkers(request: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkerResponse) => void): grpc.ClientUnaryCall;
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
    public getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
    public getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
    public getInputVideoManifest(request: proto_clarifai_api_service_pb.GetVideoManifestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetVideoManifestResponse) => void): grpc.ClientUnaryCall;
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
    public patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchInputsSearches(request: proto_clarifai_api_service_pb.PatchInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postInputsSearches(request: proto_clarifai_api_service_pb.PostInputsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public postModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiOutputResponse) => void): grpc.ClientUnaryCall;
    public generateModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;
    public generateModelOutputs(request: proto_clarifai_api_service_pb.PostModelOutputsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiOutputResponse>;
    public streamModelOutputs(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    public streamModelOutputs(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelOutputsRequest, proto_clarifai_api_service_pb.MultiOutputResponse>;
    public listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public listDatasets(request: proto_clarifai_api_service_pb.ListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    public getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    public getDataset(request: proto_clarifai_api_service_pb.GetDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetResponse) => void): grpc.ClientUnaryCall;
    public postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public postDatasets(request: proto_clarifai_api_service_pb.PostDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public patchDatasets(request: proto_clarifai_api_service_pb.PatchDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasets(request: proto_clarifai_api_service_pb.DeleteDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public listDatasetInputs(request: proto_clarifai_api_service_pb.ListDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public getDatasetInput(request: proto_clarifai_api_service_pb.GetDatasetInputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public postDatasetInputs(request: proto_clarifai_api_service_pb.PostDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetInputResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetInputs(request: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersions(request: proto_clarifai_api_service_pb.ListDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public getDatasetVersion(request: proto_clarifai_api_service_pb.GetDatasetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    public listDatasetVersionMetricsGroups(request: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse) => void): grpc.ClientUnaryCall;
    public postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public postDatasetVersions(request: proto_clarifai_api_service_pb.PostDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public patchDatasetVersions(request: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDatasetVersions(request: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
    public putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
    public putDatasetVersionExports(request: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse) => void): grpc.ClientUnaryCall;
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
    public getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    public getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    public getResourceCounts(request: proto_clarifai_api_service_pb.GetResourceCountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.GetResourceCountsResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModelsSearches(request: proto_clarifai_api_service_pb.PostModelsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModels(request: proto_clarifai_api_service_pb.PostModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModels(request: proto_clarifai_api_service_pb.PatchModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public patchModelIds(request: proto_clarifai_api_service_pb.PatchModelIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModel(request: proto_clarifai_api_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModels(request: proto_clarifai_api_service_pb.DeleteModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    public patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    public patchModelCheckConsents(request: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse) => void): grpc.ClientUnaryCall;
    public patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    public patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    public patchModelToolkits(request: proto_clarifai_api_service_pb.PatchModelToolkitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelToolkitResponse) => void): grpc.ClientUnaryCall;
    public patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    public patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    public patchModelUseCases(request: proto_clarifai_api_service_pb.PatchModelUseCasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelUseCaseResponse) => void): grpc.ClientUnaryCall;
    public patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    public patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    public patchModelLanguages(request: proto_clarifai_api_service_pb.PatchModelLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelLanguageResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listModelInputs(request: proto_clarifai_api_service_pb.ListModelInputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersion(request: proto_clarifai_api_service_pb.GetModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public listModelVersions(request: proto_clarifai_api_service_pb.ListModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsUnPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionsPublish(request: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsPublish(request: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsUnPublish(request: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelVersions(request: proto_clarifai_api_service_pb.PostModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModelVersions(request: proto_clarifai_api_service_pb.PatchModelVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModelVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModelVersion(request: proto_clarifai_api_service_pb.DeleteModelVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsUpload(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    public postModelVersionsUpload(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostModelVersionsUploadRequest, proto_clarifai_api_service_pb.PostModelVersionsUploadResponse>;
    public postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public postModelMigration(request: proto_clarifai_api_service_pb.PostModelMigrationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelResponse) => void): grpc.ClientUnaryCall;
    public putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public putModelVersionExports(request: proto_clarifai_api_service_pb.PutModelVersionExportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionExport(request: proto_clarifai_api_service_pb.GetModelVersionExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionExportResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionMetrics(request: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionMetrics(request: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModelVersionResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionEvaluations(request: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listModelVersionEvaluations(request: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getModelVersionEvaluation(request: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public postEvaluations(request: proto_clarifai_api_service_pb.PostEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public listEvaluations(request: proto_clarifai_api_service_pb.ListEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
    public getEvaluation(request: proto_clarifai_api_service_pb.GetEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleEvalMetricsResponse) => void): grpc.ClientUnaryCall;
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
    public patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowIds(request: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflow(request: proto_clarifai_api_service_pb.DeleteWorkflowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteWorkflows(request: proto_clarifai_api_service_pb.DeleteWorkflowsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowResults(request: proto_clarifai_api_service_pb.PostWorkflowResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.PostWorkflowResultsResponse) => void): grpc.ClientUnaryCall;
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
    public myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    public myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    public myScopesUser(request: proto_clarifai_api_service_pb.MyScopesUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeUserResponse) => void): grpc.ClientUnaryCall;
    public myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
    public myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
    public myScopesRoot(request: proto_clarifai_api_service_pb.MyScopesRootRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiScopeRootResponse) => void): grpc.ClientUnaryCall;
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
    public patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchAppsDetails(request: proto_clarifai_api_service_pb.PatchAppsDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchAppsIds(request: proto_clarifai_api_service_pb.PatchAppsIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public patchApp(request: proto_clarifai_api_service_pb.PatchAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public postAppsSearches(request: proto_clarifai_api_service_pb.PostAppsSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAppResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: proto_clarifai_api_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: proto_clarifai_api_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: proto_clarifai_api_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUserResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public postValidatePassword(request: proto_clarifai_api_service_pb.PostValidatePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePasswordValidationResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public getSearch(request: proto_clarifai_api_service_pb.GetSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public listSearches(request: proto_clarifai_api_service_pb.ListSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
    public patchSearches(request: proto_clarifai_api_service_pb.PatchSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSearchResponse) => void): grpc.ClientUnaryCall;
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
    public listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public listAnnotationFilters(request: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public getAnnotationFilter(request: proto_clarifai_api_service_pb.GetAnnotationFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public postAnnotationFilters(request: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public patchAnnotationFilters(request: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteAnnotationFilters(request: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
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
    public postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public postLabelOrders(request: proto_clarifai_api_service_pb.PostLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public getLabelOrder(request: proto_clarifai_api_service_pb.GetLabelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public listLabelOrders(request: proto_clarifai_api_service_pb.ListLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public patchLabelOrders(request: proto_clarifai_api_service_pb.PatchLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLabelOrderResponse) => void): grpc.ClientUnaryCall;
    public deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteLabelOrders(request: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
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
    public getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    public getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    public getModule(request: proto_clarifai_api_service_pb.GetModuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleResponse) => void): grpc.ClientUnaryCall;
    public listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public listModules(request: proto_clarifai_api_service_pb.ListModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public postModules(request: proto_clarifai_api_service_pb.PostModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public patchModules(request: proto_clarifai_api_service_pb.PatchModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleResponse) => void): grpc.ClientUnaryCall;
    public deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModules(request: proto_clarifai_api_service_pb.DeleteModulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersion(request: proto_clarifai_api_service_pb.GetModuleVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listModuleVersions(request: proto_clarifai_api_service_pb.ListModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postModuleVersions(request: proto_clarifai_api_service_pb.PostModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public patchModuleVersions(request: proto_clarifai_api_service_pb.PatchModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteModuleVersions(request: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    public getModuleVersionUsageCount(request: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse) => void): grpc.ClientUnaryCall;
    public getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public getInstalledModuleVersion(request: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public listInstalledModuleVersions(request: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersions(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse) => void): grpc.ClientUnaryCall;
    public deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteInstalledModuleVersions(request: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public postInstalledModuleVersionsKey(request: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleKeyResponse) => void): grpc.ClientUnaryCall;
    public postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public postBulkOperations(request: proto_clarifai_api_service_pb.PostBulkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public listBulkOperations(request: proto_clarifai_api_service_pb.ListBulkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public getBulkOperation(request: proto_clarifai_api_service_pb.GetBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public cancelBulkOperations(request: proto_clarifai_api_service_pb.CancelBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiBulkOperationsResponse) => void): grpc.ClientUnaryCall;
    public deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteBulkOperations(request: proto_clarifai_api_service_pb.DeleteBulkOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public listNextTaskAssignments(request: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputResponse) => void): grpc.ClientUnaryCall;
    public putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    public putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    public putTaskAssignments(request: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse) => void): grpc.ClientUnaryCall;
    public listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public listInputsAddJobs(request: proto_clarifai_api_service_pb.ListInputsAddJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsAddJob(request: proto_clarifai_api_service_pb.GetInputsAddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsAddJob(request: proto_clarifai_api_service_pb.CancelInputsAddJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public postUploads(request: proto_clarifai_api_service_pb.PostUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public putUploadContentParts(request: proto_clarifai_api_service_pb.PutUploadContentPartsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public getUpload(request: proto_clarifai_api_service_pb.GetUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleUploadResponse) => void): grpc.ClientUnaryCall;
    public listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public listUploads(request: proto_clarifai_api_service_pb.ListUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiUploadResponse) => void): grpc.ClientUnaryCall;
    public deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteUploads(request: proto_clarifai_api_service_pb.DeleteUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public postInputsDataSources(request: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public getInputsExtractionJob(request: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public listInputsExtractionJobs(request: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public cancelInputsExtractionJobs(request: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse) => void): grpc.ClientUnaryCall;
    public postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public postInputsUploads(request: proto_clarifai_api_service_pb.PostInputsUploadsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInputsAddJobResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersionRuns(request: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    public getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    public getRunner(request: proto_clarifai_api_service_pb.GetRunnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleRunnerResponse) => void): grpc.ClientUnaryCall;
    public listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public listRunners(request: proto_clarifai_api_service_pb.ListRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public postRunners(request: proto_clarifai_api_service_pb.PostRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public patchRunners(request: proto_clarifai_api_service_pb.PatchRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerResponse) => void): grpc.ClientUnaryCall;
    public deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteRunners(request: proto_clarifai_api_service_pb.DeleteRunnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    public listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    public listRunnerItems(request: proto_clarifai_api_service_pb.ListRunnerItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemResponse) => void): grpc.ClientUnaryCall;
    public postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    public postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    public postRunnerItemOutputs(request: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse) => void): grpc.ClientUnaryCall;
    public processRunnerItems(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    public processRunnerItems(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest, proto_clarifai_api_service_pb.MultiRunnerItemResponse>;
    public postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    public postModelVersionsTrainingTimeEstimate(request: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse) => void): grpc.ClientUnaryCall;
    public listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    public listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    public listCloudProviders(request: proto_clarifai_api_service_pb.ListCloudProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudProviderResponse) => void): grpc.ClientUnaryCall;
    public listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    public listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    public listCloudRegions(request: proto_clarifai_api_service_pb.ListCloudRegionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiCloudRegionResponse) => void): grpc.ClientUnaryCall;
    public listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    public listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    public listInstanceTypes(request: proto_clarifai_api_service_pb.ListInstanceTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiInstanceTypeResponse) => void): grpc.ClientUnaryCall;
    public getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public getComputeCluster(request: proto_clarifai_api_service_pb.GetComputeClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public listComputeClusters(request: proto_clarifai_api_service_pb.ListComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public postComputeClusters(request: proto_clarifai_api_service_pb.PostComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiComputeClusterResponse) => void): grpc.ClientUnaryCall;
    public deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteComputeClusters(request: proto_clarifai_api_service_pb.DeleteComputeClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    public getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    public getNodepool(request: proto_clarifai_api_service_pb.GetNodepoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleNodepoolResponse) => void): grpc.ClientUnaryCall;
    public listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public listNodepools(request: proto_clarifai_api_service_pb.ListNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public postNodepools(request: proto_clarifai_api_service_pb.PostNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public patchNodepools(request: proto_clarifai_api_service_pb.PatchNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiNodepoolResponse) => void): grpc.ClientUnaryCall;
    public deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteNodepools(request: proto_clarifai_api_service_pb.DeleteNodepoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    public getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    public getDeployment(request: proto_clarifai_api_service_pb.GetDeploymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleDeploymentResponse) => void): grpc.ClientUnaryCall;
    public listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public listDeployments(request: proto_clarifai_api_service_pb.ListDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public postDeployments(request: proto_clarifai_api_service_pb.PostDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public patchDeployments(request: proto_clarifai_api_service_pb.PatchDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiDeploymentResponse) => void): grpc.ClientUnaryCall;
    public deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deleteDeployments(request: proto_clarifai_api_service_pb.DeleteDeploymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    public postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    public postAuditLogSearches(request: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowEvaluationTemplates(request: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse) => void): grpc.ClientUnaryCall;
    public postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postLogEntries(request: proto_clarifai_api_service_pb.PostLogEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    public listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    public listLogEntries(request: proto_clarifai_api_service_pb.ListLogEntriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiLogEntryResponse) => void): grpc.ClientUnaryCall;
    public streamLogEntries(request: proto_clarifai_api_service_pb.StreamLogEntriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    public streamLogEntries(request: proto_clarifai_api_service_pb.StreamLogEntriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_clarifai_api_service_pb.MultiLogEntryResponse>;
    public postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postComputePlaneMetrics(request: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public getWorkflowVersionEvaluation(request: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public patchWorkflowVersionEvaluations(request: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public listWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public postWorkflowVersionEvaluationData(request: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse) => void): grpc.ClientUnaryCall;
    public postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public postPipelines(request: proto_clarifai_api_service_pb.PostPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    public getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    public getPipeline(request: proto_clarifai_api_service_pb.GetPipelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineResponse) => void): grpc.ClientUnaryCall;
    public listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public listPipelines(request: proto_clarifai_api_service_pb.ListPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public patchPipelines(request: proto_clarifai_api_service_pb.PatchPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineResponse) => void): grpc.ClientUnaryCall;
    public deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deletePipelines(request: proto_clarifai_api_service_pb.DeletePipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersion(request: proto_clarifai_api_service_pb.GetPipelineVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public listPipelineVersions(request: proto_clarifai_api_service_pb.ListPipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersions(request: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionResponse) => void): grpc.ClientUnaryCall;
    public deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public deletePipelineVersions(request: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_status_status_pb.BaseResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public getPipelineVersionRun(request: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public postPipelineVersionRuns(request: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public patchPipelineVersionRuns(request: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse) => void): grpc.ClientUnaryCall;
    public postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public postPipelineSteps(request: proto_clarifai_api_service_pb.PostPipelineStepsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStep(request: proto_clarifai_api_service_pb.GetPipelineStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepResponse) => void): grpc.ClientUnaryCall;
    public listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public listPipelineSteps(request: proto_clarifai_api_service_pb.ListPipelineStepsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepResponse) => void): grpc.ClientUnaryCall;
    public postPipelineStepVersionsUpload(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    public postPipelineStepVersionsUpload(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest, proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse>;
    public listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public listPipelineStepVersions(request: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public getPipelineStepVersion(request: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse) => void): grpc.ClientUnaryCall;
    public getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    public getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    public getSecret(request: proto_clarifai_api_service_pb.GetSecretRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.SingleSecretResponse) => void): grpc.ClientUnaryCall;
    public listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public listSecrets(request: proto_clarifai_api_service_pb.ListSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public postSecrets(request: proto_clarifai_api_service_pb.PostSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public patchSecrets(request: proto_clarifai_api_service_pb.PatchSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public deleteSecrets(request: proto_clarifai_api_service_pb.DeleteSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiSecretResponse) => void): grpc.ClientUnaryCall;
    public postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    public postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    public postMetricsQuery(request: proto_clarifai_api_service_pb.PostMetricsQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MetricsQueryResponse) => void): grpc.ClientUnaryCall;
    public listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
    public listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
    public listMetricLabels(request: proto_clarifai_api_service_pb.ListMetricLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_clarifai_api_service_pb.MultiMetricLabelsResponse) => void): grpc.ClientUnaryCall;
}
