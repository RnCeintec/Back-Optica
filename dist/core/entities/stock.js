"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var shop_1 = require("./shop");
var accesorio_1 = require("./accesorio");
var Stock = (function () {
    function Stock() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Stock.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return accesorio_1.Accesorio; }, function (accesorio) { return accesorio.stocks; }),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", accesorio_1.Accesorio)
    ], Stock.prototype, "accesorio", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Stock.prototype, "accesorioId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return shop_1.Shop; }, function (tienda) { return tienda.stocks; }),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Stock.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Stock.prototype, "tiendaId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Stock.prototype, "cant_tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", Number)
    ], Stock.prototype, "smt", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Stock.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Stock.prototype, "fecha_actualizacion", void 0);
    Stock = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'stock' })
    ], Stock);
    return Stock;
}());
exports.Stock = Stock;
