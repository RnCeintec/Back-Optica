"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUser = exports.listUsers = exports.deleteUser = exports.updateUser = exports.createUser = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var user_1 = require("../core/entities/user");
var user_2 = require("../core/interactor/user");
var utils_1 = require("../utils");
var utils_2 = require("../utils");
var EUserRole;
(function (EUserRole) {
    EUserRole["admin"] = "admin";
    EUserRole["vendedor"] = "vendedor";
    EUserRole["optometra"] = "optometra";
    EUserRole["mensajero"] = "mensajero";
    EUserRole["laboratorio"] = "laboratorio";
})(EUserRole || (EUserRole = {}));
var createUser = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, usuario, password, role, documento, classUser, _b, result, error_1;
    var _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 3, , 4]);
                _a = req.body, nombre = _a.nombre, usuario = _a.usuario, password = _a.password, role = _a.role, documento = _a.documento;
                if (role) {
                    if (!Object.values(EUserRole).includes(role)) {
                        return [2, res
                                .status(400)
                                .json({ message: "El rol  que desea agregar no existe" })];
                    }
                }
                classUser = new user_1.User();
                classUser.nombre = nombre;
                classUser.username = usuario;
                classUser.documento = documento;
                _b = classUser;
                return [4, (0, utils_1.encrypt)(password)];
            case 1:
                _b.password = _d.sent();
                classUser.role =
                    (role === null || role === void 0 ? void 0 : role.trim()) === EUserRole.admin
                        ? EUserRole.admin
                        : (role === null || role === void 0 ? void 0 : role.trim()) === EUserRole.vendedor
                            ? EUserRole.vendedor
                            : (role === null || role === void 0 ? void 0 : role.trim()) === EUserRole.optometra
                                ? EUserRole.optometra
                                : (role === null || role === void 0 ? void 0 : role.trim()) === EUserRole.mensajero
                                    ? EUserRole.mensajero
                                    : EUserRole.laboratorio;
                return [4, (0, user_2.createUserInteractor)(classUser)];
            case 2:
                result = _d.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_1 = _d.sent();
                throw res.status(500).json({ message: (_c = error_1.message) !== null && _c !== void 0 ? _c : error_1 });
            case 4: return [2];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, usuario, role, password, documento, user, _b, _c, result, error_2;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 6, , 7]);
                _a = req.body, nombre = _a.nombre, usuario = _a.usuario, role = _a.role, password = _a.password, documento = _a.documento;
                return [4, (0, typeorm_1.getRepository)(user_1.User).findOne(req.params.id)];
            case 1:
                user = _e.sent();
                if (!user) {
                    return [2, res.status(404).json({ message: "Usuario no existe" })];
                }
                user.nombre = nombre ? nombre : user.nombre;
                _b = user;
                if (!password) return [3, 3];
                return [4, (0, utils_1.encrypt)(password)];
            case 2:
                _c = _e.sent();
                return [3, 4];
            case 3:
                _c = user.password;
                _e.label = 4;
            case 4:
                _b.password = _c;
                user.role = role ? role : user.role;
                user.username = usuario ? usuario : user.username;
                user.documento = documento ? documento : user.documento;
                if (role) {
                    if (!Object.values(EUserRole).includes(role)) {
                        return [2, res
                                .status(400)
                                .json({ message: "El rol  que desea agregar no existe" })];
                    }
                }
                return [4, (0, user_2.updateUserInteractor)(user)];
            case 5:
                result = _e.sent();
                return [2, res.json({ result: result })];
            case 6:
                error_2 = _e.sent();
                throw res.status(500).json({ message: (_d = error_2.message) !== null && _d !== void 0 ? _d : error_2 });
            case 7: return [2];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var user, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(user_1.User).findOne({
                        where: { id: req.params.id, isActive: true },
                    })];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2, res.status(400).json({ message: "Usuario no existe" })];
                }
                return [4, (0, user_2.deleteUserInteractor)(user)];
            case 2:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 4: return [2];
        }
    });
}); };
exports.deleteUser = deleteUser;
var listUsers = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, role, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, roles, error_4;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search, role = _a.role;
                hateoas = new utils_2.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ?
                            "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                return [4, (0, typeorm_1.getRepository)(user_1.User).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ username: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ documento: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ nombre: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                        order: { fecha_actualizacion: "DESC" },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                roles = "".concat(role).split(',');
                if (roles[0] !== 'Filtrar Tipo de Usuario') {
                    result = result.filter(function (x) { return roles.indexOf(x.role) !== -1; });
                }
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen usuarios" })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listUsers = listUsers;
var searchUser = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var usuario, error_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(user_1.User).findOne(req.params.id)];
            case 1:
                usuario = _b.sent();
                if (!usuario) {
                    return [2, res.status(404).json({ message: "No existe el usuario" })];
                }
                return [2, res.status(200).json({ result: usuario })];
            case 2:
                error_5 = _b.sent();
                throw res.status(500).json({ message: (_a = error_5.message) !== null && _a !== void 0 ? _a : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.searchUser = searchUser;
