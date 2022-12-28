"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traerPorUsuario = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _publicacionesTypes = require("../types/publicacionesTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var traerPorUsuario = function traerPorUsuario(key) {
  return function _callee(dispatch, getState) {
    var usuarios, publicaciones, usuario_id, respuesta, publicaciones_actualizadas;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usuarios = getState().usuariosReductor.usuarios;
            publicaciones = getState().publicacionesReductor.publicaciones;
            console.log(publicaciones);
            console.log(publicaciones);
            usuario_id = usuarios[key].id;
            _context.next = 7;
            return regeneratorRuntime.awrap(_axios["default"].get("http://jsonplaceholder.typicode.com/posts?userId=".concat(usuario_id)));

          case 7:
            respuesta = _context.sent;
            publicaciones_actualizadas = [].concat(_toConsumableArray(publicaciones), [respuesta.data]);
            dispatch({
              type: _publicacionesTypes.TRAER_POR_USUARIO,
              payload: publicaciones_actualizadas
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.traerPorUsuario = traerPorUsuario;