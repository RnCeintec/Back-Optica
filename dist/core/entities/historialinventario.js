"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historialinventario = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var shop_1 = require("./shop");
var detalleinventario_1 = require("./detalleinventario");
var Historialinventario = (function () {
    function Historialinventario() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialinventario.prototype, "idhistorial", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Historialinventario.prototype, "fecha", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialinventario.prototype, "total", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialinventario.prototype, "totalfaltantes", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialinventario.prototype, "totalverificados", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return shop_1.Shop; }, function (tienda) { return tienda.historialinventarios; }),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Historialinventario.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return detalleinventario_1.Detalleinventario; }, function (detalleinv) { return detalleinv.historialinventario; }),
        tslib_1.__metadata("design:type", detalleinventario_1.Detalleinventario)
    ], Historialinventario.prototype, "detalleinv", void 0);
    Historialinventario = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'historialinventario' })
    ], Historialinventario);
    return Historialinventario;
}());
exports.Historialinventario = Historialinventario;
