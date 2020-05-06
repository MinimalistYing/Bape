(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.events = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function checkListener(input) {
    if (typeof input !== 'function') throw new TypeError('Listener must be a function');
  }

  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this.bus = new Map();
    }

    _createClass(EventEmitter, [{
      key: "on",
      value: function on(event, listener) {
        checkListener(listener);
        var bus = this.bus;
        var listeners;

        if (bus.get(event)) {
          listeners = bus.get(event);
        } else {
          listeners = [];
          bus.set(event, listeners);
        }

        listeners.push(listener);
        var removeIndex = listeners.length - 1;
        var flag = true;
        return function remove() {
          if (flag) {
            // can only remove once
            listeners.splice(removeIndex, 1);
            flag = false;
          }
        };
      }
    }, {
      key: "emit",
      value: function emit(event) {
        var listeners = this.bus.get(event);
        if (!listeners) return;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;
            if (typeof listener === 'function') Reflect.apply(listener, this, args);
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
      }
    }]);

    return EventEmitter;
  }();

  var _default = EventEmitter;
  _exports["default"] = _default;
  module.exports = exports.default;
});