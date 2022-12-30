"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abrirCerrar = exports.traerPorUsuario = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _publicacionesTypes = require("../types/publicacionesTypes");

var usuariosTypes = _interopRequireWildcard(require("../types/usuariosTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var USUARIOS_TRAER_TODOS = usuariosTypes.TRAER_TODOS;

var traerPorUsuario = function traerPorUsuario(key) {
  return function _callee(dispatch, getState) {
    var usuarios, publicaciones, usuario_id, respuesta, nuevas, publicaciones_actualizadas, publicaciones_key, usuarios_actualizados;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _publicacionesTypes.CARGANDO
            });
            usuarios = getState().usuariosReductor.usuarios;
            publicaciones = getState().publicacionesReductor.publicaciones;
            usuario_id = usuarios[key].id;
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap(_axios["default"].get("http://jsonplaceholder.typicode.com/posts?userId=".concat(usuario_id)));

          case 7:
            respuesta = _context.sent;
            console.log(respuesta);
            nuevas = respuesta.data.map(function (publicacion) {
              return _objectSpread({}, publicacion, {
                comentarios: [],
                abierto: false
              });
            });
            publicaciones_actualizadas = [].concat(_toConsumableArray(publicaciones), [nuevas]);
            dispatch({
              type: _publicacionesTypes.ACTUALIZAR,
              payload: publicaciones_actualizadas
            });
            publicaciones_key = publicaciones_actualizadas.length - 1;
            usuarios_actualizados = _toConsumableArray(usuarios);
            usuarios_actualizados[key] = _objectSpread({}, usuarios[key], {
              publicaciones_key: publicaciones_key
            });
            dispatch({
              type: USUARIOS_TRAER_TODOS,
              payload: usuarios_actualizados
            });
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0.message);
            dispatch({
              type: _publicacionesTypes.ERROR,
              payload: "publicaciones no disponibles"
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 18]]);
  };
};

exports.traerPorUsuario = traerPorUsuario;

var abrirCerrar = function abrirCerrar(pub_key, com_key) {
  return function (dispatch, getState) {
    var publicaciones = getState().publicacionesReductor.publicaciones;
    var seleccionada = publicaciones[pub_key][com_key];
    console.log(publicaciones);

    var actualizada = _objectSpread({}, seleccionada, {
      abierto: !seleccionada.abierto
    });

    console.log(actualizada);

    var publicaciones_actualizadas = _toConsumableArray(publicaciones);

    publicaciones_actualizadas[pub_key] = _toConsumableArray(publicaciones[pub_key]);
    publicaciones_actualizadas[pub_key][com_key] = actualizada;
    dispatch({
      type: _publicacionesTypes.ACTUALIZAR,
      payload: publicaciones_actualizadas
    });
  };
};

exports.abrirCerrar = abrirCerrar;