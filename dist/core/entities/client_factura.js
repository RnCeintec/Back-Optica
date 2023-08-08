"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFactura = void 0;
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
var ClientFactura = (function () {
    function ClientFactura() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], ClientFactura.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], ClientFactura.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.clientesFactura; }),
        tslib_1.__metadata("design:type", Array)
    ], ClientFactura.prototype, "ventas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], ClientFactura.prototype, "rz_social", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], ClientFactura.prototype, "direccion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], ClientFactura.prototype, "tipo_documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isDocumentPE)({ message: 'Ingrese un documento de identidad válido' }),
        tslib_1.__metadata("design:type", String)
    ], ClientFactura.prototype, "documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isPhoneNumber)({ message: 'Ingrese un número de telefono correcto' }),
        tslib_1.__metadata("design:type", Number)
    ], ClientFactura.prototype, "telefono", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ClientFactura.prototype, "observacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], ClientFactura.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], ClientFactura.prototype, "fecha_actualizacion", void 0);
    ClientFactura = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'clientes_factura' })
    ], ClientFactura);
    return ClientFactura;
}());
exports.ClientFactura = ClientFactura;
