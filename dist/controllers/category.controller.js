"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCategory = exports.listcategory = exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var category_1 = require("../core/entities/category");
var category_2 = require("../core/interactor/category");
var utils_1 = require("../utils");
var createCategory = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var descripcion, categorias, result, error_1;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                descripcion = req.body.descripcion;
                categorias = new category_1.Category();
                categorias.descripcion = descripcion !== null && descripcion !== void 0 ? descripcion : categorias.descripcion;
                return [4, (0, category_2.createCategoryInteractor)(categorias)];
            case 1:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 2:
                error_1 = _b.sent();
                throw res.status(500).json({ message: (_a = error_1.message) !== null && _a !== void 0 ? _a : error_1 });
            case 3: return [2];
        }
    });
}); };
exports.createCategory = createCategory;
var updateCategory = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var description, categoria, result, error_2;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                description = req.body.description;
                return [4, (0, typeorm_1.getRepository)(category_1.Category).findOne(req.params.id)];
            case 1:
                categoria = _b.sent();
                if (!categoria) {
                    return [2, res.status(404).json({ message: "Dede enviar id de categoria" })];
                }
                categoria.descripcion = description !== null && description !== void 0 ? description : categoria.descripcion;
                return [4, (0, category_2.updateCategoryInteractor)(categoria)];
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
exports.updateCategory = updateCategory;
var deleteCategory = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var categoryById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(category_1.Category).findOne(req.params.id)];
            case 1:
                categoryById = _b.sent();
                if (!categoryById) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [4, (0, category_2.deleteCategoryInteractor)(categoryById)];
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
exports.deleteCategory = deleteCategory;
var listcategory = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(category_1.Category).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ descripcion: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
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
                        : res.status(404).json({ message: 'No existen categorias' })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listcategory = listcategory;
var searchCategory = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var category_3, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(category_1.Category).findOne(req.params.id)];
            case 1:
                category_3 = _b.sent();
                if (!category_3) {
                    return [2, res.status(404).json({ message: "No existe la categoria" })];
                }
                return [2, res.status(200).json({ result: category_3 })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchCategory = searchCategory;
