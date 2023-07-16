"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratorioTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var laboratorio_1 = require("../entities/laboratorio");
var LaboratorioTypeORM = (function () {
    function LaboratorioTypeORM() {
    }
    LaboratorioTypeORM.prototype.findLaboratorioByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findOne({
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
    LaboratorioTypeORM.prototype.createLaboratorio = function (laboratorio) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findLaboratorioByid(laboratorio.id)];
                    case 1:
                        if (_a.sent())
                            throw "Laboratorio ya registrado";
                        return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).save(laboratorio)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    LaboratorioTypeORM.prototype.updateLaboratorio = function (laboratorio) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findLaboratorioByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findLaboratorioByid(laboratorio.id)];
                    case 1:
                        findLaboratorioByid = _a.sent();
                        if (findLaboratorioByid !== undefined &&
                            laboratorio.id !== findLaboratorioByid.id) {
                            throw "Laboratorio no registrado";
                        }
                        return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).save(laboratorio)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    LaboratorioTypeORM.prototype.deleteLaboratorio = function (laboratorio) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        laboratorio.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).save(laboratorio)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return LaboratorioTypeORM;
}());
exports.LaboratorioTypeORM = LaboratorioTypeORM;
