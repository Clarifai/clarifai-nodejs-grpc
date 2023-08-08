// source: proto/clarifai/api/status/status.proto
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

var proto_clarifai_auth_util_extension_pb = require('../../../../proto/clarifai/auth/util/extension_pb.js');
goog.object.extend(proto, proto_clarifai_auth_util_extension_pb);
var proto_clarifai_api_status_status_code_pb = require('../../../../proto/clarifai/api/status/status_code_pb.js');
goog.object.extend(proto, proto_clarifai_api_status_status_code_pb);
goog.exportSymbol('proto.clarifai.api.status.BaseResponse', null, global);
goog.exportSymbol('proto.clarifai.api.status.RedirectInfo', null, global);
goog.exportSymbol('proto.clarifai.api.status.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.clarifai.api.status.Status = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.status.Status.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.status.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.status.Status.displayName = 'proto.clarifai.api.status.Status';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.clarifai.api.status.RedirectInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.status.RedirectInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.status.RedirectInfo.displayName = 'proto.clarifai.api.status.RedirectInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.clarifai.api.status.BaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.status.BaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.status.BaseResponse.displayName = 'proto.clarifai.api.status.BaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.status.Status.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.clarifai.api.status.Status.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.status.Status.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.status.Status} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.Status.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stackTraceList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    percentCompleted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timeRemaining: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reqId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    internalDetails: jspb.Message.getFieldWithDefault(msg, 8, ""),
    redirectInfo: (f = msg.getRedirectInfo()) && proto.clarifai.api.status.RedirectInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.clarifai.api.status.Status}
 */
proto.clarifai.api.status.Status.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.status.Status;
  return proto.clarifai.api.status.Status.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.status.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.status.Status}
 */
proto.clarifai.api.status.Status.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clarifai.api.status.StatusCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addStackTrace(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPercentCompleted(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeRemaining(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalDetails(value);
      break;
    case 9:
      var value = new proto.clarifai.api.status.RedirectInfo;
      reader.readMessage(value,proto.clarifai.api.status.RedirectInfo.deserializeBinaryFromReader);
      msg.setRedirectInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.clarifai.api.status.Status.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.status.Status.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.status.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.Status.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStackTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getPercentCompleted();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTimeRemaining();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getReqId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInternalDetails();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRedirectInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.clarifai.api.status.RedirectInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional StatusCode code = 1;
 * @return {!proto.clarifai.api.status.StatusCode}
 */
proto.clarifai.api.status.Status.prototype.getCode = function() {
  return /** @type {!proto.clarifai.api.status.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clarifai.api.status.StatusCode} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.clarifai.api.status.Status.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.clarifai.api.status.Status.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string stack_trace = 4;
 * @return {!Array<string>}
 */
proto.clarifai.api.status.Status.prototype.getStackTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setStackTraceList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.addStackTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.clearStackTraceList = function() {
  return this.setStackTraceList([]);
};


/**
 * optional uint32 percent_completed = 5;
 * @return {number}
 */
proto.clarifai.api.status.Status.prototype.getPercentCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setPercentCompleted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 time_remaining = 6;
 * @return {number}
 */
proto.clarifai.api.status.Status.prototype.getTimeRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string req_id = 7;
 * @return {string}
 */
proto.clarifai.api.status.Status.prototype.getReqId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setReqId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string internal_details = 8;
 * @return {string}
 */
proto.clarifai.api.status.Status.prototype.getInternalDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.setInternalDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional RedirectInfo redirect_info = 9;
 * @return {?proto.clarifai.api.status.RedirectInfo}
 */
proto.clarifai.api.status.Status.prototype.getRedirectInfo = function() {
  return /** @type{?proto.clarifai.api.status.RedirectInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.status.RedirectInfo, 9));
};


/**
 * @param {?proto.clarifai.api.status.RedirectInfo|undefined} value
 * @return {!proto.clarifai.api.status.Status} returns this
*/
proto.clarifai.api.status.Status.prototype.setRedirectInfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.status.Status} returns this
 */
proto.clarifai.api.status.Status.prototype.clearRedirectInfo = function() {
  return this.setRedirectInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.status.Status.prototype.hasRedirectInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.clarifai.api.status.RedirectInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.status.RedirectInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.status.RedirectInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.RedirectInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oldResourceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newResourceId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.clarifai.api.status.RedirectInfo}
 */
proto.clarifai.api.status.RedirectInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.status.RedirectInfo;
  return proto.clarifai.api.status.RedirectInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.status.RedirectInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.status.RedirectInfo}
 */
proto.clarifai.api.status.RedirectInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldResourceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.clarifai.api.status.RedirectInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.status.RedirectInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.status.RedirectInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.RedirectInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOldResourceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewResourceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.clarifai.api.status.RedirectInfo.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.RedirectInfo} returns this
 */
proto.clarifai.api.status.RedirectInfo.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_type = 2;
 * @return {string}
 */
proto.clarifai.api.status.RedirectInfo.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.RedirectInfo} returns this
 */
proto.clarifai.api.status.RedirectInfo.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string old_resource_id = 3;
 * @return {string}
 */
proto.clarifai.api.status.RedirectInfo.prototype.getOldResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.RedirectInfo} returns this
 */
proto.clarifai.api.status.RedirectInfo.prototype.setOldResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_resource_id = 4;
 * @return {string}
 */
proto.clarifai.api.status.RedirectInfo.prototype.getNewResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.status.RedirectInfo} returns this
 */
proto.clarifai.api.status.RedirectInfo.prototype.setNewResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.clarifai.api.status.BaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.status.BaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.status.BaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.BaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.clarifai.api.status.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.clarifai.api.status.BaseResponse}
 */
proto.clarifai.api.status.BaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.status.BaseResponse;
  return proto.clarifai.api.status.BaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.status.BaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.status.BaseResponse}
 */
proto.clarifai.api.status.BaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.status.Status;
      reader.readMessage(value,proto.clarifai.api.status.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.clarifai.api.status.BaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.status.BaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.status.BaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.status.BaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.status.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Status status = 1;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.status.BaseResponse.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.status.Status, 1));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.status.BaseResponse} returns this
*/
proto.clarifai.api.status.BaseResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.status.BaseResponse} returns this
 */
proto.clarifai.api.status.BaseResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.status.BaseResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.clarifai.api.status);
