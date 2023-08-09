"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMovimientop = exports.createmovimientop = exports.listamovimientop = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var entities_2 = require("../core/entities");
var movimientop_1 = require("../core/entities/movimientop");
var detallemovimientop_1 = require("../core/entities/detallemovimientop");
var utils_1 = require("../utils");
var accesorio_1 = require("../core/interactor/accesorio");
var listamovimientop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, tienda, hateoas, take, skip, where, tiendas, _b, result, count, _c, result, count, _d, hateoasLink, pages, error_1;
    var _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 7, , 8]);
                _a = req.query, limit = _a.limit, offset = _a.offset, tienda = _a.tienda;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = {};
                if (!(tienda != "")) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda },
                    })];
            case 1:
                tiendas = _f.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas
                };
                _f.label = 2;
            case 2:
                if (!(tienda != "")) return [3, 4];
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where)
                        ],
                        relations: ['tienda',],
                        order: { fecha: "DESC" }
                    })];
            case 3:
                _b = _f.sent(), result = _b[0], count = _b[1];
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({}, where)
                    ],
                    relations: ['tienda'],
                    order: { fecha: "DESC" }
                })];
            case 5:
                _c = _f.sent(), result = _c[0], count = _c[1];
                _f.label = 6;
            case 6:
                _d = hateoas.hateoas({ count: count }), hateoasLink = _d[0], pages = _d[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen movimientos' })];
            case 7:
                error_1 = _f.sent();
                throw res.status(500).json({ message: (_e = error_1.message) !== null && _e !== void 0 ? _e : error_1 });
            case 8: return [2];
        }
    });
}); };
exports.listamovimientop = listamovimientop;
var createmovimientop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, productosmovimiento, responsable, resultall, movimientop, result0, _i, productosmovimiento_1, datos, accesoriodata, detalle_movimientop, result, total, result2, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 8, , 9]);
                _a = req.body, productosmovimiento = _a.productosmovimiento, responsable = _a.responsable;
                resultall = [];
                movimientop = new movimientop_1.MovimientoP();
                movimientop.estado = "pendiente";
                movimientop.tiendaId = responsable;
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).save(movimientop)];
            case 1:
                result0 = _c.sent();
                _i = 0, productosmovimiento_1 = productosmovimiento;
                _c.label = 2;
            case 2:
                if (!(_i < productosmovimiento_1.length)) return [3, 7];
                datos = productosmovimiento_1[_i];
                return [4, (0, typeorm_1.getRepository)(entities_2.Accesorio).findOne(datos.accesorioId)];
            case 3:
                accesoriodata = _c.sent();
                if (!accesoriodata) {
                    return [2, res.status(404).json({ message: "Dede enviar id de la montura" })];
                }
                detalle_movimientop = new detallemovimientop_1.DetalleMovimientoP();
                detalle_movimientop.movimientoId = result0.id;
                detalle_movimientop.accesorioId = datos.accesorioId;
                detalle_movimientop.tiendaId = responsable;
                detalle_movimientop.cantidad = datos.cantidad;
                return [4, (0, typeorm_1.getRepository)(detallemovimientop_1.DetalleMovimientoP).save(detalle_movimientop)];
            case 4:
                result = _c.sent();
                total = accesoriodata.stock - datos.cantidad;
                accesoriodata.stock = total;
                return [4, (0, accesorio_1.updateProductInteractor)(accesoriodata)];
            case 5:
                result2 = _c.sent();
                resultall.push(result);
                _c.label = 6;
            case 6:
                _i++;
                return [3, 2];
            case 7: return [2, res.json({ result: resultall })];
            case 8:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 9: return [2];
        }
    });
}); };
exports.createmovimientop = createmovimientop;
var searchMovimientop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var movimientop, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findOne({ where: { id: req.params.id }, relations: ['tienda', 'detallesmovimientop'] })];
            case 1:
                movimientop = _b.sent();
                if (!movimientop) {
                    return [2, res.status(404).json({ message: "No existe movimiento" })];
                }
                return [2, res.status(200).json({ result: movimientop })];
            case 2:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 3: return [2];
        }
    });
}); };
exports.searchMovimientop = searchMovimientop;
