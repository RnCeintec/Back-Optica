"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PymentType = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var sales_1 = require("./sales");
var PymentType = (function () {
    function PymentType() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], PymentType.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], PymentType.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], PymentType.prototype, "nombre", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], PymentType.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], PymentType.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.pymentTypes; }),
        tslib_1.__metadata("design:type", Array)
    ], PymentType.prototype, "ventas", void 0);
    PymentType = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'tipo_pago' })
    ], PymentType);
    return PymentType;
}());
exports.PymentType = PymentType;
