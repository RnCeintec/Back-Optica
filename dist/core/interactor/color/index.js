"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColorInteractor = exports.updateColorInteractor = exports.createColortInteractor = void 0;
var color_interactor_1 = require("./color.interactor");
var color_datasource_1 = require("../../datasource/color.datasource");
var colorRepository = new color_datasource_1.ColorTypeORM();
exports.createColortInteractor = (0, color_interactor_1.createColor)(colorRepository);
exports.updateColorInteractor = (0, color_interactor_1.updateColor)(colorRepository);
exports.deleteColorInteractor = (0, color_interactor_1.deleteColor)(colorRepository);
