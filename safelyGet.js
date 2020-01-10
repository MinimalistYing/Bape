(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isPlainObject"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isPlainObject"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isPlainObject);
    global.safelyGet = mod.exports;
  }
})(this, function (_exports, _isPlainObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = safelyGet;
  _isPlainObject = _interopRequireDefault(_isPlainObject);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /**
   * basicly to avoid the error when get value from object like `a.b[0].c.d[0].e`
   *
   * @export
   * @param {Object} obj
   * @param {String} keys
   */
  function safelyGet(obj, keys) {
    if (!(0, _isPlainObject["default"])(obj)) return undefined;
    var current = obj;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keys.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (/\[\d+\]$/.test(key)) {
          // ends with [1], try to get value from array
          var arrayBeginPos = key.indexOf('[');
          var arrayEndPos = key.indexOf(']');
          var objectKey = key.slice(0, arrayBeginPos);
          var index = Number(key.slice(arrayBeginPos + 1, arrayEndPos));
          if (canNotGet(current[objectKey])) return undefined;
          if (canNotGet(current[objectKey][index])) return undefined;
          current = current[objectKey][index];
        } else {
          // get value from object
          if (canNotGet(current[key])) return undefined;
          current = current[key];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return current;
  } // when trying to get value from undefined or null will get Uncaught TypeError in JavaScript


  function canNotGet(value) {
    return typeof value === 'undefined' || value === null;
  }

  module.exports = exports.default;
});