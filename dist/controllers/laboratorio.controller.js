"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductoDetalle = exports.searchLaboratorio = exports.listDetallethisProd = exports.listProductothisLab = exports.listProducto = exports.listLaboratorio = exports.deleteLaboratorio = exports.updateLaboratorio = exports.createLaboratorio = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var laboratorio_1 = require("../core/entities/laboratorio");
var laboratorio_2 = require("../core/interactor/laboratorio");
var utils_1 = require("../utils");
var createLaboratorio = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, prodlab, nivel, padre, comisionable, laboratorio_3, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, prodlab = _a.prodlab, nivel = _a.nivel, padre = _a.padre, comisionable = _a.comisionable;
                laboratorio_3 = new laboratorio_1.Laboratorio();
                laboratorio_3.prodlab = prodlab;
                laboratorio_3.nivel = nivel;
                laboratorio_3.padre = padre;
                laboratorio_3.comisionable = comisionable;
                return [4, (0, laboratorio_2.createLaboratorioInteractor)(laboratorio_3)];
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
exports.createLaboratorio = createLaboratorio;
var updateLaboratorio = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, prodlab, nivel, padre, comisionable, laboratorio_4, result, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, prodlab = _a.prodlab, nivel = _a.nivel, padre = _a.padre, comisionable = _a.comisionable;
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findOne(req.params.id)];
            case 1:
                laboratorio_4 = _c.sent();
                if (!laboratorio_4) {
                    return [2, res.status(404).json({ message: "Dede enviar id de laboratorio" })];
                }
                laboratorio_4.prodlab = prodlab !== null && prodlab !== void 0 ? prodlab : laboratorio_4.prodlab;
                laboratorio_4.nivel = nivel !== null && nivel !== void 0 ? nivel : laboratorio_4.nivel;
                laboratorio_4.padre = padre !== null && padre !== void 0 ? padre : laboratorio_4.padre;
                laboratorio_4.comisionable = comisionable !== null && comisionable !== void 0 ? comisionable : laboratorio_4.comisionable;
                return [4, (0, laboratorio_2.updateLaboratorioInteractor)(laboratorio_4)];
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
exports.updateLaboratorio = updateLaboratorio;
var deleteLaboratorio = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var laboratorioById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findOne(req.params.id)];
            case 1:
                laboratorioById = _b.sent();
                if (!laboratorioById) {
                    return [2, res.status(404).json({ message: "No existe el laboratorio" })];
                }
                return [4, (0, laboratorio_2.deleteLaboratorioInteractor)(laboratorioById)];
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
exports.deleteLaboratorio = deleteLaboratorio;
var listLaboratorio = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ prodlab: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nivel: 1 }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                result = result.filter(function (lab) { return lab.nivel === 1; });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen laboratorioss" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listLaboratorio = listLaboratorio;
var listProducto = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, aux, padres_1, error_5;
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
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ prodlab: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nivel: 2 }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                aux = result;
                padres_1 = [0];
                aux.forEach(function (p) {
                    padres_1.push(p.padre);
                });
                result = result.filter(function (lab) { return lab.nivel === 2; });
                result = result.filter(function (producto) { return !padres_1.includes(producto.id); });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen laboratorios" })];
            case 2:
                error_5 = _e.sent();
                throw res.status(500).json({ message: (_d = error_5.message) !== null && _d !== void 0 ? _d : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.listProducto = listProducto;
var listProductothisLab = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, idLab, error_6;
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
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ prodlab: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nivel: 2 }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                result = result.filter(function (lab) { return lab.nivel === 2; });
                idLab = parseInt("".concat(search));
                result = result.filter(function (producto) { return producto.padre === idLab; });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen produtos" })];
            case 2:
                error_6 = _e.sent();
                throw res.status(500).json({ message: (_d = error_6.message) !== null && _d !== void 0 ? _d : error_6 });
            case 3: return [2];
        }
    });
}); };
exports.listProductothisLab = listProductothisLab;
var listDetallethisProd = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, idProd, error_7;
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
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ prodlab: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nivel: 3 }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                result = result.filter(function (lab) { return lab.nivel === 3; });
                idProd = parseInt("".concat(search));
                result = result.filter(function (producto) { return producto.padre === idProd; });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existe detalle" })];
            case 2:
                error_7 = _e.sent();
                throw res.status(500).json({ message: (_d = error_7.message) !== null && _d !== void 0 ? _d : error_7 });
            case 3: return [2];
        }
    });
}); };
exports.listDetallethisProd = listDetallethisProd;
var searchLaboratorio = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var laboratorio_5, error_8;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findOne(req.params.id)];
            case 1:
                laboratorio_5 = _b.sent();
                if (!laboratorio_5) {
                    return [2, res.status(404).json({ message: "No existe el producto" })];
                }
                return [2, res.status(200).json({ result: laboratorio_5 })];
            case 2:
                error_8 = _b.sent();
                throw res.status(500).json({ message: (_a = error_8.message) !== null && _a !== void 0 ? _a : error_8 });
            case 3: return [2];
        }
    });
}); };
exports.searchLaboratorio = searchLaboratorio;
var listProductoDetalle = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, detalles, idLab, final, bandera, i, j, error_9;
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
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findAndCount({
                        take: take,
                        skip: skip * take,
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                detalles = result.filter(function (lab) { return lab.nivel === 3; });
                result = result.filter(function (lab) { return lab.nivel === 2; });
                result = result.filter(function (lab) { return lab.isActive == true; });
                idLab = parseInt("".concat(search));
                result = result.filter(function (producto) { return producto.padre === idLab; });
                final = [];
                bandera = false;
                for (i = 0; i < result.length; i++) {
                    for (j = 0; j < detalles.length; j++) {
                        if (result[i].id === detalles[j].padre) {
                            bandera = true;
                            final.push({ id: result[i].id, producto: result[i].prodlab, detalle: detalles[j].prodlab });
                        }
                    }
                    if (bandera == false) {
                        final.push({ id: result[i].id, producto: result[i].prodlab, detalle: "SIN DETALLE" });
                    }
                    bandera = false;
                }
                return [2, res.json({ result: final })];
            case 2:
                error_9 = _e.sent();
                throw res.status(500).json({ message: (_d = error_9.message) !== null && _d !== void 0 ? _d : error_9 });
            case 3: return [2];
        }
    });
}); };
exports.listProductoDetalle = listProductoDetalle;
