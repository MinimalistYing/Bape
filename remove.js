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
    global.remove = mod.exports;
  }
})(this, function (_exports, _isObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = remove;
  _isObject = _interopRequireDefault(_isObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  /**
   * Remove the give item in an Array, and return the new Array, useful in React / Vue
   * 
   * @param {Array} arr 
   * @param {*} item 
   */
  function remove(arr, item) {
    if (!Array.isArray(arr)) throw new Error('arr must be an Array');
    var index = arr.findIndex(function (element) {
      return item === element;
    });

    if (index > -1) {
      arr.splice(index, 1);
    }

    return _toConsumableArray(arr);
  }

  module.exports = exports.default;
});