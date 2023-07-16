"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diotrias = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var client_1 = require("./client");
var diotrias_ids_1 = require("./diotrias_ids");
var laboratorio_1 = require("./laboratorio");
var shop_1 = require("./shop");
var Diotrias = (function () {
    function Diotrias() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Diotrias.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Diotrias.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "descripcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return client_1.Client; }, function (paciente) { return paciente.diotrias; }),
        tslib_1.__metadata("design:type", client_1.Client)
    ], Diotrias.prototype, "paciente", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "ojo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return laboratorio_1.Laboratorio; }, function (laboratorio) { return laboratorio.diotrias; }, { nullable: true }),
        tslib_1.__metadata("design:type", laboratorio_1.Laboratorio)
    ], Diotrias.prototype, "laboratorio", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "esf", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "cil", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "eje", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Diotrias.prototype, "precio", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "dip", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "add", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "vision", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Diotrias.prototype, "receta", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return shop_1.Shop; }, function (tienda) { return tienda.diotrias; }),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Diotrias.prototype, "tienda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.Sales; }, function (venta) { return venta.diotrias; }, { nullable: true }),
        tslib_1.__metadata("design:type", _1.Sales)
    ], Diotrias.prototype, "venta", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return diotrias_ids_1.DiotriasIds; }, function (diotria_id) { return diotria_id.diotrias; }, { nullable: true }),
        tslib_1.__metadata("design:type", diotrias_ids_1.DiotriasIds)
    ], Diotrias.prototype, "diotria_id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Diotrias.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Diotrias.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 1 }),
        tslib_1.__metadata("design:type", Number)
    ], Diotrias.prototype, "estado", void 0);
    Diotrias = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'diotrias' })
    ], Diotrias);
    return Diotrias;
}());
exports.Diotrias = Diotrias;
