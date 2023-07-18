"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var dioptrias_1 = require("./dioptrias");
var monturas_1 = require("./monturas");
var historialinventario_1 = require("./historialinventario");
var sales_1 = require("./sales");
var Shop = (function () {
    function Shop() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Shop.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Shop.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "nombre", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "direccion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "telefono", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "correo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "num_documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "eslogan", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "ciudad", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.shop; }),
        tslib_1.__metadata("design:type", Array)
    ], Shop.prototype, "ventas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Shop.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Shop.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "rz_social", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Shop.prototype, "codDomicilioFiscal", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return monturas_1.Monturas; }, function (monturas) { return monturas.tienda; }),
        tslib_1.__metadata("design:type", Array)
    ], Shop.prototype, "monturas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return historialinventario_1.Historialinventario; }, function (historialinventario) { return historialinventario.tienda; }),
        tslib_1.__metadata("design:type", Array)
    ], Shop.prototype, "historialinventarios", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return dioptrias_1.Diotrias; }, function (diotrias) { return diotrias.tienda; }),
        tslib_1.__metadata("design:type", dioptrias_1.Diotrias)
    ], Shop.prototype, "diotrias", void 0);
    Shop = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "local" })
    ], Shop);
    return Shop;
}());
exports.Shop = Shop;
