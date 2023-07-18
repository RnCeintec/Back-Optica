"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDetalleinventarioInteractor = exports.createDetalleinventarioInteractor = void 0;
var Detalleinventario_interactor_1 = require("./Detalleinventario.interactor");
var detalleinventario_datasource_1 = require("../../datasource/detalleinventario.datasource");
var DetalleinventarioRepository = new detalleinventario_datasource_1.DetalleinventarioTypeORM();
exports.createDetalleinventarioInteractor = (0, Detalleinventario_interactor_1.createDetalleinventario)(DetalleinventarioRepository);
exports.updateDetalleinventarioInteractor = (0, Detalleinventario_interactor_1.updateDetalleinventario)(DetalleinventarioRepository);
