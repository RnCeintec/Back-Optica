"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var movimientop_controller_1 = require("../controllers/movimientop.controller");
var router = (0, express_1.Router)();
router.get('/movimientoproducto', movimientop_controller_1.listamovimientop);
router.get('/movimientoproductoventas', movimientop_controller_1.listmovimientoventasp);
router.post('/movimientoproducto', movimientop_controller_1.createmovimientop);
router.post('/movimientoproductoventas', movimientop_controller_1.recibirMovimientop);
router.get('/movimientoproducto/:id', movimientop_controller_1.searchMovimientop);
router.delete('/movimientoproducto/:id', movimientop_controller_1.deleteMovimientop);
exports.default = router;
