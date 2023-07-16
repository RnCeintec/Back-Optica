"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anularFacturaInteractor = void 0;
var facturas_interactor_1 = require("./facturas.interactor");
var facturas_datasource_1 = require("../../datasource/facturas.datasource");
var facturaRepository = new facturas_datasource_1.FacturasTypeORM();
exports.anularFacturaInteractor = (0, facturas_interactor_1.anularFactura)(facturaRepository);
