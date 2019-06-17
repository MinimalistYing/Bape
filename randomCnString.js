(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./random"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./random"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.random);
    global.randomCnString = mod.exports;
  }
})(this, function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = randomCnString;
  _random = _interopRequireDefault(_random);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * Generate random chinese string with given length
   * 
   * @param {integer} length 
   */
  function randomCnString() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    if (!Number.isInteger(length) || length <= 0) throw new Error('length must be an integer large than 0');
    var str = '';

    for (var i = 0; i < length; i++) {
      // Chinese unicode range \u4e00 - \u9fa5
      var hex = (0, _random["default"])(19968, 40869).toString(16);
      str += String.fromCodePoint(parseInt(hex, 16));
    }

    return str;
  }

  module.exports = exports.default;
});