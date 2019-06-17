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
    var str = ''; // If input is string, there is no need to parse

    if (typeof value !== 'string') return JSON.stringify(value, replacer, space);

    try {
      str = JSON.stringify(JSON.parse(value), replacer, space);
    } catch (err) {
      str = String(value) || '';
    }

    return str;
  }
});