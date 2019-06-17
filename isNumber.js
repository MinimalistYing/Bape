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
    global.isNumber = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isNumber;

  /**
   * Determine whether input is number, exclude NaN and Infinity
   * 
   * @param {*} input 
   */
  function isNumber(input) {
    return typeof input === 'number' && Number.isFinite(input);
  }
});