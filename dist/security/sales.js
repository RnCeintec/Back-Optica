"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.default = (function (req, res, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var path, user;
    return tslib_1.__generator(this, function (_a) {
        path = req.path;
        if (!path.includes('/sales'))
            return [2, next()];
        user = res.locals.user;
        if (!user)
            return [2, res.status(401).json({ message: 'Please Login' })];
        return [2, next()];
    });
}); });
