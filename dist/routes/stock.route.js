"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stock_controller_1 = require("../controllers/stock.controller");
var router = (0, express_1.Router)();
router.get('Stock', stock_controller_1.listaStock);
router.post('Stock', stock_controller_1.createStock);
exports.default = router;
