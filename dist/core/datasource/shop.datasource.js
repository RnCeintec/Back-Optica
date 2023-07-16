"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var shop_1 = require("../entities/shop");
var ShopTypeORM = (function () {
    function ShopTypeORM() {
    }
    ShopTypeORM.prototype.findShopByUuid = function (nombre) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne({
                                where: { nombre: nombre },
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
    ShopTypeORM.prototype.createShop = function (local) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findShopByUuid(local.nombre)];
                    case 1:
                        if (_a.sent())
                            throw "Local ya registrado";
                        return [4, (0, typeorm_1.getRepository)(shop_1.Shop).save(local)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    ShopTypeORM.prototype.findShop = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne({
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
    ShopTypeORM.prototype.updateShop = function (local) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findShopByUUid, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findShopByUuid(local.nombre)];
                    case 1:
                        findShopByUUid = _a.sent();
                        if (findShopByUUid !== undefined &&
                            local.nombre !== findShopByUUid.nombre)
                            throw "Local no registrado";
                        return [4, (0, typeorm_1.getRepository)(shop_1.Shop).save(local)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 4: return [2];
                }
            });
        });
    };
    ShopTypeORM.prototype.deleteShop = function (local) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        local.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(shop_1.Shop).save(local)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    };
    return ShopTypeORM;
}());
exports.ShopTypeORM = ShopTypeORM;
