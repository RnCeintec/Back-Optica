"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var monturas_controller_1 = require("../controllers/monturas.controller");
var router = (0, express_1.Router)();
router.post('/monturas', monturas_controller_1.createMonturas);
router.put('/monturas/:id', monturas_controller_1.updateMonturas);
router.delete('/monturas/:id', monturas_controller_1.deleteMontura);
router.get('/monturas', monturas_controller_1.listMonturas);
router.get('/ultimaMonturas', monturas_controller_1.ultimaMontura);
router.get('/monturasventa', monturas_controller_1.listMonturasSinComprar);
router.get('/MonturasCompleta', monturas_controller_1.listCompletaMonturas);
router.get('/monturas/:id', monturas_controller_1.searchMontura);
exports.default = router;