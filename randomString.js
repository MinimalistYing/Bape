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
    global.randomString = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = randomString;
  _random = _interopRequireDefault(_random);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * Generate random string with given length
   * 
   * @param {integer} length 
   */
  function randomString() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    if (!Number.isInteger(length) || length <= 0) throw new Error('length must be an integer large than 0');
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var str = '';

    for (var i = 0; i < length; i++) {
      str += arr[(0, _random["default"])(0, 51)];
    }

    return str;
  }

  module.exports = exports.default;
});