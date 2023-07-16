"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductInteractor = exports.updateProductInteractor = exports.createProductInteractor = void 0;
var accesorio_interactor_1 = require("./accesorio.interactor");
var product_datasource_1 = require("../../datasource/product.datasource");
var productRepository = new product_datasource_1.ProductTypeORM();
exports.createProductInteractor = (0, accesorio_interactor_1.createAccesorio)(productRepository);
exports.updateProductInteractor = (0, accesorio_interactor_1.updateAccesorio)(productRepository);
exports.deleteProductInteractor = (0, accesorio_interactor_1.deleteAccesorio)(productRepository);
