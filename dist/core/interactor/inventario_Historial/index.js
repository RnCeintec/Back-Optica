"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHistorialinventarioInteractor = exports.createHistorialinventarioInteractor = void 0;
var Historialinventario_interactor_1 = require("./Historialinventario.interactor");
var historialinventario_datasource_1 = require("../../datasource/historialinventario.datasource");
var HistorialinventarioRepository = new historialinventario_datasource_1.HistorialinventarioTypeORM();
exports.createHistorialinventarioInteractor = (0, Historialinventario_interactor_1.createHistorialinventario)(HistorialinventarioRepository);
exports.updateHistorialinventarioInteractor = (0, Historialinventario_interactor_1.updateHistorialinventario)(HistorialinventarioRepository);
