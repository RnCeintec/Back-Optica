"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var user_router_1 = tslib_1.__importDefault(require("./user.router"));
var auth_route_1 = tslib_1.__importDefault(require("./auth.route"));
var product_route_1 = tslib_1.__importDefault(require("./product.route"));
var client_route_1 = tslib_1.__importDefault(require("./client.route"));
var client_factura_route_1 = tslib_1.__importDefault(require("./client_factura.route"));
var sales_route_1 = tslib_1.__importDefault(require("./sales.route"));
var pymentTypes_route_1 = tslib_1.__importDefault(require("./pymentTypes.route"));
var shop_route_1 = tslib_1.__importDefault(require("./shop.route"));
var dashboar_route_1 = tslib_1.__importDefault(require("./dashboar.route"));
var facturas_routes_1 = tslib_1.__importDefault(require("./facturas.routes"));
var color_routes_1 = tslib_1.__importDefault(require("./color.routes"));
var vendedor_route_1 = tslib_1.__importDefault(require("./vendedor.route"));
var monturas_route_1 = tslib_1.__importDefault(require("./monturas.route"));
var proveedor_route_1 = tslib_1.__importDefault(require("./proveedor.route"));
var laboratorio_route_1 = tslib_1.__importDefault(require("./laboratorio.route"));
var diotrias_route_1 = tslib_1.__importDefault(require("./diotrias.route"));
exports.default = (function (_a) {
    var app = _a.app, version = _a.version;
    app.use(version, user_router_1.default);
    app.use(version, auth_route_1.default);
    app.use(version, product_route_1.default);
    app.use(version, client_route_1.default);
    app.use(version, sales_route_1.default);
    app.use(version, pymentTypes_route_1.default);
    app.use(version, shop_route_1.default);
    app.use(version, dashboar_route_1.default);
    app.use(version, vendedor_route_1.default);
    app.use(version, facturas_routes_1.default);
    app.use(version, monturas_route_1.default);
    app.use(version, proveedor_route_1.default);
    app.use(version, laboratorio_route_1.default);
    app.use(version, client_factura_route_1.default);
    app.use(version, diotrias_route_1.default);
    app.use(version, color_routes_1.default);
});
