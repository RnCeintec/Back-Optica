"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendedorTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var vendedor_1 = require("../entities/vendedor");
var VendedorTypeORM = (function () {
    function VendedorTypeORM() {
    }
    VendedorTypeORM.prototype.findVendedorByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findOne({
                                where: { id: id },
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
    VendedorTypeORM.prototype.createVendedor = function (vendedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findVendedorByid(vendedor.id)];
                    case 1:
                        if (_a.sent())
                            throw "Vendedor ya registrado";
                        return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).save(vendedor)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    VendedorTypeORM.prototype.updateVendedor = function (vendedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findVendedorByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findVendedorByid(vendedor.id)];
                    case 1:
                        findVendedorByid = _a.sent();
                        if (findVendedorByid !== undefined &&
                            vendedor.id !== findVendedorByid.id) {
                            throw "Vendedor no registrado";
                        }
                        return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).save(vendedor)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    VendedorTypeORM.prototype.deleteVendedor = function (vendedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        vendedor.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).save(vendedor)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return VendedorTypeORM;
}());
exports.VendedorTypeORM = VendedorTypeORM;
