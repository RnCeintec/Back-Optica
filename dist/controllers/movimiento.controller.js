"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listamovimiento = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var movimiento_1 = require("../core/entities/movimiento");
var utils_1 = require("../utils");
var listamovimiento = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, tienda, hateoas, take, skip, where, tiendas, _b, result, count, _c, result, count, _d, hateoasLink, pages, error_1;
    var _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 7, , 8]);
                _a = req.query, limit = _a.limit, offset = _a.offset, tienda = _a.tienda;
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
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
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
                return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ tienda: (0, typeorm_1.Like)("".concat(tienda)) }, where)
                        ],
                        relations: ['tienda',],
                        order: { fecha: "ASC" }
                    })];
            case 3:
                _b = _f.sent(), result = _b[0], count = _b[1];
                return [3, 6];
            case 4: return [4, (0, typeorm_1.getRepository)(movimiento_1.Movimiento).findAndCount({
                    take: take,
                    skip: skip * take,
                    where: [
                        tslib_1.__assign({}, where)
                    ],
                    relations: ['tienda',],
                    order: { fecha: "ASC" }
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
                        : res.status(404).json({ message: 'No existen movimientos' })];
            case 7:
                error_1 = _f.sent();
                throw res.status(500).json({ message: (_e = error_1.message) !== null && _e !== void 0 ? _e : error_1 });
            case 8: return [2];
        }
    });
}); };
exports.listamovimiento = listamovimiento;
