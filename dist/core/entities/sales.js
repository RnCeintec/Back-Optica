"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var client_factura_1 = require("./client_factura");
var client_1 = require("./client");
var vendedor_1 = require("./vendedor");
var _1 = require(".");
var shop_1 = require("./shop");
var pymentTypes_1 = require("./pymentTypes");
var salesDetails_1 = require("./salesDetails");
var facturas_1 = require("./facturas");
var monturas_1 = require("./monturas");
var dioptrias_1 = require("./dioptrias");
var STipoMoneda;
(function (STipoMoneda) {
    STipoMoneda["PEN"] = "PEN";
    STipoMoneda["USD"] = "USD";
})(STipoMoneda || (STipoMoneda = {}));
var ETipoPago;
(function (ETipoPago) {
    ETipoPago["Efectivo"] = "Efectivo";
    ETipoPago["Yape"] = "Yape";
    ETipoPago["Plin"] = "Plin";
    ETipoPago["Tarjeta"] = "Tarjeta";
    ETipoPago["Transferencia"] = "Transferencia";
})(ETipoPago || (ETipoPago = {}));
var EsPago;
(function (EsPago) {
    EsPago["pagado"] = "pagado";
    EsPago["anulado"] = "anulado";
})(EsPago || (EsPago = {}));
var ETipoComprobante;
(function (ETipoComprobante) {
    ETipoComprobante["ticket"] = "ticket";
    ETipoComprobante["boleta"] = "boleta";
    ETipoComprobante["factura"] = "factura";
    ETipoComprobante["nota"] = "nota";
})(ETipoComprobante || (ETipoComprobante = {}));
var Sales = (function () {
    function Sales() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Sales.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: ETipoComprobante.ticket }),
        tslib_1.__metadata("design:type", String)
    ], Sales.prototype, "tipo_comprobante", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Sales.prototype, "comprobante", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return pymentTypes_1.PymentType; }, function (pymentTypes) { return pymentTypes.ventas; }),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "pymentTypes", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: STipoMoneda.PEN }),
        tslib_1.__metadata("design:type", String)
    ], Sales.prototype, "tipo_moneda", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "efectivo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "total", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "igv", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Sales.prototype, "subtotal", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: EsPago.pagado }),
        tslib_1.__metadata("design:type", String)
    ], Sales.prototype, "estado", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Sales.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Sales.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return salesDetails_1.SalesDetails; }, function (salesDetails) { return salesDetails.ventas; }),
        tslib_1.__metadata("design:type", salesDetails_1.SalesDetails)
    ], Sales.prototype, "salesDetails", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return facturas_1.Facturas; }, function (facturas) { return facturas.ventas; }),
        tslib_1.__metadata("design:type", Array)
    ], Sales.prototype, "facturas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return client_factura_1.ClientFactura; }, function (clientesFactura) { return clientesFactura.ventas; }),
        tslib_1.__metadata("design:type", client_factura_1.ClientFactura)
    ], Sales.prototype, "clientesFactura", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return client_1.Client; }, function (clientes) { return clientes.ventas; }),
        tslib_1.__metadata("design:type", client_1.Client)
    ], Sales.prototype, "clientes", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return vendedor_1.Vendedor; }, function (vendedores) { return vendedores.ventas; }),
        tslib_1.__metadata("design:type", vendedor_1.Vendedor)
    ], Sales.prototype, "vendedores", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return _1.User; }, function (user) { return user.ventas; }),
        tslib_1.__metadata("design:type", _1.User)
    ], Sales.prototype, "user", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return shop_1.Shop; }, function (shop) { return shop.ventas; }),
        tslib_1.__metadata("design:type", shop_1.Shop)
    ], Sales.prototype, "shop", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return monturas_1.Monturas; }, function (monturas) { return monturas.ventas; }),
        tslib_1.__metadata("design:type", Array)
    ], Sales.prototype, "monturas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return dioptrias_1.Diotrias; }, function (diotrias) { return diotrias.venta; }),
        tslib_1.__metadata("design:type", dioptrias_1.Diotrias)
    ], Sales.prototype, "diotrias", void 0);
    Sales = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "ventas" })
    ], Sales);
    return Sales;
}());
exports.Sales = Sales;
