"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMonturas = exports.updateMonturas = exports.createMonturas = void 0;
var tslib_1 = require("tslib");
var createMonturas = function (monturasRepository) { return function (monturas) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, monturasRepository.createMonturas(monturas)];
}); }); }; };
exports.createMonturas = createMonturas;
var updateMonturas = function (monturasRepository) { return function (monturas) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, monturasRepository.updateMonturas(monturas)];
}); }); }; };
exports.updateMonturas = updateMonturas;
var deleteMonturas = function (monturasRepository) { return function (monturas) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, monturasRepository.deleteMonturas(monturas)];
}); }); }; };
exports.deleteMonturas = deleteMonturas;
