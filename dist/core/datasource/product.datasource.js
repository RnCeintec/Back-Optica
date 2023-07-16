"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var accesorio_1 = require("../entities/accesorio");
var ProductTypeORM = (function () {
    function ProductTypeORM() {
    }
    ProductTypeORM.prototype.findProductByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne({
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
    ProductTypeORM.prototype.createProduct = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findProductByid(product.id)];
                    case 1:
                        if (_a.sent())
                            throw 'Producto ya registrado';
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).save(product)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    ProductTypeORM.prototype.findUser = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne({
                                where: { id: true },
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2];
                }
            });
        });
    };
    ProductTypeORM.prototype.updateProduct = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findProductByid, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findProductByid(product.id)];
                    case 1:
                        findProductByid = _a.sent();
                        if (findProductByid !== undefined && product.id !== findProductByid.id) {
                            throw 'Producto no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).save(product)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 4: return [2];
                }
            });
        });
    };
    ProductTypeORM.prototype.deleteProduct = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        product.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).save(product)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    };
    return ProductTypeORM;
}());
exports.ProductTypeORM = ProductTypeORM;
