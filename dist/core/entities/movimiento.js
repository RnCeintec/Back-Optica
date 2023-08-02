"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimiento = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Movimiento = (function () {
    function Movimiento() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Movimiento.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Movimiento.prototype, "fecha", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "responsable", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "recepcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "estado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "ruc", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "razonsocial", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "nrodocumento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Movimiento.prototype, "fechafacturacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Movimiento.prototype, "idusuarioenvio", void 0);
    Movimiento = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'movimiento' })
    ], Movimiento);
    return Movimiento;
}());
exports.Movimiento = Movimiento;
