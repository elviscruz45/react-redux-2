"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _usuariosReducers = require("./usuariosReducers");

var _publicacionesReducers = require("./publicacionesReducers");

var _tareasReducer = require("./tareasReducer");

var _default = (0, _redux.combineReducers)({
  usuariosReductor: _usuariosReducers.usuariosReductor,
  publicacionesReductor: _publicacionesReducers.publicacionesReductor,
  tareasReductor: _tareasReducer.tareasReductor
});

exports["default"] = _default;