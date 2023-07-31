"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCompletaMonturas = exports.listMonturasSinComprar = exports.searchMontura = exports.ultimaMontura = exports.listMonturas = exports.deleteMontura = exports.updateMonturas = exports.createMonturas = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var monturas_1 = require("../core/entities/monturas");
var monturas_2 = require("../core/interactor/monturas");
var utils_1 = require("../utils");
var ingreso_monturas_1 = require("../core/entities/ingreso_monturas");
var ingreso_monturas_detalle_1 = require("../core/entities/ingreso_monturas_detalle");
var createMonturas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, marca, codigo, modelo, tipo, talla, color, comentario, costo, venta, descripcionColor, tope, idproveedor, documento, numero, cantidad, local_id, ingreso_monturas, ingresoMontura, i, monturas, ingreso_detalle, monturaId, codigoMontura, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 7, , 8]);
                _a = req.body, marca = _a.marca, codigo = _a.codigo, modelo = _a.modelo, tipo = _a.tipo, talla = _a.talla, color = _a.color, comentario = _a.comentario, costo = _a.costo, venta = _a.venta, descripcionColor = _a.descripcionColor, tope = _a.tope, idproveedor = _a.idproveedor, documento = _a.documento, numero = _a.numero, cantidad = _a.cantidad, local_id = _a.local_id;
                ingreso_monturas = new ingreso_monturas_1.IngresoMonturas();
                ingreso_monturas.documento = documento;
                ingreso_monturas.numero_documento = numero;
                ingreso_monturas.proveedor = idproveedor;
                return [4, (0, typeorm_1.getRepository)(ingreso_monturas_1.IngresoMonturas).save(ingreso_monturas)];
            case 1:
                ingresoMontura = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cantidad)) return [3, 6];
                monturas = new monturas_1.Monturas();
                ingreso_detalle = new ingreso_monturas_detalle_1.IngresoMonturasDetalle();
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).find({
                        order: {
                            id: "DESC",
                        },
                        take: 1
                    })];
            case 3:
                monturaId = _c.sent();
                codigoMontura = "";
                if (monturaId.length > 0) {
                    codigoMontura = (monturaId[0].id + 1).toString().padStart(6, "0");
                }
                else {
                    codigoMontura = (1).toString().padStart(6, "0");
                }
                ingreso_detalle.idmontura = "M" + codigoMontura.toString().padStart(6, "0");
                (0, typeorm_1.getRepository)(ingreso_monturas_detalle_1.IngresoMonturasDetalle).save(ingreso_detalle);
                monturas.idmontura = codigoMontura;
                monturas.marca = marca;
                monturas.codImpreso = codigo;
                monturas.modelo = modelo;
                monturas.tipo = tipo;
                monturas.talla = talla;
                monturas.colorDescripcion = descripcionColor;
                monturas.color = color;
                monturas.comentario = comentario;
                monturas.costo = costo;
                monturas.ingreso = ingresoMontura;
                monturas.tope = tope;
                monturas.venta = venta;
                monturas.tienda = local_id;
                return [4, (0, monturas_2.createMonturasInteractor)(monturas)];
            case 4:
                result = _c.sent();
                _c.label = 5;
            case 5:
                i++;
                return [3, 2];
            case 6: return [2, res.json({ message: "creado con exito" })];
            case 7:
                error_1 = _c.sent();
                throw res.status(500).json({ message: (_b = error_1.message) !== null && _b !== void 0 ? _b : error_1 });
            case 8: return [2];
        }
    });
}); };
exports.createMonturas = createMonturas;
var updateMonturas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, marca, codigo, modelo, tipo, talla, puente, codImpreso, procedencia, color, estuche, comentario, costo, venta, venta_id, enmovimiento, descripcionColor, tope, local_id, numero, idproveedor, documento, montura, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, marca = _a.marca, codigo = _a.codigo, modelo = _a.modelo, tipo = _a.tipo, talla = _a.talla, puente = _a.puente, codImpreso = _a.codImpreso, procedencia = _a.procedencia, color = _a.color, estuche = _a.estuche, comentario = _a.comentario, costo = _a.costo, venta = _a.venta, venta_id = _a.venta_id, enmovimiento = _a.enmovimiento, descripcionColor = _a.descripcionColor, tope = _a.tope, local_id = _a.local_id, numero = _a.numero, idproveedor = _a.idproveedor, documento = _a.documento;
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne(req.params.id)];
            case 1:
                montura = _c.sent();
                if (!montura) {
                    return [2, res.status(404).json({ message: "Dede enviar id de la montura" })];
                }
                montura.marca = marca !== null && marca !== void 0 ? marca : montura.marca;
                montura.codImpreso = codImpreso !== null && codImpreso !== void 0 ? codImpreso : montura.codImpreso;
                montura.modelo = modelo !== null && modelo !== void 0 ? modelo : montura.modelo;
                montura.tipo = tipo !== null && tipo !== void 0 ? tipo : montura.tipo;
                montura.talla = talla !== null && talla !== void 0 ? talla : montura.talla;
                montura.puente = puente !== null && puente !== void 0 ? puente : montura.puente;
                montura.colorDescripcion = descripcionColor !== null && descripcionColor !== void 0 ? descripcionColor : montura.colorDescripcion;
                montura.procedencia = procedencia !== null && procedencia !== void 0 ? procedencia : montura.procedencia;
                montura.color = color !== null && color !== void 0 ? color : montura.color;
                montura.estuche = estuche !== null && estuche !== void 0 ? estuche : montura.estuche;
                montura.comentario = comentario !== null && comentario !== void 0 ? comentario : montura.comentario;
                montura.costo = costo !== null && costo !== void 0 ? costo : montura.costo;
                montura.venta = venta !== null && venta !== void 0 ? venta : montura.venta;
                montura.ventas = venta_id !== null && venta_id !== void 0 ? venta_id : montura.ventas;
                montura.enmovimiento = enmovimiento !== null && enmovimiento !== void 0 ? enmovimiento : montura.enmovimiento;
                montura.tope = tope !== null && tope !== void 0 ? tope : montura.tope;
                montura.tienda = local_id !== null && local_id !== void 0 ? local_id : montura.tienda;
                return [4, (0, monturas_2.updateMonturasInteractor)(montura)];
            case 2:
                result = _c.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 4: return [2];
        }
    });
}); };
exports.updateMonturas = updateMonturas;
var deleteMontura = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var monturaById, ingreso, detalle, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({ where: { id: req.params.id }, relations: ["ingreso"] })];
            case 1:
                monturaById = _b.sent();
                if (!monturaById) {
                    return [2, res.status(404).json({ message: "No existe la montura" })];
                }
                return [4, (0, typeorm_1.getRepository)(ingreso_monturas_1.IngresoMonturas).findOne(monturaById.ingreso.id)];
            case 2:
                ingreso = _b.sent();
                if (!ingreso) {
                    return [2, res.status(404).json({ message: "No existe el ingreso de montura" })];
                }
                ingreso.isActive = false;
                return [4, (0, typeorm_1.getRepository)(ingreso_monturas_1.IngresoMonturas).save(ingreso)];
            case 3:
                _b.sent();
                return [4, (0, typeorm_1.getRepository)(ingreso_monturas_detalle_1.IngresoMonturasDetalle).findOne({ where: { idmontura: "M" + monturaById.idmontura } })];
            case 4:
                detalle = _b.sent();
                if (!detalle) {
                    return [2, res.status(404).json({ message: "No existe la montura" })];
                }
                detalle.isActive = false;
                return [4, (0, typeorm_1.getRepository)(ingreso_monturas_detalle_1.IngresoMonturasDetalle).save(detalle)];
            case 5:
                _b.sent();
                return [4, (0, monturas_2.deleteMonturasInteractor)(monturaById)];
            case 6:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 7:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 8: return [2];
        }
    });
}); };
exports.deleteMontura = deleteMontura;
var listMonturas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, tienda, hateoas, take, skip, where, tiendas, _b, result, count, _c, result, count, _d, hateoasLink, pages, error_4;
    var _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 7, , 8]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search, tienda = _a.tienda;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                if (!(tienda != "")) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _f.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas,
                    isActive: true
                };
                _f.label = 2;
            case 2:
                if (!(tienda != "")) return [3, 4];
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ idmontura: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ marca: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ modelo: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ tipo: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ codImpreso: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where)
                        ],
                        relations: ['tienda', 'ventas'],
                        order: { fecha_actualizacion: "DESC" }
                    })];
            case 3:
                _b = _f.sent(), result = _b[0], count = _b[1];
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({ idmontura: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ marca: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ modelo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ tipo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ codImpreso: (0, typeorm_1.Like)("%".concat(search, "%")) }, where)
                    ],
                    relations: ['tienda', 'ventas'],
                    order: { fecha_actualizacion: "DESC" }
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
                        : res.status(404).json({ message: 'No existen productos' })];
            case 7:
                error_4 = _f.sent();
                throw res.status(500).json({ message: (_e = error_4.message) !== null && _e !== void 0 ? _e : error_4 });
            case 8: return [2];
        }
    });
}); };
exports.listMonturas = listMonturas;
var ultimaMontura = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var montura, id, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).find({
                        order: {
                            id: "DESC",
                        },
                        take: 1
                    })];
            case 1:
                montura = _b.sent();
                id = "";
                if (montura.length > 0) {
                    id = (montura[0].id + 1).toString().padStart(6, "0");
                }
                else {
                    id = (1).toString().padStart(6, "0");
                }
                return [2, res.json({ result: { id: id } })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.ultimaMontura = ultimaMontura;
var searchMontura = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var montura, error_6;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({ where: { id: req.params.id }, relations: ['ingreso', 'ingreso.proveedor'] })];
            case 1:
                montura = _b.sent();
                if (!montura) {
                    return [2, res.status(404).json({ message: "No existe el montura" })];
                }
                return [2, res.status(200).json({ result: montura })];
            case 2:
                error_6 = _b.sent();
                throw res.status(500).json({ message: (_a = error_6.message) !== null && _a !== void 0 ? _a : error_6 });
            case 3: return [2];
        }
    });
}); };
exports.searchMontura = searchMontura;
var listMonturasSinComprar = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, tienda, ventasExiste, hateoas, take, skip, where, tiendas, _b, result, count, _c, hateoasLink, pages, error_7;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 4, , 5]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search, tienda = _a.tienda, ventasExiste = _a.ventasExiste;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                if (!tienda) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _e.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas,
                    isActive: true
                };
                _e.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({ venta: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ idmontura: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ marca: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ modelo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ tipo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where)
                    ],
                    relations: ['tienda', 'ventas'],
                    order: { fecha_actualizacion: "DESC" }
                })];
            case 3:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                if (ventasExiste) {
                    if (ventasExiste === "0") {
                        result = result.filter(function (montura) { return !montura.ventas; });
                    }
                    if (ventasExiste === "1") {
                        result = result.filter(function (montura) { return montura.ventas; });
                    }
                }
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen monturas' })];
            case 4:
                error_7 = _e.sent();
                throw res.status(500).json({ message: (_d = error_7.message) !== null && _d !== void 0 ? _d : error_7 });
            case 5: return [2];
        }
    });
}); };
exports.listMonturasSinComprar = listMonturasSinComprar;
var listCompletaMonturas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, tienda, ventasExiste, where, tiendas, _b, result, count, _c, result, count, error_8;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 7, , 8]);
                _a = req.query, limit = _a.limit, offset = _a.offset, tienda = _a.tienda, ventasExiste = _a.ventasExiste;
                where = { isActive: true };
                if (!tienda) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _e.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas,
                    isActive: true
                };
                _e.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findAndCount({
                    where: [
                        where
                    ],
                    relations: ['tienda', 'ventas'],
                    order: { fecha_actualizacion: "DESC" }
                })];
            case 3:
                _b = _e.sent(), result = _b[0], count = _b[1];
                if (!ventasExiste) return [3, 4];
                if (ventasExiste === "0") {
                    result = result.filter(function (montura) { return !montura.ventas; });
                }
                if (ventasExiste === "1") {
                    result = result.filter(function (montura) { return montura.ventas; });
                }
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findAndCount({
                    where: [
                        where
                    ],
                    relations: ['tienda'],
                    order: { fecha_actualizacion: "DESC" }
                })];
            case 5:
                _c = _e.sent(), result = _c[0], count = _c[1];
                _e.label = 6;
            case 6: return [2, result
                    ? res.status(200).json({
                        result: result,
                        count: count,
                        pages: 1,
                    })
                    : res.status(404).json({ message: 'No existen monturas' })];
            case 7:
                error_8 = _e.sent();
                throw res.status(500).json({ message: (_d = error_8.message) !== null && _d !== void 0 ? _d : error_8 });
            case 8: return [2];
        }
    });
}); };
exports.listCompletaMonturas = listCompletaMonturas;
