(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isObject"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isObject"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isObject);
    global.isPlainObject = mod.exports;
  }
})(this, function (_exports, _isObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isPlainObject;
  _isObject = _interopRequireDefault(_isObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * Determine whether input is a plain object
   * 
   * @param {*} input 
   */
  function isPlainObject(input) {
    if (!(0, _isObject["default"])(input)) return false; // For `Object.create(null)`

    if (Object.getPrototypeOf(input) === null) return true;
    var proto = input;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return proto === Object.getPrototypeOf(input);
  }

  module.exports = exports.default;
});