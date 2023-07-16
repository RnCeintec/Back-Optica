"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var tslib_1 = require("tslib");
var user_1 = require("../core/entities/user");
var typeorm_1 = require("typeorm");
var config_1 = require("../config");
var jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
var bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
var EUserRole;
(function (EUserRole) {
    EUserRole["admin"] = "admin";
    EUserRole["vendedor"] = "vendedor";
    EUserRole["optometra"] = "optometra";
    EUserRole["mensajero"] = "mensajero";
    EUserRole["laboratorio"] = "laboratorio";
})(EUserRole || (EUserRole = {}));
var auth = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, user, password, login, isPassword, token, error_1;
    var _b, _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 3, , 4]);
                _a = req.body, user = _a.user, password = _a.password;
                if (!user && !password) {
                    return [2, res.status(400).json({ message: "Enviar todos los parámetros" })];
                }
                if (password !== (password === null || password === void 0 ? void 0 : password.trim()))
                    return [2, res.status(400).json({
                            message: "La contraseña no debe tener espacios al inicio y final",
                        })];
                return [4, (0, typeorm_1.getRepository)(user_1.User).findOne({
                        where: { username: user, isActive: true },
                    })];
            case 1:
                login = _d.sent();
                if (!login) {
                    return [2, res.status(401).json({ message: "Usuario no encontrado" })];
                }
                return [4, bcrypt_1.default.compare(password, login.password)];
            case 2:
                isPassword = _d.sent();
                if (!isPassword)
                    return [2, res.status(401).json({ message: "password incorrect" })];
                token = jsonwebtoken_1.default.sign({
                    hasPivileges: ((_b = login.role) === null || _b === void 0 ? void 0 : _b.trim()) === EUserRole.admin ? true : false,
                    id: login.id,
                }, config_1.SECRET_TOKEN, {
                    expiresIn: "".concat(Number(config_1.TOKEN_LIMIT) * 32, "d"),
                });
                return [2, res.json({
                        id: login.id,
                        username: login.username,
                        name: login.nombre,
                        role: login.role,
                        token: token,
                    })];
            case 3:
                error_1 = _d.sent();
                throw res.status(500).json({ message: (_c = error_1.message) !== null && _c !== void 0 ? _c : error_1 });
            case 4: return [2];
        }
    });
}); };
exports.auth = auth;
