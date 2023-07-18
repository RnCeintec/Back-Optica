"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialinventarioTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var historialinventario_1 = require("../entities/historialinventario");
var HistorialinventarioTypeORM = (function () {
    function HistorialinventarioTypeORM() {
    }
    HistorialinventarioTypeORM.prototype.findHistorialinventarioByid = function (idhistorial) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).findOne({
                                where: { idhistorial: idhistorial }
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
    HistorialinventarioTypeORM.prototype.createHistorialinventario = function (historialinventario) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findHistorialinventarioByid(historialinventario.idhistorial)];
                    case 1:
                        if (_a.sent())
                            throw 'Montura ya registrada';
                        return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).save(historialinventario)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    HistorialinventarioTypeORM.prototype.updateHistorialinventario = function (historialinventario) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findHistorialinventarioByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findHistorialinventarioByid(historialinventario.idhistorial)];
                    case 1:
                        findHistorialinventarioByid = _a.sent();
                        if (findHistorialinventarioByid !== undefined && historialinventario.idhistorial !== findHistorialinventarioByid.idhistorial) {
                            throw 'Historial no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).save(historialinventario)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    return HistorialinventarioTypeORM;
}());
exports.HistorialinventarioTypeORM = HistorialinventarioTypeORM;
