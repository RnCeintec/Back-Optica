"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pymentTypes_controller_1 = require("../controllers/pymentTypes.controller");
var router = (0, express_1.Router)();
router.get('/pyment', pymentTypes_controller_1.listPyment);
exports.default = router;
