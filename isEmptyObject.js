(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isObject"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isObject"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isObject);
    global.isEmptyObject = mod.exports;
  }
})(this, function (_exports, _isObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isEmptyObject;
  _isObject = _interopRequireDefault(_isObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * Determine whether input is a empty object
   * 
   * @param {*} input 
   */
  function isEmptyObject(input) {
    if (!(0, _isObject["default"])(input)) return false;
    return Object.keys(input).length === 0;
  }
});