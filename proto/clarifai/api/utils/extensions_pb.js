// source: proto/clarifai/api/utils/extensions.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.clarifai.api.utils.clDefaultFloat', null, global);
goog.exportSymbol('proto.clarifai.api.utils.clMoretags', null, global);
goog.exportSymbol('proto.clarifai.api.utils.clShowIfEmpty', null, global);
goog.exportSymbol('proto.clarifai.api.utils.description', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clShowIfEmpty`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.clarifai.api.utils.clShowIfEmpty = new jspb.ExtensionFieldInfo(
    50000,
    {clShowIfEmpty: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50000] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.api.utils.clShowIfEmpty,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50000] = proto.clarifai.api.utils.clShowIfEmpty;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clMoretags`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.clarifai.api.utils.clMoretags = new jspb.ExtensionFieldInfo(
    50001,
    {clMoretags: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50001] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.api.utils.clMoretags,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50001] = proto.clarifai.api.utils.clMoretags;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `clDefaultFloat`.
 * @type {!jspb.ExtensionFieldInfo<number>}
 */
proto.clarifai.api.utils.clDefaultFloat = new jspb.ExtensionFieldInfo(
    50010,
    {clDefaultFloat: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[50010] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.api.utils.clDefaultFloat,
    jspb.BinaryReader.prototype.readFloat,
    jspb.BinaryWriter.prototype.writeFloat,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[50010] = proto.clarifai.api.utils.clDefaultFloat;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `description`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.clarifai.api.utils.description = new jspb.ExtensionFieldInfo(
    1000,
    {description: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[1000] = new jspb.ExtensionFieldBinaryInfo(
    proto.clarifai.api.utils.description,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[1000] = proto.clarifai.api.utils.description;

goog.object.extend(exports, proto.clarifai.api.utils);
