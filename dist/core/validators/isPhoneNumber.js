"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneNumber = exports.isPhoneNumberConstraint = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var isPhoneNumberConstraint = (function () {
    function isPhoneNumberConstraint() {
    }
    isPhoneNumberConstraint.prototype.validate = function (value, _) {
        var trim = value === null || value === void 0 ? void 0 : value.trim();
        return trim !== '' ? value === trim && /^([0-9]{9})$/.test(trim) : true;
    };
    isPhoneNumberConstraint = tslib_1.__decorate([
        (0, class_validator_1.ValidatorConstraint)({ async: false })
    ], isPhoneNumberConstraint);
    return isPhoneNumberConstraint;
}());
exports.isPhoneNumberConstraint = isPhoneNumberConstraint;
function isPhoneNumber(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: isPhoneNumberConstraint,
        });
    };
}
exports.isPhoneNumber = isPhoneNumber;
