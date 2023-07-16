"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMonturasInteractor = exports.updateMonturasInteractor = exports.createMonturasInteractor = void 0;
var monturas_interactor_1 = require("./monturas.interactor");
var monturas_datasource_1 = require("../../datasource/monturas.datasource");
var monturasRepository = new monturas_datasource_1.MonturasTypeORM();
exports.createMonturasInteractor = (0, monturas_interactor_1.createMonturas)(monturasRepository);
exports.updateMonturasInteractor = (0, monturas_interactor_1.updateMonturas)(monturasRepository);
exports.deleteMonturasInteractor = (0, monturas_interactor_1.deleteMonturas)(monturasRepository);
