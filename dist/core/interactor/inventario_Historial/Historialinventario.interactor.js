"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHistorialinventario = exports.createHistorialinventario = void 0;
var tslib_1 = require("tslib");
var createHistorialinventario = function (historialinventarioRepository) { return function (historialinventario) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, historialinventarioRepository.createHistorialinventario(historialinventario)];
}); }); }; };
exports.createHistorialinventario = createHistorialinventario;
var updateHistorialinventario = function (historialinventarioRepository) { return function (historialinventario) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, historialinventarioRepository.updateHistorialinventario(historialinventario)];
}); }); }; };
exports.updateHistorialinventario = updateHistorialinventario;
