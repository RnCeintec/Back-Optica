"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendedorInteractor = exports.updateVendedorInteractor = exports.createVendedorInteractor = void 0;
var vendedor_interactor_1 = require("./vendedor.interactor");
var vendedor_datasource_1 = require("../../datasource/vendedor.datasource");
var vendedorRepository = new vendedor_datasource_1.VendedorTypeORM();
exports.createVendedorInteractor = (0, vendedor_interactor_1.createVendedor)(vendedorRepository);
exports.updateVendedorInteractor = (0, vendedor_interactor_1.updateVendedor)(vendedorRepository);
exports.deleteVendedorInteractor = (0, vendedor_interactor_1.deleteVendedor)(vendedorRepository);
