"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = require("../controllers/product.controller");
var router = (0, express_1.Router)();
router.post('/accesorios', product_controller_1.createProduct);
router.put('/accesorios/:id', product_controller_1.updateProduct);
router.delete('/accesorios/:id', product_controller_1.deleteProduct);
router.get('/accesorios', product_controller_1.listProducts);
router.get('/accesoriosVenta', product_controller_1.listProductsParaVenta);
router.get('/accesorios/:id', product_controller_1.searchProduct);
exports.default = router;
