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
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _isObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = remove;
  _isObject = _interopRequireDefault(_isObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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