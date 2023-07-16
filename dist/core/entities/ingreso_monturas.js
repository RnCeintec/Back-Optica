"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoMonturas = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var monturas_1 = require("./monturas");
var proveedor_1 = require("./proveedor");
var IngresoMonturas = (function () {
    function IngresoMonturas() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], IngresoMonturas.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], IngresoMonturas.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Date)
    ], IngresoMonturas.prototype, "fecha", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], IngresoMonturas.prototype, "hora", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return proveedor_1.Proveedor; }, function (proveedor) { return proveedor.ingreso; }),
        tslib_1.__metadata("design:type", proveedor_1.Proveedor)
    ], IngresoMonturas.prototype, "proveedor", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], IngresoMonturas.prototype, "documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], IngresoMonturas.prototype, "numero_documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], IngresoMonturas.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], IngresoMonturas.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return monturas_1.Monturas; }, function (monturas) { return monturas.ingreso; }),
        tslib_1.__metadata("design:type", monturas_1.Monturas)
    ], IngresoMonturas.prototype, "monturas", void 0);
    IngresoMonturas = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'ingreso_monturas' })
    ], IngresoMonturas);
    return IngresoMonturas;
}());
exports.IngresoMonturas = IngresoMonturas;
