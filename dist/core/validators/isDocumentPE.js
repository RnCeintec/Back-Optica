"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDocumentPE = exports.isDocumentPEConstraint = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var isDocumentPEConstraint = (function () {
    function isDocumentPEConstraint() {
    }
    isDocumentPEConstraint.prototype.validate = function (value, _) {
        var trim = value === null || value === void 0 ? void 0 : value.trim();
        return trim !== ''
            ? value === trim && /^(([0-9]{8})|([0-9]{11}))$|([0-9]{9}))$/.test(trim)
            : true;
    };
    isDocumentPEConstraint = tslib_1.__decorate([
        (0, class_validator_1.ValidatorConstraint)({ async: false })
    ], isDocumentPEConstraint);
    return isDocumentPEConstraint;
}());
exports.isDocumentPEConstraint = isDocumentPEConstraint;
function isDocumentPE(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: isDocumentPEConstraint,
        });
    };
}
exports.isDocumentPE = isDocumentPE;
