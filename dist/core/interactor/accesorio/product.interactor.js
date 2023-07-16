"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
var tslib_1 = require("tslib");
var createProduct = function (productRepository) { return function (product) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, productRepository.createProduct(product)];
}); }); }; };
exports.createProduct = createProduct;
var updateProduct = function (productRepository) { return function (product) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, productRepository.updateProduct(product)];
}); }); }; };
exports.updateProduct = updateProduct;
var deleteProduct = function (productRepository) { return function (product) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, productRepository.deleteProduct(product)];
}); }); }; };
exports.deleteProduct = deleteProduct;
