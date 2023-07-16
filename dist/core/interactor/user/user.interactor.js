"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = void 0;
var tslib_1 = require("tslib");
var createUser = function (userRepository) { return function (user) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, userRepository.createUser(user)];
}); }); }; };
exports.createUser = createUser;
var updateUser = function (userRepository) { return function (user) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, userRepository.updateUser(user)];
}); }); }; };
exports.updateUser = updateUser;
var deleteUser = function (userRepository) { return function (user) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, userRepository.deleteUser(user)];
}); }); }; };
exports.deleteUser = deleteUser;
