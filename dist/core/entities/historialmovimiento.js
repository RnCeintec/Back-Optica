"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historialmovimiento = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var shop_1 = require("./shop");
var Historialmovimiento = (function () {
    function Historialmovimiento() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialmovimiento.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialmovimiento.prototype, "monturasId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return _1.Monturas; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", _1.Monturas)
    ], Historialmovimiento.prototype, "monturas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Historialmovimiento.prototype, "fecha", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Historialmovimiento.prototype, "indicador", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Historialmovimiento.prototype, "tiendaId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return shop_1.Shop; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Historialmovimiento.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Historialmovimiento.prototype, "comentario", void 0);
    Historialmovimiento = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'historialmovimiento' })
    ], Historialmovimiento);
    return Historialmovimiento;
}());
exports.Historialmovimiento = Historialmovimiento;
