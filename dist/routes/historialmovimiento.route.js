"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var historialmovimiento_controller_1 = require("../controllers/historialmovimiento.controller");
var router = (0, express_1.Router)();
router.post('/historialmovimiento', historialmovimiento_controller_1.createHistorialmovimientoTienda);
router.get('/historialmovimiento', historialmovimiento_controller_1.listaHistorialmovimiento);
exports.default = router;
