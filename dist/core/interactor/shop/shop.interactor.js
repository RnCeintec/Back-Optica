"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShop = exports.updateShop = exports.createShop = void 0;
var tslib_1 = require("tslib");
var createShop = function (ShopRepository) { return function (shop) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, ShopRepository.createShop(shop)];
}); }); }; };
exports.createShop = createShop;
var updateShop = function (ShopRepository) { return function (shop) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, ShopRepository.updateShop(shop)];
}); }); }; };
exports.updateShop = updateShop;
var deleteShop = function (ShopRepository) { return function (shop) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, ShopRepository.deleteShop(shop)];
}); }); }; };
exports.deleteShop = deleteShop;
