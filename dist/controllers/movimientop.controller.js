"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listmovimientoventasp = exports.recibirMovimientop = exports.deleteMovimientop = exports.searchMovimientop = exports.createmovimientop = exports.listamovimientop = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var entities_2 = require("../core/entities");
var movimientop_1 = require("../core/entities/movimientop");
var detallemovimientop_1 = require("../core/entities/detallemovimientop");
var utils_1 = require("../utils");
var accesorio_1 = require("../core/interactor/accesorio");
var entities_3 = require("../core/entities");
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
var deleteMovimientop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var movimientop, _i, _a, detalle, producto, total, result0, result2, result, error_4;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 9, , 10]);
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findOne({ where: { id: req.params.id }, relations: ['detallesmovimientop'] })];
            case 1:
                movimientop = _c.sent();
                if (!movimientop) {
                    return [2, res.status(404).json({ message: "No existe movimiento" })];
                }
                _i = 0, _a = movimientop.detallesmovimientop;
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3, 7];
                detalle = _a[_i];
                return [4, (0, typeorm_1.getRepository)(entities_2.Accesorio).findOne({ where: { id: detalle.accesorioId } })];
            case 3:
                producto = _c.sent();
                if (!producto) {
                    return [2, res.status(404).json({ message: "No existe montura" })];
                }
                total = producto.stock + detalle.cantidad;
                producto.stock = total;
                return [4, (0, accesorio_1.updateProductInteractor)(producto)];
            case 4:
                result0 = _c.sent();
                detalle.isActive = false;
                return [4, (0, typeorm_1.getRepository)(detallemovimientop_1.DetalleMovimientoP).save(detalle)];
            case 5:
                result2 = _c.sent();
                _c.label = 6;
            case 6:
                _i++;
                return [3, 2];
            case 7:
                movimientop.estado = "eliminado";
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).save(movimientop)];
            case 8:
                result = _c.sent();
                return [2, res.json({ result: result })];
            case 9:
                error_4 = _c.sent();
                throw res.status(500).json({ message: (_b = error_4.message) !== null && _b !== void 0 ? _b : error_4 });
            case 10: return [2];
        }
    });
}); };
exports.deleteMovimientop = deleteMovimientop;
var recibirMovimientop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, idmovimientop, idtienda, recepcion, movimientop, _i, _b, detalle, stock, stock0, results, result0, result;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, idmovimientop = _a.idmovimientop, idtienda = _a.idtienda, recepcion = _a.recepcion;
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findOne({ where: { id: idmovimientop }, relations: ['detallesmovimientop'] })];
            case 1:
                movimientop = _c.sent();
                if (!movimientop) {
                    return [2, res.status(404).json({ message: "No existe movimiento" })];
                }
                _i = 0, _b = movimientop.detallesmovimientop;
                _c.label = 2;
            case 2:
                if (!(_i < _b.length)) return [3, 8];
                detalle = _b[_i];
                return [4, (0, typeorm_1.getRepository)(entities_3.Stock).findOne({ where: [{ accesorioId: detalle.accesorioId, tiendaId: detalle.tiendaId }] })];
            case 3:
                stock = _c.sent();
                if (!!stock) return [3, 5];
                stock0 = new entities_3.Stock();
                stock0.accesorioId = detalle.accesorioId;
                stock0.tiendaId = detalle.tiendaId;
                stock0.cant_tienda = detalle.cantidad;
                stock0.smt = 0;
                return [4, (0, typeorm_1.getRepository)(entities_3.Stock).save(stock0)];
            case 4:
                results = _c.sent();
                return [3, 7];
            case 5:
                stock.cant_tienda = stock.cant_tienda + detalle.cantidad;
                return [4, (0, typeorm_1.getRepository)(entities_3.Stock).save(stock)];
            case 6:
                result0 = _c.sent();
                _c.label = 7;
            case 7:
                _i++;
                return [3, 2];
            case 8:
                movimientop.userId = recepcion;
                movimientop.estado = "recibido";
                return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).save(movimientop)];
            case 9:
                result = _c.sent();
                return [2, res.json({ result: result })];
        }
    });
}); };
exports.recibirMovimientop = recibirMovimientop;
var listmovimientoventasp = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, tienda, hateoas, take, skip, where, tiendas, _b, result, count, _c, hateoasLink, pages, error_5;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 4, , 5]);
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
                tiendas = _e.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas
                };
                _e.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(movimientop_1.MovimientoP).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({ estado: 'pendiente' }, where)
                    ],
                    relations: ['tienda'],
                    order: { fecha: "DESC" }
                })];
            case 3:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen movimientos' })];
            case 4:
                error_5 = _e.sent();
                throw res.status(500).json({ message: (_d = error_5.message) !== null && _d !== void 0 ? _d : error_5 });
            case 5: return [2];
        }
    });
}); };
exports.listmovimientoventasp = listmovimientoventasp;
