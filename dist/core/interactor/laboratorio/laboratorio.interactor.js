"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLaboratorio = exports.updateLaboratorio = exports.createLaboratorio = void 0;
var tslib_1 = require("tslib");
var createLaboratorio = function (laboratorioRepository) {
    return function (laboratorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2, laboratorioRepository.createLaboratorio(laboratorio)];
    }); }); };
};
exports.createLaboratorio = createLaboratorio;
var updateLaboratorio = function (laboratorioRepository) {
    return function (laboratorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2, laboratorioRepository.updateLaboratorio(laboratorio)];
    }); }); };
};
exports.updateLaboratorio = updateLaboratorio;
var deleteLaboratorio = function (laboratorioRepository) {
    return function (laboratorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2, laboratorioRepository.deleteLaboratorio(laboratorio)];
    }); }); };
};
exports.deleteLaboratorio = deleteLaboratorio;
