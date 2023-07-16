"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonturasTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var monturas_1 = require("../entities/monturas");
var MonturasTypeORM = (function () {
    function MonturasTypeORM() {
    }
    MonturasTypeORM.prototype.findMonturasByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({
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
    MonturasTypeORM.prototype.createMonturas = function (montura) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findMonturasByid(montura.id)];
                    case 1:
                        if (_a.sent())
                            throw 'Montura ya registrada';
                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).save(montura)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    MonturasTypeORM.prototype.findUser = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({
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
    MonturasTypeORM.prototype.updateMonturas = function (montura) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findMonturasByid, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findMonturasByid(montura.id)];
                    case 1:
                        findMonturasByid = _a.sent();
                        if (findMonturasByid !== undefined && montura.id !== findMonturasByid.id) {
                            throw 'Montura no registrada';
                        }
                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).save(montura)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 4: return [2];
                }
            });
        });
    };
    MonturasTypeORM.prototype.deleteMonturas = function (montura) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        montura.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).save(montura)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    };
    return MonturasTypeORM;
}());
exports.MonturasTypeORM = MonturasTypeORM;
