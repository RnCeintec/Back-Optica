"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserInteractor = exports.updateUserInteractor = exports.createUserInteractor = void 0;
var user_interactor_1 = require("./user.interactor");
var user_datasource_1 = require("../../datasource/user.datasource");
var userRepository = new user_datasource_1.UserTypeORM();
exports.createUserInteractor = (0, user_interactor_1.createUser)(userRepository);
exports.updateUserInteractor = (0, user_interactor_1.updateUser)(userRepository);
exports.deleteUserInteractor = (0, user_interactor_1.deleteUser)(userRepository);
