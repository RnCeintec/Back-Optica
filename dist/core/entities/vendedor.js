"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var validators_1 = require("../validators");
var sales_1 = require("./sales");
var CTipoDocument;
(function (CTipoDocument) {
    CTipoDocument["dni"] = "dni";
    CTipoDocument["ruc"] = "ruc";
    CTipoDocument["ce"] = "carnet de extranjeria";
    CTipoDocument["pasaporte"] = "pasaporte";
})(CTipoDocument || (CTipoDocument = {}));
var Vendedor = (function () {
    function Vendedor() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Vendedor.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Vendedor.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "nombres", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "direccion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "curriculum", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "foto", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "recibo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "comentario", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "contrato", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", Date)
    ], Vendedor.prototype, "fecha_ingreso", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", Date)
    ], Vendedor.prototype, "fecha_salida", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "tipo_documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isDocumentPE)({ message: "Ingrese un documento de identidad válido" }),
        tslib_1.__metadata("design:type", String)
    ], Vendedor.prototype, "documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isPhoneNumber)({ message: "Ingrese un número de telefono correcto" }),
        tslib_1.__metadata("design:type", Number)
    ], Vendedor.prototype, "telefono", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        (0, validators_1.isPhoneNumber)({ message: "Ingrese un número de telefono correcto" }),
        tslib_1.__metadata("design:type", Number)
    ], Vendedor.prototype, "telefono_referencia", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Vendedor.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Vendedor.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.clientes; }),
        tslib_1.__metadata("design:type", Array)
    ], Vendedor.prototype, "ventas", void 0);
    Vendedor = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "vendedor" })
    ], Vendedor);
    return Vendedor;
}());
exports.Vendedor = Vendedor;
