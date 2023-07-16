"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarFile = exports.searchVendedor = exports.listVendedor = exports.deleteVendedor = exports.updateVendedor = exports.createVendedor = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var vendedor_1 = require("../core/entities/vendedor");
var vendedor_2 = require("../core/interactor/vendedor");
var utils_1 = require("../utils");
var createVendedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombres, direccion, documento, telefono, tipo_documento, curriculum, foto, recibo, comentario, contrato, fecha_ingreso, fecha_salida, telefono_referencia, vendedor_3, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, nombres = _a.nombres, direccion = _a.direccion, documento = _a.documento, telefono = _a.telefono, tipo_documento = _a.tipo_documento, curriculum = _a.curriculum, foto = _a.foto, recibo = _a.recibo, comentario = _a.comentario, contrato = _a.contrato, fecha_ingreso = _a.fecha_ingreso, fecha_salida = _a.fecha_salida, telefono_referencia = _a.telefono_referencia;
                vendedor_3 = new vendedor_1.Vendedor();
                vendedor_3.nombres = nombres;
                vendedor_3.direccion = direccion;
                vendedor_3.telefono = telefono;
                vendedor_3.tipo_documento = tipo_documento;
                vendedor_3.documento = documento;
                vendedor_3.curriculum = curriculum;
                vendedor_3.foto = foto;
                vendedor_3.recibo = recibo;
                vendedor_3.comentario = comentario;
                vendedor_3.contrato = contrato;
                vendedor_3.fecha_ingreso = fecha_ingreso;
                vendedor_3.fecha_salida = fecha_salida;
                vendedor_3.telefono_referencia = telefono_referencia;
                console.log(req.body);
                return [4, (0, vendedor_2.createVendedorInteractor)(vendedor_3)];
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
exports.createVendedor = createVendedor;
var updateVendedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombres, direccion, documento, telefono, tipo_documento, curriculum, foto, recibo, comentario, contrato, fecha_ingreso, fecha_salida, telefono_referencia, vendedor_4, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, nombres = _a.nombres, direccion = _a.direccion, documento = _a.documento, telefono = _a.telefono, tipo_documento = _a.tipo_documento, curriculum = _a.curriculum, foto = _a.foto, recibo = _a.recibo, comentario = _a.comentario, contrato = _a.contrato, fecha_ingreso = _a.fecha_ingreso, fecha_salida = _a.fecha_salida, telefono_referencia = _a.telefono_referencia;
                return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findOne(req.params.id)];
            case 1:
                vendedor_4 = _c.sent();
                if (!vendedor_4) {
                    return [2, res.status(404).json({ message: "Dede enviar id de vendedor" })];
                }
                vendedor_4.nombres = nombres !== null && nombres !== void 0 ? nombres : vendedor_4.nombres;
                vendedor_4.direccion = direccion !== null && direccion !== void 0 ? direccion : vendedor_4.direccion;
                vendedor_4.documento = documento !== null && documento !== void 0 ? documento : vendedor_4.documento;
                vendedor_4.telefono = telefono !== null && telefono !== void 0 ? telefono : vendedor_4.telefono;
                vendedor_4.tipo_documento = tipo_documento !== null && tipo_documento !== void 0 ? tipo_documento : vendedor_4.tipo_documento;
                vendedor_4.curriculum = curriculum !== null && curriculum !== void 0 ? curriculum : vendedor_4.curriculum;
                vendedor_4.foto = foto !== null && foto !== void 0 ? foto : vendedor_4.foto;
                vendedor_4.recibo = recibo !== null && recibo !== void 0 ? recibo : vendedor_4.recibo;
                vendedor_4.comentario = comentario !== null && comentario !== void 0 ? comentario : vendedor_4.comentario;
                vendedor_4.contrato = contrato !== null && contrato !== void 0 ? contrato : vendedor_4.contrato;
                vendedor_4.fecha_ingreso = fecha_ingreso !== null && fecha_ingreso !== void 0 ? fecha_ingreso : vendedor_4.fecha_ingreso;
                vendedor_4.fecha_salida = fecha_salida !== null && fecha_salida !== void 0 ? fecha_salida : vendedor_4.fecha_salida;
                vendedor_4.telefono_referencia = telefono_referencia !== null && telefono_referencia !== void 0 ? telefono_referencia : vendedor_4.telefono_referencia;
                return [4, (0, vendedor_2.updateVendedorInteractor)(vendedor_4)];
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
exports.updateVendedor = updateVendedor;
var deleteVendedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var vendedorById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findOne(req.params.id)];
            case 1:
                vendedorById = _b.sent();
                if (!vendedorById) {
                    return [2, res.status(404).json({ message: "No existe el vendedor" })];
                }
                return [4, (0, vendedor_2.deleteVendedorInteractor)(vendedorById)];
            case 2:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 4: return [2];
        }
    });
}); };
exports.deleteVendedor = deleteVendedor;
var listVendedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, error_4;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ?
                            "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ nombres: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ documento: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen vendedores" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listVendedor = listVendedor;
var searchVendedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var vendedor_5, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findOne(req.params.id)];
            case 1:
                vendedor_5 = _b.sent();
                if (!vendedor_5) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [2, res.status(200).json({ result: vendedor_5 })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchVendedor = searchVendedor;
var guardarFile = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a;
    return tslib_1.__generator(this, function (_b) {
        try {
            console.log(req);
        }
        catch (error) {
            throw res.status(500).json({ message: (_a = error.message) !== null && _a !== void 0 ? _a : error });
        }
        return [2];
    });
}); };
exports.guardarFile = guardarFile;
