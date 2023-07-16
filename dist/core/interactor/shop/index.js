"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShopInteractor = exports.updateShopInteractor = exports.createShopInteractor = void 0;
var shop_interactor_1 = require("./shop.interactor");
var shop_datasource_1 = require("../../datasource/shop.datasource");
var shopRepository = new shop_datasource_1.ShopTypeORM();
exports.createShopInteractor = (0, shop_interactor_1.createShop)(shopRepository);
exports.updateShopInteractor = (0, shop_interactor_1.updateShop)(shopRepository);
exports.deleteShopInteractor = (0, shop_interactor_1.deleteShop)(shopRepository);
