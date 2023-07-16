"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var validators_1 = require("../validators");
var sales_1 = require("./sales");
var EUserRole;
(function (EUserRole) {
    EUserRole["admin"] = "admin";
    EUserRole["vendedor"] = "vendedor";
    EUserRole["optometra"] = "optometra";
    EUserRole["mensajero"] = "mensajero";
    EUserRole["laboratorio"] = "laboratorio";
})(EUserRole || (EUserRole = {}));
var CTipoDocument;
(function (CTipoDocument) {
    CTipoDocument[""] = "";
    CTipoDocument["dni"] = "dni";
    CTipoDocument["ruc"] = "ruc";
    CTipoDocument["ce"] = "carnet de extranjeria";
    CTipoDocument["pasaporte"] = "pasaporte";
})(CTipoDocument || (CTipoDocument = {}));
var User = (function () {
    function User() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], User.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "nombre", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, validators_1.isDocumentPE)({ message: "Ingrese un documento de identidad válido" }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "documento", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "username", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "password", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: EUserRole.admin }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "role", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], User.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], User.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_1.Sales; }, function (ventas) { return ventas.user; }),
        tslib_1.__metadata("design:type", Array)
    ], User.prototype, "ventas", void 0);
    User = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "user" })
    ], User);
    return User;
}());
exports.User = User;
