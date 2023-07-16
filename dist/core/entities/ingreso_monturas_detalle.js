"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoMonturasDetalle = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var IngresoMonturasDetalle = (function () {
    function IngresoMonturasDetalle() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], IngresoMonturasDetalle.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], IngresoMonturasDetalle.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], IngresoMonturasDetalle.prototype, "idmontura", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], IngresoMonturasDetalle.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], IngresoMonturasDetalle.prototype, "fecha_actualizacion", void 0);
    IngresoMonturasDetalle = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'ingreso_monturas_detalle' })
    ], IngresoMonturasDetalle);
    return IngresoMonturasDetalle;
}());
exports.IngresoMonturasDetalle = IngresoMonturasDetalle;
