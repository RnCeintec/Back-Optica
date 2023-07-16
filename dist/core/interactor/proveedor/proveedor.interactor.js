"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProveedor = exports.updateProveedor = exports.createProveedor = void 0;
var tslib_1 = require("tslib");
var createProveedor = function (proveedorRepository) { return function (proveedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, proveedorRepository.createProveedor(proveedor)];
}); }); }; };
exports.createProveedor = createProveedor;
var updateProveedor = function (proveedorRepository) { return function (proveedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, proveedorRepository.updateProveedor(proveedor)];
}); }); }; };
exports.updateProveedor = updateProveedor;
var deleteProveedor = function (proveedorRepository) { return function (proveedor) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, proveedorRepository.deleteProveedor(proveedor)];
}); }); }; };
exports.deleteProveedor = deleteProveedor;
