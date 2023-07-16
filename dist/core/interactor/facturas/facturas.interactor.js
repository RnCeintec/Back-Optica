"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anularFactura = void 0;
var tslib_1 = require("tslib");
var anularFactura = function (facturasRepository) { return function (factura) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, facturasRepository.anularFactura(factura)];
}); }); }; };
exports.anularFactura = anularFactura;
