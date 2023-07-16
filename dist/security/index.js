"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.laboratorio = exports.proveedor = exports.vendedor = exports.facturas = exports.dashboard = exports.pymentTypes = exports.sales = exports.client = exports.category = exports.color = exports.token = exports.product = exports.user = exports.validateToken = void 0;
var validateUser_1 = require("./validateUser");
Object.defineProperty(exports, "validateToken", { enumerable: true, get: function () { return __importDefault(validateUser_1).default; } });
var user_1 = require("./user");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
var product_1 = require("./product");
Object.defineProperty(exports, "product", { enumerable: true, get: function () { return __importDefault(product_1).default; } });
var token_1 = require("./token");
Object.defineProperty(exports, "token", { enumerable: true, get: function () { return __importDefault(token_1).default; } });
var color_1 = require("./color");
Object.defineProperty(exports, "color", { enumerable: true, get: function () { return __importDefault(color_1).default; } });
var category_1 = require("./category");
Object.defineProperty(exports, "category", { enumerable: true, get: function () { return __importDefault(category_1).default; } });
var client_1 = require("./client");
Object.defineProperty(exports, "client", { enumerable: true, get: function () { return __importDefault(client_1).default; } });
var sales_1 = require("./sales");
Object.defineProperty(exports, "sales", { enumerable: true, get: function () { return __importDefault(sales_1).default; } });
var pymentTypes_1 = require("./pymentTypes");
Object.defineProperty(exports, "pymentTypes", { enumerable: true, get: function () { return __importDefault(pymentTypes_1).default; } });
var dashboard_1 = require("./dashboard");
Object.defineProperty(exports, "dashboard", { enumerable: true, get: function () { return __importDefault(dashboard_1).default; } });
var facturas_1 = require("./facturas");
Object.defineProperty(exports, "facturas", { enumerable: true, get: function () { return __importDefault(facturas_1).default; } });
var vendedor_1 = require("./vendedor");
Object.defineProperty(exports, "vendedor", { enumerable: true, get: function () { return __importDefault(vendedor_1).default; } });
var proveedor_1 = require("./proveedor");
Object.defineProperty(exports, "proveedor", { enumerable: true, get: function () { return __importDefault(proveedor_1).default; } });
var laboratorio_1 = require("./laboratorio");
Object.defineProperty(exports, "laboratorio", { enumerable: true, get: function () { return __importDefault(laboratorio_1).default; } });
var upload_1 = require("./upload");
Object.defineProperty(exports, "upload", { enumerable: true, get: function () { return __importDefault(upload_1).default; } });
