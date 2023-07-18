"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaInventario = exports.createDetalleinventario = exports.createHistorialinventario = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var historialinventario_1 = require("../core/entities/historialinventario");
var detalleinventario_1 = require("../core/entities/detalleinventario");
var inventario_1 = require("../core/interactor/inventario");
var createHistorialinventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, total, totalfaltantes, totalverificados, tienda, Historial_inventario, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, total = _a.total, totalfaltantes = _a.totalfaltantes, totalverificados = _a.totalverificados, tienda = _a.tienda;
                Historial_inventario = new historialinventario_1.Historialinventario();
                Historial_inventario.total = total;
                Historial_inventario.totalfaltantes = totalfaltantes;
                Historial_inventario.totalverificados = totalverificados;
                Historial_inventario.tienda = tienda;
                return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).save(Historial_inventario)];
            case 1:
                result = _c.sent();
                return [2, res.json({ result: result })];
            case 2:
                error_1 = _c.sent();
                throw res.status(500).json({ message: (_b = error_1.message) !== null && _b !== void 0 ? _b : error_1 });
            case 3: return [2];
        }
    });
}); };
exports.createHistorialinventario = createHistorialinventario;
var createDetalleinventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, historialId, monturasId, detalle_inventario, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, historialId = _a.historialId, monturasId = _a.monturasId;
                detalle_inventario = new detalleinventario_1.Detalleinventario();
                detalle_inventario.historialinventario = historialId;
                detalle_inventario.monturas = monturasId;
                return [4, (0, inventario_1.createDetalleinventarioInteractor)(detalle_inventario)];
            case 1:
                result = _c.sent();
                return [2, res.json({ result: result })];
            case 2:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 3: return [2];
        }
    });
}); };
exports.createDetalleinventario = createDetalleinventario;
var listaInventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, tienda, where, tiendas, _b, result, count, error_3;
    var _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 4, , 5]);
                _a = req.query, limit = _a.limit, offset = _a.offset, tienda = _a.tienda;
                where = void 0;
                if (!tienda) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findAndCount({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _d.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas,
                };
                _d.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).findAndCount()];
            case 3:
                _b = _d.sent(), result = _b[0], count = _b[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            pages: 1,
                        })
                        : res.status(404).json({ message: 'No existen Historail Inventarios' })];
            case 4:
                error_3 = _d.sent();
                throw res.status(500).json({ message: (_c = error_3.message) !== null && _c !== void 0 ? _c : error_3 });
            case 5: return [2];
        }
    });
}); };
exports.listaInventario = listaInventario;
