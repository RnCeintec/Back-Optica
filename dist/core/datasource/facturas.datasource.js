"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var facturas_1 = require("../entities/facturas");
var FacturasTypeORM = (function () {
    function FacturasTypeORM() {
    }
    FacturasTypeORM.prototype.findFacturaByUuid = function (codigo_anulado) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existe, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).findOne({
                                where: { codigo_anulado: (0, typeorm_1.Like)("%".concat(codigo_anulado, "%")) },
                            })];
                    case 1:
                        existe = _a.sent();
                        return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).findOne({
                                where: { codigo_anulado: (0, typeorm_1.Like)("%".concat(codigo_anulado, "%")) },
                            })];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 4: return [2];
                }
            });
        });
    };
    FacturasTypeORM.prototype.anularFactura = function (factura) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findFacturaByUuid(factura.codigo_anulado)];
                    case 1:
                        if (_a.sent())
                            throw "Comprobante ya fue anulado";
                        return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).save(factura)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    return FacturasTypeORM;
}());
exports.FacturasTypeORM = FacturasTypeORM;
