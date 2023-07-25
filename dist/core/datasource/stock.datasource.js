"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var stock_1 = require("../entities/stock");
var StockTypeORM = (function () {
    function StockTypeORM() {
    }
    StockTypeORM.prototype.findStockByid = function (accesorioId, tiendaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(stock_1.Stock).findOne({
                                where: { accesorioId: accesorioId, tiendaId: tiendaId }
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2];
                }
            });
        });
    };
    StockTypeORM.prototype.createStock = function (stock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findStockByid(stock.accesorioId, stock.tiendaId)];
                    case 1:
                        if (_a.sent())
                            throw 'Stock ya registrado';
                        return [4, (0, typeorm_1.getRepository)(stock_1.Stock).save(stock)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    StockTypeORM.prototype.updateStock = function (stock) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findStockByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findStockByid(stock.accesorioId, stock.tiendaId)];
                    case 1:
                        findStockByid = _a.sent();
                        if (findStockByid !== undefined && stock.accesorioId !== findStockByid.accesorioId && stock.tiendaId !== findStockByid.tiendaId) {
                            throw 'no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(stock_1.Stock).save(stock)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    return StockTypeORM;
}());
exports.StockTypeORM = StockTypeORM;
