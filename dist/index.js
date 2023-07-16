"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = tslib_1.__importDefault(require("express"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var helmet_1 = tslib_1.__importDefault(require("helmet"));
var user_router_1 = tslib_1.__importDefault(require("./routes/user.router"));
var routes_1 = tslib_1.__importDefault(require("./routes"));
var multer_1 = tslib_1.__importDefault(require("multer"));
var config_1 = require("./config");
var middlewares_1 = require("./middlewares");
var security_1 = require("./security");
var app = (0, express_1.default)();
var main = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var storage, upload;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, typeorm_1.createConnection)({
                    type: "mysql",
                    host: config_1.DB_SERVER,
                    port: config_1.DB_PORT,
                    username: config_1.DB_USERNAME,
                    password: config_1.DB_PASSWORD,
                    database: config_1.DB_DATABASE,
                    synchronize: true,
                    logging: false,
                    entities: ["dist/core/entities/**/*.js"],
                    charset: "utf8mb4_spanish2_ci",
                    timezone: "America/Lima",
                })];
            case 1:
                _a.sent();
                app.use(express_1.default.json());
                app.use(express_1.default.urlencoded({ extended: true }));
                app.use((0, cors_1.default)());
                app.use((0, helmet_1.default)());
                app.set("trust proxy", true);
                app.use(middlewares_1.control);
                app.use(middlewares_1.trim);
                app.use(express_1.default.static("./upload"));
                app.use(security_1.token);
                app.use(security_1.user);
                app.use(security_1.product);
                app.use(security_1.category);
                app.use(security_1.client);
                app.use(security_1.sales);
                app.use(security_1.pymentTypes);
                app.use(security_1.dashboard);
                app.use(security_1.color);
                app.use(security_1.facturas);
                (0, routes_1.default)({ app: app, version: "/api/v1/" });
                app.use("/api/v1/", user_router_1.default);
                app.get("/", function (_, res) {
                    res.status(200).send("<h1>Start server \uD83D\uDE80</h1>");
                });
                storage = multer_1.default.diskStorage({
                    filename: function (req, file, cb) {
                        cb(null, file.originalname);
                    },
                    destination: function (req, file, cb) {
                        cb(null, './upload');
                    }
                });
                upload = (0, multer_1.default)({ storage: storage });
                app.post("/archivos", upload.single('file'), function (req, res) {
                    var _a;
                    console.log(req.file);
                    res.status(200).send((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
                });
                app.get("*", function (_, res) {
                    res.status(404).send("Page not found");
                });
                app.listen(config_1.PORT, function () {
                    return console.log("Start server on port ".concat(config_1.PORT, " \uD83D\uDE80"), config_1.NODE_ENV);
                });
                return [2];
        }
    });
}); };
main();
