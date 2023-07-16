"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var Color = (function () {
    function Color() {
    }
    tslib_1.__decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        tslib_1.__metadata("design:type", Number)
    ], Color.prototype, "id", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)({ default: true }),
        tslib_1.__metadata("design:type", Boolean)
    ], Color.prototype, "isActive", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Color.prototype, "codigo", void 0);
    tslib_1.__decorate([
        (0, typeorm_1.Column)(),
        tslib_1.__metadata("design:type", String)
    ], Color.prototype, "color", void 0);
    Color = tslib_1.__decorate([
        (0, typeorm_1.Entity)({ name: "color" })
    ], Color);
    return Color;
}());
exports.Color = Color;
