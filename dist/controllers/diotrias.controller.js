"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDiotrias = exports.listDiotrias = exports.deleteDiotrias = exports.updateDiotrias = exports.createDiotrias = void 0;
var tslib_1 = require("tslib");
var diotrias_ids_1 = require("../core/entities/diotrias_ids");
var typeorm_1 = require("typeorm");
var dioptrias_1 = require("../core/entities/dioptrias");
var diotrias_1 = require("../core/interactor/diotrias");
var utils_1 = require("../utils");
var createDiotrias = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, local_id, paciente_id, vision, receta, esfi, cili, ejei, esfd, cild, ejed, dip, add, precioi, preciod, idLaboratorio, diotria, diotriaId, resultId, result, diotriad, result2, resultado, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, local_id = _a.local_id, paciente_id = _a.paciente_id, vision = _a.vision, receta = _a.receta, esfi = _a.esfi, cili = _a.cili, ejei = _a.ejei, esfd = _a.esfd, cild = _a.cild, ejed = _a.ejed, dip = _a.dip, add = _a.add, precioi = _a.precioi, preciod = _a.preciod, idLaboratorio = _a.idLaboratorio;
                diotria = new dioptrias_1.Diotrias();
                diotriaId = new diotrias_ids_1.DiotriasIds();
                diotriaId.total = parseFloat(precioi + preciod);
                return [4, (0, typeorm_1.getRepository)(diotrias_ids_1.DiotriasIds).save(diotriaId)];
            case 1:
                resultId = _c.sent();
                diotria.diotria_id = resultId;
                diotria.paciente = paciente_id;
                diotria.tienda = local_id;
                diotria.ojo = "OD";
                diotria.vision = vision;
                diotria.receta = receta;
                diotria.precio = precioi;
                diotria.esf = esfi;
                diotria.cil = cili;
                diotria.dip = dip;
                diotria.eje = ejei;
                diotria.add = add;
                diotria.laboratorio = idLaboratorio;
                return [4, (0, diotrias_1.createDiotriasInteractor)(diotria)];
            case 2:
                result = _c.sent();
                diotriad = new dioptrias_1.Diotrias();
                diotriad.diotria_id = resultId;
                diotriad.paciente = paciente_id;
                diotriad.ojo = "OIZ";
                diotriad.tienda = local_id;
                diotriad.vision = vision;
                diotriad.receta = receta;
                diotriad.precio = preciod;
                diotriad.esf = esfd;
                diotriad.cil = cild;
                diotriad.dip = dip;
                diotriad.eje = ejed;
                diotriad.add = add;
                diotriad.laboratorio = idLaboratorio;
                return [4, (0, diotrias_1.createDiotriasInteractor)(diotriad)];
            case 3:
                result2 = _c.sent();
                resultado = {
                    idDiotrias: resultId.id,
                    idderecha: result.id,
                    idizquierda: result2.id
                };
                return [2, res.json({ resultado: resultado })];
            case 4:
                error_1 = _c.sent();
                throw res.status(500).json({ message: (_b = error_1.message) !== null && _b !== void 0 ? _b : error_1 });
            case 5: return [2];
        }
    });
}); };
exports.createDiotrias = createDiotrias;
var updateDiotrias = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, local_id, paciente_id, vision, receta, esfi, cili, ejei, esfd, cild, ejed, dip, add, precioi, preciod, diotria, item, result, result2, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, local_id = _a.local_id, paciente_id = _a.paciente_id, vision = _a.vision, receta = _a.receta, esfi = _a.esfi, cili = _a.cili, ejei = _a.ejei, esfd = _a.esfd, cild = _a.cild, ejed = _a.ejed, dip = _a.dip, add = _a.add, precioi = _a.precioi, preciod = _a.preciod;
                return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).find({ where: { diotria_id: req.params.id }, relations: ["diotria_id"] })];
            case 1:
                diotria = _c.sent();
                item = diotria;
                item[0].diotria_id = item[0].diotria_id;
                item[0].paciente = paciente_id !== null && paciente_id !== void 0 ? paciente_id : item[0].paciente;
                item[0].tienda = local_id !== null && local_id !== void 0 ? local_id : item[0].tienda;
                item[0].paciente = paciente_id;
                item[0].ojo = "OIZ";
                item[0].tienda = local_id;
                item[0].vision = vision;
                item[0].receta = receta;
                item[0].precio = precioi;
                item[0].esf = esfi !== null && esfi !== void 0 ? esfi : item[0].esf;
                item[0].cil = cili !== null && cili !== void 0 ? cili : item[0].cil;
                item[0].dip = dip !== null && dip !== void 0 ? dip : item[0].dip;
                item[0].eje = ejei !== null && ejei !== void 0 ? ejei : item[0].eje;
                item[0].add = add !== null && add !== void 0 ? add : item[0].add;
                return [4, (0, diotrias_1.updateDiotriasInteractor)(item[0])];
            case 2:
                result = _c.sent();
                item[1].paciente = paciente_id !== null && paciente_id !== void 0 ? paciente_id : item[0].paciente;
                item[1].ojo = "OD" !== null && "OD" !== void 0 ? "OD" : item[1].ojo;
                item[1].tienda = local_id !== null && local_id !== void 0 ? local_id : item[1].tienda;
                item[1].vision = vision !== null && vision !== void 0 ? vision : item[1].vision;
                item[1].receta = receta !== null && receta !== void 0 ? receta : item[1].receta;
                item[1].precio = preciod !== null && preciod !== void 0 ? preciod : item[1].precio;
                item[1].esf = esfd !== null && esfd !== void 0 ? esfd : item[1].esf;
                item[1].cil = cild !== null && cild !== void 0 ? cild : item[1].cil;
                item[1].dip = dip !== null && dip !== void 0 ? dip : item[1].dip;
                item[1].eje = ejed !== null && ejed !== void 0 ? ejed : item[1].eje;
                item[1].add = add !== null && add !== void 0 ? add : item[1].add;
                return [4, (0, diotrias_1.updateDiotriasInteractor)(item[1])];
            case 3:
                result2 = _c.sent();
                return [2, res.json({ result: result })];
            case 4:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 5: return [2];
        }
    });
}); };
exports.updateDiotrias = updateDiotrias;
var deleteDiotrias = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var diotriaId, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).findOne(req.params.id)];
            case 1:
                diotriaId = _b.sent();
                if (!diotriaId) {
                    return [2, res.status(404).json({ message: "No existe" })];
                }
                return [4, (0, diotrias_1.deleteDiotriasInteractor)(diotriaId)];
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
exports.deleteDiotrias = deleteDiotrias;
var listDiotrias = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
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
                return [4, (0, typeorm_1.createQueryBuilder)(dioptrias_1.Diotrias, "d")
                        .select(["d", "p", "di"])
                        .innerJoin("d.paciente", "p", "d.pacienteId = p.id")
                        .innerJoin("d.diotria_id", "di", "d.diotria_id = di.id")
                        .where("d.diotria_id Like(\"%".concat(search, "%\") or p.documento  Like(\"%").concat(search, "%\") or p.rz_social Like(\"%").concat(search, "%\")"))
                        .orderBy("d.id", "DESC")
                        .groupBy("d.diotria_id")
                        .skip(skip * take)
                        .take(take)
                        .getManyAndCount()];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                result = result.filter(function (diotria) { return diotria.isActive === true; });
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen medidas" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listDiotrias = listDiotrias;
var searchDiotrias = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var diotrias, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).find({ where: { diotria_id: req.params.id }, relations: ["paciente", "diotria_id"] })];
            case 1:
                diotrias = _b.sent();
                if (!diotrias) {
                    return [2, res.status(404).json({ message: "No existe la medida" })];
                }
                return [2, res.status(200).json({ result: diotrias })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchDiotrias = searchDiotrias;
