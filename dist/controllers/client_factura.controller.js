"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchClient = exports.listClient = exports.deleteClient = exports.updateClient = exports.createClient = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var client_factura_1 = require("../core/entities/client_factura");
var client_facturas_1 = require("../core/interactor/client_facturas");
var utils_1 = require("../utils");
var createClient = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, rz_social, direccion, documento, telefono, observacion, tipo_documento, cliente, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, rz_social = _a.rz_social, direccion = _a.direccion, documento = _a.documento, telefono = _a.telefono, observacion = _a.observacion, tipo_documento = _a.tipo_documento;
                cliente = new client_factura_1.ClientFactura();
                cliente.rz_social = rz_social;
                cliente.direccion = direccion;
                cliente.tipo_documento = tipo_documento;
                cliente.documento = documento;
                cliente.telefono = telefono;
                cliente.observacion = observacion;
                return [4, (0, client_facturas_1.createClientInteractor)(cliente)];
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
exports.createClient = createClient;
var updateClient = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, rz_social, direccion, documento, telefono, observacion, tipo_documento, cliente, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, rz_social = _a.rz_social, direccion = _a.direccion, documento = _a.documento, telefono = _a.telefono, observacion = _a.observacion, tipo_documento = _a.tipo_documento;
                return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findOne(req.params.id)];
            case 1:
                cliente = _c.sent();
                if (!cliente) {
                    return [2, res.status(404).json({ message: "Dede enviar id de cliente" })];
                }
                cliente.rz_social = rz_social !== null && rz_social !== void 0 ? rz_social : cliente.rz_social;
                cliente.direccion = direccion !== null && direccion !== void 0 ? direccion : cliente.direccion;
                cliente.tipo_documento = tipo_documento !== null && tipo_documento !== void 0 ? tipo_documento : cliente.tipo_documento;
                cliente.documento = documento !== null && documento !== void 0 ? documento : cliente.documento;
                cliente.telefono = telefono !== null && telefono !== void 0 ? telefono : cliente.telefono;
                cliente.observacion = observacion !== null && observacion !== void 0 ? observacion : cliente.observacion;
                return [4, (0, client_facturas_1.updateClientInteractor)(cliente)];
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
exports.updateClient = updateClient;
var deleteClient = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var clientById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findOne(req.params.id)];
            case 1:
                clientById = _b.sent();
                if (!clientById) {
                    return [2, res.status(404).json({ message: "No existe el cliente" })];
                }
                return [4, (0, client_facturas_1.deleteClientInteractor)(clientById)];
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
exports.deleteClient = deleteClient;
var listClient = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ rz_social: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ documento: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ telefono: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
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
                        : res.status(404).json({ message: "No existen clientes" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listClient = listClient;
var searchClient = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var cliente, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findOne(req.params.id)];
            case 1:
                cliente = _b.sent();
                if (!cliente) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [2, res.status(200).json({ result: cliente })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchClient = searchClient;
