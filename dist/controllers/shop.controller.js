"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchShop = exports.updateShop = exports.listShop = exports.deleteShop = exports.createShop = void 0;
var tslib_1 = require("tslib");
var shop_1 = require("../core/entities/shop");
var shop_2 = require("../core/interactor/shop");
var utils_1 = require("../utils");
var typeorm_1 = require("typeorm");
var createShop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, direccion, telefono, correo, ciudad, num_documento, rz_social, shop, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, nombre = _a.nombre, direccion = _a.direccion, telefono = _a.telefono, correo = _a.correo, ciudad = _a.ciudad, num_documento = _a.num_documento, rz_social = _a.rz_social;
                shop = new shop_1.Shop();
                shop.nombre = nombre;
                shop.direccion = direccion;
                shop.telefono = telefono;
                shop.correo = correo;
                shop.ciudad = ciudad;
                shop.num_documento = num_documento;
                shop.rz_social = rz_social;
                return [4, (0, shop_2.createShopInteractor)(shop)];
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
exports.createShop = createShop;
var deleteShop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var shopById, result, error_2;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne(req.params.id)];
            case 1:
                shopById = _b.sent();
                if (!shopById) {
                    return [2, res.status(404).json({ message: 'No existe el cliente' })];
                }
                return [4, (0, shop_2.deleteShopInteractor)(shopById)];
            case 2:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_2 = _b.sent();
                throw res.status(500).json({ message: (_a = error_2.message) !== null && _a !== void 0 ? _a : error_2 });
            case 4: return [2];
        }
    });
}); };
exports.deleteShop = deleteShop;
var listShop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, error_3;
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
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ rz_social: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nombre: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                        order: { fecha_actualizacion: 'DESC' },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: 1,
                        })
                        : res.status(404).json({ message: 'No existen Locales' })];
            case 2:
                error_3 = _e.sent();
                throw res.status(500).json({ message: (_d = error_3.message) !== null && _d !== void 0 ? _d : error_3 });
            case 3: return [2];
        }
    });
}); };
exports.listShop = listShop;
var updateShop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, direccion, telefono, correo, num_documento, ciudad, rz_social, shop, resutl;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, direccion = _a.direccion, telefono = _a.telefono, correo = _a.correo, num_documento = _a.num_documento, ciudad = _a.ciudad, rz_social = _a.rz_social;
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne(req.params.id)];
            case 1:
                shop = _b.sent();
                if (!shop) {
                    return [2, res.status(404).json({ message: 'No existe el local' })];
                }
                shop.nombre = nombre !== null && nombre !== void 0 ? nombre : shop.nombre;
                shop.direccion = direccion !== null && direccion !== void 0 ? direccion : shop.direccion;
                shop.telefono = telefono !== null && telefono !== void 0 ? telefono : shop.telefono;
                shop.correo = correo !== null && correo !== void 0 ? correo : shop.correo;
                shop.num_documento = num_documento !== null && num_documento !== void 0 ? num_documento : shop.num_documento;
                shop.ciudad = ciudad !== null && ciudad !== void 0 ? ciudad : shop.ciudad;
                shop.rz_social = rz_social !== null && rz_social !== void 0 ? rz_social : shop.rz_social;
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).save(shop)];
            case 2:
                resutl = _b.sent();
                return [2, res.json({ resutl: resutl })];
        }
    });
}); };
exports.updateShop = updateShop;
var searchShop = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var local, error_4;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne(req.params.id)];
            case 1:
                local = _b.sent();
                if (!local) {
                    return [2, res.status(404).json({ message: 'No existe el local' })];
                }
                return [2, res.status(200).json({ result: local })];
            case 2:
                error_4 = _b.sent();
                throw res.status(500).json({ message: (_a = error_4.message) !== null && _a !== void 0 ? _a : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.searchShop = searchShop;
