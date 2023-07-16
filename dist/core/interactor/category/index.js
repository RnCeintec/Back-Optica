"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryInteractor = exports.updateCategoryInteractor = exports.createCategoryInteractor = void 0;
var category_interactor_1 = require("./category.interactor");
var category_datasource_1 = require("../../datasource/category.datasource");
var categoryRepository = new category_datasource_1.CategoryTypeORM();
exports.createCategoryInteractor = (0, category_interactor_1.createCategory)(categoryRepository);
exports.updateCategoryInteractor = (0, category_interactor_1.updateCategory)(categoryRepository);
exports.deleteCategoryInteractor = (0, category_interactor_1.deleteCategory)(categoryRepository);
