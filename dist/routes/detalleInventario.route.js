"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var detalleinventario_controller_1 = require("../controllers/detalleinventario.controller");
var router = (0, express_1.Router)();
router.post('/Historialinventario', detalleinventario_controller_1.createHistorialinventario);
router.post('/Detalleinventario', detalleinventario_controller_1.createDetalleinventario);
router.get('/MonturasInventario', detalleinventario_controller_1.listaInventario);
exports.default = router;
