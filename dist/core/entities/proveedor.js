"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var ingreso_monturas_1 = require("./ingreso_monturas");
var Proveedor = (function () {
    function Proveedor() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Proveedor.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Proveedor.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "razonsocial", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "ruc", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "direccion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "telefono", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "contacto", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "celular", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Proveedor.prototype, "comentario", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Proveedor.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Proveedor.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return ingreso_monturas_1.IngresoMonturas; }, function (ingreso) { return ingreso.proveedor; }),
        tslib_1.__metadata("design:type", ingreso_monturas_1.IngresoMonturas)
    ], Proveedor.prototype, "ingreso", void 0);
    Proveedor = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'proveedor' })
    ], Proveedor);
    return Proveedor;
}());
exports.Proveedor = Proveedor;
