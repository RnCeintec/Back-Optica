"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laboratorio = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var dioptrias_1 = require("./dioptrias");
var Laboratorio = (function () {
    function Laboratorio() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Laboratorio.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Laboratorio.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Laboratorio.prototype, "prodlab", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 1 }),
        tslib_1.__metadata("design:type", Number)
    ], Laboratorio.prototype, "nivel", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Laboratorio.prototype, "padre", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Boolean)
    ], Laboratorio.prototype, "comisionable", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Laboratorio.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Laboratorio.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return dioptrias_1.Diotrias; }, function (diotrias) { return diotrias.laboratorio; }),
        tslib_1.__metadata("design:type", dioptrias_1.Diotrias)
    ], Laboratorio.prototype, "diotrias", void 0);
    Laboratorio = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "productolaboratorio" })
    ], Laboratorio);
    return Laboratorio;
}());
exports.Laboratorio = Laboratorio;
