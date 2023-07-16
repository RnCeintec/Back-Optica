"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPyment = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var listPyment = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var pyment;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, typeorm_1.getRepository)(entities_1.PymentType).find({ where: { isActive: true } })];
            case 1:
                pyment = _a.sent();
                if (!pyment) {
                    return [2, res.status(404).json({ message: "No existen metodos de pagos disponibles" })];
                }
                return [2, res.json({ result: pyment })];
        }
    });
}); };
exports.listPyment = listPyment;
