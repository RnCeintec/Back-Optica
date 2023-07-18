"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client_factura_controller_1 = require("../controllers/client_factura.controller");
var router = (0, express_1.Router)();
router.post('/client_factura', client_factura_controller_1.createClient);
router.put('/client_factura/:id', client_factura_controller_1.updateClient);
router.delete('/client_factura/:id', client_factura_controller_1.deleteClient);
router.get('/client_factura', client_factura_controller_1.listClient);
router.get('/client_factura/:id', client_factura_controller_1.searchClient);
exports.default = router;