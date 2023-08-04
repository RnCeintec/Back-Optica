"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var movimiento_controller_1 = require("../controllers/movimiento.controller");
var router = (0, express_1.Router)();
router.get('/movimientomontura', movimiento_controller_1.listamovimiento);
router.post('/movimientomontura', movimiento_controller_1.createmovimiento);
router.get('/movimientomontura/:id', movimiento_controller_1.searchMovimiento);
exports.default = router;
