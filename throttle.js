(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/throttle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/throttle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.throttle);
    global.throttle = mod.exports;
  }
})(this, function (_exports, _throttle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _throttle = _interopRequireDefault(_throttle);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // from lodash
  // throttle is just the same as debounce with maxWait options
  var _default = _throttle["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});