(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "js-cookie"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("js-cookie"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jsCookie);
    global.cookie = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jsCookie) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _jsCookie = _interopRequireDefault(_jsCookie);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _default = _jsCookie["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});