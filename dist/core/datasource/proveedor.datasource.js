"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var proveedor_1 = require("../entities/proveedor");
var ProveedorTypeORM = (function () {
    function ProveedorTypeORM() {
    }
    ProveedorTypeORM.prototype.findProveedorByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).findOne({
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
    ProveedorTypeORM.prototype.createProveedor = function (proveedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findProveedorByid(proveedor.id)];
                    case 1:
                        if (_a.sent())
                            throw "Proveedor ya registrado";
                        return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).save(proveedor)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    ProveedorTypeORM.prototype.updateProveedor = function (proveedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findProveedorByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findProveedorByid(proveedor.id)];
                    case 1:
                        findProveedorByid = _a.sent();
                        if (findProveedorByid !== undefined &&
                            proveedor.id !== findProveedorByid.id) {
                            throw "Proveedor no registrado";
                        }
                        return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).save(proveedor)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    ProveedorTypeORM.prototype.deleteProveedor = function (proveedor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        proveedor.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).save(proveedor)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return ProveedorTypeORM;
}());
exports.ProveedorTypeORM = ProveedorTypeORM;
