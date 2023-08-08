"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facturas = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var sales_1 = require("./sales");
var ETipoComprobante;
(function (ETipoComprobante) {
    ETipoComprobante["ticket"] = "ticket";
    ETipoComprobante["boleta"] = "boleta";
    ETipoComprobante["factura"] = "factura";
    ETipoComprobante["nota"] = "nota";
})(ETipoComprobante || (ETipoComprobante = {}));
var EsComprobante;
(function (EsComprobante) {
    EsComprobante["pendiente"] = "pendiente";
    EsComprobante["enviado"] = "enviado";
})(EsComprobante || (EsComprobante = {}));
var Facturas = (function () {
    function Facturas() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Facturas.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "numero_comprobante", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "tipo_comprobante", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: EsComprobante.pendiente }),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "estado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "respuesta", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "motivo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Facturas.prototype, "fecha_envio", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Facturas.prototype, "is_nota", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "codigo_anulado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Facturas.prototype, "observaciones", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Facturas.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Facturas.prototype, "total", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Facturas.prototype, "igv", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Facturas.prototype, "subtotal", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return sales_1.Sales; }, function (ventas) { return ventas.facturas; }),
        tslib_1.__metadata("design:type", sales_1.Sales)
    ], Facturas.prototype, "ventas", void 0);
    Facturas = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "facturas_sunat" })
    ], Facturas);
    return Facturas;
}());
exports.Facturas = Facturas;
