"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMovimiento = exports.createmovimiento = exports.listamovimiento = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var movimiento_1 = require("../core/entities/movimiento");
var detallemovimiento_1 = require("../core/entities/detallemovimiento");
var utils_1 = require("../utils");
var listamovimiento = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where)
                        ],
                        relations: ['tienda',],
                        order: { fecha: "ASC" }
                    })];
            case 3:
                _b = _f.sent(), result = _b[0], count = _b[1];
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({}, where)
                    ],
                    relations: ['tienda'],
                    order: { fecha: "ASC" }
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
exports.listamovimiento = listamovimiento;
var createmovimiento = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, monturasmovimiento, ruc, razonsocial, documento, nrodocumento, fechafacturacion, responsable, resultall, movimiento, result0, _i, monturasmovimiento_1, datos, detalle_movimiento, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                _a = req.body, monturasmovimiento = _a.monturasmovimiento, ruc = _a.ruc, razonsocial = _a.razonsocial, documento = _a.documento, nrodocumento = _a.nrodocumento, fechafacturacion = _a.fechafacturacion, responsable = _a.responsable;
                resultall = [];
                movimiento = new movimiento_1.Movimiento();
                movimiento.estado = "pendiente";
                movimiento.ruc = ruc;
                movimiento.razonsocial = razonsocial;
                movimiento.nrodocumento = nrodocumento;
                movimiento.documento = documento;
                movimiento.fechafacturacion = fechafacturacion;
                movimiento.tiendaId = responsable;
                return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).save(movimiento)];
            case 1:
                result0 = _c.sent();
                _i = 0, monturasmovimiento_1 = monturasmovimiento;
                _c.label = 2;
            case 2:
                if (!(_i < monturasmovimiento_1.length)) return [3, 5];
                datos = monturasmovimiento_1[_i];
                detalle_movimiento = new detallemovimiento_1.DetalleMovimiento();
                detalle_movimiento.movimientoId = result0.id;
                detalle_movimiento.monturasId = datos.monturasId;
                detalle_movimiento.tiendaId = result0.tiendaId;
                return [4, (0, typeorm_1.getRepository)(detallemovimiento_1.DetalleMovimiento).save(detalle_movimiento)];
            case 3:
                result = _c.sent();
                resultall.push(result);
                _c.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5:
                console.log(resultall);
                return [2, res.json({ result: resultall })];
            case 6:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 7: return [2];
        }
    });
}); };
exports.createmovimiento = createmovimiento;
var searchMovimiento = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var movimiento, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findOne({ where: { id: req.params.id }, relations: ['tienda', 'detallesmovimiento'] })];
            case 1:
                movimiento = _b.sent();
                if (!movimiento) {
                    return [2, res.status(404).json({ message: "No existe movimiento" })];
                }
                return [2, res.status(200).json({ result: movimiento })];
            case 2:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 3: return [2];
        }
    });
}); };
exports.searchMovimiento = searchMovimiento;
