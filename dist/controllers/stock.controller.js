"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaStock = exports.createStock = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var stock_1 = require("../core/entities/stock");
var entities_1 = require("../core/entities");
var createStock = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, idproducto, idTienda, canttienda, stock, result, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, idproducto = _a.idproducto, idTienda = _a.idTienda, canttienda = _a.canttienda;
                stock = new stock_1.Stock();
                stock.idproducto = idproducto;
                stock.idTienda = idTienda;
                stock.canttienda = canttienda;
                return [4, (0, typeorm_1.getRepository)(stock_1.Stock).save(stock)];
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
exports.createStock = createStock;
var listaStock = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var tienda, where, tiendas, _a, result, count, error_2;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                tienda = req.query.tienda;
                where = {};
                if (!tienda) return [3, 2];
                return [4, (0, typeorm_1.getRepository)(entities_1.Shop).findOne({
                        where: { id: tienda, isActive: true },
                    })];
            case 1:
                tiendas = _c.sent();
                if (!tiendas) {
                    return [2, res.status(404).json({ message: "No existe la tienda" })];
                }
                where = {
                    tienda: tiendas
                };
                _c.label = 2;
            case 2: return [4, (0, typeorm_1.getRepository)(stock_1.Stock).findAndCount()];
            case 3:
                _a = _c.sent(), result = _a[0], count = _a[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            pages: 1
                        })
                        : res.status(404).json({ message: 'No existen Inventarios' })];
            case 4:
                error_2 = _c.sent();
                throw res.status(500).json({ message: (_b = error_2.message) !== null && _b !== void 0 ? _b : error_2 });
            case 5: return [2];
        }
    });
}); };
exports.listaStock = listaStock;
