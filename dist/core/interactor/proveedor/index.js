"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProveedorInteractor = exports.updateProveedorInteractor = exports.createProveedorInteractor = void 0;
var proveedor_interactor_1 = require("./proveedor.interactor");
var proveedor_datasource_1 = require("../../datasource/proveedor.datasource");
var proveedorRepository = new proveedor_datasource_1.ProveedorTypeORM();
exports.createProveedorInteractor = (0, proveedor_interactor_1.createProveedor)(proveedorRepository);
exports.updateProveedorInteractor = (0, proveedor_interactor_1.updateProveedor)(proveedorRepository);
exports.deleteProveedorInteractor = (0, proveedor_interactor_1.deleteProveedor)(proveedorRepository);
