"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Parameters = (function () {
    function Parameters() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Parameters.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Parameters.prototype, "tipo_comprobante", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Parameters.prototype, "correlativo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], Parameters.prototype, "estado", void 0);
    Parameters = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "parametros" })
    ], Parameters);
    return Parameters;
}());
exports.Parameters = Parameters;
