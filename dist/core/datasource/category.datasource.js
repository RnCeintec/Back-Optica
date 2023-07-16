"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var category_1 = require("../entities/category");
var CategoryTypeORM = (function () {
    function CategoryTypeORM() {
    }
    CategoryTypeORM.prototype.findCategoryByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(category_1.Category).findOne({
                                where: { id: id }
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2];
                }
            });
        });
    };
    CategoryTypeORM.prototype.createCategory = function (category) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findCategoryByid(category.id)];
                    case 1:
                        if (_a.sent())
                            throw 'Producto ya registrado';
                        return [4, (0, typeorm_1.getRepository)(category_1.Category).save(category)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    CategoryTypeORM.prototype.updateCategory = function (category) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findCategoryByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findCategoryByid(category.id)];
                    case 1:
                        findCategoryByid = _a.sent();
                        if (findCategoryByid !== undefined && category.id !== findCategoryByid.id) {
                            throw 'Categoria no registrada';
                        }
                        return [4, (0, typeorm_1.getRepository)(category_1.Category).save(category)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    CategoryTypeORM.prototype.deleteCategory = function (category) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        category.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(category_1.Category).save(category)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return CategoryTypeORM;
}());
exports.CategoryTypeORM = CategoryTypeORM;
