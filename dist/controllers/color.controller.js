"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchColor = exports.listColors = exports.deleteColor = exports.updateColor = exports.createColor = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var color_1 = require("../core/entities/color");
var color_2 = require("../core/interactor/color");
var utils_1 = require("../utils");
var createColor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, codigo, color, color_, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, codigo = _a.codigo, color = _a.color;
                color_ = new color_1.Color();
                color_.codigo = codigo;
                color_.color = color;
                return [4, (0, color_2.createColortInteractor)(color_)];
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
exports.createColor = createColor;
var updateColor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, codigo, color, color_, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, codigo = _a.codigo, color = _a.color;
                return [4, (0, typeorm_1.getRepository)(color_1.Color).findOne(req.params.id)];
            case 1:
                color_ = _c.sent();
                if (!color_) {
                    return [2, res.status(404).json({ message: "Dede enviar id del color" })];
                }
                color_.codigo = codigo !== null && codigo !== void 0 ? codigo : color_.codigo;
                color_.color = color !== null && color !== void 0 ? color : color_.color;
                return [4, (0, color_2.updateColorInteractor)(color_)];
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
exports.updateColor = updateColor;
var deleteColor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var colorById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(color_1.Color).findOne(req.params.id)];
            case 1:
                colorById = _b.sent();
                if (!colorById) {
                    return [2, res.status(404).json({ message: "No existe el color" })];
                }
                return [4, (0, color_2.deleteColorInteractor)(colorById)];
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
exports.deleteColor = deleteColor;
var listColors = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(color_1.Color).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ color: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ codigo: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink
                        })
                        : res.status(404).json({ message: "No existen vendedores" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listColors = listColors;
var searchColor = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var color, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(color_1.Color).findOne({ where: { id: req.params.id } })];
            case 1:
                color = _b.sent();
                if (!color) {
                    return [2, res.status(404).json({ message: "No existe el color" })];
                }
                return [2, res.status(200).json({ result: color })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchColor = searchColor;
