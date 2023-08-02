"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleMovimientoTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var detallemovimiento_1 = require("../entities/detallemovimiento");
var DetalleMovimientoTypeORM = (function () {
    function DetalleMovimientoTypeORM() {
    }
    DetalleMovimientoTypeORM.prototype.findDetalleMovimientoByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(detallemovimiento_1.DetalleMovimiento).findOne({
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
    DetalleMovimientoTypeORM.prototype.createDetalleMovimiento = function (detallemovimiento) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDetalleMovimientoByid(detallemovimiento.id)];
                    case 1:
                        if (_a.sent())
                            throw 'DetalleMovimiento ya registrado';
                        return [4, (0, typeorm_1.getRepository)(detallemovimiento_1.DetalleMovimiento).save(detallemovimiento)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    DetalleMovimientoTypeORM.prototype.updateDetalleMovimiento = function (detallemovimiento) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findDetalleMovimientoByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findDetalleMovimientoByid(detallemovimiento.id)];
                    case 1:
                        findDetalleMovimientoByid = _a.sent();
                        if (findDetalleMovimientoByid !== undefined && detallemovimiento.id !== findDetalleMovimientoByid.id) {
                            throw 'Historial no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(detallemovimiento_1.DetalleMovimiento).save(detallemovimiento)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    return DetalleMovimientoTypeORM;
}());
exports.DetalleMovimientoTypeORM = DetalleMovimientoTypeORM;
