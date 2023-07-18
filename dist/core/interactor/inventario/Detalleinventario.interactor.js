"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDetalleinventario = exports.createDetalleinventario = void 0;
var tslib_1 = require("tslib");
var createDetalleinventario = function (detalleinventarioRepository) { return function (detalleinventario) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, detalleinventarioRepository.createDetalleinventario(detalleinventario)];
}); }); }; };
exports.createDetalleinventario = createDetalleinventario;
var updateDetalleinventario = function (detalleinventarioRepository) { return function (detalleinventario) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, detalleinventarioRepository.updateDetalleinventario(detalleinventario)];
}); }); }; };
exports.updateDetalleinventario = updateDetalleinventario;
