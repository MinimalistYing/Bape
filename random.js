(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isNumber"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isNumber"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isNumber);
    global.random = mod.exports;
  }
})(this, function (_exports, _isNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = random;
  _isNumber = _interopRequireDefault(_isNumber);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * Generate random number, support Int or Float
   * 
   * @param {number} min 
   * @param {number} max 
   * @param {integer} floating 
   */
  function random() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var floating = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (!(0, _isNumber["default"])(min) || !(0, _isNumber["default"])(max)) throw new Error('min and max must be number');
    if (!(0, _isNumber["default"])(floating) || !Number.isInteger(floating) || floating < 1 || floating > 20) throw new Error('floating must be an integer between 0 and 20');
    var rand = Math.random() * (max - min);

    if (floating) {
      return min + parseFloat(rand.toFixed(floating));
    } else {
      return Math.floor(min + rand);
    }
  }
});