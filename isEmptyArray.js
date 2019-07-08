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
    global.isEmptyArray = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isEmptyArray;

  /**
   * Determine whether input is an empty array
   * 
   * @param {*} input 
   */
  function isEmptyArray(input) {
    if (!Array.isArray(input)) return false;
    return input.length === 0;
  }

  module.exports = exports.default;
});