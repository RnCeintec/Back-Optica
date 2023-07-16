"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendedor = exports.updateVendedor = exports.createVendedor = void 0;
var tslib_1 = require("tslib");
var createVendedor = function (vendedorRepository) { return function (vendedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, vendedorRepository.createVendedor(vendedor)];
}); }); }; };
exports.createVendedor = createVendedor;
var updateVendedor = function (vendedorRepository) { return function (vendedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, vendedorRepository.updateVendedor(vendedor)];
}); }); }; };
exports.updateVendedor = updateVendedor;
var deleteVendedor = function (vendedorRepository) { return function (vendedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, vendedorRepository.deleteVendedor(vendedor)];
}); }); }; };
exports.deleteVendedor = deleteVendedor;
