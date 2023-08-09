// source: proto/clarifai/auth/types/types.proto
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

goog.exportSymbol('proto.clarifai.auth.types.AuthType', null, global);
/**
 * @enum {number}
 */
proto.clarifai.auth.types.AuthType = {
  UNDEF: 0,
  NOAUTH: 1,
  KEYAUTH: 2,
  SESSIONTOKENAUTH: 3,
  ADMINAUTH: 4,
  PATAUTH: 5
};

goog.object.extend(exports, proto.clarifai.auth.types);
