"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLaboratorioInteractor = exports.updateLaboratorioInteractor = exports.createLaboratorioInteractor = void 0;
var laboratorio_interactor_1 = require("./laboratorio.interactor");
var laboratorio_datasource_1 = require("../../datasource/laboratorio.datasource");
var laboratorioRepository = new laboratorio_datasource_1.LaboratorioTypeORM();
exports.createLaboratorioInteractor = (0, laboratorio_interactor_1.createLaboratorio)(laboratorioRepository);
exports.updateLaboratorioInteractor = (0, laboratorio_interactor_1.updateLaboratorio)(laboratorioRepository);
exports.deleteLaboratorioInteractor = (0, laboratorio_interactor_1.deleteLaboratorio)(laboratorioRepository);
