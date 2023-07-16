"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientInteractor = exports.updateClientInteractor = exports.createClientInteractor = void 0;
var client_facturas_interactor_1 = require("./client_facturas.interactor");
var client_facturas_datasource_1 = require("../../datasource/client_facturas.datasource");
var clientFacturasRepository = new client_facturas_datasource_1.ClientFacturasTypeORM();
exports.createClientInteractor = (0, client_facturas_interactor_1.createClient)(clientFacturasRepository);
exports.updateClientInteractor = (0, client_facturas_interactor_1.updateClient)(clientFacturasRepository);
exports.deleteClientInteractor = (0, client_facturas_interactor_1.deleteClient)(clientFacturasRepository);
