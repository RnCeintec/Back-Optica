"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDiotriasInteractor = exports.updateDiotriasInteractor = exports.createDiotriasInteractor = void 0;
var diotrias_interactor_1 = require("./diotrias.interactor");
var diotrias_datasource_1 = require("../../datasource/diotrias.datasource");
var diotriasRepository = new diotrias_datasource_1.DiotriasypeORM();
exports.createDiotriasInteractor = (0, diotrias_interactor_1.createDiotrias)(diotriasRepository);
exports.updateDiotriasInteractor = (0, diotrias_interactor_1.updateDiotrias)(diotriasRepository);
exports.deleteDiotriasInteractor = (0, diotrias_interactor_1.deleteDiotrias)(diotriasRepository);
