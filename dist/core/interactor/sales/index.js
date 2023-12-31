"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSalestInteractor = exports.updateSalesInteractor = exports.validarStockSalestInteractor = exports.createSalesDetailstInteractor = exports.createSalestInteractor = void 0;
var sales_interactor_1 = require("./sales.interactor");
var sales_datasource_1 = require("../../datasource/sales.datasource");
var salesRepository = new sales_datasource_1.SalesTypeORM();
exports.createSalestInteractor = (0, sales_interactor_1.createSales)(salesRepository);
exports.createSalesDetailstInteractor = (0, sales_interactor_1.createDetailSales)(salesRepository);
exports.validarStockSalestInteractor = (0, sales_interactor_1.validateStock)(salesRepository);
exports.updateSalesInteractor = (0, sales_interactor_1.updateSales)(salesRepository);
exports.deleteSalestInteractor = (0, sales_interactor_1.deleteSales)(salesRepository);
