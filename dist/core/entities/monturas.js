"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monturas = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var ingreso_monturas_1 = require("./ingreso_monturas");
var shop_1 = require("./shop");
var detalleinventario_1 = require("./detalleinventario");
var Monturas = (function () {
    function Monturas() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Monturas.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Monturas.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "idmontura", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "marca", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "modelo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "colorDescripcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "tipo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "talla", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "puente", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "codImpreso", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "procedencia", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "color", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "estuche", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "comentario", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Monturas.prototype, "costo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Monturas.prototype, "venta", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Sales; }, function (ventas) { return ventas.monturas; }),
        tslib_1.__metadata("design:type", _1.Sales)
    ], Monturas.prototype, "ventas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return ingreso_monturas_1.IngresoMonturas; }, function (ingreso) { return ingreso.monturas; }),
        tslib_1.__metadata("design:type", ingreso_monturas_1.IngresoMonturas)
    ], Monturas.prototype, "ingreso", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "enmovimiento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "tope", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 1 }),
        tslib_1.__metadata("design:type", String)
    ], Monturas.prototype, "estado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return shop_1.Shop; }, function (tienda) { return tienda.monturas; }),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Monturas.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Monturas.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Monturas.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return detalleinventario_1.Detalleinventario; }, function (detalleinv) { return detalleinv.monturas; }),
        tslib_1.__metadata("design:type", detalleinventario_1.Detalleinventario)
    ], Monturas.prototype, "detalleinv", void 0);
    Monturas = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'monturas' })
    ], Monturas);
    return Monturas;
}());
exports.Monturas = Monturas;
