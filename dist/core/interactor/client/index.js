"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientInteractor = exports.updateClientInteractor = exports.createClientInteractor = void 0;
var client_interactor_1 = require("./client.interactor");
var client_datasource_1 = require("../../datasource/client.datasource");
var clientRepository = new client_datasource_1.ClientTypeORM();
exports.createClientInteractor = (0, client_interactor_1.createClient)(clientRepository);
exports.updateClientInteractor = (0, client_interactor_1.updateClient)(clientRepository);
exports.deleteClientInteractor = (0, client_interactor_1.deleteClient)(clientRepository);
