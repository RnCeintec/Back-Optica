"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaStock = exports.createStock = exports.searchProduct = exports.listProductsParaVenta = exports.listProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var accesorio_1 = require("../core/entities/accesorio");
var accesorio_2 = require("../core/interactor/accesorio");
var utils_1 = require("../utils");
var stock_1 = require("../core/entities/stock");
var shop_1 = require("../core/entities/shop");
var createProduct = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, codigo, description, precio_compra, precio_sugerido, precio_minimo, categoria, stock, product_1, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, codigo = _a.codigo, description = _a.description, precio_compra = _a.precio_compra, precio_sugerido = _a.precio_sugerido, precio_minimo = _a.precio_minimo, categoria = _a.categoria, stock = _a.stock;
                product_1 = new accesorio_1.Accesorio();
                product_1.codigo = codigo;
                product_1.stock = stock;
                product_1.descripcion = description;
                product_1.precio_compra = precio_compra;
                product_1.precio_sugerido = precio_sugerido;
                product_1.precio_minimo = precio_minimo;
                return [4, (0, accesorio_2.createProductInteractor)(product_1)];
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
exports.createProduct = createProduct;
var updateProduct = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, codigo, description, precio_compra, precio_sugerido, precio_minimo, stock, categoria, product_2, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, codigo = _a.codigo, description = _a.description, precio_compra = _a.precio_compra, precio_sugerido = _a.precio_sugerido, precio_minimo = _a.precio_minimo, stock = _a.stock, categoria = _a.categoria;
                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne(req.params.id)];
            case 1:
                product_2 = _c.sent();
                if (!product_2) {
                    return [2, res.status(404).json({ message: "Dede enviar id del producto" })];
                }
                product_2.codigo = codigo !== null && codigo !== void 0 ? codigo : product_2.codigo;
                product_2.stock = stock !== null && stock !== void 0 ? stock : product_2.stock;
                product_2.descripcion = description !== null && description !== void 0 ? description : product_2.descripcion;
                product_2.precio_compra = precio_compra !== null && precio_compra !== void 0 ? precio_compra : product_2.precio_compra;
                product_2.precio_sugerido = precio_sugerido !== null && precio_sugerido !== void 0 ? precio_sugerido : product_2.precio_sugerido;
                product_2.precio_minimo = precio_minimo !== null && precio_minimo !== void 0 ? precio_minimo : product_2.precio_minimo;
                return [4, (0, accesorio_2.updateProductInteractor)(product_2)];
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
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var productById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne(req.params.id)];
            case 1:
                productById = _b.sent();
                if (!productById) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [4, (0, accesorio_2.deleteProductInteractor)(productById)];
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
exports.deleteProduct = deleteProduct;
var listProducts = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ descripcion: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ codigo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where)
                        ],
                        order: { fecha_actualizacion: "DESC" }
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
                        : res.status(404).json({ message: 'No existen productos' })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listProducts = listProducts;
var listProductsParaVenta = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, error_5;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ descripcion: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ codigo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where)
                        ],
                        order: { fecha_actualizacion: "DESC" }
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                result = result.filter(function (accesorio) { return accesorio.stock > 0; });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen productos' })];
            case 2:
                error_5 = _e.sent();
                throw res.status(500).json({ message: (_d = error_5.message) !== null && _d !== void 0 ? _d : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.listProductsParaVenta = listProductsParaVenta;
var searchProduct = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var producto, error_6;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne({ where: { id: req.params.id } })];
            case 1:
                producto = _b.sent();
                if (!producto) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [2, res.status(200).json({ result: producto })];
            case 2:
                error_6 = _b.sent();
                throw res.status(500).json({ message: (_a = error_6.message) !== null && _a !== void 0 ? _a : error_6 });
            case 3: return [2];
        }
    });
}); };
exports.searchProduct = searchProduct;
var createStock = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, idproducto, idTienda, canttienda, stock, result, error_7;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, idproducto = _a.idproducto, idTienda = _a.idTienda, canttienda = _a.canttienda;
                stock = new stock_1.Stock();
                stock.accesorio = idproducto;
                stock.tienda = idTienda;
                stock.cant_tienda = canttienda;
                return [4, (0, typeorm_1.getRepository)(stock_1.Stock).save(stock)];
            case 1:
                result = _c.sent();
                return [2, res.json({ result: result })];
            case 2:
                error_7 = _c.sent();
                throw res.status(500).json({ message: (_b = error_7.message) !== null && _b !== void 0 ? _b : error_7 });
            case 3: return [2];
        }
    });
}); };
exports.createStock = createStock;
var listaStock = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, tienda, hateoas, take, skip, where, tiendas, _b, result, count, _c, result, count, _d, hateoasLink, pages, error_8;
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
                where = {};
                if (!(tienda != "")) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
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
                return [4, (0, typeorm_1.getRepository)(stock_1.Stock).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ cant_tienda: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where),
                            tslib_1.__assign({ accesorioId: (0, typeorm_1.Like)("%".concat(search, "%")), tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where)
                        ],
                        relations: ['tienda', 'accesorio'],
                        order: { fecha_creacion: "DESC" }
                    })];
            case 3:
                _b = _f.sent(), result = _b[0], count = _b[1];
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(stock_1.Stock).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({ cant_tienda: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        tslib_1.__assign({ accesorioId: (0, typeorm_1.Like)("%".concat(search, "%")) }, where)
                    ],
                    relations: ['tienda', 'accesorio'],
                    order: { fecha_creacion: "DESC" }
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
                error_8 = _f.sent();
                throw res.status(500).json({ message: (_e = error_8.message) !== null && _e !== void 0 ? _e : error_8 });
            case 8: return [2];
        }
    });
}); };
exports.listaStock = listaStock;
