"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var validators_1 = require("../validators");
var dioptrias_1 = require("./dioptrias");
var sales_1 = require("./sales");
var CTipoDocument;
(function (CTipoDocument) {
    CTipoDocument["dni"] = "dni";
    CTipoDocument["ruc"] = "ruc";
    CTipoDocument["ce"] = "carnet de extranjeria";
    CTipoDocument["pasaporte"] = "pasaporte";
})(CTipoDocument || (CTipoDocument = {}));
var Client = (function () {
    function Client() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Client.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Client.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "rz_social", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "direccion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "tipo_documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isDocumentPE)({ message: 'Ingrese un documento de identidad válido' }),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isPhoneNumber)({ message: 'Ingrese un número de telefono correcto' }),
        tslib_1.__metadata("design:type", Number)
    ], Client.prototype, "telefono", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Client.prototype, "observacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.clientes; }),
        tslib_1.__metadata("design:type", Array)
    ], Client.prototype, "ventas", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Client.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Client.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return dioptrias_1.Diotrias; }, function (diotrias) { return diotrias.paciente; }),
        tslib_1.__metadata("design:type", dioptrias_1.Diotrias)
    ], Client.prototype, "diotrias", void 0);
    Client = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'clientes' })
    ], Client);
    return Client;
}());
exports.Client = Client;
