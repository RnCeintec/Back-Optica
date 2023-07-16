"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiotriasypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var dioptrias_1 = require("../entities/dioptrias");
var DiotriasypeORM = (function () {
    function DiotriasypeORM() {
    }
    DiotriasypeORM.prototype.findDiotriasByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).findOne({
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
    DiotriasypeORM.prototype.createDiotrias = function (diotrias) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDiotriasByid(diotrias.id)];
                    case 1:
                        if (_a.sent())
                            throw 'diotriase ya registrado';
                        return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).save(diotrias)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    DiotriasypeORM.prototype.updateDiotrias = function (diotrias) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findDiotriasByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDiotriasByid(diotrias.id)];
                    case 1:
                        findDiotriasByid = _a.sent();
                        if (findDiotriasByid !== undefined && diotrias.id !== findDiotriasByid.id) {
                            throw 'Diotrias no registrada';
                        }
                        return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).save(diotrias)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    DiotriasypeORM.prototype.deleteDiotrias = function (diotrias) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        diotrias.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).save(diotrias)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return DiotriasypeORM;
}());
exports.DiotriasypeORM = DiotriasypeORM;
