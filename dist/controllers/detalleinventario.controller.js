"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDetalleInventario = exports.listaInventario = exports.createHistorialinventario = exports.createDetalleinventario = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var historialinventario_1 = require("../core/entities/historialinventario");
var detalleinventario_1 = require("../core/entities/detalleinventario");
var inventario_1 = require("../core/interactor/inventario");
var createDetalleinventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var datosinventario, resultall, _i, datosinventario_1, datos, detalle_inventario, result, error_1;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                datosinventario = req.body;
                resultall = [];
                _i = 0, datosinventario_1 = datosinventario;
                _b.label = 1;
            case 1:
                if (!(_i < datosinventario_1.length)) return [3, 4];
                datos = datosinventario_1[_i];
                detalle_inventario = new detalleinventario_1.Detalleinventario();
                detalle_inventario.historialinventario = datos.historialId;
                detalle_inventario.monturasId = datos.monturasId;
                return [4, (0, inventario_1.createDetalleinventarioInteractor)(detalle_inventario)];
            case 2:
                result = _b.sent();
                resultall.push(result);
                _b.label = 3;
            case 3:
                _i++;
                return [3, 1];
            case 4: return [2, res.json({ result: resultall })];
            case 5:
                error_1 = _b.sent();
                throw res.status(500).json({ message: (_a = error_1.message) !== null && _a !== void 0 ? _a : error_1 });
            case 6: return [2];
        }
    });
}); };
exports.createDetalleinventario = createDetalleinventario;
var createHistorialinventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, total, totalfaltantes, totalverificados, tienda, Historial_inventario, result, error_2;
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
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 3: return [2];
        }
    });
}); };
exports.createHistorialinventario = createHistorialinventario;
var listaInventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var tienda, where, tiendas, _a, result, count, error_3;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                tienda = req.query.tienda;
                where = {};
                if (!tienda) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _c.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas
                };
                _c.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(historialinventario_1.Historialinventario).findAndCount({
                    where: [
                        where
                    ],
                    relations: ['detalleinv'],
                    order: { fecha: "DESC" }
                })];
            case 3:
                _a = _c.sent(), result = _a[0], count = _a[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            pages: 1
                        })
                        : res.status(404).json({ message: 'No existen Inventarios' })];
            case 4:
                error_3 = _c.sent();
                throw res.status(500).json({ message: (_b = error_3.message) !== null && _b !== void 0 ? _b : error_3 });
            case 5: return [2];
        }
    });
}); };
exports.listaInventario = listaInventario;
var searchDetalleInventario = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var detalle, error_4;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(detalleinventario_1.Detalleinventario).find({ where: { historialinventario: req.params.id } })];
            case 1:
                detalle = _b.sent();
                if (!detalle) {
                    return [2, res.status(404).json({ message: "No existe el detalle" })];
                }
                return [2, res.status(200).json({ result: detalle })];
            case 2:
                error_4 = _b.sent();
                throw res.status(500).json({ message: (_a = error_4.message) !== null && _a !== void 0 ? _a : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.searchDetalleInventario = searchDetalleInventario;
