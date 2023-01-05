"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tareasReductor = void 0;

var _tareasTypes = require("../types/tareasTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  usuario_id: "",
  titulo: "",
  regresar: false
};

var tareasReductor = function tareasReductor() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _tareasTypes.TRAER_TODAS:
      return _objectSpread({}, state, {
        tareas: action.payload,
        cargando: false,
        error: "",
        regresar: false
      });

    case _tareasTypes.CARGANDO:
      return _objectSpread({}, state, {
        cargando: true
      });

    case _tareasTypes.ERROR:
      return _objectSpread({}, state, {
        error: action.payload,
        cargando: false
      });

    case _tareasTypes.CAMBIO_USUARIO_ID:
      return _objectSpread({}, state, {
        usuario_id: action.payload
      });

    case _tareasTypes.CAMBIO_TITULO:
      return _objectSpread({}, state, {
        titulo: action.payload
      });

    case _tareasTypes.AGREGADA:
      return _objectSpread({}, state, {
        tareas: {},
        cargando: false,
        error: "",
        regresar: true,
        usuario_id: "",
        titulo: ""
      });

    default:
      return state;
  }

  ;
};

exports.tareasReductor = tareasReductor;