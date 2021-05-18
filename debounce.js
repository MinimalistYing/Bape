(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash/debounce"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash/debounce"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.debounce);
    global.debounce = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _debounce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _debounce = _interopRequireDefault(_debounce);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // My Personal Implemention
  //
  // import noop from './noop'
  // /**
  //  * force the input function can only invoke once during the wait time
  //  * 
  //  * @param {function} fn 
  //  * @param {number} wait 
  //  * @param {boolean} leading whether invoke function at begin or end, default at end
  //  */
  // export default function debounce (fn, wait = 0, leading = false) {
  //   if (typeof fn !== 'function') return noop
  //   let timer = null
  //   let canInvoke = true // use for leading case
  //   return function debounced (...args) {
  //     if (timer) clearTimeout(timer)
  //     if (leading && canInvoke) {
  //       fn.apply(args)
  //       canInvoke = false
  //     }
  //     timer = setTimeout(() => {
  //       if (leading) {
  //         canInvoke = true
  //       } else {
  //         fn.apply(args)
  //       }
  //     }, wait)
  //   }
  // }
  // from lodash
  var _default = _debounce["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});