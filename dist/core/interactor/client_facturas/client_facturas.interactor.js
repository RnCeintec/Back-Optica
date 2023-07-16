"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = void 0;
var tslib_1 = require("tslib");
var createClient = function (clientRepository) { return function (client) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, clientRepository.createClient(client)];
}); }); }; };
exports.createClient = createClient;
var updateClient = function (clientRepository) { return function (client) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, clientRepository.updateClient(client)];
}); }); }; };
exports.updateClient = updateClient;
var deleteClient = function (clientRepository) { return function (client) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, clientRepository.deleteClient(client)];
}); }); }; };
exports.deleteClient = deleteClient;
