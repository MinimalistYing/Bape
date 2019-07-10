(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./noop"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./noop"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.noop);
    global.debounce = mod.exports;
  }
})(this, function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = debounce;
  _noop = _interopRequireDefault(_noop);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * force the input function can only invoke once during the wait time
   * 
   * @param {function} fn 
   * @param {number} wait 
   * @param {boolean} leading whether invoke function at begin or end, default at end
   */
  function debounce(fn) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (typeof fn !== 'function') return _noop["default"];
    var timer = null;
    var canInvoke = true; // use for leading case

    return function debounced() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timer) clearTimeout(timer);

      if (leading && canInvoke) {
        fn.apply(args);
        canInvoke = false;
      }

      timer = setTimeout(function () {
        if (leading) {
          canInvoke = true;
        } else {
          fn.apply(args);
        }
      }, wait);
    };
  }

  module.exports = exports.default;
});