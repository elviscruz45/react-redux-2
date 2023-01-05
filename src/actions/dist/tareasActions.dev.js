"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traerTodas = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _tareasTypes = require("../types/tareasTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var traerTodas = function traerTodas() {
  return function _callee(dispatch) {
    var respuesta, tareas;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _tareasTypes.CARGANDO
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("https://jsonplaceholder.typicode.com/todos"));

          case 4:
            respuesta = _context.sent;
            tareas = {};
            respuesta.data.map(function (tar) {
              return tareas[tar.userId] = _objectSpread({}, tareas[tar.userId], _defineProperty({}, tar.id, _objectSpread({}, tar)));
            });
            dispatch({
              type: _tareasTypes.TRAER_TODAS,
              payload: tareas
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log("ERROR:", _context.t0.message);
            dispatch({
              type: _tareasTypes.ERROR,
              payload: "Informacion de tareas no disponible"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

exports.traerTodas = traerTodas;