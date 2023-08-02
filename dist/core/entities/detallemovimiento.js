"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleMovimiento = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var monturas_1 = require("./monturas");
var shop_1 = require("./shop");
var movimiento_1 = require("./movimiento");
var _1 = require(".");
var DetalleMovimiento = (function () {
    function DetalleMovimiento() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimiento.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimiento.prototype, "movimientoId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return movimiento_1.Movimiento; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", movimiento_1.Movimiento)
    ], DetalleMovimiento.prototype, "movimiento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimiento.prototype, "monturasId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return monturas_1.Monturas; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", monturas_1.Monturas)
    ], DetalleMovimiento.prototype, "monturas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimiento.prototype, "tiendaId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return shop_1.Shop; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], DetalleMovimiento.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimiento.prototype, "userId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return _1.User; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", _1.User)
    ], DetalleMovimiento.prototype, "user", void 0);
    DetalleMovimiento = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'detallemovimiento' })
    ], DetalleMovimiento);
    return DetalleMovimiento;
}());
exports.DetalleMovimiento = DetalleMovimiento;
