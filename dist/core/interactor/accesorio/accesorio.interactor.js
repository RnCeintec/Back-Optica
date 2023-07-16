"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccesorio = exports.updateAccesorio = exports.createAccesorio = void 0;
var tslib_1 = require("tslib");
var createAccesorio = function (accesorioRepository) { return function (accesorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, accesorioRepository.createProduct(accesorio)];
}); }); }; };
exports.createAccesorio = createAccesorio;
var updateAccesorio = function (accesorioRepository) { return function (accesorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, accesorioRepository.updateProduct(accesorio)];
}); }); }; };
exports.updateAccesorio = updateAccesorio;
var deleteAccesorio = function (accesorioRepository) { return function (accesorio) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, accesorioRepository.deleteProduct(accesorio)];
}); }); }; };
exports.deleteAccesorio = deleteAccesorio;
