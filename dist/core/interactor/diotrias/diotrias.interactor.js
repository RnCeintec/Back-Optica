"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDiotrias = exports.updateDiotrias = exports.createDiotrias = void 0;
var tslib_1 = require("tslib");
var createDiotrias = function (diotriasRepository) { return function (diotrias) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, diotriasRepository.createDiotrias(diotrias)];
}); }); }; };
exports.createDiotrias = createDiotrias;
var updateDiotrias = function (diotriasRepository) { return function (diotrias) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, diotriasRepository.updateDiotrias(diotrias)];
}); }); }; };
exports.updateDiotrias = updateDiotrias;
var deleteDiotrias = function (diotriasRepository) { return function (diotrias) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, diotriasRepository.deleteDiotrias(diotrias)];
}); }); }; };
exports.deleteDiotrias = deleteDiotrias;
