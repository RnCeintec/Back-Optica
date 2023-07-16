"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesDetails = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var sales_1 = require("./sales");
var SalesDetails = (function () {
    function SalesDetails() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], SalesDetails.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], SalesDetails.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], SalesDetails.prototype, "cantidad", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], SalesDetails.prototype, "salePrice", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], SalesDetails.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], SalesDetails.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return sales_1.Sales; }, function (ventas) { return ventas.salesDetails; }),
        tslib_1.__metadata("design:type", sales_1.Sales)
    ], SalesDetails.prototype, "ventas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: null }),
        tslib_1.__metadata("design:type", String)
    ], SalesDetails.prototype, "tipo_producto", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: null }),
        tslib_1.__metadata("design:type", String)
    ], SalesDetails.prototype, "nombre_producto", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], SalesDetails.prototype, "id_producto", void 0);
    SalesDetails = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "venta_detallle" })
    ], SalesDetails);
    return SalesDetails;
}());
exports.SalesDetails = SalesDetails;
