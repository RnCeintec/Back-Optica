"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var user_1 = require("../entities/user");
var UserTypeORM = (function () {
    function UserTypeORM() {
    }
    UserTypeORM.prototype.findUserByUuid = function (username) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(user_1.User).findOne({
                                where: { username: username }
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
    UserTypeORM.prototype.createUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findUserByUuid(user.username)];
                    case 1:
                        if (_a.sent())
                            throw 'Usuario ya registrado';
                        return [4, (0, typeorm_1.getRepository)(user_1.User).save(user)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    UserTypeORM.prototype.findUser = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(user_1.User).findOne({
                                where: { id: true },
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2];
                }
            });
        });
    };
    UserTypeORM.prototype.updateUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findUserByUUid, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findUserByUuid(user.username)];
                    case 1:
                        findUserByUUid = _a.sent();
                        if (findUserByUUid !== undefined && user.username !== findUserByUUid.username)
                            throw 'Usuario no registrado';
                        return [4, (0, typeorm_1.getRepository)(user_1.User).save(user)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 4: return [2];
                }
            });
        });
    };
    UserTypeORM.prototype.deleteUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(user_1.User).save(user)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    };
    return UserTypeORM;
}());
exports.UserTypeORM = UserTypeORM;
