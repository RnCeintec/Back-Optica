"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoP = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var shop_1 = require("./shop");
var _1 = require(".");
var MovimientoP = (function () {
    function MovimientoP() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], MovimientoP.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], MovimientoP.prototype, "fecha", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], MovimientoP.prototype, "tiendaId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return shop_1.Shop; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], MovimientoP.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", Number)
    ], MovimientoP.prototype, "userId", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)((function (type) { return _1.User; })),
        (0, typeorm_1.JoinColumn)(),
        tslib_1.__metadata("design:type", _1.User)
    ], MovimientoP.prototype, "user", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], MovimientoP.prototype, "estado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.DetalleMovimientoP; }, function (mov) { return mov.movimiento; }),
        tslib_1.__metadata("design:type", Array)
    ], MovimientoP.prototype, "detallesmovimientop", void 0);
    MovimientoP = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'movimientop' })
    ], MovimientoP);
    return MovimientoP;
}());
exports.MovimientoP = MovimientoP;
