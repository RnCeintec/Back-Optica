"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decodejwt_1 = require("../utils/decodejwt");
exports.default = (function (req, res, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var auth, token, user, hasPivileges;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                auth = req.headers.authorization;
                if (!auth)
                    return [2, next()];
                token = auth === null || auth === void 0 ? void 0 : auth.split(' ')[1];
                return [4, (0, decodejwt_1.decode)(token)];
            case 1:
                user = _a.sent();
                hasPivileges = user.hasPivileges;
                if (!hasPivileges) {
                    return [2, res.status(401).json({ message: 'No autorizado' })];
                }
                res.locals.user = user;
                return [2, next()];
        }
    });
}); });
