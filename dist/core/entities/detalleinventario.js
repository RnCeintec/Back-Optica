"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detalleinventario = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var historialinventario_1 = require("./historialinventario");
var Detalleinventario = (function () {
    function Detalleinventario() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Detalleinventario.prototype, "iddetalle", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return historialinventario_1.Historialinventario; }, function (historialinv) { return historialinv.detalleinv; }),
        tslib_1.__metadata("design:type", historialinventario_1.Historialinventario)
    ], Detalleinventario.prototype, "historialinventario", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", Number)
    ], Detalleinventario.prototype, "monturasId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return _1.Monturas; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", _1.Monturas)
    ], Detalleinventario.prototype, "monturas", void 0);
    Detalleinventario = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'detalleinventario' })
    ], Detalleinventario);
    return Detalleinventario;
}());
exports.Detalleinventario = Detalleinventario;
