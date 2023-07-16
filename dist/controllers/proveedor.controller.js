"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProveedor = exports.listProveedor = exports.deleteProveedor = exports.updateProveedor = exports.createProveedor = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var proveedor_1 = require("../core/entities/proveedor");
var typeorm_1 = require("typeorm");
var proveedor_2 = require("../core/interactor/proveedor");
var createProveedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, razonsocial, ruc, direccion, telefono, contacto, celular, comentario, proveedor, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, razonsocial = _a.razonsocial, ruc = _a.ruc, direccion = _a.direccion, telefono = _a.telefono, contacto = _a.contacto, celular = _a.celular, comentario = _a.comentario;
                proveedor = new proveedor_1.Proveedor();
                proveedor.razonsocial = razonsocial;
                proveedor.ruc = ruc;
                proveedor.direccion = direccion;
                proveedor.telefono = telefono;
                proveedor.contacto = contacto;
                proveedor.celular = celular;
                proveedor.comentario = comentario;
                return [4, (0, proveedor_2.createProveedorInteractor)(proveedor)];
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
exports.createProveedor = createProveedor;
var updateProveedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, razonsocial, ruc, direccion, telefono, contacto, celular, comentario, proveedor, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, razonsocial = _a.razonsocial, ruc = _a.ruc, direccion = _a.direccion, telefono = _a.telefono, contacto = _a.contacto, celular = _a.celular, comentario = _a.comentario;
                return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).findOne(req.params.id)];
            case 1:
                proveedor = _c.sent();
                if (!proveedor) {
                    return [2, res.status(404).json({ message: "Dede enviar id de proveedor" })];
                }
                proveedor.razonsocial = razonsocial !== null && razonsocial !== void 0 ? razonsocial : proveedor.razonsocial;
                proveedor.ruc = ruc !== null && ruc !== void 0 ? ruc : proveedor.ruc;
                proveedor.direccion = direccion !== null && direccion !== void 0 ? direccion : proveedor.direccion;
                proveedor.telefono = telefono !== null && telefono !== void 0 ? telefono : proveedor.telefono;
                proveedor.contacto = contacto !== null && contacto !== void 0 ? contacto : proveedor.contacto;
                proveedor.celular = celular !== null && celular !== void 0 ? celular : proveedor.celular;
                proveedor.comentario = comentario !== null && comentario !== void 0 ? comentario : proveedor.comentario;
                return [4, (0, proveedor_2.updateProveedorInteractor)(proveedor)];
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
exports.updateProveedor = updateProveedor;
var deleteProveedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var proveedorById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).findOne(req.params.id)];
            case 1:
                proveedorById = _b.sent();
                if (!proveedorById) {
                    return [2, res.status(404).json({ message: "No existe el proveedor" })];
                }
                return [4, (0, proveedor_2.deleteProveedorInteractor)(proveedorById)];
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
exports.deleteProveedor = deleteProveedor;
var listProveedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ razonsocial: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ ruc: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
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
                        : res.status(404).json({ message: "No existen proveedores" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listProveedor = listProveedor;
var searchProveedor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var proveedor, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(proveedor_1.Proveedor).findOne(req.params.id)];
            case 1:
                proveedor = _b.sent();
                if (!proveedor) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [2, res.status(200).json({ result: proveedor })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchProveedor = searchProveedor;
