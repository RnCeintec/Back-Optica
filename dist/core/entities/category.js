"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var product_1 = require("./product");
var Category = (function () {
    function Category() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Category.prototype, "descripcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Category.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Category.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Category.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToMany)(function () { return product_1.Product; }, function (product) { return product.category; }),
        tslib_1.__metadata("design:type", Array)
    ], Category.prototype, "product", void 0);
    Category = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'categoria' })
    ], Category);
    return Category;
}());
exports.Category = Category;
