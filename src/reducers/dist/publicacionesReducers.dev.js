"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicacionesReductor = void 0;

var _publicacionesTypes = require("../types/publicacionesTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: ""
};

var publicacionesReductor = function publicacionesReductor() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _publicacionesTypes.ACTUALIZAR:
      return _objectSpread({}, state, {
        publicaciones: action.payload,
        cargando: false,
        error: ""
      });

    case _publicacionesTypes.CARGANDO:
      return _objectSpread({}, state, {
        cargando: true
      });

    case _publicacionesTypes.ERROR:
      return _objectSpread({}, state, {
        error: action.payload,
        cargando: false
      });

    default:
      return state;
  }

  ;
};

exports.publicacionesReductor = publicacionesReductor;