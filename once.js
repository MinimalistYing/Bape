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
    global.once = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = once;

  function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

  /**
   * Return a function which can only excute once
   * 
   * @param {function} fn 
   */
  function once(fn) {
    if (typeof fn !== 'function') return function () {};
    var excuted = false;
    return function () {
      if (!excuted) {
        true, _readOnlyError("excuted");

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        fn.apply(this, args);
      }
    };
  }

  module.exports = exports.default;
});