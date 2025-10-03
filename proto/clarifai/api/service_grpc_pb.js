// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_clarifai_api_service_pb = require('../../../proto/clarifai/api/service_pb.js');
var proto_clarifai_api_resources_pb = require('../../../proto/clarifai/api/resources_pb.js');
var proto_clarifai_api_status_status_pb = require('../../../proto/clarifai/api/status/status_pb.js');
var proto_clarifai_api_utils_extensions_pb = require('../../../proto/clarifai/api/utils/extensions_pb.js');
var proto_clarifai_auth_scope_scope_pb = require('../../../proto/clarifai/auth/scope/scope_pb.js');
var proto_clarifai_auth_util_extension_pb = require('../../../proto/clarifai/auth/util/extension_pb.js');
var proto_clarifai_api_status_status_code_pb = require('../../../proto/clarifai/api/status/status_code_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_clarifai_api_CancelBulkOperationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.CancelBulkOperationRequest)) {
    throw new Error('Expected argument of type clarifai.api.CancelBulkOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_CancelBulkOperationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.CancelBulkOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_CancelInputsAddJobRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.CancelInputsAddJobRequest)) {
    throw new Error('Expected argument of type clarifai.api.CancelInputsAddJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_CancelInputsAddJobRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.CancelInputsAddJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_CancelInputsExtractionJobsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest)) {
    throw new Error('Expected argument of type clarifai.api.CancelInputsExtractionJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_CancelInputsExtractionJobsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAnnotationFiltersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAnnotationFiltersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAnnotationFiltersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAnnotationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAnnotationRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAnnotationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAnnotationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAnnotationTracksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAnnotationTracksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAnnotationTracksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAnnotationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAnnotationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAnnotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAnnotationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteAppRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteAppRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteAppRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteBulkOperationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteBulkOperationRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteBulkOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteBulkOperationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteBulkOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteCollaboratorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteCollaboratorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteCollaboratorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteCollaboratorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteCollaboratorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteCollectorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteCollectorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteCollectorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteCollectorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteCollectorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteComputeClustersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteComputeClustersRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteComputeClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteComputeClustersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteComputeClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteConceptRelationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteConceptRelationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteConceptRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteConceptRelationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteConceptRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteDatasetInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteDatasetInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteDatasetInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteDatasetInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteDatasetInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteDatasetVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteDatasetVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteDatasetVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteDatasetsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteDatasetsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteDatasetsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteDeploymentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteDeploymentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteDeploymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteDeploymentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteDeploymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteInputRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteInputRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteInputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteInputRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteInputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteInstalledModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteInstalledModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteInstalledModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteKeyRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteKeyRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteKeyRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteLabelOrdersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteLabelOrdersRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteLabelOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteLabelOrdersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteLabelOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteModelRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteModelRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteModelRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteModelVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteModelVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteModelVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteModelVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteModelVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteModelsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteModelsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteModelsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteModulesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteModulesRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteModulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteModulesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteModulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteNodepoolsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteNodepoolsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteNodepoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteNodepoolsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteNodepoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeletePipelineVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeletePipelineVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeletePipelineVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeletePipelineVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeletePipelineVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeletePipelinesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeletePipelinesRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeletePipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeletePipelinesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeletePipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteRunnersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteRunnersRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteRunnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteRunnersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteRunnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteSearchRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteSearchRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteSearchRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteSecretsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteSecretsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteSecretsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteTasksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteTasksRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteTasksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteUploadsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteUploadsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteUploadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteUploadsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteUploadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteWorkflowRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteWorkflowRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteWorkflowRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteWorkflowVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteWorkflowVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteWorkflowVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_DeleteWorkflowsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteWorkflowsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteWorkflowsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetAnnotationFilterRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetAnnotationFilterRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetAnnotationFilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetAnnotationFilterRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetAnnotationFilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetAnnotationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetAnnotationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetAnnotationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetAnnotationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetAppDuplicationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetAppDuplicationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetAppDuplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetAppDuplicationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetAppDuplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetAppRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetAppRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetAppRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetBulkOperationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetBulkOperationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetBulkOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetBulkOperationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetBulkOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetCollectorRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetCollectorRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetCollectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetCollectorRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetCollectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetComputeClusterRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetComputeClusterRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetComputeClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetComputeClusterRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetComputeClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetConceptCountsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetConceptCountsRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetConceptCountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetConceptCountsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetConceptCountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetConceptLanguageRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetConceptLanguageRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetConceptLanguageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetConceptLanguageRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetConceptLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetConceptRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetConceptRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetConceptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetConceptRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetConceptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetDatasetInputRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetDatasetInputRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetDatasetInputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetDatasetInputRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetDatasetInputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetDatasetRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetDatasetRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetDatasetVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetDatasetVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetDatasetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetDatasetVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetDatasetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetDeploymentRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetDeploymentRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetDeploymentRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetEvaluationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetEvaluationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetEvaluationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetEvaluationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetEvaluationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInputCountRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInputCountRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInputCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInputCountRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInputCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInputRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInputRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInputRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInputSamplesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInputSamplesRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInputSamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInputSamplesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInputSamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInputsAddJobRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInputsAddJobRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInputsAddJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInputsAddJobRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInputsAddJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInputsExtractionJobRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInputsExtractionJobRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInputsExtractionJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInputsExtractionJobRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInputsExtractionJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetInstalledModuleVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetInstalledModuleVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetInstalledModuleVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetKeyRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetKeyRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetLabelOrderRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetLabelOrderRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetLabelOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetLabelOrderRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetLabelOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelTypeRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelTypeRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelTypeRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelVersionEvaluationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelVersionEvaluationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelVersionEvaluationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelVersionExportRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelVersionExportRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelVersionExportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelVersionExportRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelVersionExportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelVersionInputExampleRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelVersionInputExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelVersionInputExampleRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelVersionMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelVersionMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelVersionMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelVersionMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelVersionMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModelVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModelVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModelVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModelVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModelVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModuleRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModuleRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModuleRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModuleVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModuleVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModuleVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModuleVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModuleVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetModuleVersionUsageCountRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetModuleVersionUsageCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetModuleVersionUsageCountRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetNodepoolRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetNodepoolRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetNodepoolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetNodepoolRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetNodepoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetPipelineRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetPipelineRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetPipelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetPipelineRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetPipelineStepRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetPipelineStepRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetPipelineStepRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetPipelineStepRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetPipelineStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetPipelineStepVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetPipelineStepVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetPipelineStepVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetPipelineStepVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetPipelineStepVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetPipelineVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetPipelineVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetPipelineVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetPipelineVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetPipelineVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetPipelineVersionRunRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetPipelineVersionRunRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetPipelineVersionRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetPipelineVersionRunRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetPipelineVersionRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetResourceCountsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetResourceCountsRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetResourceCountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetResourceCountsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetResourceCountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetResourceCountsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetResourceCountsResponse)) {
    throw new Error('Expected argument of type clarifai.api.GetResourceCountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetResourceCountsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.GetResourceCountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetRunnerRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetRunnerRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetRunnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetRunnerRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetRunnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetSearchRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetSearchRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetSearchRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetSecretRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetSecretRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetSecretRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetStatusCodeRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetStatusCodeRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetStatusCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetStatusCodeRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetStatusCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetTaskCountRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetTaskCountRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetTaskCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetTaskCountRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetTaskCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetTaskRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetTaskRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetUploadRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetUploadRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetUploadRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetUserRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetUserRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetVideoManifestRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetVideoManifestRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetVideoManifestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetVideoManifestRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetVideoManifestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetVideoManifestResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetVideoManifestResponse)) {
    throw new Error('Expected argument of type clarifai.api.GetVideoManifestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetVideoManifestResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.GetVideoManifestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetWorkflowRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetWorkflowRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetWorkflowRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetWorkflowVersionEvaluationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetWorkflowVersionEvaluationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetWorkflowVersionEvaluationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_GetWorkflowVersionRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetWorkflowVersionRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetWorkflowVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetWorkflowVersionRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetWorkflowVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAnnotationFiltersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationFiltersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationFiltersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationFiltersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationFiltersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAnnotationTracksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationTracksRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationTracksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationTracksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationTracksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAnnotationWorkersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationWorkersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationWorkersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationWorkersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationWorkersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAnnotationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAppDuplicationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAppDuplicationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAppDuplicationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAppDuplicationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAppDuplicationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAppKeysRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAppKeysRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAppKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAppKeysRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAppKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListAppsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAppsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAppsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAppsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAppsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListBulkOperationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListBulkOperationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListBulkOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListBulkOperationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListBulkOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListCloudProvidersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListCloudProvidersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListCloudProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListCloudProvidersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListCloudProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListCloudRegionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListCloudRegionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListCloudRegionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListCloudRegionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListCloudRegionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListCollaborationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListCollaborationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListCollaborationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListCollaborationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListCollaborationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListCollaboratorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListCollaboratorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListCollaboratorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListCollaboratorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListCollaboratorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListCollectorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListCollectorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListCollectorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListCollectorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListCollectorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListComputeClustersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListComputeClustersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListComputeClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListComputeClustersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListComputeClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListConceptLanguagesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListConceptLanguagesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListConceptLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListConceptLanguagesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListConceptLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListConceptRelationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListConceptRelationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListConceptRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListConceptRelationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListConceptRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListConceptsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListConceptsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListConceptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListConceptsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListConceptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListDatasetInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListDatasetInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListDatasetInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListDatasetInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListDatasetInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListDatasetVersionMetricsGroupsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListDatasetVersionMetricsGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListDatasetVersionMetricsGroupsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListDatasetVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListDatasetVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListDatasetVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListDatasetVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListDatasetVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListDatasetsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListDatasetsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListDatasetsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListDeploymentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListDeploymentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListDeploymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListDeploymentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListDeploymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListInputsAddJobsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInputsAddJobsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInputsAddJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInputsAddJobsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInputsAddJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListInputsExtractionJobsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInputsExtractionJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInputsExtractionJobsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListInstalledModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInstalledModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInstalledModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListInstanceTypesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInstanceTypesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInstanceTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInstanceTypesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInstanceTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListKeysRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListKeysRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListKnowledgeGraphsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListKnowledgeGraphsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListKnowledgeGraphsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListLabelOrdersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListLabelOrdersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListLabelOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListLabelOrdersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListLabelOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListLogEntriesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListLogEntriesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListLogEntriesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListMetricLabelsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListMetricLabelsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListMetricLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListMetricLabelsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListMetricLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelConceptsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelConceptsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelConceptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelConceptsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelConceptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelReferencesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelReferencesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelReferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelReferencesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelReferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelTypesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelTypesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelTypesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelVersionEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelVersionEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelVersionEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelVersionInputExamplesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelVersionInputExamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelVersionInputExamplesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModelsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModelsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListModulesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListModulesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListModulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListModulesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListModulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListNextTaskAssignmentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListNextTaskAssignmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListNextTaskAssignmentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListNodepoolsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListNodepoolsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListNodepoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListNodepoolsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListNodepoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListOpenSourceLicensesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListOpenSourceLicensesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListOpenSourceLicensesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListOpenSourceLicensesResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse)) {
    throw new Error('Expected argument of type clarifai.api.ListOpenSourceLicensesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListOpenSourceLicensesResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListPipelineStepVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListPipelineStepVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListPipelineStepVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListPipelineStepsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListPipelineStepsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListPipelineStepsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListPipelineStepsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListPipelineStepsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListPipelineVersionRunsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListPipelineVersionRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListPipelineVersionRunsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListPipelineVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListPipelineVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListPipelineVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListPipelineVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListPipelineVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListPipelinesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListPipelinesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListPipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListPipelinesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListRunnerItemsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListRunnerItemsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListRunnerItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListRunnerItemsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListRunnerItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListRunnersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListRunnersRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListRunnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListRunnersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListRunnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListScopesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListScopesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListScopesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListScopesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListScopesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListSecretsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListSecretsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListSecretsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListStatusCodesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListStatusCodesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListStatusCodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListStatusCodesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListStatusCodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListTasksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListTasksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListUploadsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListUploadsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListUploadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListUploadsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListUploadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListWorkflowEvaluationTemplatesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListWorkflowEvaluationTemplatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListWorkflowEvaluationTemplatesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListWorkflowVersionEvaluationDataRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListWorkflowVersionEvaluationDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListWorkflowVersionEvaluationDataRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListWorkflowVersionEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListWorkflowVersionEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListWorkflowVersionEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListWorkflowVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListWorkflowVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListWorkflowVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListWorkflowVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListWorkflowVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_ListWorkflowsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListWorkflowsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListWorkflowsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MetricsQueryResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MetricsQueryResponse)) {
    throw new Error('Expected argument of type clarifai.api.MetricsQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MetricsQueryResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MetricsQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAnnotationFilterResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAnnotationFilterResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAnnotationFilterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAnnotationFilterResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAnnotationFilterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAnnotationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAnnotationResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAnnotationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAnnotationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAnnotationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAnnotationSearchMetricsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAnnotationSearchMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAnnotationSearchMetricsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAnnotationTrackResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAnnotationTrackResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAnnotationTrackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAnnotationTrackResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAnnotationTrackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAppDuplicationsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAppDuplicationsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAppDuplicationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAppDuplicationsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAppDuplicationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAppResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAppResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAppResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiAuditLogEntryResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiAuditLogEntryResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiAuditLogEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiAuditLogEntryResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiAuditLogEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiBulkOperationsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiBulkOperationsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiBulkOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiBulkOperationsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiBulkOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiCloudProviderResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiCloudProviderResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiCloudProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiCloudProviderResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiCloudProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiCloudRegionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiCloudRegionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiCloudRegionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiCloudRegionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiCloudRegionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiCollaborationsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiCollaborationsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiCollaborationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiCollaborationsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiCollaborationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiCollaboratorsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiCollaboratorsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiCollaboratorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiCollaboratorsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiCollaboratorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiCollectorResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiCollectorResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiCollectorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiCollectorResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiCollectorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiComputeClusterResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiComputeClusterResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiComputeClusterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiComputeClusterResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiComputeClusterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiConceptCountResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiConceptCountResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiConceptCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiConceptCountResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiConceptCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiConceptLanguageResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiConceptLanguageResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiConceptLanguageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiConceptLanguageResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiConceptLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiConceptRelationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiConceptRelationResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiConceptRelationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiConceptRelationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiConceptRelationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiConceptResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiConceptResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiConceptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiConceptResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiConceptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDatasetInputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDatasetInputResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDatasetInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDatasetInputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDatasetInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDatasetResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDatasetResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDatasetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDatasetResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDatasetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDatasetVersionExportResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDatasetVersionExportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDatasetVersionExportResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDatasetVersionMetricsGroupResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDatasetVersionMetricsGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDatasetVersionMetricsGroupResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDatasetVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDatasetVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDatasetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDatasetVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDatasetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiDeploymentResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiDeploymentResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiDeploymentResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiEvalMetricsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiEvalMetricsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiEvalMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiEvalMetricsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiEvalMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInputAnnotationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInputAnnotationResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInputAnnotationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInputAnnotationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInputAnnotationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInputResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInputsAddJobResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInputsAddJobResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInputsAddJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInputsAddJobResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInputsAddJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInputsExtractionJobResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInputsExtractionJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInputsExtractionJobResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInstalledModuleVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInstalledModuleVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInstalledModuleVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiInstanceTypeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiInstanceTypeResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiInstanceTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiInstanceTypeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiInstanceTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiKeyResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiKeyResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiKeyResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiKnowledgeGraphResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiKnowledgeGraphResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiKnowledgeGraphResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiLabelOrderResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiLabelOrderResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiLabelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiLabelOrderResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiLabelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiListWorkflowVersionEvaluationDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiLogEntryResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiLogEntryResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiLogEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiLogEntryResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiLogEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiMetricLabelsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiMetricLabelsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiMetricLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiMetricLabelsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiMetricLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelCheckConsentResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelCheckConsentResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelCheckConsentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelCheckConsentResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelCheckConsentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelLanguageResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelLanguageResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelLanguageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelLanguageResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelReferenceResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelReferenceResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelReferenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelReferenceResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelReferenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelToolkitResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelToolkitResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelToolkitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelToolkitResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelToolkitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelTypeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelTypeResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelTypeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelUseCaseResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelUseCaseResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelUseCaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelUseCaseResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelUseCaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelVersionInputExampleResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelVersionInputExampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelVersionInputExampleResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModelVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModuleResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModuleResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModuleResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiModuleVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModuleVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModuleVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModuleVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModuleVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiNodepoolResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiNodepoolResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiNodepoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiNodepoolResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiNodepoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiOutputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiOutputResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiOutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiOutputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiOutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiPipelineResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiPipelineResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiPipelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiPipelineResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiPipelineStepResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiPipelineStepResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiPipelineStepResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiPipelineStepResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiPipelineStepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiPipelineStepVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiPipelineStepVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiPipelineStepVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiPipelineVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiPipelineVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiPipelineVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiPipelineVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiPipelineVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiPipelineVersionRunResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiPipelineVersionRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiPipelineVersionRunResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiRunnerItemOutputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiRunnerItemOutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiRunnerItemOutputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiRunnerItemResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiRunnerItemResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiRunnerItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiRunnerItemResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiRunnerItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiRunnerResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiRunnerResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiRunnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiRunnerResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiRunnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiScopeDepsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiScopeDepsResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiScopeDepsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiScopeDepsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiScopeDepsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiScopeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiScopeResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiScopeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiScopeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiScopeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiScopeRootResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiScopeRootResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiScopeRootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiScopeRootResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiScopeRootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiScopeUserResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiScopeUserResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiScopeUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiScopeUserResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiScopeUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiSearchResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiSearchResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiSearchResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiSecretResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiSecretResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiSecretResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiStatValueAggregateResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiStatValueAggregateResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiStatValueAggregateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiStatValueAggregateResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiStatValueAggregateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiStatValueResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiStatValueResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiStatValueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiStatValueResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiStatValueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiStatusCodeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiStatusCodeResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiStatusCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiStatusCodeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiStatusCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiTaskAssignmentResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiTaskAssignmentResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiTaskAssignmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiTaskAssignmentResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiTaskAssignmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiTaskResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiTaskResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiTaskResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiTrainingTimeEstimateResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiTrainingTimeEstimateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiTrainingTimeEstimateResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiUploadResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiUploadResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiUploadResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiWorkerResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiWorkerResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiWorkerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiWorkerResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiWorkerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiWorkflowEvaluationTemplateResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiWorkflowEvaluationTemplateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiWorkflowEvaluationTemplateResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiWorkflowResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiWorkflowResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiWorkflowResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiWorkflowVersionEvaluationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiWorkflowVersionEvaluationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiWorkflowVersionEvaluationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiWorkflowVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiWorkflowVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiWorkflowVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiWorkflowVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiWorkflowVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MyScopesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MyScopesRequest)) {
    throw new Error('Expected argument of type clarifai.api.MyScopesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MyScopesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.MyScopesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MyScopesRootRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MyScopesRootRequest)) {
    throw new Error('Expected argument of type clarifai.api.MyScopesRootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MyScopesRootRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.MyScopesRootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MyScopesUserRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MyScopesUserRequest)) {
    throw new Error('Expected argument of type clarifai.api.MyScopesUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MyScopesUserRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.MyScopesUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationFiltersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationFiltersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationFiltersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationTracksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationTracksRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationTracksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationTracksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationTracksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationsStatusRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationsStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationsStatusRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAnnotationsStatusResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationsStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationsStatusResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAppRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAppRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAppRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAppsDetailsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAppsDetailsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAppsDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAppsDetailsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAppsDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAppsIdsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAppsIdsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAppsIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAppsIdsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAppsIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchAppsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAppsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAppsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAppsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAppsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchCollaboratorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchCollaboratorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchCollaboratorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchCollaboratorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchCollaboratorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchCollectorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchCollectorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchCollectorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchCollectorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchCollectorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchConceptLanguagesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchConceptLanguagesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchConceptLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchConceptLanguagesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchConceptLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchConceptsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchConceptsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchConceptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchConceptsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchConceptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchDatasetVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchDatasetVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchDatasetVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchDatasetVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchDatasetVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchDatasetsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchDatasetsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchDatasetsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchDeploymentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchDeploymentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchDeploymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchDeploymentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchDeploymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchInputsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchInputsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchInputsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchInputsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchInputsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchKeysRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchKeysRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchKeysRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchLabelOrdersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchLabelOrdersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchLabelOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchLabelOrdersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchLabelOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelCheckConsentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelCheckConsentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelCheckConsentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelIdsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelIdsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelIdsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelLanguagesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelLanguagesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelLanguagesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelToolkitsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelToolkitsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelToolkitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelToolkitsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelToolkitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelUseCasesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelUseCasesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelUseCasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelUseCasesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelUseCasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModelsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModelsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModelsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchModulesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchModulesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchModulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchModulesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchModulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchNodepoolsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchNodepoolsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchNodepoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchNodepoolsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchNodepoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchPipelineVersionRunsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchPipelineVersionRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchPipelineVersionRunsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchPipelineVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchPipelineVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchPipelineVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchPipelineVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchPipelineVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchPipelinesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchPipelinesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchPipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchPipelinesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchRunnersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchRunnersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchRunnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchRunnersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchRunnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchSecretsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchSecretsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchSecretsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchTasksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchTasksRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchTasksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchWorkflowIdsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchWorkflowIdsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchWorkflowIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchWorkflowIdsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchWorkflowIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchWorkflowVersionEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchWorkflowVersionEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchWorkflowVersionEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchWorkflowVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchWorkflowVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchWorkflowVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PatchWorkflowsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchWorkflowsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchWorkflowsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAnnotationFiltersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationFiltersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationFiltersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationFiltersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationFiltersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAnnotationTracksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationTracksRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationTracksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationTracksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationTracksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAnnotationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAnnotationsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAppDuplicationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAppDuplicationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAppDuplicationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAppDuplicationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAppDuplicationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAppsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAppsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAppsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAppsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAppsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAppsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAppsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAppsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAppsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAppsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostAuditLogSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAuditLogSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAuditLogSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAuditLogSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAuditLogSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostBulkOperationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostBulkOperationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostBulkOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostBulkOperationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostBulkOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostCollaboratorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostCollaboratorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostCollaboratorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostCollaboratorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostCollaboratorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostCollectorsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostCollectorsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostCollectorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostCollectorsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostCollectorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostComputeClustersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostComputeClustersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostComputeClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostComputeClustersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostComputeClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostComputePlaneMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostComputePlaneMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostComputePlaneMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostConceptLanguagesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptLanguagesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptLanguagesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostConceptRelationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptRelationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptRelationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostConceptsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostConceptsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostDatasetInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostDatasetInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostDatasetInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostDatasetInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostDatasetInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostDatasetVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostDatasetVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostDatasetVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostDatasetVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostDatasetVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostDatasetsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostDatasetsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostDatasetsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostDeploymentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostDeploymentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostDeploymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostDeploymentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostDeploymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInputsDataSourcesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInputsDataSourcesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInputsDataSourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInputsDataSourcesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInputsDataSourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInputsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInputsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInputsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInputsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInputsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInputsUploadsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInputsUploadsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInputsUploadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInputsUploadsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInputsUploadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInstalledModuleVersionsKeyRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInstalledModuleVersionsKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInstalledModuleVersionsKeyRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostInstalledModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostInstalledModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostInstalledModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostKeysRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostKeysRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostKeysRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostKnowledgeGraphsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostKnowledgeGraphsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostKnowledgeGraphsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostLabelOrdersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostLabelOrdersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostLabelOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostLabelOrdersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostLabelOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostLogEntriesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostLogEntriesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostLogEntriesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostMetricsQueryRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostMetricsQueryRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostMetricsQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostMetricsQueryRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostMetricsQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelMigrationRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelMigrationRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelMigrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelMigrationRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelMigrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelOutputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelOutputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelOutputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelOutputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsPublishRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsPublishRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsPublishRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsTrainingTimeEstimateRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsTrainingTimeEstimateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsTrainingTimeEstimateRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsUnPublishRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsUnPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsUnPublishRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsUploadRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsUploadRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsUploadRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelVersionsUploadResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsUploadResponse)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsUploadResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModelsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModuleVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModuleVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModuleVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModuleVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModuleVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostModulesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModulesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModulesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostNodepoolsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostNodepoolsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostNodepoolsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostNodepoolsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostNodepoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostPipelineStepVersionsUploadRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostPipelineStepVersionsUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostPipelineStepVersionsUploadRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostPipelineStepVersionsUploadResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse)) {
    throw new Error('Expected argument of type clarifai.api.PostPipelineStepVersionsUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostPipelineStepVersionsUploadResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostPipelineStepsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostPipelineStepsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostPipelineStepsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostPipelineStepsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostPipelineStepsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostPipelineVersionRunsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostPipelineVersionRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostPipelineVersionRunsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostPipelinesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostPipelinesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostPipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostPipelinesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostRunnerItemOutputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostRunnerItemOutputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostRunnerItemOutputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostRunnersRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostRunnersRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostRunnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostRunnersRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostRunnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostSearchesByIDRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostSearchesByIDRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostSearchesByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostSearchesByIDRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostSearchesByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostSecretsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostSecretsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostSecretsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostStatValuesAggregateRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostStatValuesAggregateRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostStatValuesAggregateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostStatValuesAggregateRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostStatValuesAggregateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostStatValuesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostStatValuesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostStatValuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostStatValuesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostStatValuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostTasksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostTasksRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostTasksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostTrackAnnotationsSearchesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostTrackAnnotationsSearchesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostTrackAnnotationsSearchesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostUploadsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostUploadsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostUploadsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostUploadsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostUploadsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostValidatePasswordRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostValidatePasswordRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostValidatePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostValidatePasswordRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostValidatePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowResultsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowResultsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowResultsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowResultsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowResultsResponse)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowResultsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowVersionEvaluationDataRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowVersionEvaluationDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowVersionEvaluationDataRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowVersionEvaluationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowVersionEvaluationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowVersionEvaluationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowVersionsPublishRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowVersionsPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowVersionsPublishRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowVersionsUnPublishRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowVersionsUnPublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowVersionsUnPublishRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PutDatasetVersionExportsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PutDatasetVersionExportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PutDatasetVersionExportsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PutModelVersionExportsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PutModelVersionExportsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PutModelVersionExportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PutModelVersionExportsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PutModelVersionExportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PutTaskAssignmentsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PutTaskAssignmentsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PutTaskAssignmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PutTaskAssignmentsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PutTaskAssignmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PutUploadContentPartsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PutUploadContentPartsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PutUploadContentPartsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PutUploadContentPartsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PutUploadContentPartsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleAnnotationFilterResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleAnnotationFilterResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleAnnotationFilterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleAnnotationFilterResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleAnnotationFilterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleAnnotationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleAnnotationResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleAnnotationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleAnnotationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleAnnotationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleAppDuplicationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleAppDuplicationResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleAppDuplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleAppDuplicationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleAppDuplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleAppResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleAppResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleAppResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleBulkOperationsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleBulkOperationsResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleBulkOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleBulkOperationsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleBulkOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleCollectorResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleCollectorResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleCollectorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleCollectorResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleCollectorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleComputeClusterResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleComputeClusterResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleComputeClusterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleComputeClusterResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleComputeClusterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleConceptLanguageResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleConceptLanguageResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleConceptLanguageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleConceptLanguageResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleConceptLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleConceptResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleConceptResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleConceptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleConceptResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleConceptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleDatasetInputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleDatasetInputResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleDatasetInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleDatasetInputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleDatasetInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleDatasetResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleDatasetResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleDatasetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleDatasetResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleDatasetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleDatasetVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleDatasetVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleDatasetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleDatasetVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleDatasetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleDeploymentResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleDeploymentResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleDeploymentResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleEvalMetricsResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleEvalMetricsResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleEvalMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleEvalMetricsResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleEvalMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleInputCountResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleInputCountResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleInputCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleInputCountResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleInputCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleInputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleInputResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleInputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleInputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleInputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleInputsAddJobResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleInputsAddJobResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleInputsAddJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleInputsAddJobResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleInputsAddJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleInputsExtractionJobResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleInputsExtractionJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleInputsExtractionJobResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleInstalledModuleVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleInstalledModuleVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleInstalledModuleVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleKeyResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleKeyResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleKeyResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleLabelOrderResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleLabelOrderResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleLabelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleLabelOrderResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleLabelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModelResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModelResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModelResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModelTypeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModelTypeResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModelTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModelTypeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModelTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModelVersionExportResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModelVersionExportResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModelVersionExportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModelVersionExportResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModelVersionExportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModelVersionInputExampleResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModelVersionInputExampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModelVersionInputExampleResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModelVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModelVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModelVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModelVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModelVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModuleResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModuleResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModuleResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModuleVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModuleVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModuleVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModuleVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModuleVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleModuleVersionUsageCountResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleModuleVersionUsageCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleModuleVersionUsageCountResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleNodepoolResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleNodepoolResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleNodepoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleNodepoolResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleNodepoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePasswordValidationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePasswordValidationResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePasswordValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePasswordValidationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePasswordValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePipelineResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePipelineResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePipelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePipelineResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePipelineStepResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePipelineStepResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePipelineStepResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePipelineStepResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePipelineStepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePipelineStepVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePipelineStepVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePipelineStepVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePipelineVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePipelineVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePipelineVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePipelineVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePipelineVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SinglePipelineVersionRunResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePipelineVersionRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePipelineVersionRunResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleRunnerResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleRunnerResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleRunnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleRunnerResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleRunnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleSearchResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleSearchResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleSearchResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleSecretResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleSecretResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleSecretResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleStatusCodeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleStatusCodeResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleStatusCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleStatusCodeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleStatusCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleTaskCountResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleTaskCountResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleTaskCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleTaskCountResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleTaskCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleTaskResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleTaskResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleTaskResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleUploadResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleUploadResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleUploadResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleUserResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleUserResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleUserResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleWorkflowResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleWorkflowResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleWorkflowResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleWorkflowVersionEvaluationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleWorkflowVersionEvaluationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleWorkflowVersionEvaluationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_SingleWorkflowVersionResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleWorkflowVersionResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleWorkflowVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleWorkflowVersionResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleWorkflowVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_StreamInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.StreamInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.StreamInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_StreamInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.StreamInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_StreamLogEntriesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.StreamLogEntriesRequest)) {
    throw new Error('Expected argument of type clarifai.api.StreamLogEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_StreamLogEntriesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.StreamLogEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_status_BaseResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_status_status_pb.BaseResponse)) {
    throw new Error('Expected argument of type clarifai.api.status.BaseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_status_BaseResponse(buffer_arg) {
  return proto_clarifai_api_status_status_pb.BaseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Note: this is based on the google api format defined here. Please
// read this before contributing to this file and other *.proto files
// for the API.
// https://cloud.google.com/service-management/reference/rpc/google.api#google.api.HttpRule
//
// For the cl_depending_scopes in this file, see the docstring that explains the two types of
// scope dependencies in clarifai/auth/scope/scope.proto
//
// For new endpoints you should typically only add the fully qualified url that includes the user_id
// and app_id.
//
// You should typicaly use KeyAuth (the most restricted auth type) for new endpoints unless they are
// for resources not contained in an app or need access from things across apps. See more about the
// auth types here:
// https://clarifai.atlassian.net/wiki/spaces/TT/pages/1821409336/API+Authorizers+and+Resource+Access
//
//
var V2Service = exports.V2Service = {
  // List concept relations between concepts in the platform.
// MUST be above ListConcepts so that if concept_id is empty this will still match
// /concepts/relations to list all the concept relations in the app.
listConceptRelations: {
    path: '/clarifai.api.V2/ListConceptRelations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListConceptRelationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptRelationResponse,
    requestSerialize: serialize_clarifai_api_ListConceptRelationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListConceptRelationsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptRelationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptRelationResponse,
  },
  // Post concept relations to create relations between concepts in the platform.
postConceptRelations: {
    path: '/clarifai.api.V2/PostConceptRelations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostConceptRelationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptRelationResponse,
    requestSerialize: serialize_clarifai_api_PostConceptRelationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostConceptRelationsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptRelationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptRelationResponse,
  },
  // Post concept relations to create relations between concepts in the platform.
deleteConceptRelations: {
    path: '/clarifai.api.V2/DeleteConceptRelations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteConceptRelationsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteConceptRelationsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteConceptRelationsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all the concepts with their positive and negative counts
getConceptCounts: {
    path: '/clarifai.api.V2/GetConceptCounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetConceptCountsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptCountResponse,
    requestSerialize: serialize_clarifai_api_GetConceptCountsRequest,
    requestDeserialize: deserialize_clarifai_api_GetConceptCountsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptCountResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptCountResponse,
  },
  // Get a specific concept from an app.
getConcept: {
    path: '/clarifai.api.V2/GetConcept',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetConceptRequest,
    responseType: proto_clarifai_api_service_pb.SingleConceptResponse,
    requestSerialize: serialize_clarifai_api_GetConceptRequest,
    requestDeserialize: deserialize_clarifai_api_GetConceptRequest,
    responseSerialize: serialize_clarifai_api_SingleConceptResponse,
    responseDeserialize: deserialize_clarifai_api_SingleConceptResponse,
  },
  // List all the concepts.
listConcepts: {
    path: '/clarifai.api.V2/ListConcepts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListConceptsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptResponse,
    requestSerialize: serialize_clarifai_api_ListConceptsRequest,
    requestDeserialize: deserialize_clarifai_api_ListConceptsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptResponse,
  },
  // List models concepts.
listModelConcepts: {
    path: '/clarifai.api.V2/ListModelConcepts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelConceptsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptResponse,
    requestSerialize: serialize_clarifai_api_ListModelConceptsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelConceptsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptResponse,
  },
  // Search over the concepts to find one or more you're looking for.
// This leverage the "body" parameter because we also have page and
// per_page as url query param variables in this request.
postConceptsSearches: {
    path: '/clarifai.api.V2/PostConceptsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostConceptsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptResponse,
    requestSerialize: serialize_clarifai_api_PostConceptsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostConceptsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptResponse,
  },
  // Add a concept to an app.
postConcepts: {
    path: '/clarifai.api.V2/PostConcepts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostConceptsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptResponse,
    requestSerialize: serialize_clarifai_api_PostConceptsRequest,
    requestDeserialize: deserialize_clarifai_api_PostConceptsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptResponse,
  },
  // Patch one or more concepts.
patchConcepts: {
    path: '/clarifai.api.V2/PatchConcepts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchConceptsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptResponse,
    requestSerialize: serialize_clarifai_api_PatchConceptsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchConceptsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptResponse,
  },
  // Get a specific concept from an app.
getConceptLanguage: {
    path: '/clarifai.api.V2/GetConceptLanguage',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetConceptLanguageRequest,
    responseType: proto_clarifai_api_service_pb.SingleConceptLanguageResponse,
    requestSerialize: serialize_clarifai_api_GetConceptLanguageRequest,
    requestDeserialize: deserialize_clarifai_api_GetConceptLanguageRequest,
    responseSerialize: serialize_clarifai_api_SingleConceptLanguageResponse,
    responseDeserialize: deserialize_clarifai_api_SingleConceptLanguageResponse,
  },
  // List the concept in all the translated languages.
listConceptLanguages: {
    path: '/clarifai.api.V2/ListConceptLanguages',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListConceptLanguagesRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptLanguageResponse,
    requestSerialize: serialize_clarifai_api_ListConceptLanguagesRequest,
    requestDeserialize: deserialize_clarifai_api_ListConceptLanguagesRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptLanguageResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptLanguageResponse,
  },
  // Add a new translation for this concept.
postConceptLanguages: {
    path: '/clarifai.api.V2/PostConceptLanguages',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostConceptLanguagesRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptLanguageResponse,
    requestSerialize: serialize_clarifai_api_PostConceptLanguagesRequest,
    requestDeserialize: deserialize_clarifai_api_PostConceptLanguagesRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptLanguageResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptLanguageResponse,
  },
  // Patch the name for a given language names by passing in a list of concepts with the new names
// for the languages.
patchConceptLanguages: {
    path: '/clarifai.api.V2/PatchConceptLanguages',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchConceptLanguagesRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptLanguageResponse,
    requestSerialize: serialize_clarifai_api_PatchConceptLanguagesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchConceptLanguagesRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptLanguageResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptLanguageResponse,
  },
  // List all domain graphs.
listKnowledgeGraphs: {
    path: '/clarifai.api.V2/ListKnowledgeGraphs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListKnowledgeGraphsRequest,
    responseType: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse,
    requestSerialize: serialize_clarifai_api_ListKnowledgeGraphsRequest,
    requestDeserialize: deserialize_clarifai_api_ListKnowledgeGraphsRequest,
    responseSerialize: serialize_clarifai_api_MultiKnowledgeGraphResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKnowledgeGraphResponse,
  },
  // Post domain graphs.
postKnowledgeGraphs: {
    path: '/clarifai.api.V2/PostKnowledgeGraphs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostKnowledgeGraphsRequest,
    responseType: proto_clarifai_api_service_pb.MultiKnowledgeGraphResponse,
    requestSerialize: serialize_clarifai_api_PostKnowledgeGraphsRequest,
    requestDeserialize: deserialize_clarifai_api_PostKnowledgeGraphsRequest,
    responseSerialize: serialize_clarifai_api_MultiKnowledgeGraphResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKnowledgeGraphResponse,
  },
  // Get a specific annotation from an app.
getAnnotation: {
    path: '/clarifai.api.V2/GetAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetAnnotationRequest,
    responseType: proto_clarifai_api_service_pb.SingleAnnotationResponse,
    requestSerialize: serialize_clarifai_api_GetAnnotationRequest,
    requestDeserialize: deserialize_clarifai_api_GetAnnotationRequest,
    responseSerialize: serialize_clarifai_api_SingleAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_SingleAnnotationResponse,
  },
  // List all the annotation.
listAnnotations: {
    path: '/clarifai.api.V2/ListAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAnnotationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationResponse,
    requestSerialize: serialize_clarifai_api_ListAnnotationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListAnnotationsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationResponse,
  },
  // List video track annotations for a specific input.
postTrackAnnotationsSearches: {
    path: '/clarifai.api.V2/PostTrackAnnotationsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostTrackAnnotationsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationResponse,
    requestSerialize: serialize_clarifai_api_PostTrackAnnotationsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostTrackAnnotationsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationResponse,
  },
  // Post annotations.
postAnnotations: {
    path: '/clarifai.api.V2/PostAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAnnotationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationResponse,
    requestSerialize: serialize_clarifai_api_PostAnnotationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostAnnotationsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationResponse,
  },
  // Patch one or more annotations.
patchAnnotations: {
    path: '/clarifai.api.V2/PatchAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAnnotationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationResponse,
    requestSerialize: serialize_clarifai_api_PatchAnnotationsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAnnotationsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationResponse,
  },
  // Patch annotations status by worker id and task id.
// Deprecated: Use PutTaskAssignments to update task annotations.
//   For example, you can use PutTaskAssignments with action REVIEW_APPROVE
//   to approve task assignments and associated annotations in bulk.
patchAnnotationsStatus: {
    path: '/clarifai.api.V2/PatchAnnotationsStatus',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAnnotationsStatusRequest,
    responseType: proto_clarifai_api_service_pb.PatchAnnotationsStatusResponse,
    requestSerialize: serialize_clarifai_api_PatchAnnotationsStatusRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAnnotationsStatusRequest,
    responseSerialize: serialize_clarifai_api_PatchAnnotationsStatusResponse,
    responseDeserialize: deserialize_clarifai_api_PatchAnnotationsStatusResponse,
  },
  // Delete a single annotation.
deleteAnnotation: {
    path: '/clarifai.api.V2/DeleteAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAnnotationRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAnnotationRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAnnotationRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Delete multiple annotations in one request.
deleteAnnotations: {
    path: '/clarifai.api.V2/DeleteAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAnnotationsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAnnotationsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAnnotationsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all the annotation tracks.
listAnnotationTracks: {
    path: '/clarifai.api.V2/ListAnnotationTracks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAnnotationTracksRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse,
    requestSerialize: serialize_clarifai_api_ListAnnotationTracksRequest,
    requestDeserialize: deserialize_clarifai_api_ListAnnotationTracksRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationTrackResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationTrackResponse,
  },
  // Post annotation tracks.
postAnnotationTracks: {
    path: '/clarifai.api.V2/PostAnnotationTracks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAnnotationTracksRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse,
    requestSerialize: serialize_clarifai_api_PostAnnotationTracksRequest,
    requestDeserialize: deserialize_clarifai_api_PostAnnotationTracksRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationTrackResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationTrackResponse,
  },
  // Patch one or more annotation tracks.
patchAnnotationTracks: {
    path: '/clarifai.api.V2/PatchAnnotationTracks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAnnotationTracksRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationTrackResponse,
    requestSerialize: serialize_clarifai_api_PatchAnnotationTracksRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAnnotationTracksRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationTrackResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationTrackResponse,
  },
  // Delete multiple annotation tracks in one request.
deleteAnnotationTracks: {
    path: '/clarifai.api.V2/DeleteAnnotationTracks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAnnotationTracksRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAnnotationTracksRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAnnotationTracksRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Patch saved annotations searches by ids.
patchAnnotationsSearches: {
    path: '/clarifai.api.V2/PatchAnnotationsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAnnotationsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PatchAnnotationsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAnnotationsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Execute a search over annotations
postAnnotationsSearches: {
    path: '/clarifai.api.V2/PostAnnotationsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAnnotationsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PostAnnotationsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostAnnotationsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // ListAnnotationWorkers lists users, models, and workflows (collectively
// known as "workers") that have added annotations to the application.
listAnnotationWorkers: {
    path: '/clarifai.api.V2/ListAnnotationWorkers',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAnnotationWorkersRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkerResponse,
    requestSerialize: serialize_clarifai_api_ListAnnotationWorkersRequest,
    requestDeserialize: deserialize_clarifai_api_ListAnnotationWorkersRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkerResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkerResponse,
  },
  // Get input count per status.
getInputCount: {
    path: '/clarifai.api.V2/GetInputCount',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInputCountRequest,
    responseType: proto_clarifai_api_service_pb.SingleInputCountResponse,
    requestSerialize: serialize_clarifai_api_GetInputCountRequest,
    requestDeserialize: deserialize_clarifai_api_GetInputCountRequest,
    responseSerialize: serialize_clarifai_api_SingleInputCountResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInputCountResponse,
  },
  // Streams all the inputs starting from oldest assets.
streamInputs: {
    path: '/clarifai.api.V2/StreamInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.StreamInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_StreamInputsRequest,
    requestDeserialize: deserialize_clarifai_api_StreamInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  getInputSamples: {
    path: '/clarifai.api.V2/GetInputSamples',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInputSamplesRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputAnnotationResponse,
    requestSerialize: serialize_clarifai_api_GetInputSamplesRequest,
    requestDeserialize: deserialize_clarifai_api_GetInputSamplesRequest,
    responseSerialize: serialize_clarifai_api_MultiInputAnnotationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputAnnotationResponse,
  },
  // Get a specific input from an app.
getInput: {
    path: '/clarifai.api.V2/GetInput',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInputRequest,
    responseType: proto_clarifai_api_service_pb.SingleInputResponse,
    requestSerialize: serialize_clarifai_api_GetInputRequest,
    requestDeserialize: deserialize_clarifai_api_GetInputRequest,
    responseSerialize: serialize_clarifai_api_SingleInputResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInputResponse,
  },
  // Get a MPEG-DASH manifest for video-type inputs that were added via PostInputs and successfully processed
// Experimental. Manifest is used by browser and desktop clients that implement an efficient streaming playback
// This means client can switch between low-resolution and high-resolution video streams
// Depending on network bandwidth or user's preference
// This also means that reencoded video streams are reencoded in a uniform way, not relying on original format
// Alternative to MPEG-dash is to stream original file with byte-range header
getInputVideoManifest: {
    path: '/clarifai.api.V2/GetInputVideoManifest',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetVideoManifestRequest,
    responseType: proto_clarifai_api_service_pb.GetVideoManifestResponse,
    requestSerialize: serialize_clarifai_api_GetVideoManifestRequest,
    requestDeserialize: deserialize_clarifai_api_GetVideoManifestRequest,
    responseSerialize: serialize_clarifai_api_GetVideoManifestResponse,
    responseDeserialize: deserialize_clarifai_api_GetVideoManifestResponse,
  },
  // List all the inputs.
listInputs: {
    path: '/clarifai.api.V2/ListInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_ListInputsRequest,
    requestDeserialize: deserialize_clarifai_api_ListInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  // PostInputs adds one or more inputs to the app.
// Takes a list of image/video/audio/text URLs, image/video/audio bytes or raw text
// Optionally, include concepts or dataset ids to link them
// Optionally, include metadata for search
// Note that inputs processing is asynchronous process
// See ListInputs, StreamInputs or PostInputSearches to list results
postInputs: {
    path: '/clarifai.api.V2/PostInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_PostInputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  // Patch one or more inputs.
patchInputs: {
    path: '/clarifai.api.V2/PatchInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_PatchInputsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  // Delete a single input asynchronously.
deleteInput: {
    path: '/clarifai.api.V2/DeleteInput',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteInputRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteInputRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteInputRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Delete multiple inputs in one request.
// This call is asynchronous.
deleteInputs: {
    path: '/clarifai.api.V2/DeleteInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteInputsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteInputsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteInputsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Patch saved inputs searches by ids.
patchInputsSearches: {
    path: '/clarifai.api.V2/PatchInputsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchInputsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PatchInputsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchInputsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Execute a search over inputs
postInputsSearches: {
    path: '/clarifai.api.V2/PostInputsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInputsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PostInputsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostInputsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Get predicted outputs from the model.
postModelOutputs: {
    path: '/clarifai.api.V2/PostModelOutputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiOutputResponse,
    requestSerialize: serialize_clarifai_api_PostModelOutputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelOutputsRequest,
    responseSerialize: serialize_clarifai_api_MultiOutputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiOutputResponse,
  },
  // TODO(zeiler): will need to
// Single request but streaming responses.
generateModelOutputs: {
    path: '/clarifai.api.V2/GenerateModelOutputs',
    requestStream: false,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiOutputResponse,
    requestSerialize: serialize_clarifai_api_PostModelOutputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelOutputsRequest,
    responseSerialize: serialize_clarifai_api_MultiOutputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiOutputResponse,
  },
  // Stream of requests and stream of responses
streamModelOutputs: {
    path: '/clarifai.api.V2/StreamModelOutputs',
    requestStream: true,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.PostModelOutputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiOutputResponse,
    requestSerialize: serialize_clarifai_api_PostModelOutputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelOutputsRequest,
    responseSerialize: serialize_clarifai_api_MultiOutputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiOutputResponse,
  },
  // List all the datasets.
listDatasets: {
    path: '/clarifai.api.V2/ListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListDatasetsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetResponse,
    requestSerialize: serialize_clarifai_api_ListDatasetsRequest,
    requestDeserialize: deserialize_clarifai_api_ListDatasetsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetResponse,
  },
  // Get a specific dataset.
getDataset: {
    path: '/clarifai.api.V2/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetDatasetRequest,
    responseType: proto_clarifai_api_service_pb.SingleDatasetResponse,
    requestSerialize: serialize_clarifai_api_GetDatasetRequest,
    requestDeserialize: deserialize_clarifai_api_GetDatasetRequest,
    responseSerialize: serialize_clarifai_api_SingleDatasetResponse,
    responseDeserialize: deserialize_clarifai_api_SingleDatasetResponse,
  },
  // Add datasets to an app.
// The process is atomic, i.e. either all or no datasets are added.
// If there is an error for one dataset,
// the process will stop, revert the transaction and return the error.
postDatasets: {
    path: '/clarifai.api.V2/PostDatasets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostDatasetsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetResponse,
    requestSerialize: serialize_clarifai_api_PostDatasetsRequest,
    requestDeserialize: deserialize_clarifai_api_PostDatasetsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetResponse,
  },
  // Patch one or more datasets.
// The process is atomic, i.e. either all or no datasets are patched.
// If there is an error for one dataset,
// the process will stop, revert the transaction and return the error.
patchDatasets: {
    path: '/clarifai.api.V2/PatchDatasets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchDatasetsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetResponse,
    requestSerialize: serialize_clarifai_api_PatchDatasetsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchDatasetsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetResponse,
  },
  // Delete one or more datasets in a single request.
deleteDatasets: {
    path: '/clarifai.api.V2/DeleteDatasets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteDatasetsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteDatasetsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteDatasetsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all the dataset inputs in a dataset.
listDatasetInputs: {
    path: '/clarifai.api.V2/ListDatasetInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListDatasetInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetInputResponse,
    requestSerialize: serialize_clarifai_api_ListDatasetInputsRequest,
    requestDeserialize: deserialize_clarifai_api_ListDatasetInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetInputResponse,
  },
  // Get a specific dataset input.
getDatasetInput: {
    path: '/clarifai.api.V2/GetDatasetInput',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetDatasetInputRequest,
    responseType: proto_clarifai_api_service_pb.SingleDatasetInputResponse,
    requestSerialize: serialize_clarifai_api_GetDatasetInputRequest,
    requestDeserialize: deserialize_clarifai_api_GetDatasetInputRequest,
    responseSerialize: serialize_clarifai_api_SingleDatasetInputResponse,
    responseDeserialize: deserialize_clarifai_api_SingleDatasetInputResponse,
  },
  // Add dataset inputs to a dataset.
// The process is not atomic, i.e. if there are errors with some dataset
// inputs, others might still be added. The response reports
//   - SUCCESS if all dataset inputs were added,
//   - MIXED_STATUS if only some dataset inputs were added, and
//   - FAILURE if no dataset inputs were added.
// Each individual dataset input in the response has the status set to
// indicate if it was successful or if there was an error.
postDatasetInputs: {
    path: '/clarifai.api.V2/PostDatasetInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostDatasetInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetInputResponse,
    requestSerialize: serialize_clarifai_api_PostDatasetInputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostDatasetInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetInputResponse,
  },
  // Delete one or more dataset inputs in a single request.
deleteDatasetInputs: {
    path: '/clarifai.api.V2/DeleteDatasetInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteDatasetInputsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteDatasetInputsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteDatasetInputsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all the dataset versions.
listDatasetVersions: {
    path: '/clarifai.api.V2/ListDatasetVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListDatasetVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetVersionResponse,
    requestSerialize: serialize_clarifai_api_ListDatasetVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListDatasetVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetVersionResponse,
  },
  // Get a specific dataset version.
getDatasetVersion: {
    path: '/clarifai.api.V2/GetDatasetVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetDatasetVersionRequest,
    responseType: proto_clarifai_api_service_pb.SingleDatasetVersionResponse,
    requestSerialize: serialize_clarifai_api_GetDatasetVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetDatasetVersionRequest,
    responseSerialize: serialize_clarifai_api_SingleDatasetVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleDatasetVersionResponse,
  },
  listDatasetVersionMetricsGroups: {
    path: '/clarifai.api.V2/ListDatasetVersionMetricsGroups',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListDatasetVersionMetricsGroupsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetVersionMetricsGroupResponse,
    requestSerialize: serialize_clarifai_api_ListDatasetVersionMetricsGroupsRequest,
    requestDeserialize: deserialize_clarifai_api_ListDatasetVersionMetricsGroupsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetVersionMetricsGroupResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetVersionMetricsGroupResponse,
  },
  // Add dataset versions to a dataset.
postDatasetVersions: {
    path: '/clarifai.api.V2/PostDatasetVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostDatasetVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetVersionResponse,
    requestSerialize: serialize_clarifai_api_PostDatasetVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PostDatasetVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetVersionResponse,
  },
  // Patch one or more dataset versions.
patchDatasetVersions: {
    path: '/clarifai.api.V2/PatchDatasetVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchDatasetVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetVersionResponse,
    requestSerialize: serialize_clarifai_api_PatchDatasetVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchDatasetVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetVersionResponse,
  },
  // Delete one or more dataset versions in a single request.
deleteDatasetVersions: {
    path: '/clarifai.api.V2/DeleteDatasetVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteDatasetVersionsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteDatasetVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteDatasetVersionsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Create export of a dataset version.
putDatasetVersionExports: {
    path: '/clarifai.api.V2/PutDatasetVersionExports',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PutDatasetVersionExportsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDatasetVersionExportResponse,
    requestSerialize: serialize_clarifai_api_PutDatasetVersionExportsRequest,
    requestDeserialize: deserialize_clarifai_api_PutDatasetVersionExportsRequest,
    responseSerialize: serialize_clarifai_api_MultiDatasetVersionExportResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDatasetVersionExportResponse,
  },
  // //////////////////////////////////////
// Models
// //////////////////////////////////////
//
// Get a specific model type.
getModelType: {
    path: '/clarifai.api.V2/GetModelType',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelTypeRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelTypeResponse,
    requestSerialize: serialize_clarifai_api_GetModelTypeRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelTypeRequest,
    responseSerialize: serialize_clarifai_api_SingleModelTypeResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelTypeResponse,
  },
  // List all the supported open source licenses in the platform.
listOpenSourceLicenses: {
    path: '/clarifai.api.V2/ListOpenSourceLicenses',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListOpenSourceLicensesRequest,
    responseType: proto_clarifai_api_service_pb.ListOpenSourceLicensesResponse,
    requestSerialize: serialize_clarifai_api_ListOpenSourceLicensesRequest,
    requestDeserialize: deserialize_clarifai_api_ListOpenSourceLicensesRequest,
    responseSerialize: serialize_clarifai_api_ListOpenSourceLicensesResponse,
    responseDeserialize: deserialize_clarifai_api_ListOpenSourceLicensesResponse,
  },
  // List all the model types available in the platform.
// This MUST be above ListModels so that the /models/types endpoint takes precedence.
listModelTypes: {
    path: '/clarifai.api.V2/ListModelTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelTypesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelTypeResponse,
    requestSerialize: serialize_clarifai_api_ListModelTypesRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelTypesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelTypeResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelTypeResponse,
  },
  // Get a specific model from an app.
getModel: {
    path: '/clarifai.api.V2/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelResponse,
    requestSerialize: serialize_clarifai_api_GetModelRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelRequest,
    responseSerialize: serialize_clarifai_api_SingleModelResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelResponse,
  },
  // Get a the output info for a given model_id or model_id/version_id
// combo.
getModelOutputInfo: {
    path: '/clarifai.api.V2/GetModelOutputInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelResponse,
    requestSerialize: serialize_clarifai_api_GetModelRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelRequest,
    responseSerialize: serialize_clarifai_api_SingleModelResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelResponse,
  },
  // List all the models.
listModels: {
    path: '/clarifai.api.V2/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelResponse,
    requestSerialize: serialize_clarifai_api_ListModelsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelResponse,
  },
  // List the resource counts for the app.
getResourceCounts: {
    path: '/clarifai.api.V2/GetResourceCounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetResourceCountsRequest,
    responseType: proto_clarifai_api_service_pb.GetResourceCountsResponse,
    requestSerialize: serialize_clarifai_api_GetResourceCountsRequest,
    requestDeserialize: deserialize_clarifai_api_GetResourceCountsRequest,
    responseSerialize: serialize_clarifai_api_GetResourceCountsResponse,
    responseDeserialize: deserialize_clarifai_api_GetResourceCountsResponse,
  },
  // Search over the models to find one or more you're looking for.
// This leverage the "body" parameter because we also have page and
// per_page as url query param variables in this request.
postModelsSearches: {
    path: '/clarifai.api.V2/PostModelsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelResponse,
    requestSerialize: serialize_clarifai_api_PostModelsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelResponse,
  },
  // Add a models to an app.
postModels: {
    path: '/clarifai.api.V2/PostModels',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelsRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelResponse,
    requestSerialize: serialize_clarifai_api_PostModelsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelsRequest,
    responseSerialize: serialize_clarifai_api_SingleModelResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelResponse,
  },
  // Patch one or more models.
patchModels: {
    path: '/clarifai.api.V2/PatchModels',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelResponse,
    requestSerialize: serialize_clarifai_api_PatchModelsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelResponse,
  },
  // Patch one or more models ids.
patchModelIds: {
    path: '/clarifai.api.V2/PatchModelIds',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelIdsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelResponse,
    requestSerialize: serialize_clarifai_api_PatchModelIdsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelIdsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelResponse,
  },
  // Delete a single model.
deleteModel: {
    path: '/clarifai.api.V2/DeleteModel',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteModelRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteModelRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteModelRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Delete multiple models in one request.
deleteModels: {
    path: '/clarifai.api.V2/DeleteModels',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteModelsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteModelsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteModelsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Update model check consents
patchModelCheckConsents: {
    path: '/clarifai.api.V2/PatchModelCheckConsents',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelCheckConsentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelCheckConsentResponse,
    requestSerialize: serialize_clarifai_api_PatchModelCheckConsentsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelCheckConsentsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelCheckConsentResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelCheckConsentResponse,
  },
  // Update model toolkits tags
patchModelToolkits: {
    path: '/clarifai.api.V2/PatchModelToolkits',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelToolkitsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelToolkitResponse,
    requestSerialize: serialize_clarifai_api_PatchModelToolkitsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelToolkitsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelToolkitResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelToolkitResponse,
  },
  // Update model use_cases tags
patchModelUseCases: {
    path: '/clarifai.api.V2/PatchModelUseCases',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelUseCasesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelUseCaseResponse,
    requestSerialize: serialize_clarifai_api_PatchModelUseCasesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelUseCasesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelUseCaseResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelUseCaseResponse,
  },
  // Update model languages tags
patchModelLanguages: {
    path: '/clarifai.api.V2/PatchModelLanguages',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelLanguagesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelLanguageResponse,
    requestSerialize: serialize_clarifai_api_PatchModelLanguagesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelLanguagesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelLanguageResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelLanguageResponse,
  },
  // Deprecated: Unmaintained and ideally replaced with usage of datasets
//   The server may refuse to accept requests to this endpoint.
listModelInputs: {
    path: '/clarifai.api.V2/ListModelInputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelInputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_ListModelInputsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelInputsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  // Get a specific model from an app.
getModelVersion: {
    path: '/clarifai.api.V2/GetModelVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelVersionRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionResponse,
    requestSerialize: serialize_clarifai_api_GetModelVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelVersionRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionResponse,
  },
  // List all the models.
listModelVersions: {
    path: '/clarifai.api.V2/ListModelVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelVersionResponse,
    requestSerialize: serialize_clarifai_api_ListModelVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelVersionResponse,
  },
  // TODO(zeiler): in future we can add endpoints like this for listing runners for a specific model
// List all the runners currently handling work for the given model.
// By default this lists the runners available in your account as well as all the orgs you have
// access to.
// Could have RunnerSelector to break it down by Nodepool or Deployment.
// Addition filters on the request can select specific user/org to list from or nodepool.
// rpc ListModelVersionRunners (ListModelVersionRunnersRequest) returns (MultiRunnerResponse) {
//   option (google.api.http) = {
//     get: "/v2/users/{user_app_id.user_id}/apps/{user_app_id.app_id}/models/{model_id}/versions/{version_id}/runners"
//   };
//   option (clarifai.auth.util.cl_auth_type) = KeyAuth;
//   option (clarifai.auth.util.cl_depending_scopes) = Apps_Get;
//   option (clarifai.auth.util.cl_depending_scopes) = Concepts_Get;
//   option (clarifai.auth.util.cl_depending_scopes) = Models_Get;
//   option (clarifai.auth.util.cl_depending_scopes) = Runners_Get;
// }
//
postWorkflowVersionsUnPublish: {
    path: '/clarifai.api.V2/PostWorkflowVersionsUnPublish',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowVersionsUnPublishRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowVersionsUnPublishRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowVersionsUnPublishRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  postWorkflowVersionsPublish: {
    path: '/clarifai.api.V2/PostWorkflowVersionsPublish',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowVersionsPublishRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowVersionsPublishRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowVersionsPublishRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // PostModelVersionsPublish
postModelVersionsPublish: {
    path: '/clarifai.api.V2/PostModelVersionsPublish',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionsPublishRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionsPublishRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionsPublishRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // PostModelVersionsUnPublish
postModelVersionsUnPublish: {
    path: '/clarifai.api.V2/PostModelVersionsUnPublish',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionsUnPublishRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionsUnPublishRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionsUnPublishRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // NOTE: inconsistency: do we want this to return a SingleModelResponse?
//
// Create a new model version to trigger training of the model.
postModelVersions: {
    path: '/clarifai.api.V2/PostModelVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionsRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionsRequest,
    responseSerialize: serialize_clarifai_api_SingleModelResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelResponse,
  },
  // PatchModelVersions
patchModelVersions: {
    path: '/clarifai.api.V2/PatchModelVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModelVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelVersionResponse,
    requestSerialize: serialize_clarifai_api_PatchModelVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModelVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiModelVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelVersionResponse,
  },
  // Delete a single model.
deleteModelVersion: {
    path: '/clarifai.api.V2/DeleteModelVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteModelVersionRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteModelVersionRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteModelVersionRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // This is a streaming endpoint, the request has a field, upload_data, which can either be the config for the upload or the actual data to upload.
// The config must be sent first before the model_bytes can be uploaded.
// Once the config has been sent, the server will respond with a confirmation containing the model_version_id.
// This is so that if your upload is interrupted, you can resume the upload by sending the config again with the model_version_id specified for your model_version.
// The actual upload will be done via a multipart upload, the latest successful part_id will be sent from the server in the response to the model_bytes.
postModelVersionsUpload: {
    path: '/clarifai.api.V2/PostModelVersionsUpload',
    requestStream: true,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.PostModelVersionsUploadRequest,
    responseType: proto_clarifai_api_service_pb.PostModelVersionsUploadResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionsUploadRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionsUploadRequest,
    responseSerialize: serialize_clarifai_api_PostModelVersionsUploadResponse,
    responseDeserialize: deserialize_clarifai_api_PostModelVersionsUploadResponse,
  },
  // Kicks off conversion from the old Triton model format to the new Docker model format.
postModelMigration: {
    path: '/clarifai.api.V2/PostModelMigration',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelMigrationRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelResponse,
    requestSerialize: serialize_clarifai_api_PostModelMigrationRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelMigrationRequest,
    responseSerialize: serialize_clarifai_api_SingleModelResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelResponse,
  },
  // Export a model
//
// Export a model
putModelVersionExports: {
    path: '/clarifai.api.V2/PutModelVersionExports',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PutModelVersionExportsRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionExportResponse,
    requestSerialize: serialize_clarifai_api_PutModelVersionExportsRequest,
    requestDeserialize: deserialize_clarifai_api_PutModelVersionExportsRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionExportResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionExportResponse,
  },
  // GetModelVersionExport
getModelVersionExport: {
    path: '/clarifai.api.V2/GetModelVersionExport',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelVersionExportRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionExportResponse,
    requestSerialize: serialize_clarifai_api_GetModelVersionExportRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelVersionExportRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionExportResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionExportResponse,
  },
  // Get the evaluation metrics for a model version.
// Deprecated: Use GetEvaluation instead
//   The server may refuse to accept requests to this endpoint.
getModelVersionMetrics: {
    path: '/clarifai.api.V2/GetModelVersionMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelVersionMetricsRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionResponse,
    requestSerialize: serialize_clarifai_api_GetModelVersionMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelVersionMetricsRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionResponse,
  },
  // Deprecated, use PostEvaluations instead
// Run the evaluation metrics for a model version.
postModelVersionMetrics: {
    path: '/clarifai.api.V2/PostModelVersionMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionMetricsRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionMetricsRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionResponse,
  },
  // Deprecated, use PostEvaluations instead
postModelVersionEvaluations: {
    path: '/clarifai.api.V2/PostModelVersionEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiEvalMetricsResponse,
  },
  // Deprecated, use GetEvaluation instead
// List the evaluation metrics for a model version.
listModelVersionEvaluations: {
    path: '/clarifai.api.V2/ListModelVersionEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelVersionEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_ListModelVersionEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelVersionEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiEvalMetricsResponse,
  },
  // Deprecated, use GetEvaluation instead
// Get an evaluation metrics for a model version.
getModelVersionEvaluation: {
    path: '/clarifai.api.V2/GetModelVersionEvaluation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelVersionEvaluationRequest,
    responseType: proto_clarifai_api_service_pb.SingleEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_GetModelVersionEvaluationRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelVersionEvaluationRequest,
    responseSerialize: serialize_clarifai_api_SingleEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_SingleEvalMetricsResponse,
  },
  postEvaluations: {
    path: '/clarifai.api.V2/PostEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_PostEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiEvalMetricsResponse,
  },
  listEvaluations: {
    path: '/clarifai.api.V2/ListEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_ListEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiEvalMetricsResponse,
  },
  getEvaluation: {
    path: '/clarifai.api.V2/GetEvaluation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetEvaluationRequest,
    responseType: proto_clarifai_api_service_pb.SingleEvalMetricsResponse,
    requestSerialize: serialize_clarifai_api_GetEvaluationRequest,
    requestDeserialize: deserialize_clarifai_api_GetEvaluationRequest,
    responseSerialize: serialize_clarifai_api_SingleEvalMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_SingleEvalMetricsResponse,
  },
  // Lists model references tied to a particular model id.
listModelReferences: {
    path: '/clarifai.api.V2/ListModelReferences',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelReferencesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelReferenceResponse,
    requestSerialize: serialize_clarifai_api_ListModelReferencesRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelReferencesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelReferenceResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelReferenceResponse,
  },
  // GetModelVersionInputExample
getModelVersionInputExample: {
    path: '/clarifai.api.V2/GetModelVersionInputExample',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModelVersionInputExampleRequest,
    responseType: proto_clarifai_api_service_pb.SingleModelVersionInputExampleResponse,
    requestSerialize: serialize_clarifai_api_GetModelVersionInputExampleRequest,
    requestDeserialize: deserialize_clarifai_api_GetModelVersionInputExampleRequest,
    responseSerialize: serialize_clarifai_api_SingleModelVersionInputExampleResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModelVersionInputExampleResponse,
  },
  // ListModelVersionInputExamples
listModelVersionInputExamples: {
    path: '/clarifai.api.V2/ListModelVersionInputExamples',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModelVersionInputExamplesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModelVersionInputExampleResponse,
    requestSerialize: serialize_clarifai_api_ListModelVersionInputExamplesRequest,
    requestDeserialize: deserialize_clarifai_api_ListModelVersionInputExamplesRequest,
    responseSerialize: serialize_clarifai_api_MultiModelVersionInputExampleResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModelVersionInputExampleResponse,
  },
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Workflows
// //////////////////////////////////////
//
// Get a specific workflow from an app.
getWorkflow: {
    path: '/clarifai.api.V2/GetWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetWorkflowRequest,
    responseType: proto_clarifai_api_service_pb.SingleWorkflowResponse,
    requestSerialize: serialize_clarifai_api_GetWorkflowRequest,
    requestDeserialize: deserialize_clarifai_api_GetWorkflowRequest,
    responseSerialize: serialize_clarifai_api_SingleWorkflowResponse,
    responseDeserialize: deserialize_clarifai_api_SingleWorkflowResponse,
  },
  // List all the workflows.
listWorkflows: {
    path: '/clarifai.api.V2/ListWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListWorkflowsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowResponse,
    requestSerialize: serialize_clarifai_api_ListWorkflowsRequest,
    requestDeserialize: deserialize_clarifai_api_ListWorkflowsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowResponse,
  },
  // Add a workflow to an app.
// Note(zeiler): the order of the workflows that are returned from this endpoint
// may be different than the order in which the user provides them. This is because
// we reorder by a sort that optimizes for performance of the graph and its dependencies.
// When using the workflow in any future call the order returned by this endpoint
// will be used.
postWorkflows: {
    path: '/clarifai.api.V2/PostWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowsRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowResponse,
  },
  // Patch one or more workflows.
patchWorkflows: {
    path: '/clarifai.api.V2/PatchWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchWorkflowsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowResponse,
    requestSerialize: serialize_clarifai_api_PatchWorkflowsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchWorkflowsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowResponse,
  },
  // Patch one or more workflows ids.
patchWorkflowIds: {
    path: '/clarifai.api.V2/PatchWorkflowIds',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchWorkflowIdsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowResponse,
    requestSerialize: serialize_clarifai_api_PatchWorkflowIdsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchWorkflowIdsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowResponse,
  },
  // Delete a single workflow.
deleteWorkflow: {
    path: '/clarifai.api.V2/DeleteWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteWorkflowRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteWorkflowRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteWorkflowRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Delete multiple workflows in one request.
deleteWorkflows: {
    path: '/clarifai.api.V2/DeleteWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteWorkflowsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteWorkflowsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteWorkflowsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Predict using a workflow.
postWorkflowResults: {
    path: '/clarifai.api.V2/PostWorkflowResults',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowResultsRequest,
    responseType: proto_clarifai_api_service_pb.PostWorkflowResultsResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowResultsRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowResultsRequest,
    responseSerialize: serialize_clarifai_api_PostWorkflowResultsResponse,
    responseDeserialize: deserialize_clarifai_api_PostWorkflowResultsResponse,
  },
  // List workflow versions.
listWorkflowVersions: {
    path: '/clarifai.api.V2/ListWorkflowVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListWorkflowVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse,
    requestSerialize: serialize_clarifai_api_ListWorkflowVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListWorkflowVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowVersionResponse,
  },
  // Get single workflow version.
getWorkflowVersion: {
    path: '/clarifai.api.V2/GetWorkflowVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetWorkflowVersionRequest,
    responseType: proto_clarifai_api_service_pb.SingleWorkflowVersionResponse,
    requestSerialize: serialize_clarifai_api_GetWorkflowVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetWorkflowVersionRequest,
    responseSerialize: serialize_clarifai_api_SingleWorkflowVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleWorkflowVersionResponse,
  },
  // Delete workflow versions.
deleteWorkflowVersions: {
    path: '/clarifai.api.V2/DeleteWorkflowVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteWorkflowVersionsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteWorkflowVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteWorkflowVersionsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Patch workflow versions.
patchWorkflowVersions: {
    path: '/clarifai.api.V2/PatchWorkflowVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchWorkflowVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowVersionResponse,
    requestSerialize: serialize_clarifai_api_PatchWorkflowVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchWorkflowVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowVersionResponse,
  },
  // Get a specific key from an app.
getKey: {
    path: '/clarifai.api.V2/GetKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetKeyRequest,
    responseType: proto_clarifai_api_service_pb.SingleKeyResponse,
    requestSerialize: serialize_clarifai_api_GetKeyRequest,
    requestDeserialize: deserialize_clarifai_api_GetKeyRequest,
    responseSerialize: serialize_clarifai_api_SingleKeyResponse,
    responseDeserialize: deserialize_clarifai_api_SingleKeyResponse,
  },
  // List all the keys.
listKeys: {
    path: '/clarifai.api.V2/ListKeys',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListKeysRequest,
    responseType: proto_clarifai_api_service_pb.MultiKeyResponse,
    requestSerialize: serialize_clarifai_api_ListKeysRequest,
    requestDeserialize: deserialize_clarifai_api_ListKeysRequest,
    responseSerialize: serialize_clarifai_api_MultiKeyResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKeyResponse,
  },
  // List keys by app_id
listAppKeys: {
    path: '/clarifai.api.V2/ListAppKeys',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAppKeysRequest,
    responseType: proto_clarifai_api_service_pb.MultiKeyResponse,
    requestSerialize: serialize_clarifai_api_ListAppKeysRequest,
    requestDeserialize: deserialize_clarifai_api_ListAppKeysRequest,
    responseSerialize: serialize_clarifai_api_MultiKeyResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKeyResponse,
  },
  // Search over the keys to find one or more you're looking for.
// This leverage the "body" parameter because we also have page and
// per_page as url query param variables in this request.
deleteKey: {
    path: '/clarifai.api.V2/DeleteKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteKeyRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteKeyRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteKeyRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Add a key to an app.
postKeys: {
    path: '/clarifai.api.V2/PostKeys',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostKeysRequest,
    responseType: proto_clarifai_api_service_pb.MultiKeyResponse,
    requestSerialize: serialize_clarifai_api_PostKeysRequest,
    requestDeserialize: deserialize_clarifai_api_PostKeysRequest,
    responseSerialize: serialize_clarifai_api_MultiKeyResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKeyResponse,
  },
  // Patch one or more keys.
patchKeys: {
    path: '/clarifai.api.V2/PatchKeys',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchKeysRequest,
    responseType: proto_clarifai_api_service_pb.MultiKeyResponse,
    requestSerialize: serialize_clarifai_api_PatchKeysRequest,
    requestDeserialize: deserialize_clarifai_api_PatchKeysRequest,
    responseSerialize: serialize_clarifai_api_MultiKeyResponse,
    responseDeserialize: deserialize_clarifai_api_MultiKeyResponse,
  },
  // API Keys in the public API -- request is itself Key authorized, and will tell
// the user the scopes/access of the key/credential they're providing, as computed by
// our authorizer:
myScopes: {
    path: '/clarifai.api.V2/MyScopes',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.MyScopesRequest,
    responseType: proto_clarifai_api_service_pb.MultiScopeResponse,
    requestSerialize: serialize_clarifai_api_MyScopesRequest,
    requestDeserialize: deserialize_clarifai_api_MyScopesRequest,
    responseSerialize: serialize_clarifai_api_MultiScopeResponse,
    responseDeserialize: deserialize_clarifai_api_MultiScopeResponse,
  },
  myScopesUser: {
    path: '/clarifai.api.V2/MyScopesUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.MyScopesUserRequest,
    responseType: proto_clarifai_api_service_pb.MultiScopeUserResponse,
    requestSerialize: serialize_clarifai_api_MyScopesUserRequest,
    requestDeserialize: deserialize_clarifai_api_MyScopesUserRequest,
    responseSerialize: serialize_clarifai_api_MultiScopeUserResponse,
    responseDeserialize: deserialize_clarifai_api_MultiScopeUserResponse,
  },
  myScopesRoot: {
    path: '/clarifai.api.V2/MyScopesRoot',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.MyScopesRootRequest,
    responseType: proto_clarifai_api_service_pb.MultiScopeRootResponse,
    requestSerialize: serialize_clarifai_api_MyScopesRootRequest,
    requestDeserialize: deserialize_clarifai_api_MyScopesRootRequest,
    responseSerialize: serialize_clarifai_api_MultiScopeRootResponse,
    responseDeserialize: deserialize_clarifai_api_MultiScopeRootResponse,
  },
  // List all auth scopes available to me as a user.
listScopes: {
    path: '/clarifai.api.V2/ListScopes',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListScopesRequest,
    responseType: proto_clarifai_api_service_pb.MultiScopeDepsResponse,
    requestSerialize: serialize_clarifai_api_ListScopesRequest,
    requestDeserialize: deserialize_clarifai_api_ListScopesRequest,
    responseSerialize: serialize_clarifai_api_MultiScopeDepsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiScopeDepsResponse,
  },
  // Get a specific app from an app.
getApp: {
    path: '/clarifai.api.V2/GetApp',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetAppRequest,
    responseType: proto_clarifai_api_service_pb.SingleAppResponse,
    requestSerialize: serialize_clarifai_api_GetAppRequest,
    requestDeserialize: deserialize_clarifai_api_GetAppRequest,
    responseSerialize: serialize_clarifai_api_SingleAppResponse,
    responseDeserialize: deserialize_clarifai_api_SingleAppResponse,
  },
  // List all the apps.
listApps: {
    path: '/clarifai.api.V2/ListApps',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAppsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_ListAppsRequest,
    requestDeserialize: deserialize_clarifai_api_ListAppsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Search over the apps to find one or more you're looking for.
// This leverage the "body" parameter because we also have page and
// per_page as url query param variables in this request.
deleteApp: {
    path: '/clarifai.api.V2/DeleteApp',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAppRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAppRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAppRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Add a app to an app.
// This needs to load the default workflow to make a copy, validating all the models in it, and
// then writing the new workflow back to this new app.
postApps: {
    path: '/clarifai.api.V2/PostApps',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAppsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_PostAppsRequest,
    requestDeserialize: deserialize_clarifai_api_PostAppsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Patch one or more apps.
patchApps: {
    path: '/clarifai.api.V2/PatchApps',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAppsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_PatchAppsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAppsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Allows to Patch only the below fields in one or more apps.
// Allowed fields are notes, description and image
patchAppsDetails: {
    path: '/clarifai.api.V2/PatchAppsDetails',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAppsDetailsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_PatchAppsDetailsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAppsDetailsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Patch apps ids.
patchAppsIds: {
    path: '/clarifai.api.V2/PatchAppsIds',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAppsIdsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_PatchAppsIdsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAppsIdsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Patch one app.
patchApp: {
    path: '/clarifai.api.V2/PatchApp',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAppRequest,
    responseType: proto_clarifai_api_service_pb.SingleAppResponse,
    requestSerialize: serialize_clarifai_api_PatchAppRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAppRequest,
    responseSerialize: serialize_clarifai_api_SingleAppResponse,
    responseDeserialize: deserialize_clarifai_api_SingleAppResponse,
  },
  // Search over the applications to find one or more you're looking for.
postAppsSearches: {
    path: '/clarifai.api.V2/PostAppsSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAppsSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppResponse,
    requestSerialize: serialize_clarifai_api_PostAppsSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostAppsSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiAppResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppResponse,
  },
  // Get user information
getUser: {
    path: '/clarifai.api.V2/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetUserRequest,
    responseType: proto_clarifai_api_service_pb.SingleUserResponse,
    requestSerialize: serialize_clarifai_api_GetUserRequest,
    requestDeserialize: deserialize_clarifai_api_GetUserRequest,
    responseSerialize: serialize_clarifai_api_SingleUserResponse,
    responseDeserialize: deserialize_clarifai_api_SingleUserResponse,
  },
  // Validate new password in real-time for a user
postValidatePassword: {
    path: '/clarifai.api.V2/PostValidatePassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostValidatePasswordRequest,
    responseType: proto_clarifai_api_service_pb.SinglePasswordValidationResponse,
    requestSerialize: serialize_clarifai_api_PostValidatePasswordRequest,
    requestDeserialize: deserialize_clarifai_api_PostValidatePasswordRequest,
    responseSerialize: serialize_clarifai_api_SinglePasswordValidationResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePasswordValidationResponse,
  },
  // Get a saved legacy search.
getSearch: {
    path: '/clarifai.api.V2/GetSearch',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetSearchRequest,
    responseType: proto_clarifai_api_service_pb.SingleSearchResponse,
    requestSerialize: serialize_clarifai_api_GetSearchRequest,
    requestDeserialize: deserialize_clarifai_api_GetSearchRequest,
    responseSerialize: serialize_clarifai_api_SingleSearchResponse,
    responseDeserialize: deserialize_clarifai_api_SingleSearchResponse,
  },
  // List all saved legacy searches.
listSearches: {
    path: '/clarifai.api.V2/ListSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_ListSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_ListSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Patch saved legacy searches by ids.
patchSearches: {
    path: '/clarifai.api.V2/PatchSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PatchSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Execute a new search and optionally save it.
//
// Deprecated: Use PostInputsSearches or PostAnnotationsSearches instead.
//  The server may refuse to accept requests to this endpoint.
postSearches: {
    path: '/clarifai.api.V2/PostSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PostSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Execute a previously saved legacy search.
postSearchesByID: {
    path: '/clarifai.api.V2/PostSearchesByID',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostSearchesByIDRequest,
    responseType: proto_clarifai_api_service_pb.MultiSearchResponse,
    requestSerialize: serialize_clarifai_api_PostSearchesByIDRequest,
    requestDeserialize: deserialize_clarifai_api_PostSearchesByIDRequest,
    responseSerialize: serialize_clarifai_api_MultiSearchResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSearchResponse,
  },
  // Evaluate the results of two search requests
postAnnotationSearchMetrics: {
    path: '/clarifai.api.V2/PostAnnotationSearchMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse,
    requestSerialize: serialize_clarifai_api_PostAnnotationSearchMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_PostAnnotationSearchMetricsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
  },
  // Get the evaluation results between two search requests
getAnnotationSearchMetrics: {
    path: '/clarifai.api.V2/GetAnnotationSearchMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetAnnotationSearchMetricsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse,
    requestSerialize: serialize_clarifai_api_GetAnnotationSearchMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_GetAnnotationSearchMetricsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
  },
  // List the evaluation results between two search requests
listAnnotationSearchMetrics: {
    path: '/clarifai.api.V2/ListAnnotationSearchMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationSearchMetricsResponse,
    requestSerialize: serialize_clarifai_api_ListAnnotationSearchMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_ListAnnotationSearchMetricsRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationSearchMetricsResponse,
  },
  // DeleteAnnotationSearchMetrics
deleteAnnotationSearchMetrics: {
    path: '/clarifai.api.V2/DeleteAnnotationSearchMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAnnotationSearchMetricsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAnnotationSearchMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAnnotationSearchMetricsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Delete a saved search.
deleteSearch: {
    path: '/clarifai.api.V2/DeleteSearch',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteSearchRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteSearchRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteSearchRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all the annotation filters.
listAnnotationFilters: {
    path: '/clarifai.api.V2/ListAnnotationFilters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAnnotationFiltersRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse,
    requestSerialize: serialize_clarifai_api_ListAnnotationFiltersRequest,
    requestDeserialize: deserialize_clarifai_api_ListAnnotationFiltersRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationFilterResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationFilterResponse,
  },
  // Get a specific annotation filter.
getAnnotationFilter: {
    path: '/clarifai.api.V2/GetAnnotationFilter',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetAnnotationFilterRequest,
    responseType: proto_clarifai_api_service_pb.SingleAnnotationFilterResponse,
    requestSerialize: serialize_clarifai_api_GetAnnotationFilterRequest,
    requestDeserialize: deserialize_clarifai_api_GetAnnotationFilterRequest,
    responseSerialize: serialize_clarifai_api_SingleAnnotationFilterResponse,
    responseDeserialize: deserialize_clarifai_api_SingleAnnotationFilterResponse,
  },
  // Add annotation filters.
postAnnotationFilters: {
    path: '/clarifai.api.V2/PostAnnotationFilters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAnnotationFiltersRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse,
    requestSerialize: serialize_clarifai_api_PostAnnotationFiltersRequest,
    requestDeserialize: deserialize_clarifai_api_PostAnnotationFiltersRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationFilterResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationFilterResponse,
  },
  // Patch one or more annotation filters.
patchAnnotationFilters: {
    path: '/clarifai.api.V2/PatchAnnotationFilters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchAnnotationFiltersRequest,
    responseType: proto_clarifai_api_service_pb.MultiAnnotationFilterResponse,
    requestSerialize: serialize_clarifai_api_PatchAnnotationFiltersRequest,
    requestDeserialize: deserialize_clarifai_api_PatchAnnotationFiltersRequest,
    responseSerialize: serialize_clarifai_api_MultiAnnotationFilterResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAnnotationFilterResponse,
  },
  // Delete one or more annotation filters in a single request.
deleteAnnotationFilters: {
    path: '/clarifai.api.V2/DeleteAnnotationFilters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteAnnotationFiltersRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteAnnotationFiltersRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteAnnotationFiltersRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List all status codes.
listStatusCodes: {
    path: '/clarifai.api.V2/ListStatusCodes',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListStatusCodesRequest,
    responseType: proto_clarifai_api_service_pb.MultiStatusCodeResponse,
    requestSerialize: serialize_clarifai_api_ListStatusCodesRequest,
    requestDeserialize: deserialize_clarifai_api_ListStatusCodesRequest,
    responseSerialize: serialize_clarifai_api_MultiStatusCodeResponse,
    responseDeserialize: deserialize_clarifai_api_MultiStatusCodeResponse,
  },
  // Get more details for a status code.
getStatusCode: {
    path: '/clarifai.api.V2/GetStatusCode',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetStatusCodeRequest,
    responseType: proto_clarifai_api_service_pb.SingleStatusCodeResponse,
    requestSerialize: serialize_clarifai_api_GetStatusCodeRequest,
    requestDeserialize: deserialize_clarifai_api_GetStatusCodeRequest,
    responseSerialize: serialize_clarifai_api_SingleStatusCodeResponse,
    responseDeserialize: deserialize_clarifai_api_SingleStatusCodeResponse,
  },
  // owner list users who the app is shared with
listCollaborators: {
    path: '/clarifai.api.V2/ListCollaborators',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListCollaboratorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollaboratorsResponse,
    requestSerialize: serialize_clarifai_api_ListCollaboratorsRequest,
    requestDeserialize: deserialize_clarifai_api_ListCollaboratorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollaboratorsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollaboratorsResponse,
  },
  // add collaborators to an app.
postCollaborators: {
    path: '/clarifai.api.V2/PostCollaborators',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostCollaboratorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollaboratorsResponse,
    requestSerialize: serialize_clarifai_api_PostCollaboratorsRequest,
    requestDeserialize: deserialize_clarifai_api_PostCollaboratorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollaboratorsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollaboratorsResponse,
  },
  // Patch existing collaborators.
patchCollaborators: {
    path: '/clarifai.api.V2/PatchCollaborators',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchCollaboratorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollaboratorsResponse,
    requestSerialize: serialize_clarifai_api_PatchCollaboratorsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchCollaboratorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollaboratorsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollaboratorsResponse,
  },
  // Delete existing collaborators.
deleteCollaborators: {
    path: '/clarifai.api.V2/DeleteCollaborators',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteCollaboratorsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteCollaboratorsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteCollaboratorsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Collaboration includes the app user are invitied to work on
listCollaborations: {
    path: '/clarifai.api.V2/ListCollaborations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListCollaborationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollaborationsResponse,
    requestSerialize: serialize_clarifai_api_ListCollaborationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListCollaborationsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollaborationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollaborationsResponse,
  },
  // PostAppDuplications starts async app duplication jobs which copy resources
// (inputs, annotations, models etc) from one application to another. It can
// also create the destination application if it does not exist, with fields
// (description, metadata etc) copied from the source application.
//
// A duplication job can be started by any user that can read from the source
// application (the target of this call) and can create and write to the
// destination application. The duplication is associated with the user that
// created it, so in order to read the status and progress of the job, that
// user's ID has to be used in the call to GetAppDuplication, which might be
// different to the source application owner ID in this call.
postAppDuplications: {
    path: '/clarifai.api.V2/PostAppDuplications',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAppDuplicationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse,
    requestSerialize: serialize_clarifai_api_PostAppDuplicationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostAppDuplicationsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppDuplicationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppDuplicationsResponse,
  },
  // ListAppDuplications lists all app duplication jobs created by the user.
listAppDuplications: {
    path: '/clarifai.api.V2/ListAppDuplications',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListAppDuplicationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiAppDuplicationsResponse,
    requestSerialize: serialize_clarifai_api_ListAppDuplicationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListAppDuplicationsRequest,
    responseSerialize: serialize_clarifai_api_MultiAppDuplicationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAppDuplicationsResponse,
  },
  // GetAppDuplication returns an app duplication job created by the user.
getAppDuplication: {
    path: '/clarifai.api.V2/GetAppDuplication',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetAppDuplicationRequest,
    responseType: proto_clarifai_api_service_pb.SingleAppDuplicationResponse,
    requestSerialize: serialize_clarifai_api_GetAppDuplicationRequest,
    requestDeserialize: deserialize_clarifai_api_GetAppDuplicationRequest,
    responseSerialize: serialize_clarifai_api_SingleAppDuplicationResponse,
    responseDeserialize: deserialize_clarifai_api_SingleAppDuplicationResponse,
  },
  // Add tasks to an app.
postTasks: {
    path: '/clarifai.api.V2/PostTasks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostTasksRequest,
    responseType: proto_clarifai_api_service_pb.MultiTaskResponse,
    requestSerialize: serialize_clarifai_api_PostTasksRequest,
    requestDeserialize: deserialize_clarifai_api_PostTasksRequest,
    responseSerialize: serialize_clarifai_api_MultiTaskResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTaskResponse,
  },
  // Task annotation count
getTaskAnnotationCount: {
    path: '/clarifai.api.V2/GetTaskAnnotationCount',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetTaskCountRequest,
    responseType: proto_clarifai_api_service_pb.SingleTaskCountResponse,
    requestSerialize: serialize_clarifai_api_GetTaskCountRequest,
    requestDeserialize: deserialize_clarifai_api_GetTaskCountRequest,
    responseSerialize: serialize_clarifai_api_SingleTaskCountResponse,
    responseDeserialize: deserialize_clarifai_api_SingleTaskCountResponse,
  },
  // Task Input count
getTaskInputCount: {
    path: '/clarifai.api.V2/GetTaskInputCount',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetTaskCountRequest,
    responseType: proto_clarifai_api_service_pb.SingleTaskCountResponse,
    requestSerialize: serialize_clarifai_api_GetTaskCountRequest,
    requestDeserialize: deserialize_clarifai_api_GetTaskCountRequest,
    responseSerialize: serialize_clarifai_api_SingleTaskCountResponse,
    responseDeserialize: deserialize_clarifai_api_SingleTaskCountResponse,
  },
  // Get a specific task from an app.
getTask: {
    path: '/clarifai.api.V2/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetTaskRequest,
    responseType: proto_clarifai_api_service_pb.SingleTaskResponse,
    requestSerialize: serialize_clarifai_api_GetTaskRequest,
    requestDeserialize: deserialize_clarifai_api_GetTaskRequest,
    responseSerialize: serialize_clarifai_api_SingleTaskResponse,
    responseDeserialize: deserialize_clarifai_api_SingleTaskResponse,
  },
  // List tasks from an app.
listTasks: {
    path: '/clarifai.api.V2/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListTasksRequest,
    responseType: proto_clarifai_api_service_pb.MultiTaskResponse,
    requestSerialize: serialize_clarifai_api_ListTasksRequest,
    requestDeserialize: deserialize_clarifai_api_ListTasksRequest,
    responseSerialize: serialize_clarifai_api_MultiTaskResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTaskResponse,
  },
  // Patch one or more tasks.
patchTasks: {
    path: '/clarifai.api.V2/PatchTasks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchTasksRequest,
    responseType: proto_clarifai_api_service_pb.MultiTaskResponse,
    requestSerialize: serialize_clarifai_api_PatchTasksRequest,
    requestDeserialize: deserialize_clarifai_api_PatchTasksRequest,
    responseSerialize: serialize_clarifai_api_MultiTaskResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTaskResponse,
  },
  // Delete multiple tasks in one request.
deleteTasks: {
    path: '/clarifai.api.V2/DeleteTasks',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteTasksRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteTasksRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteTasksRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // //////////////////////////////////////
// Label Order
// //////////////////////////////////////
//
// Add Label orders.
postLabelOrders: {
    path: '/clarifai.api.V2/PostLabelOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostLabelOrdersRequest,
    responseType: proto_clarifai_api_service_pb.MultiLabelOrderResponse,
    requestSerialize: serialize_clarifai_api_PostLabelOrdersRequest,
    requestDeserialize: deserialize_clarifai_api_PostLabelOrdersRequest,
    responseSerialize: serialize_clarifai_api_MultiLabelOrderResponse,
    responseDeserialize: deserialize_clarifai_api_MultiLabelOrderResponse,
  },
  // Get a label order.
getLabelOrder: {
    path: '/clarifai.api.V2/GetLabelOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetLabelOrderRequest,
    responseType: proto_clarifai_api_service_pb.SingleLabelOrderResponse,
    requestSerialize: serialize_clarifai_api_GetLabelOrderRequest,
    requestDeserialize: deserialize_clarifai_api_GetLabelOrderRequest,
    responseSerialize: serialize_clarifai_api_SingleLabelOrderResponse,
    responseDeserialize: deserialize_clarifai_api_SingleLabelOrderResponse,
  },
  // List label orders.
listLabelOrders: {
    path: '/clarifai.api.V2/ListLabelOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListLabelOrdersRequest,
    responseType: proto_clarifai_api_service_pb.MultiLabelOrderResponse,
    requestSerialize: serialize_clarifai_api_ListLabelOrdersRequest,
    requestDeserialize: deserialize_clarifai_api_ListLabelOrdersRequest,
    responseSerialize: serialize_clarifai_api_MultiLabelOrderResponse,
    responseDeserialize: deserialize_clarifai_api_MultiLabelOrderResponse,
  },
  // Patch one or more label orders.
patchLabelOrders: {
    path: '/clarifai.api.V2/PatchLabelOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchLabelOrdersRequest,
    responseType: proto_clarifai_api_service_pb.MultiLabelOrderResponse,
    requestSerialize: serialize_clarifai_api_PatchLabelOrdersRequest,
    requestDeserialize: deserialize_clarifai_api_PatchLabelOrdersRequest,
    responseSerialize: serialize_clarifai_api_MultiLabelOrderResponse,
    responseDeserialize: deserialize_clarifai_api_MultiLabelOrderResponse,
  },
  // Delete multiple label orders in one request.
// this do not change task status
deleteLabelOrders: {
    path: '/clarifai.api.V2/DeleteLabelOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteLabelOrdersRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteLabelOrdersRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteLabelOrdersRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Add a list of Collectors to an app.
// In the handler of this endpoint we also check for all the scopes of the  POST /inputs
// endpoint.
// Those current scopes are listed here as a hard requirement.
// They are needed when adding the collectors just so we now that you have permission with
// that key at least to do the writing to this app with POST /inputs.
postCollectors: {
    path: '/clarifai.api.V2/PostCollectors',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostCollectorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollectorResponse,
    requestSerialize: serialize_clarifai_api_PostCollectorsRequest,
    requestDeserialize: deserialize_clarifai_api_PostCollectorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollectorResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollectorResponse,
  },
  // Get a specific collector from an app.
getCollector: {
    path: '/clarifai.api.V2/GetCollector',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetCollectorRequest,
    responseType: proto_clarifai_api_service_pb.SingleCollectorResponse,
    requestSerialize: serialize_clarifai_api_GetCollectorRequest,
    requestDeserialize: deserialize_clarifai_api_GetCollectorRequest,
    responseSerialize: serialize_clarifai_api_SingleCollectorResponse,
    responseDeserialize: deserialize_clarifai_api_SingleCollectorResponse,
  },
  // List all the collectors.
listCollectors: {
    path: '/clarifai.api.V2/ListCollectors',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListCollectorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollectorResponse,
    requestSerialize: serialize_clarifai_api_ListCollectorsRequest,
    requestDeserialize: deserialize_clarifai_api_ListCollectorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollectorResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollectorResponse,
  },
  // Patch one or more collectors.
patchCollectors: {
    path: '/clarifai.api.V2/PatchCollectors',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchCollectorsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCollectorResponse,
    requestSerialize: serialize_clarifai_api_PatchCollectorsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchCollectorsRequest,
    responseSerialize: serialize_clarifai_api_MultiCollectorResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCollectorResponse,
  },
  // Delete multiple collectors in one request.
// This call is asynchronous. Use DeleteCollector if you want a synchronous version.
deleteCollectors: {
    path: '/clarifai.api.V2/DeleteCollectors',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteCollectorsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteCollectorsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteCollectorsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // PostStatValues
postStatValues: {
    path: '/clarifai.api.V2/PostStatValues',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostStatValuesRequest,
    responseType: proto_clarifai_api_service_pb.MultiStatValueResponse,
    requestSerialize: serialize_clarifai_api_PostStatValuesRequest,
    requestDeserialize: deserialize_clarifai_api_PostStatValuesRequest,
    responseSerialize: serialize_clarifai_api_MultiStatValueResponse,
    responseDeserialize: deserialize_clarifai_api_MultiStatValueResponse,
  },
  // PostStatValuesAggregate
postStatValuesAggregate: {
    path: '/clarifai.api.V2/PostStatValuesAggregate',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostStatValuesAggregateRequest,
    responseType: proto_clarifai_api_service_pb.MultiStatValueAggregateResponse,
    requestSerialize: serialize_clarifai_api_PostStatValuesAggregateRequest,
    requestDeserialize: deserialize_clarifai_api_PostStatValuesAggregateRequest,
    responseSerialize: serialize_clarifai_api_MultiStatValueAggregateResponse,
    responseDeserialize: deserialize_clarifai_api_MultiStatValueAggregateResponse,
  },
  // Get a specific module from an app.
getModule: {
    path: '/clarifai.api.V2/GetModule',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModuleRequest,
    responseType: proto_clarifai_api_service_pb.SingleModuleResponse,
    requestSerialize: serialize_clarifai_api_GetModuleRequest,
    requestDeserialize: deserialize_clarifai_api_GetModuleRequest,
    responseSerialize: serialize_clarifai_api_SingleModuleResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModuleResponse,
  },
  // List all the modules in community, by user or by app.
listModules: {
    path: '/clarifai.api.V2/ListModules',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModulesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleResponse,
    requestSerialize: serialize_clarifai_api_ListModulesRequest,
    requestDeserialize: deserialize_clarifai_api_ListModulesRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleResponse,
  },
  // Add a modules to an app.
postModules: {
    path: '/clarifai.api.V2/PostModules',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModulesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleResponse,
    requestSerialize: serialize_clarifai_api_PostModulesRequest,
    requestDeserialize: deserialize_clarifai_api_PostModulesRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleResponse,
  },
  // Patch one or more modules.
patchModules: {
    path: '/clarifai.api.V2/PatchModules',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModulesRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleResponse,
    requestSerialize: serialize_clarifai_api_PatchModulesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModulesRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleResponse,
  },
  // Delete multiple modules in one request.
deleteModules: {
    path: '/clarifai.api.V2/DeleteModules',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteModulesRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteModulesRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteModulesRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Get a specific module version for a module.
getModuleVersion: {
    path: '/clarifai.api.V2/GetModuleVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModuleVersionRequest,
    responseType: proto_clarifai_api_service_pb.SingleModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_GetModuleVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetModuleVersionRequest,
    responseSerialize: serialize_clarifai_api_SingleModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModuleVersionResponse,
  },
  // List all the modules versions for a given module.
listModuleVersions: {
    path: '/clarifai.api.V2/ListModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListModuleVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_ListModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleVersionResponse,
  },
  // Create a new module version to trigger training of the module.
postModuleVersions: {
    path: '/clarifai.api.V2/PostModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModuleVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_PostModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PostModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleVersionResponse,
  },
  // Modify details of an existing module version.
patchModuleVersions: {
    path: '/clarifai.api.V2/PatchModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchModuleVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_PatchModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiModuleVersionResponse,
  },
  // Delete a multiple module version.
deleteModuleVersions: {
    path: '/clarifai.api.V2/DeleteModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteModuleVersionsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Get usage count for specific module version.
getModuleVersionUsageCount: {
    path: '/clarifai.api.V2/GetModuleVersionUsageCount',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetModuleVersionUsageCountRequest,
    responseType: proto_clarifai_api_service_pb.SingleModuleVersionUsageCountResponse,
    requestSerialize: serialize_clarifai_api_GetModuleVersionUsageCountRequest,
    requestDeserialize: deserialize_clarifai_api_GetModuleVersionUsageCountRequest,
    responseSerialize: serialize_clarifai_api_SingleModuleVersionUsageCountResponse,
    responseDeserialize: deserialize_clarifai_api_SingleModuleVersionUsageCountResponse,
  },
  // Get installed modules vesrions for an app.
getInstalledModuleVersion: {
    path: '/clarifai.api.V2/GetInstalledModuleVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInstalledModuleVersionRequest,
    responseType: proto_clarifai_api_service_pb.SingleInstalledModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_GetInstalledModuleVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetInstalledModuleVersionRequest,
    responseSerialize: serialize_clarifai_api_SingleInstalledModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInstalledModuleVersionResponse,
  },
  // List installed modules vesrions for an app.
listInstalledModuleVersions: {
    path: '/clarifai.api.V2/ListInstalledModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListInstalledModuleVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_ListInstalledModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListInstalledModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiInstalledModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInstalledModuleVersionResponse,
  },
  // Install a new module version which will deploy the specific ModuleVersion to the app in the url.
postInstalledModuleVersions: {
    path: '/clarifai.api.V2/PostInstalledModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInstalledModuleVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInstalledModuleVersionResponse,
    requestSerialize: serialize_clarifai_api_PostInstalledModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PostInstalledModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiInstalledModuleVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInstalledModuleVersionResponse,
  },
  // Uninstall an installed module version which will deploy the specific ModuleVersion to the app
// in the url.
// This cleaned up any associated caller keys so needs the Keys_Delete scope.
deleteInstalledModuleVersions: {
    path: '/clarifai.api.V2/DeleteInstalledModuleVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteInstalledModuleVersionsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteInstalledModuleVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteInstalledModuleVersionsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Assign a key that the caller owns to be used when accessing this installed module version
// If this endpoint is called with a different key then it overwrites what is there.
postInstalledModuleVersionsKey: {
    path: '/clarifai.api.V2/PostInstalledModuleVersionsKey',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInstalledModuleVersionsKeyRequest,
    responseType: proto_clarifai_api_service_pb.SingleKeyResponse,
    requestSerialize: serialize_clarifai_api_PostInstalledModuleVersionsKeyRequest,
    requestDeserialize: deserialize_clarifai_api_PostInstalledModuleVersionsKeyRequest,
    responseSerialize: serialize_clarifai_api_SingleKeyResponse,
    responseDeserialize: deserialize_clarifai_api_SingleKeyResponse,
  },
  // Perform bulk operations on a list of inputs based on input source.
// Operation include add, update, delete of concepts, metadata and geo data.
// This is an Asynchronous process. Use ListBulkOperations or GetBulkOperation to check the status.
postBulkOperations: {
    path: '/clarifai.api.V2/PostBulkOperations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostBulkOperationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiBulkOperationsResponse,
    requestSerialize: serialize_clarifai_api_PostBulkOperationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostBulkOperationsRequest,
    responseSerialize: serialize_clarifai_api_MultiBulkOperationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiBulkOperationsResponse,
  },
  // List all the bulk operations
listBulkOperations: {
    path: '/clarifai.api.V2/ListBulkOperations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListBulkOperationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiBulkOperationsResponse,
    requestSerialize: serialize_clarifai_api_ListBulkOperationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListBulkOperationsRequest,
    responseSerialize: serialize_clarifai_api_MultiBulkOperationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiBulkOperationsResponse,
  },
  // Get the bulk operation details by ID
getBulkOperation: {
    path: '/clarifai.api.V2/GetBulkOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetBulkOperationRequest,
    responseType: proto_clarifai_api_service_pb.SingleBulkOperationsResponse,
    requestSerialize: serialize_clarifai_api_GetBulkOperationRequest,
    requestDeserialize: deserialize_clarifai_api_GetBulkOperationRequest,
    responseSerialize: serialize_clarifai_api_SingleBulkOperationsResponse,
    responseDeserialize: deserialize_clarifai_api_SingleBulkOperationsResponse,
  },
  // Cancel one or more bulk operations
cancelBulkOperations: {
    path: '/clarifai.api.V2/CancelBulkOperations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.CancelBulkOperationRequest,
    responseType: proto_clarifai_api_service_pb.MultiBulkOperationsResponse,
    requestSerialize: serialize_clarifai_api_CancelBulkOperationRequest,
    requestDeserialize: deserialize_clarifai_api_CancelBulkOperationRequest,
    responseSerialize: serialize_clarifai_api_MultiBulkOperationsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiBulkOperationsResponse,
  },
  // delete one or more terminated bulk operations
deleteBulkOperations: {
    path: '/clarifai.api.V2/DeleteBulkOperations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteBulkOperationRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteBulkOperationRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteBulkOperationRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Deprecated: Use PutTaskAssignments with action=LABEL_START.
//   This endpoint has initially been designed as a GET request,
//   but has been re-designed to serve a PUT logic.
//   In order to clearly highlight that this endpoint serves a PUT request,
//   this endpoint has been deprecated and replaced by PutTaskAssignments with action=LABEL_START.
listNextTaskAssignments: {
    path: '/clarifai.api.V2/ListNextTaskAssignments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListNextTaskAssignmentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputResponse,
    requestSerialize: serialize_clarifai_api_ListNextTaskAssignmentsRequest,
    requestDeserialize: deserialize_clarifai_api_ListNextTaskAssignmentsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputResponse,
  },
  // PutTaskAssignments performs an idempotent action for the task assignments in given task.
// See PutTaskAssignmentsRequestAction for more details about possible actions.
putTaskAssignments: {
    path: '/clarifai.api.V2/PutTaskAssignments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PutTaskAssignmentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiTaskAssignmentResponse,
    requestSerialize: serialize_clarifai_api_PutTaskAssignmentsRequest,
    requestDeserialize: deserialize_clarifai_api_PutTaskAssignmentsRequest,
    responseSerialize: serialize_clarifai_api_MultiTaskAssignmentResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTaskAssignmentResponse,
  },
  // List all the inputs add jobs
listInputsAddJobs: {
    path: '/clarifai.api.V2/ListInputsAddJobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListInputsAddJobsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputsAddJobResponse,
    requestSerialize: serialize_clarifai_api_ListInputsAddJobsRequest,
    requestDeserialize: deserialize_clarifai_api_ListInputsAddJobsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputsAddJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputsAddJobResponse,
  },
  // Get the input add job details by ID
getInputsAddJob: {
    path: '/clarifai.api.V2/GetInputsAddJob',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInputsAddJobRequest,
    responseType: proto_clarifai_api_service_pb.SingleInputsAddJobResponse,
    requestSerialize: serialize_clarifai_api_GetInputsAddJobRequest,
    requestDeserialize: deserialize_clarifai_api_GetInputsAddJobRequest,
    responseSerialize: serialize_clarifai_api_SingleInputsAddJobResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInputsAddJobResponse,
  },
  // cancel the input add job by ID
cancelInputsAddJob: {
    path: '/clarifai.api.V2/CancelInputsAddJob',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.CancelInputsAddJobRequest,
    responseType: proto_clarifai_api_service_pb.SingleInputsAddJobResponse,
    requestSerialize: serialize_clarifai_api_CancelInputsAddJobRequest,
    requestDeserialize: deserialize_clarifai_api_CancelInputsAddJobRequest,
    responseSerialize: serialize_clarifai_api_SingleInputsAddJobResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInputsAddJobResponse,
  },
  // PostUploads is used to upload files. Note that this does not create inputs.
// returns job with uploadID, job has UPLOAD_IN_PROGRESS status
// Actual upload content can be done in multiple calls with PutUploadContentParts
// You can get status of upload with GetUpload or ListUploads endpoints
// See also PostInputsUploads
postUploads: {
    path: '/clarifai.api.V2/PostUploads',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostUploadsRequest,
    responseType: proto_clarifai_api_service_pb.MultiUploadResponse,
    requestSerialize: serialize_clarifai_api_PostUploadsRequest,
    requestDeserialize: deserialize_clarifai_api_PostUploadsRequest,
    responseSerialize: serialize_clarifai_api_MultiUploadResponse,
    responseDeserialize: deserialize_clarifai_api_MultiUploadResponse,
  },
  // Upload a part of a multipart upload.
// Behaviour on completion depends on the endpoint that was used to initiate the upload.
putUploadContentParts: {
    path: '/clarifai.api.V2/PutUploadContentParts',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PutUploadContentPartsRequest,
    responseType: proto_clarifai_api_service_pb.SingleUploadResponse,
    requestSerialize: serialize_clarifai_api_PutUploadContentPartsRequest,
    requestDeserialize: deserialize_clarifai_api_PutUploadContentPartsRequest,
    responseSerialize: serialize_clarifai_api_SingleUploadResponse,
    responseDeserialize: deserialize_clarifai_api_SingleUploadResponse,
  },
  getUpload: {
    path: '/clarifai.api.V2/GetUpload',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetUploadRequest,
    responseType: proto_clarifai_api_service_pb.SingleUploadResponse,
    requestSerialize: serialize_clarifai_api_GetUploadRequest,
    requestDeserialize: deserialize_clarifai_api_GetUploadRequest,
    responseSerialize: serialize_clarifai_api_SingleUploadResponse,
    responseDeserialize: deserialize_clarifai_api_SingleUploadResponse,
  },
  listUploads: {
    path: '/clarifai.api.V2/ListUploads',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListUploadsRequest,
    responseType: proto_clarifai_api_service_pb.MultiUploadResponse,
    requestSerialize: serialize_clarifai_api_ListUploadsRequest,
    requestDeserialize: deserialize_clarifai_api_ListUploadsRequest,
    responseSerialize: serialize_clarifai_api_MultiUploadResponse,
    responseDeserialize: deserialize_clarifai_api_MultiUploadResponse,
  },
  deleteUploads: {
    path: '/clarifai.api.V2/DeleteUploads',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteUploadsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteUploadsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteUploadsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Initiates retrieval of inputs from cloud storage from a user provided data source.
// Will create and return an inputs-add-job for tracking progress.
// Archives will be extracted and their contents will be processed as inputs.
//
// The cloud URL will be treated as a filter prefix. For example s3:/bucket/images_folder/abc will process
// files in the images_folder beginning with abc or in a subfolder beginning with abc.
// For example:
// bucket/images_folder/abcImage.png
// bucket/images_folder/abc-1/Data.zip
//
// If given URL is for a private bucket or file, then credentials should be provided to access the bucket.
// Credentials should include rights to list the objects in the bucket, except when pointed directly at a file archive,
// in which case it only requires rights to access that particular file.
postInputsDataSources: {
    path: '/clarifai.api.V2/PostInputsDataSources',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInputsDataSourcesRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputsAddJobResponse,
    requestSerialize: serialize_clarifai_api_PostInputsDataSourcesRequest,
    requestDeserialize: deserialize_clarifai_api_PostInputsDataSourcesRequest,
    responseSerialize: serialize_clarifai_api_MultiInputsAddJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputsAddJobResponse,
  },
  // Get the input extraction job details by ID
getInputsExtractionJob: {
    path: '/clarifai.api.V2/GetInputsExtractionJob',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetInputsExtractionJobRequest,
    responseType: proto_clarifai_api_service_pb.SingleInputsExtractionJobResponse,
    requestSerialize: serialize_clarifai_api_GetInputsExtractionJobRequest,
    requestDeserialize: deserialize_clarifai_api_GetInputsExtractionJobRequest,
    responseSerialize: serialize_clarifai_api_SingleInputsExtractionJobResponse,
    responseDeserialize: deserialize_clarifai_api_SingleInputsExtractionJobResponse,
  },
  // List all the input extraction jobs
listInputsExtractionJobs: {
    path: '/clarifai.api.V2/ListInputsExtractionJobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListInputsExtractionJobsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse,
    requestSerialize: serialize_clarifai_api_ListInputsExtractionJobsRequest,
    requestDeserialize: deserialize_clarifai_api_ListInputsExtractionJobsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputsExtractionJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputsExtractionJobResponse,
  },
  cancelInputsExtractionJobs: {
    path: '/clarifai.api.V2/CancelInputsExtractionJobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.CancelInputsExtractionJobsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputsExtractionJobResponse,
    requestSerialize: serialize_clarifai_api_CancelInputsExtractionJobsRequest,
    requestDeserialize: deserialize_clarifai_api_CancelInputsExtractionJobsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputsExtractionJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputsExtractionJobResponse,
  },
  // Create new upload job with a file archive containing inputs (images, videos, text, audio)
// Actual file upload happens in next steps by calling `PutUploadContentParts` endpoint
// and providing the file content in the request body.
// This endpoint creates and return an inputs-add-job which contains an upload id needed for upload and further status tracking
// Completing the upload will automatically begin unpacking the archive and uploading the contents as inputs.
// See also GetInputsAddJob and then GetInputsExtractionJob
postInputsUploads: {
    path: '/clarifai.api.V2/PostInputsUploads',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostInputsUploadsRequest,
    responseType: proto_clarifai_api_service_pb.MultiInputsAddJobResponse,
    requestSerialize: serialize_clarifai_api_PostInputsUploadsRequest,
    requestDeserialize: deserialize_clarifai_api_PostInputsUploadsRequest,
    responseSerialize: serialize_clarifai_api_MultiInputsAddJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInputsAddJobResponse,
  },
  // putting above the Get Nodepool endpoint to make it appear above the other one
listPipelineVersionRuns: {
    path: '/clarifai.api.V2/ListPipelineVersionRuns',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListPipelineVersionRunsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse,
    requestSerialize: serialize_clarifai_api_ListPipelineVersionRunsRequest,
    requestDeserialize: deserialize_clarifai_api_ListPipelineVersionRunsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineVersionRunResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineVersionRunResponse,
  },
  // Get a specific runner.
// TODO(zeiler): runner_id is a UUID so can list globally as well.
getRunner: {
    path: '/clarifai.api.V2/GetRunner',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetRunnerRequest,
    responseType: proto_clarifai_api_service_pb.SingleRunnerResponse,
    requestSerialize: serialize_clarifai_api_GetRunnerRequest,
    requestDeserialize: deserialize_clarifai_api_GetRunnerRequest,
    responseSerialize: serialize_clarifai_api_SingleRunnerResponse,
    responseDeserialize: deserialize_clarifai_api_SingleRunnerResponse,
  },
  // List all the runners for the user.
listRunners: {
    path: '/clarifai.api.V2/ListRunners',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListRunnersRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerResponse,
    requestSerialize: serialize_clarifai_api_ListRunnersRequest,
    requestDeserialize: deserialize_clarifai_api_ListRunnersRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerResponse,
  },
  // Add a runners to a user.
postRunners: {
    path: '/clarifai.api.V2/PostRunners',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostRunnersRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerResponse,
    requestSerialize: serialize_clarifai_api_PostRunnersRequest,
    requestDeserialize: deserialize_clarifai_api_PostRunnersRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerResponse,
  },
  // Patch runners of a user.
patchRunners: {
    path: '/clarifai.api.V2/PatchRunners',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchRunnersRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerResponse,
    requestSerialize: serialize_clarifai_api_PatchRunnersRequest,
    requestDeserialize: deserialize_clarifai_api_PatchRunnersRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerResponse,
  },
  // Delete multiple runners in one request.
deleteRunners: {
    path: '/clarifai.api.V2/DeleteRunners',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteRunnersRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteRunnersRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteRunnersRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List items for the remote runner to work on.
// since the runner_id is a UUID we can access it directly too.
listRunnerItems: {
    path: '/clarifai.api.V2/ListRunnerItems',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListRunnerItemsRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerItemResponse,
    requestSerialize: serialize_clarifai_api_ListRunnerItemsRequest,
    requestDeserialize: deserialize_clarifai_api_ListRunnerItemsRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerItemResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerItemResponse,
  },
  // Post back outputs from remote runners
// since the runner_id is a UUID we can access it directly too.
postRunnerItemOutputs: {
    path: '/clarifai.api.V2/PostRunnerItemOutputs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerItemOutputResponse,
    requestSerialize: serialize_clarifai_api_PostRunnerItemOutputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostRunnerItemOutputsRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerItemOutputResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerItemOutputResponse,
  },
  // This maintains a single request for asking the API if there is any work to be done, processing
// it and streaming back results.
// To do that first handshake the MultiRunnerItemOutputResponse will have RUNNER_STREAM_START
// status filled in so that the API knows to respond with a MultiRunnerItemResponse.
// For now there will only be one of those if the model prediction only has one request.
// NOTE(zeiler): downside of this is you can't use HTTP REST requests to do runner work.
processRunnerItems: {
    path: '/clarifai.api.V2/ProcessRunnerItems',
    requestStream: true,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.PostRunnerItemOutputsRequest,
    responseType: proto_clarifai_api_service_pb.MultiRunnerItemResponse,
    requestSerialize: serialize_clarifai_api_PostRunnerItemOutputsRequest,
    requestDeserialize: deserialize_clarifai_api_PostRunnerItemOutputsRequest,
    responseSerialize: serialize_clarifai_api_MultiRunnerItemResponse,
    responseDeserialize: deserialize_clarifai_api_MultiRunnerItemResponse,
  },
  // Get the training time estimate based off train request and estimated input count.
postModelVersionsTrainingTimeEstimate: {
    path: '/clarifai.api.V2/PostModelVersionsTrainingTimeEstimate',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostModelVersionsTrainingTimeEstimateRequest,
    responseType: proto_clarifai_api_service_pb.MultiTrainingTimeEstimateResponse,
    requestSerialize: serialize_clarifai_api_PostModelVersionsTrainingTimeEstimateRequest,
    requestDeserialize: deserialize_clarifai_api_PostModelVersionsTrainingTimeEstimateRequest,
    responseSerialize: serialize_clarifai_api_MultiTrainingTimeEstimateResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTrainingTimeEstimateResponse,
  },
  // List Available Cloud Providers
listCloudProviders: {
    path: '/clarifai.api.V2/ListCloudProviders',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListCloudProvidersRequest,
    responseType: proto_clarifai_api_service_pb.MultiCloudProviderResponse,
    requestSerialize: serialize_clarifai_api_ListCloudProvidersRequest,
    requestDeserialize: deserialize_clarifai_api_ListCloudProvidersRequest,
    responseSerialize: serialize_clarifai_api_MultiCloudProviderResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCloudProviderResponse,
  },
  // List Regions for given Cloud Provider
listCloudRegions: {
    path: '/clarifai.api.V2/ListCloudRegions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListCloudRegionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiCloudRegionResponse,
    requestSerialize: serialize_clarifai_api_ListCloudRegionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListCloudRegionsRequest,
    responseSerialize: serialize_clarifai_api_MultiCloudRegionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiCloudRegionResponse,
  },
  // Get InstanceTypes given Cloud Provider and Region
listInstanceTypes: {
    path: '/clarifai.api.V2/ListInstanceTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListInstanceTypesRequest,
    responseType: proto_clarifai_api_service_pb.MultiInstanceTypeResponse,
    requestSerialize: serialize_clarifai_api_ListInstanceTypesRequest,
    requestDeserialize: deserialize_clarifai_api_ListInstanceTypesRequest,
    responseSerialize: serialize_clarifai_api_MultiInstanceTypeResponse,
    responseDeserialize: deserialize_clarifai_api_MultiInstanceTypeResponse,
  },
  // ComputeCluster CRUD
getComputeCluster: {
    path: '/clarifai.api.V2/GetComputeCluster',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetComputeClusterRequest,
    responseType: proto_clarifai_api_service_pb.SingleComputeClusterResponse,
    requestSerialize: serialize_clarifai_api_GetComputeClusterRequest,
    requestDeserialize: deserialize_clarifai_api_GetComputeClusterRequest,
    responseSerialize: serialize_clarifai_api_SingleComputeClusterResponse,
    responseDeserialize: deserialize_clarifai_api_SingleComputeClusterResponse,
  },
  listComputeClusters: {
    path: '/clarifai.api.V2/ListComputeClusters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListComputeClustersRequest,
    responseType: proto_clarifai_api_service_pb.MultiComputeClusterResponse,
    requestSerialize: serialize_clarifai_api_ListComputeClustersRequest,
    requestDeserialize: deserialize_clarifai_api_ListComputeClustersRequest,
    responseSerialize: serialize_clarifai_api_MultiComputeClusterResponse,
    responseDeserialize: deserialize_clarifai_api_MultiComputeClusterResponse,
  },
  postComputeClusters: {
    path: '/clarifai.api.V2/PostComputeClusters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostComputeClustersRequest,
    responseType: proto_clarifai_api_service_pb.MultiComputeClusterResponse,
    requestSerialize: serialize_clarifai_api_PostComputeClustersRequest,
    requestDeserialize: deserialize_clarifai_api_PostComputeClustersRequest,
    responseSerialize: serialize_clarifai_api_MultiComputeClusterResponse,
    responseDeserialize: deserialize_clarifai_api_MultiComputeClusterResponse,
  },
  // Delete multiple compute_clusters in one request.
deleteComputeClusters: {
    path: '/clarifai.api.V2/DeleteComputeClusters',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteComputeClustersRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteComputeClustersRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteComputeClustersRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Nodepools CRUD
getNodepool: {
    path: '/clarifai.api.V2/GetNodepool',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetNodepoolRequest,
    responseType: proto_clarifai_api_service_pb.SingleNodepoolResponse,
    requestSerialize: serialize_clarifai_api_GetNodepoolRequest,
    requestDeserialize: deserialize_clarifai_api_GetNodepoolRequest,
    responseSerialize: serialize_clarifai_api_SingleNodepoolResponse,
    responseDeserialize: deserialize_clarifai_api_SingleNodepoolResponse,
  },
  listNodepools: {
    path: '/clarifai.api.V2/ListNodepools',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListNodepoolsRequest,
    responseType: proto_clarifai_api_service_pb.MultiNodepoolResponse,
    requestSerialize: serialize_clarifai_api_ListNodepoolsRequest,
    requestDeserialize: deserialize_clarifai_api_ListNodepoolsRequest,
    responseSerialize: serialize_clarifai_api_MultiNodepoolResponse,
    responseDeserialize: deserialize_clarifai_api_MultiNodepoolResponse,
  },
  postNodepools: {
    path: '/clarifai.api.V2/PostNodepools',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostNodepoolsRequest,
    responseType: proto_clarifai_api_service_pb.MultiNodepoolResponse,
    requestSerialize: serialize_clarifai_api_PostNodepoolsRequest,
    requestDeserialize: deserialize_clarifai_api_PostNodepoolsRequest,
    responseSerialize: serialize_clarifai_api_MultiNodepoolResponse,
    responseDeserialize: deserialize_clarifai_api_MultiNodepoolResponse,
  },
  patchNodepools: {
    path: '/clarifai.api.V2/PatchNodepools',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchNodepoolsRequest,
    responseType: proto_clarifai_api_service_pb.MultiNodepoolResponse,
    requestSerialize: serialize_clarifai_api_PatchNodepoolsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchNodepoolsRequest,
    responseSerialize: serialize_clarifai_api_MultiNodepoolResponse,
    responseDeserialize: deserialize_clarifai_api_MultiNodepoolResponse,
  },
  // Delete multiple nodepools in one request.
deleteNodepools: {
    path: '/clarifai.api.V2/DeleteNodepools',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteNodepoolsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteNodepoolsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteNodepoolsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // Deployments CRUD
getDeployment: {
    path: '/clarifai.api.V2/GetDeployment',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetDeploymentRequest,
    responseType: proto_clarifai_api_service_pb.SingleDeploymentResponse,
    requestSerialize: serialize_clarifai_api_GetDeploymentRequest,
    requestDeserialize: deserialize_clarifai_api_GetDeploymentRequest,
    responseSerialize: serialize_clarifai_api_SingleDeploymentResponse,
    responseDeserialize: deserialize_clarifai_api_SingleDeploymentResponse,
  },
  listDeployments: {
    path: '/clarifai.api.V2/ListDeployments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListDeploymentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDeploymentResponse,
    requestSerialize: serialize_clarifai_api_ListDeploymentsRequest,
    requestDeserialize: deserialize_clarifai_api_ListDeploymentsRequest,
    responseSerialize: serialize_clarifai_api_MultiDeploymentResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDeploymentResponse,
  },
  postDeployments: {
    path: '/clarifai.api.V2/PostDeployments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostDeploymentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDeploymentResponse,
    requestSerialize: serialize_clarifai_api_PostDeploymentsRequest,
    requestDeserialize: deserialize_clarifai_api_PostDeploymentsRequest,
    responseSerialize: serialize_clarifai_api_MultiDeploymentResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDeploymentResponse,
  },
  patchDeployments: {
    path: '/clarifai.api.V2/PatchDeployments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchDeploymentsRequest,
    responseType: proto_clarifai_api_service_pb.MultiDeploymentResponse,
    requestSerialize: serialize_clarifai_api_PatchDeploymentsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchDeploymentsRequest,
    responseSerialize: serialize_clarifai_api_MultiDeploymentResponse,
    responseDeserialize: deserialize_clarifai_api_MultiDeploymentResponse,
  },
  // Delete multiple deployments in one request.
deleteDeployments: {
    path: '/clarifai.api.V2/DeleteDeployments',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteDeploymentsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeleteDeploymentsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteDeploymentsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  postAuditLogSearches: {
    path: '/clarifai.api.V2/PostAuditLogSearches',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostAuditLogSearchesRequest,
    responseType: proto_clarifai_api_service_pb.MultiAuditLogEntryResponse,
    requestSerialize: serialize_clarifai_api_PostAuditLogSearchesRequest,
    requestDeserialize: deserialize_clarifai_api_PostAuditLogSearchesRequest,
    responseSerialize: serialize_clarifai_api_MultiAuditLogEntryResponse,
    responseDeserialize: deserialize_clarifai_api_MultiAuditLogEntryResponse,
  },
  listWorkflowEvaluationTemplates: {
    path: '/clarifai.api.V2/ListWorkflowEvaluationTemplates',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListWorkflowEvaluationTemplatesRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowEvaluationTemplateResponse,
    requestSerialize: serialize_clarifai_api_ListWorkflowEvaluationTemplatesRequest,
    requestDeserialize: deserialize_clarifai_api_ListWorkflowEvaluationTemplatesRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowEvaluationTemplateResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowEvaluationTemplateResponse,
  },
  postLogEntries: {
    path: '/clarifai.api.V2/PostLogEntries',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostLogEntriesRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostLogEntriesRequest,
    requestDeserialize: deserialize_clarifai_api_PostLogEntriesRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  listLogEntries: {
    path: '/clarifai.api.V2/ListLogEntries',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListLogEntriesRequest,
    responseType: proto_clarifai_api_service_pb.MultiLogEntryResponse,
    requestSerialize: serialize_clarifai_api_ListLogEntriesRequest,
    requestDeserialize: deserialize_clarifai_api_ListLogEntriesRequest,
    responseSerialize: serialize_clarifai_api_MultiLogEntryResponse,
    responseDeserialize: deserialize_clarifai_api_MultiLogEntryResponse,
  },
  streamLogEntries: {
    path: '/clarifai.api.V2/StreamLogEntries',
    requestStream: false,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.StreamLogEntriesRequest,
    responseType: proto_clarifai_api_service_pb.MultiLogEntryResponse,
    requestSerialize: serialize_clarifai_api_StreamLogEntriesRequest,
    requestDeserialize: deserialize_clarifai_api_StreamLogEntriesRequest,
    responseSerialize: serialize_clarifai_api_MultiLogEntryResponse,
    responseDeserialize: deserialize_clarifai_api_MultiLogEntryResponse,
  },
  postComputePlaneMetrics: {
    path: '/clarifai.api.V2/PostComputePlaneMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostComputePlaneMetricsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostComputePlaneMetricsRequest,
    requestDeserialize: deserialize_clarifai_api_PostComputePlaneMetricsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  postWorkflowVersionEvaluations: {
    path: '/clarifai.api.V2/PostWorkflowVersionEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowVersionEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowVersionEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
  },
  getWorkflowVersionEvaluation: {
    path: '/clarifai.api.V2/GetWorkflowVersionEvaluation',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetWorkflowVersionEvaluationRequest,
    responseType: proto_clarifai_api_service_pb.SingleWorkflowVersionEvaluationResponse,
    requestSerialize: serialize_clarifai_api_GetWorkflowVersionEvaluationRequest,
    requestDeserialize: deserialize_clarifai_api_GetWorkflowVersionEvaluationRequest,
    responseSerialize: serialize_clarifai_api_SingleWorkflowVersionEvaluationResponse,
    responseDeserialize: deserialize_clarifai_api_SingleWorkflowVersionEvaluationResponse,
  },
  listWorkflowVersionEvaluations: {
    path: '/clarifai.api.V2/ListWorkflowVersionEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse,
    requestSerialize: serialize_clarifai_api_ListWorkflowVersionEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_ListWorkflowVersionEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
  },
  patchWorkflowVersionEvaluations: {
    path: '/clarifai.api.V2/PatchWorkflowVersionEvaluations',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchWorkflowVersionEvaluationsRequest,
    responseType: proto_clarifai_api_service_pb.MultiWorkflowVersionEvaluationResponse,
    requestSerialize: serialize_clarifai_api_PatchWorkflowVersionEvaluationsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchWorkflowVersionEvaluationsRequest,
    responseSerialize: serialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
    responseDeserialize: deserialize_clarifai_api_MultiWorkflowVersionEvaluationResponse,
  },
  listWorkflowVersionEvaluationData: {
    path: '/clarifai.api.V2/ListWorkflowVersionEvaluationData',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListWorkflowVersionEvaluationDataRequest,
    responseType: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse,
    requestSerialize: serialize_clarifai_api_ListWorkflowVersionEvaluationDataRequest,
    requestDeserialize: deserialize_clarifai_api_ListWorkflowVersionEvaluationDataRequest,
    responseSerialize: serialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse,
    responseDeserialize: deserialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse,
  },
  postWorkflowVersionEvaluationData: {
    path: '/clarifai.api.V2/PostWorkflowVersionEvaluationData',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowVersionEvaluationDataRequest,
    responseType: proto_clarifai_api_service_pb.MultiListWorkflowVersionEvaluationDataResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowVersionEvaluationDataRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowVersionEvaluationDataRequest,
    responseSerialize: serialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse,
    responseDeserialize: deserialize_clarifai_api_MultiListWorkflowVersionEvaluationDataResponse,
  },
  postPipelines: {
    path: '/clarifai.api.V2/PostPipelines',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostPipelinesRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineResponse,
    requestSerialize: serialize_clarifai_api_PostPipelinesRequest,
    requestDeserialize: deserialize_clarifai_api_PostPipelinesRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineResponse,
  },
  getPipeline: {
    path: '/clarifai.api.V2/GetPipeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetPipelineRequest,
    responseType: proto_clarifai_api_service_pb.SinglePipelineResponse,
    requestSerialize: serialize_clarifai_api_GetPipelineRequest,
    requestDeserialize: deserialize_clarifai_api_GetPipelineRequest,
    responseSerialize: serialize_clarifai_api_SinglePipelineResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePipelineResponse,
  },
  listPipelines: {
    path: '/clarifai.api.V2/ListPipelines',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListPipelinesRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineResponse,
    requestSerialize: serialize_clarifai_api_ListPipelinesRequest,
    requestDeserialize: deserialize_clarifai_api_ListPipelinesRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineResponse,
  },
  patchPipelines: {
    path: '/clarifai.api.V2/PatchPipelines',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchPipelinesRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineResponse,
    requestSerialize: serialize_clarifai_api_PatchPipelinesRequest,
    requestDeserialize: deserialize_clarifai_api_PatchPipelinesRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineResponse,
  },
  deletePipelines: {
    path: '/clarifai.api.V2/DeletePipelines',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeletePipelinesRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeletePipelinesRequest,
    requestDeserialize: deserialize_clarifai_api_DeletePipelinesRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  getPipelineVersion: {
    path: '/clarifai.api.V2/GetPipelineVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetPipelineVersionRequest,
    responseType: proto_clarifai_api_service_pb.SinglePipelineVersionResponse,
    requestSerialize: serialize_clarifai_api_GetPipelineVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetPipelineVersionRequest,
    responseSerialize: serialize_clarifai_api_SinglePipelineVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePipelineVersionResponse,
  },
  listPipelineVersions: {
    path: '/clarifai.api.V2/ListPipelineVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListPipelineVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineVersionResponse,
    requestSerialize: serialize_clarifai_api_ListPipelineVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListPipelineVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineVersionResponse,
  },
  patchPipelineVersions: {
    path: '/clarifai.api.V2/PatchPipelineVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchPipelineVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineVersionResponse,
    requestSerialize: serialize_clarifai_api_PatchPipelineVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchPipelineVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineVersionResponse,
  },
  deletePipelineVersions: {
    path: '/clarifai.api.V2/DeletePipelineVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeletePipelineVersionsRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_DeletePipelineVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_DeletePipelineVersionsRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  getPipelineVersionRun: {
    path: '/clarifai.api.V2/GetPipelineVersionRun',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetPipelineVersionRunRequest,
    responseType: proto_clarifai_api_service_pb.SinglePipelineVersionRunResponse,
    requestSerialize: serialize_clarifai_api_GetPipelineVersionRunRequest,
    requestDeserialize: deserialize_clarifai_api_GetPipelineVersionRunRequest,
    responseSerialize: serialize_clarifai_api_SinglePipelineVersionRunResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePipelineVersionRunResponse,
  },
  // TODO ListPipelineVersionRuns for listing all the runs of a given pipeline version.
//
postPipelineVersionRuns: {
    path: '/clarifai.api.V2/PostPipelineVersionRuns',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostPipelineVersionRunsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse,
    requestSerialize: serialize_clarifai_api_PostPipelineVersionRunsRequest,
    requestDeserialize: deserialize_clarifai_api_PostPipelineVersionRunsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineVersionRunResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineVersionRunResponse,
  },
  patchPipelineVersionRuns: {
    path: '/clarifai.api.V2/PatchPipelineVersionRuns',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchPipelineVersionRunsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineVersionRunResponse,
    requestSerialize: serialize_clarifai_api_PatchPipelineVersionRunsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchPipelineVersionRunsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineVersionRunResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineVersionRunResponse,
  },
  postPipelineSteps: {
    path: '/clarifai.api.V2/PostPipelineSteps',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostPipelineStepsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineStepResponse,
    requestSerialize: serialize_clarifai_api_PostPipelineStepsRequest,
    requestDeserialize: deserialize_clarifai_api_PostPipelineStepsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineStepResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineStepResponse,
  },
  getPipelineStep: {
    path: '/clarifai.api.V2/GetPipelineStep',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetPipelineStepRequest,
    responseType: proto_clarifai_api_service_pb.SinglePipelineStepResponse,
    requestSerialize: serialize_clarifai_api_GetPipelineStepRequest,
    requestDeserialize: deserialize_clarifai_api_GetPipelineStepRequest,
    responseSerialize: serialize_clarifai_api_SinglePipelineStepResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePipelineStepResponse,
  },
  listPipelineSteps: {
    path: '/clarifai.api.V2/ListPipelineSteps',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListPipelineStepsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineStepResponse,
    requestSerialize: serialize_clarifai_api_ListPipelineStepsRequest,
    requestDeserialize: deserialize_clarifai_api_ListPipelineStepsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineStepResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineStepResponse,
  },
  // This is a streaming endpoint, the request has a field, upload_data, which can either be the config for the upload or the actual data to upload.
// The config must be sent first before the pipeline_step_bytes can be uploaded.
// Once the config has been sent, the server will respond with a confirmation containing the pipeline_step_version_id.
// This is so that if your upload is interrupted, you can resume the upload by sending the config again with the pipeline_step_version_id specified for your pipeline_step_version.
// The actual upload will be done via a multipart upload, the latest successful part_id will be sent from the server in the response to the pipeline_step_bytes.
postPipelineStepVersionsUpload: {
    path: '/clarifai.api.V2/PostPipelineStepVersionsUpload',
    requestStream: true,
    responseStream: true,
    requestType: proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadRequest,
    responseType: proto_clarifai_api_service_pb.PostPipelineStepVersionsUploadResponse,
    requestSerialize: serialize_clarifai_api_PostPipelineStepVersionsUploadRequest,
    requestDeserialize: deserialize_clarifai_api_PostPipelineStepVersionsUploadRequest,
    responseSerialize: serialize_clarifai_api_PostPipelineStepVersionsUploadResponse,
    responseDeserialize: deserialize_clarifai_api_PostPipelineStepVersionsUploadResponse,
  },
  listPipelineStepVersions: {
    path: '/clarifai.api.V2/ListPipelineStepVersions',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListPipelineStepVersionsRequest,
    responseType: proto_clarifai_api_service_pb.MultiPipelineStepVersionResponse,
    requestSerialize: serialize_clarifai_api_ListPipelineStepVersionsRequest,
    requestDeserialize: deserialize_clarifai_api_ListPipelineStepVersionsRequest,
    responseSerialize: serialize_clarifai_api_MultiPipelineStepVersionResponse,
    responseDeserialize: deserialize_clarifai_api_MultiPipelineStepVersionResponse,
  },
  getPipelineStepVersion: {
    path: '/clarifai.api.V2/GetPipelineStepVersion',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetPipelineStepVersionRequest,
    responseType: proto_clarifai_api_service_pb.SinglePipelineStepVersionResponse,
    requestSerialize: serialize_clarifai_api_GetPipelineStepVersionRequest,
    requestDeserialize: deserialize_clarifai_api_GetPipelineStepVersionRequest,
    responseSerialize: serialize_clarifai_api_SinglePipelineStepVersionResponse,
    responseDeserialize: deserialize_clarifai_api_SinglePipelineStepVersionResponse,
  },
  getSecret: {
    path: '/clarifai.api.V2/GetSecret',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.GetSecretRequest,
    responseType: proto_clarifai_api_service_pb.SingleSecretResponse,
    requestSerialize: serialize_clarifai_api_GetSecretRequest,
    requestDeserialize: deserialize_clarifai_api_GetSecretRequest,
    responseSerialize: serialize_clarifai_api_SingleSecretResponse,
    responseDeserialize: deserialize_clarifai_api_SingleSecretResponse,
  },
  listSecrets: {
    path: '/clarifai.api.V2/ListSecrets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListSecretsRequest,
    responseType: proto_clarifai_api_service_pb.MultiSecretResponse,
    requestSerialize: serialize_clarifai_api_ListSecretsRequest,
    requestDeserialize: deserialize_clarifai_api_ListSecretsRequest,
    responseSerialize: serialize_clarifai_api_MultiSecretResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSecretResponse,
  },
  postSecrets: {
    path: '/clarifai.api.V2/PostSecrets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostSecretsRequest,
    responseType: proto_clarifai_api_service_pb.MultiSecretResponse,
    requestSerialize: serialize_clarifai_api_PostSecretsRequest,
    requestDeserialize: deserialize_clarifai_api_PostSecretsRequest,
    responseSerialize: serialize_clarifai_api_MultiSecretResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSecretResponse,
  },
  patchSecrets: {
    path: '/clarifai.api.V2/PatchSecrets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PatchSecretsRequest,
    responseType: proto_clarifai_api_service_pb.MultiSecretResponse,
    requestSerialize: serialize_clarifai_api_PatchSecretsRequest,
    requestDeserialize: deserialize_clarifai_api_PatchSecretsRequest,
    responseSerialize: serialize_clarifai_api_MultiSecretResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSecretResponse,
  },
  deleteSecrets: {
    path: '/clarifai.api.V2/DeleteSecrets',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.DeleteSecretsRequest,
    responseType: proto_clarifai_api_service_pb.MultiSecretResponse,
    requestSerialize: serialize_clarifai_api_DeleteSecretsRequest,
    requestDeserialize: deserialize_clarifai_api_DeleteSecretsRequest,
    responseSerialize: serialize_clarifai_api_MultiSecretResponse,
    responseDeserialize: deserialize_clarifai_api_MultiSecretResponse,
  },
  postMetricsQuery: {
    path: '/clarifai.api.V2/PostMetricsQuery',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostMetricsQueryRequest,
    responseType: proto_clarifai_api_service_pb.MetricsQueryResponse,
    requestSerialize: serialize_clarifai_api_PostMetricsQueryRequest,
    requestDeserialize: deserialize_clarifai_api_PostMetricsQueryRequest,
    responseSerialize: serialize_clarifai_api_MetricsQueryResponse,
    responseDeserialize: deserialize_clarifai_api_MetricsQueryResponse,
  },
  listMetricLabels: {
    path: '/clarifai.api.V2/ListMetricLabels',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListMetricLabelsRequest,
    responseType: proto_clarifai_api_service_pb.MultiMetricLabelsResponse,
    requestSerialize: serialize_clarifai_api_ListMetricLabelsRequest,
    requestDeserialize: deserialize_clarifai_api_ListMetricLabelsRequest,
    responseSerialize: serialize_clarifai_api_MultiMetricLabelsResponse,
    responseDeserialize: deserialize_clarifai_api_MultiMetricLabelsResponse,
  },
};

exports.V2Client = grpc.makeGenericClientConstructor(V2Service, 'V2');
