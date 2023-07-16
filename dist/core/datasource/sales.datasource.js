"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var sales_1 = require("../entities/sales");
var salesDetails_1 = require("../entities/salesDetails");
var accesorio_1 = require("../entities/accesorio");
var monturas_1 = require("../entities/monturas");
var dioptrias_1 = require("../entities/dioptrias");
var SalesTypeORM = (function () {
    function SalesTypeORM() {
    }
    SalesTypeORM.prototype.findSalestByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findOne({
                                where: { id: id },
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2];
                }
            });
        });
    };
    SalesTypeORM.prototype.createSales = function (sales) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findSalestByid(sales.id)];
                    case 1:
                        if (_a.sent())
                            throw "Venta ya registrada";
                        return [4, (0, typeorm_1.getRepository)(sales_1.Sales).save(sales)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    SalesTypeORM.prototype.createDetailSales = function (productos, result) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detalleVentas_1, sales, error_3;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        detalleVentas_1 = new salesDetails_1.SalesDetails();
                        productos.map(function (item) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var producto, detalle, producto, detalle, producto, detalle, detalle;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(item.category === "Accesorio")) return [3, 3];
                                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne({
                                                where: { id: item["id"], isActive: true },
                                            })];
                                    case 1:
                                        producto = _a.sent();
                                        if (!producto) {
                                            throw Error("Producto no existe");
                                        }
                                        detalleVentas_1.id_producto = item["id"];
                                        detalleVentas_1.cantidad = item["cantidad"];
                                        detalleVentas_1.salePrice = producto.precio_sugerido;
                                        detalleVentas_1.ventas = result;
                                        detalleVentas_1.tipo_producto = "Accesorio";
                                        detalleVentas_1.nombre_producto = item.producto;
                                        return [4, (0, typeorm_1.getRepository)(salesDetails_1.SalesDetails).save(detalleVentas_1)];
                                    case 2:
                                        detalle = _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        if (!(item.category === "Montura")) return [3, 6];
                                        return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({
                                                where: { id: item["id"], isActive: true },
                                            })];
                                    case 4:
                                        producto = _a.sent();
                                        if (!producto) {
                                            throw Error("Producto no existe");
                                        }
                                        detalleVentas_1.id_producto = item["id"];
                                        detalleVentas_1.cantidad = item["cantidad"];
                                        detalleVentas_1.salePrice = producto.venta;
                                        detalleVentas_1.ventas = result;
                                        detalleVentas_1.tipo_producto = "Montura";
                                        detalleVentas_1.nombre_producto = item.producto;
                                        return [4, (0, typeorm_1.getRepository)(salesDetails_1.SalesDetails).save(detalleVentas_1)];
                                    case 5:
                                        detalle = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        if (!(item.category === "Lunas")) return [3, 9];
                                        return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).findOne({
                                                where: { id: item.id, isActive: true },
                                            })];
                                    case 7:
                                        producto = _a.sent();
                                        if (!producto) {
                                            throw Error("Diotria no existe");
                                        }
                                        detalleVentas_1.id_producto = item["id"];
                                        detalleVentas_1.cantidad = item["cantidad"];
                                        detalleVentas_1.salePrice = +producto.precio;
                                        detalleVentas_1.ventas = result;
                                        detalleVentas_1.tipo_producto = "Luna";
                                        detalleVentas_1.nombre_producto = item.producto;
                                        return [4, (0, typeorm_1.getRepository)(salesDetails_1.SalesDetails).save(detalleVentas_1)];
                                    case 8:
                                        detalle = _a.sent();
                                        _a.label = 9;
                                    case 9:
                                        if (!(item.category === "Lunas C")) return [3, 11];
                                        detalleVentas_1.id_producto = 0;
                                        detalleVentas_1.cantidad = 1;
                                        detalleVentas_1.salePrice = 0;
                                        detalleVentas_1.ventas = result;
                                        detalleVentas_1.tipo_producto = "Luna C";
                                        detalleVentas_1.nombre_producto = item.producto;
                                        return [4, (0, typeorm_1.getRepository)(salesDetails_1.SalesDetails).save(detalleVentas_1)];
                                    case 10:
                                        detalle = _a.sent();
                                        _a.label = 11;
                                    case 11: return [2];
                                }
                            });
                        }); });
                        return [4, (0, typeorm_1.getRepository)(sales_1.Sales).find(result)];
                    case 1:
                        sales = (_a.sent())[0];
                        return [2, sales];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2];
                }
            });
        });
    };
    SalesTypeORM.prototype.updateSales = function (sales) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findSalesByid, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findSalestByid(sales.id)];
                    case 1:
                        findSalesByid = _a.sent();
                        if (findSalesByid !== undefined && sales.id !== findSalesByid.id) {
                            throw "Producto no registrado";
                        }
                        return [4, (0, typeorm_1.getRepository)(sales_1.Sales).save(sales)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 4: return [2];
                }
            });
        });
    };
    SalesTypeORM.prototype.deleteSales = function (sales) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sales.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(sales_1.Sales).save(sales)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    };
    SalesTypeORM.prototype.validateStock = function (_a) {
        var productos = _a.productos;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var productsAvailable_1, productsNotAvailable_1, productsFind_1, error_6;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        productsAvailable_1 = [];
                        productsNotAvailable_1 = [];
                        return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).find({
                                where: productos.map(function (product) {
                                    return { id: product.producto };
                                }),
                                relations: ["category"],
                            })];
                    case 1:
                        productsFind_1 = _b.sent();
                        productos.map(function (product) {
                            var productAvailable = productsFind_1.find(function (productFind) { return productFind.id === product.producto; });
                            if (!productAvailable) {
                                return undefined;
                            }
                            if (!productAvailable.isActive ||
                                productAvailable.stock <= 0 ||
                                productAvailable.stock < product.cantidad)
                                productsNotAvailable_1 = tslib_1.__spreadArray(tslib_1.__spreadArray([], productsNotAvailable_1, true), [productAvailable], false);
                            productsAvailable_1 = tslib_1.__spreadArray(tslib_1.__spreadArray([], productsAvailable_1, true), [productAvailable], false);
                            return productAvailable;
                        });
                        return [2, [productsAvailable_1, productsNotAvailable_1]];
                    case 2:
                        error_6 = _b.sent();
                        throw new Error(error_6);
                    case 3: return [2];
                }
            });
        });
    };
    return SalesTypeORM;
}());
exports.SalesTypeORM = SalesTypeORM;
