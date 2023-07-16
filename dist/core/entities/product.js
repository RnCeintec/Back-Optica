"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var category_1 = require("./category");
var salesDetails_1 = require("./salesDetails");
var PState;
(function (PState) {
    PState["anulado"] = "anulado";
    PState["pagado"] = "pagado";
})(PState || (PState = {}));
var Product = (function () {
    function Product() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_1.Category; }, function (category) { return category.product; }),
        tslib_1.__metadata("design:type", category_1.Category)
    ], Product.prototype, "category", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.OneToOne)(function () { return salesDetails_1.SalesDetails; }, function (salesDetails) { return salesDetails.product; }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "salesDetails", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Product.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Product.prototype, "codigo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Product.prototype, "descripcion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "precio_compra", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "precio_sugerido", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "precio_minimo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Product.prototype, "stock", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Product.prototype, "fecha_creacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.UpdateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Product.prototype, "fecha_actualizacion", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.CreateDateColumn)(),
        tslib_1.__metadata("design:type", Date)
    ], Product.prototype, "fecha_vencimiento", void 0);
    Product = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: 'product' })
    ], Product);
    return Product;
}());
exports.Product = Product;
