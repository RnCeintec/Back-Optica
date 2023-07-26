"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaHistorialmovimiento = exports.createHistorialmovimientoTienda = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var monturas_1 = require("../core/entities/monturas");
var historialmovimiento_1 = require("../core/entities/historialmovimiento");
var monturas_2 = require("../core/interactor/monturas");
var createHistorialmovimientoTienda = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, monturasId, tiendaId, comentario, montura, Historial_movimiento, result0, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, monturasId = _a.monturasId, tiendaId = _a.tiendaId, comentario = _a.comentario;
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne(monturasId)];
            case 1:
                montura = _c.sent();
                if (!montura) {
                    return [2, res.status(404).json({ message: "Dede enviar id de la montura" })];
                }
                Historial_movimiento = new historialmovimiento_1.Historialmovimiento();
                Historial_movimiento.monturasId = monturasId;
                Historial_movimiento.tiendaId = tiendaId;
                Historial_movimiento.indicador = "TRASLADO";
                Historial_movimiento.comentario = comentario;
                return [4, (0, typeorm_1.getRepository)(historialmovimiento_1.Historialmovimiento).save(Historial_movimiento)];
            case 2:
                result0 = _c.sent();
                montura.tienda = tiendaId !== null && tiendaId !== void 0 ? tiendaId : montura.tienda;
                return [4, (0, monturas_2.updateMonturasInteractor)(montura)];
            case 3:
                result = _c.sent();
                return [2, res.json({ result0: result0, result: result })];
            case 4:
                error_1 = _c.sent();
                throw res.status(500).json({ message: (_b = error_1.message) !== null && _b !== void 0 ? _b : error_1 });
            case 5: return [2];
        }
    });
}); };
exports.createHistorialmovimientoTienda = createHistorialmovimientoTienda;
var listaHistorialmovimiento = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var where, _a, result, count, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                where = {};
                return [4, (0, typeorm_1.getRepository)(historialmovimiento_1.Historialmovimiento).findAndCount({
                        where: [
                            where
                        ]
                    })];
            case 1:
                _a = _c.sent(), result = _a[0], count = _a[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            pages: 1
                        })
                        : res.status(404).json({ message: 'No existen Inventarios' })];
            case 2:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 3: return [2];
        }
    });
}); };
exports.listaHistorialmovimiento = listaHistorialmovimiento;
