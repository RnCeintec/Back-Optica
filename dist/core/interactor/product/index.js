"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductInteractor = exports.updateProductInteractor = exports.createProductInteractor = void 0;
var product_interactor_1 = require("./product.interactor");
var product_datasource_1 = require("../../datasource/product.datasource");
var productRepository = new product_datasource_1.ProductTypeORM();
exports.createProductInteractor = (0, product_interactor_1.createProduct)(productRepository);
exports.updateProductInteractor = (0, product_interactor_1.updateProduct)(productRepository);
exports.deleteProductInteractor = (0, product_interactor_1.deleteProduct)(productRepository);
