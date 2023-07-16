"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
var tslib_1 = require("tslib");
var createCategory = function (categoryRepository) { return function (category) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, categoryRepository.createCategory(category)];
}); }); }; };
exports.createCategory = createCategory;
var updateCategory = function (categoryRepository) { return function (category) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, categoryRepository.updateCategory(category)];
}); }); }; };
exports.updateCategory = updateCategory;
var deleteCategory = function (categoryRepository) { return function (category) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, categoryRepository.deleteCategory(category)];
}); }); }; };
exports.deleteCategory = deleteCategory;
