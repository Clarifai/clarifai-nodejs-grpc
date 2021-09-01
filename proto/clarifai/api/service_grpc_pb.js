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

function serialize_clarifai_api_DeleteConceptRelationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteConceptRelationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteConceptRelationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteConceptRelationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteConceptRelationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_DeleteKeyRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteKeyRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteKeyRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_DeleteSearchRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.DeleteSearchRequest)) {
    throw new Error('Expected argument of type clarifai.api.DeleteSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_DeleteSearchRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.DeleteSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_GetCollectorRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetCollectorRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetCollectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetCollectorRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetCollectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_GetKeyRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetKeyRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_GetSearchRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetSearchRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetSearchRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_GetWorkflowRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.GetWorkflowRequest)) {
    throw new Error('Expected argument of type clarifai.api.GetWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_GetWorkflowRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.GetWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_ListAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_ListInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_ListTrendingMetricsViewsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest)) {
    throw new Error('Expected argument of type clarifai.api.ListTrendingMetricsViewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_ListTrendingMetricsViewsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_MultiConceptMappingJobResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiConceptMappingJobResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiConceptMappingJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiConceptMappingJobResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiConceptMappingJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_MultiModelTypeResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiModelTypeResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiModelTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiModelTypeResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiModelTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_MultiOutputResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiOutputResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiOutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiOutputResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiOutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_MultiSearchResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiSearchResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiSearchResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_MultiTaskResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiTaskResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiTaskResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_MultiTrendingMetricsViewResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse)) {
    throw new Error('Expected argument of type clarifai.api.MultiTrendingMetricsViewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_MultiTrendingMetricsViewResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PatchAnnotationsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchAnnotationsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchAnnotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchAnnotationsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PatchInputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchInputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchInputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchInputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchInputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PatchTasksRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PatchTasksRequest)) {
    throw new Error('Expected argument of type clarifai.api.PatchTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PatchTasksRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PatchTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostAnnotationSearchMetricsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostAnnotationSearchMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostAnnotationSearchMetricsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostAnnotationSearchMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostConceptLanguagesRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptLanguagesRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptLanguagesRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostConceptMappingJobsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostConceptMappingJobsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostConceptMappingJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostConceptMappingJobsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostConceptMappingJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostModelOutputsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelOutputsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelOutputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelOutputsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostModelVersionsRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostModelVersionsRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostModelVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostModelVersionsRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostModelVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostTrendingMetricsViewRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostTrendingMetricsViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostTrendingMetricsViewRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_PostWorkflowResultsSimilarityRequest(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowResultsSimilarityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowResultsSimilarityRequest(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clarifai_api_PostWorkflowResultsSimilarityResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse)) {
    throw new Error('Expected argument of type clarifai.api.PostWorkflowResultsSimilarityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_PostWorkflowResultsSimilarityResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_SingleCollectorResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleCollectorResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleCollectorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleCollectorResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleCollectorResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_SingleKeyResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleKeyResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleKeyResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_SinglePasswordValidationResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SinglePasswordValidationResponse)) {
    throw new Error('Expected argument of type clarifai.api.SinglePasswordValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SinglePasswordValidationResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SinglePasswordValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_clarifai_api_SingleWorkflowResponse(arg) {
  if (!(arg instanceof proto_clarifai_api_service_pb.SingleWorkflowResponse)) {
    throw new Error('Expected argument of type clarifai.api.SingleWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clarifai_api_SingleWorkflowResponse(buffer_arg) {
  return proto_clarifai_api_service_pb.SingleWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
var V2Service = exports.V2Service = {
  // //////////////////////////////////////
// Concept Relationships
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// Concepts
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Concept Languages
// //////////////////////////////////////
//
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
  // Add a new tranlsation for this concept.
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
  // //////////////////////////////////////
// Knowledge Graph
// //////////////////////////////////////
//
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
  // Start concept mapping jobs.
postConceptMappingJobs: {
    path: '/clarifai.api.V2/PostConceptMappingJobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostConceptMappingJobsRequest,
    responseType: proto_clarifai_api_service_pb.MultiConceptMappingJobResponse,
    requestSerialize: serialize_clarifai_api_PostConceptMappingJobsRequest,
    requestDeserialize: deserialize_clarifai_api_PostConceptMappingJobsRequest,
    responseSerialize: serialize_clarifai_api_MultiConceptMappingJobResponse,
    responseDeserialize: deserialize_clarifai_api_MultiConceptMappingJobResponse,
  },
  // //////////////////////////////////////
// annotations
// //////////////////////////////////////
//
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
  // Execute a search over annotation
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
  // //////////////////////////////////////
// Inputs
// //////////////////////////////////////
//
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
  // Get a specific input from an app.
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
  // Add an input (or set of inputs) to an app.
// This call is synchronous if the PostInputsRequest contains exactly one image input. Otherwise,
// it is asynchronous.
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
  // Execute a search over input
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
// FIXME(zeiler): this should have been a plural response.
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
  // List all the inputs.
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Model versions
// //////////////////////////////////////
//
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
  // NOTE: inconsistency: do we want this to return a SingleModelResponse?
//
// Create a new model version to trigger training of the model.
// FIXME(zeiler): this should have been a plural response.
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
  // Get the evaluation metrics for a model version.
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Model References
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Model Version Input Examples
// //////////////////////////////////////
//
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
  // Compare embeddings distances using a workflow
//
postWorkflowResultsSimilarity: {
    path: '/clarifai.api.V2/PostWorkflowResultsSimilarity',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityRequest,
    responseType: proto_clarifai_api_service_pb.PostWorkflowResultsSimilarityResponse,
    requestSerialize: serialize_clarifai_api_PostWorkflowResultsSimilarityRequest,
    requestDeserialize: deserialize_clarifai_api_PostWorkflowResultsSimilarityRequest,
    responseSerialize: serialize_clarifai_api_PostWorkflowResultsSimilarityResponse,
    responseDeserialize: deserialize_clarifai_api_PostWorkflowResultsSimilarityResponse,
  },
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Workflow Versions
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// API Keys
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// Apps
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Password
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// Searches
// //////////////////////////////////////
//
// Get a saved search.
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
  // List all saved searches.
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
  // Execute a new search and optionally save it.
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
  // Execute a previously saved search.
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
  // //////////////////////////////////////
//
// //////////////////////////////////////
// Status Codes
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// App Sharing
// //////////////////////////////////////
//
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
  // //////////////////////////////////////
// App duplication
// //////////////////////////////////////
//
// start to duplicate an app which copies all the inputs, annotations, models, concepts etc. to a new app.
// this is an async process, you should use ListAppDuplications or GetAppDuplication to check the status.
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
  // list all the app duplications user triggers
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
  // get the app duplication status
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
  // //////////////////////////////////////
// Tasks
// //////////////////////////////////////
//
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
// Collectors
// //////////////////////////////////////
//
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
  // //////////////////////////////////////////////////////////////////////////////
// Stats Collection Endpoints.
// //////////////////////////////////////////////////////////////////////////////
//
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
  // //////////////////////////////////////
// Trending Metrics
// //////////////////////////////////////
//
// Increase the view metric for a detail view
postTrendingMetricsView: {
    path: '/clarifai.api.V2/PostTrendingMetricsView',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.PostTrendingMetricsViewRequest,
    responseType: proto_clarifai_api_status_status_pb.BaseResponse,
    requestSerialize: serialize_clarifai_api_PostTrendingMetricsViewRequest,
    requestDeserialize: deserialize_clarifai_api_PostTrendingMetricsViewRequest,
    responseSerialize: serialize_clarifai_api_status_BaseResponse,
    responseDeserialize: deserialize_clarifai_api_status_BaseResponse,
  },
  // List the view metrics for a detail view
listTrendingMetricsViews: {
    path: '/clarifai.api.V2/ListTrendingMetricsViews',
    requestStream: false,
    responseStream: false,
    requestType: proto_clarifai_api_service_pb.ListTrendingMetricsViewsRequest,
    responseType: proto_clarifai_api_service_pb.MultiTrendingMetricsViewResponse,
    requestSerialize: serialize_clarifai_api_ListTrendingMetricsViewsRequest,
    requestDeserialize: deserialize_clarifai_api_ListTrendingMetricsViewsRequest,
    responseSerialize: serialize_clarifai_api_MultiTrendingMetricsViewResponse,
    responseDeserialize: deserialize_clarifai_api_MultiTrendingMetricsViewResponse,
  },
};

exports.V2Client = grpc.makeGenericClientConstructor(V2Service);
