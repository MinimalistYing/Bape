(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.formatJSON = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = formatJSON;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  /**
   * Prettify JSON
   * 
   * @param {*} value 
   * @param {*} replacer Same as `JSON.stringify(value, replacer, space)`
   * @param {*} space Same as `JSON.stringify(value, replacer, space)`
   */
  function formatJSON(value) {
    var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var space = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var re = ''; // If input is an object, there is no need to parse

    if (_typeof(value) === 'object') return JSON.stringify(value, replacer, space);

    try {
      var parsed = JSON.parse(value);
      re = _typeof(parsed) === 'object' ? JSON.stringify(JSON.parse(value), replacer, space) : value;
    } catch (err) {
      re = String(value) || '';
    }

    return re;
  }

  module.exports = exports.default;
});