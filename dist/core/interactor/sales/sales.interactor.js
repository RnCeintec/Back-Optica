"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSales = exports.updateSales = exports.validateStock = exports.createDetailSales = exports.createSales = void 0;
var tslib_1 = require("tslib");
var createSales = function (salesRepository) { return function (sales) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, salesRepository.createSales(sales)];
}); }); }; };
exports.createSales = createSales;
var createDetailSales = function (salesRepository) {
    return function (productos, result) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2, salesRepository.createDetailSales(productos, result)];
    }); }); };
};
exports.createDetailSales = createDetailSales;
var validateStock = function (salesRepository) {
    return function (_a) {
        var productos = _a.productos;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, salesRepository.validateStock({ productos: productos })];
                case 1: return [2, _b.sent()];
            }
        }); });
    };
};
exports.validateStock = validateStock;
var updateSales = function (salesRepository) { return function (sales) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, salesRepository.updateSales(sales)];
}); }); }; };
exports.updateSales = updateSales;
var deleteSales = function (salesRepository) { return function (sales) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, salesRepository.deleteSales(sales)];
}); }); }; };
exports.deleteSales = deleteSales;
