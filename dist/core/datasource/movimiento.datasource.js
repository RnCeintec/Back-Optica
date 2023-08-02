"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var movimiento_1 = require("../entities/movimiento");
var MovimientoTypeORM = (function () {
    function MovimientoTypeORM() {
    }
    MovimientoTypeORM.prototype.findMovimientoByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findOne({
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
    MovimientoTypeORM.prototype.createMovimiento = function (movimiento) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findMovimientoByid(movimiento.id)];
                    case 1:
                        if (_a.sent())
                            throw 'Movimiento ya registrado';
                        return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).save(movimiento)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    MovimientoTypeORM.prototype.updateMovimiento = function (movimiento) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findMovimientoByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findMovimientoByid(movimiento.id)];
                    case 1:
                        findMovimientoByid = _a.sent();
                        if (findMovimientoByid !== undefined && movimiento.id !== findMovimientoByid.id) {
                            throw 'Historial no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).save(movimiento)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    return MovimientoTypeORM;
}());
exports.MovimientoTypeORM = MovimientoTypeORM;
