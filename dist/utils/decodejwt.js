"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
var tslib_1 = require("tslib");
var jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
var config_1 = require("../config");
var decode = function (token) {
    return new Promise(function (resolve, reject) {
        jsonwebtoken_1.default.verify(token, config_1.SECRET_TOKEN, function (error, decoded) {
            if (error)
                reject({ message: 'No se pudo decodificar' });
            if (decoded)
                resolve(decoded);
            reject({ message: 'No decoded' });
        });
    });
};
exports.decode = decode;
var encode = function (payload, duration) {
    if (duration === void 0) { duration = 32; }
    return jsonwebtoken_1.default.sign(payload, config_1.SECRET_TOKEN, {
        expiresIn: "".concat(config_1.TOKEN_LIMIT * duration, "d"),
    });
};
exports.encode = encode;
