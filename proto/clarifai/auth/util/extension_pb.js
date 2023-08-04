// source: proto/clarifai/auth/util/extension.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var proto_clarifai_auth_scope_scope_pb = require('../../../../proto/clarifai/auth/scope/scope_pb.js');
goog.object.extend(proto, proto_clarifai_auth_scope_scope_pb);
var proto_clarifai_auth_types_types_pb = require('../../../../proto/clarifai/auth/types/types_pb.js');
goog.object.extend(proto, proto_clarifai_auth_types_types_pb);
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.clarifai.auth.util.clAuthType', null, global);
goog.exportSymbol('proto.clarifai.auth.util.clDependingScopesList', null, global);
goog.exportSymbol('proto.clarifai.auth.util.clPrivateField', null, global);
goog.exportSymbol('proto.clarifai.auth.util.clPrivateMessage', null, global);
goog.exportSymbol('proto.clarifai.auth.util.clPrivateRpc', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clPrivateField`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.clarifai.auth.util.clPrivateField = new jspb.ExtensionFieldInfo(
    80320,
    {clPrivateField: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[80320] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.util.clPrivateField,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[80320] = proto.clarifai.auth.util.clPrivateField;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clPrivateRpc`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.clarifai.auth.util.clPrivateRpc = new jspb.ExtensionFieldInfo(
    80321,
    {clPrivateRpc: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[80321] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.util.clPrivateRpc,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[80321] = proto.clarifai.auth.util.clPrivateRpc;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clDependingScopesList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.clarifai.auth.scope.S>>}
 */
proto.clarifai.auth.util.clDependingScopesList = new jspb.ExtensionFieldInfo(
    80322,
    {clDependingScopesList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[80322] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.util.clDependingScopesList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[80322] = proto.clarifai.auth.util.clDependingScopesList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clAuthType`.
 * @type {!jspb.ExtensionFieldInfo<!proto.clarifai.auth.types.AuthType>}
 */
proto.clarifai.auth.util.clAuthType = new jspb.ExtensionFieldInfo(
    80323,
    {clAuthType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[80323] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.util.clAuthType,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[80323] = proto.clarifai.auth.util.clAuthType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clPrivateMessage`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.clarifai.auth.util.clPrivateMessage = new jspb.ExtensionFieldInfo(
    80324,
    {clPrivateMessage: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[80324] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.auth.util.clPrivateMessage,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[80324] = proto.clarifai.auth.util.clPrivateMessage;

goog.object.extend(exports, proto.clarifai.auth.util);
