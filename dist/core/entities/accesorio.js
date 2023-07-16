"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accesorio = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Accesorio = (function () {
    function Accesorio() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Accesorio.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Accesorio.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Accesorio.prototype, "codigo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Accesorio.prototype, "descripcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Accesorio.prototype, "precio_compra", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Accesorio.prototype, "precio_sugerido", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Accesorio.prototype, "precio_minimo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Accesorio.prototype, "stock", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Accesorio.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Accesorio.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Accesorio.prototype, "fecha_vencimiento", void 0);
    Accesorio = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'accesorio' })
    ], Accesorio);
    return Accesorio;
}());
exports.Accesorio = Accesorio;
