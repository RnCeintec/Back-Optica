"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var factura_controller_1 = require("../controllers/factura.controller");
var validateUser_1 = tslib_1.__importDefault(require("../security/validateUser"));
var router = (0, express_1.Router)();
router.get('/facturas', [validateUser_1.default], factura_controller_1.listFacturas);
router.put('/anular/:id', [validateUser_1.default], factura_controller_1.anularFactura);
exports.default = router;
