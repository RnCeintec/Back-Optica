"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiotriasIds = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var DiotriasIds = (function () {
    function DiotriasIds() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], DiotriasIds.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], DiotriasIds.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return _1.Diotrias; }, function (diotrias) { return diotrias.diotria_id; }),
        tslib_1.__metadata("design:type", _1.Diotrias)
    ], DiotriasIds.prototype, "diotrias", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", Number)
    ], DiotriasIds.prototype, "total", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], DiotriasIds.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], DiotriasIds.prototype, "fecha_actualizacion", void 0);
    DiotriasIds = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'diotrias_ids' })
    ], DiotriasIds);
    return DiotriasIds;
}());
exports.DiotriasIds = DiotriasIds;
