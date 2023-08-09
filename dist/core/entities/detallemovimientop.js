"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleMovimientoP = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var accesorio_1 = require("./accesorio");
var shop_1 = require("./shop");
var movimiento_1 = require("./movimiento");
var DetalleMovimientoP = (function () {
    function DetalleMovimientoP() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimientoP.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimientoP.prototype, "movimientoId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return movimiento_1.Movimiento; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", movimiento_1.Movimiento)
    ], DetalleMovimientoP.prototype, "movimiento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimientoP.prototype, "accesorioId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return accesorio_1.Accesorio; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", accesorio_1.Accesorio)
    ], DetalleMovimientoP.prototype, "accesorio", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimientoP.prototype, "tiendaId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return shop_1.Shop; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], DetalleMovimientoP.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DetalleMovimientoP.prototype, "cantidad", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], DetalleMovimientoP.prototype, "isActive", void 0);
    DetalleMovimientoP = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'detallemovimientop' })
    ], DetalleMovimientoP);
    return DetalleMovimientoP;
}());
exports.DetalleMovimientoP = DetalleMovimientoP;
