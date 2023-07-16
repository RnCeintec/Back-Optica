"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColor = exports.updateColor = exports.createColor = void 0;
var tslib_1 = require("tslib");
var createColor = function (colorRepository) { return function (color) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, colorRepository.createColor(color)];
}); }); }; };
exports.createColor = createColor;
var updateColor = function (colorRepository) { return function (color) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, colorRepository.updateColor(color)];
}); }); }; };
exports.updateColor = updateColor;
var deleteColor = function (colorRepository) { return function (color) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, colorRepository.deleteColor(color)];
}); }); }; };
exports.deleteColor = deleteColor;
