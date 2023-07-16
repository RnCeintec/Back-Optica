"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = (function (req, _, next) {
    (0, utils_1.DeepTrim)(req.query);
    (0, utils_1.DeepTrim)(req.body);
    (0, utils_1.DeepTrim)(req.params);
    next();
});
