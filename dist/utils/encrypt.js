"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPasswordSync = exports.encryptSync = exports.checkPassword = exports.encrypt = void 0;
var tslib_1 = require("tslib");
var bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
var config_1 = require("../config");
var encrypt = function (password) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4, bcrypt_1.default.hash(password, config_1.SALT)];
        case 1: return [2, _a.sent()];
    }
}); }); };
exports.encrypt = encrypt;
var checkPassword = function (password, encrypted) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4, bcrypt_1.default.compare(password, encrypted)];
        case 1: return [2, _a.sent()];
    }
}); }); };
exports.checkPassword = checkPassword;
var encryptSync = function (password) {
    return bcrypt_1.default.hashSync(password, config_1.SALT);
};
exports.encryptSync = encryptSync;
var checkPasswordSync = function (password, encrypted) {
    return bcrypt_1.default.compareSync(password, encrypted);
};
exports.checkPasswordSync = checkPasswordSync;
