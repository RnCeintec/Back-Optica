"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleinventarioTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var detalleinventario_1 = require("../entities/detalleinventario");
var DetalleinventarioTypeORM = (function () {
    function DetalleinventarioTypeORM() {
    }
    DetalleinventarioTypeORM.prototype.findDetalleinventarioByid = function (iddetalle) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(detalleinventario_1.Detalleinventario).findOne({
                                where: { iddetalle: iddetalle }
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
    DetalleinventarioTypeORM.prototype.createDetalleinventario = function (detalleinventario) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDetalleinventarioByid(detalleinventario.iddetalle)];
                    case 1:
                        if (_a.sent())
                            throw 'Montura ya registrada';
                        return [4, (0, typeorm_1.getRepository)(detalleinventario_1.Detalleinventario).save(detalleinventario)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    DetalleinventarioTypeORM.prototype.updateDetalleinventario = function (detalleinventario) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findDetalleinventarioByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDetalleinventarioByid(detalleinventario.iddetalle)];
                    case 1:
                        findDetalleinventarioByid = _a.sent();
                        if (findDetalleinventarioByid !== undefined && detalleinventario.iddetalle !== findDetalleinventarioByid.iddetalle) {
                            throw 'Historial no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(detalleinventario_1.Detalleinventario).save(detalleinventario)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    return DetalleinventarioTypeORM;
}());
exports.DetalleinventarioTypeORM = DetalleinventarioTypeORM;
