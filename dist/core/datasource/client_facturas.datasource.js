"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFacturasTypeORM = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var client_factura_1 = require("../entities/client_factura");
var ClientFacturasTypeORM = (function () {
    function ClientFacturasTypeORM() {
    }
    ClientFacturasTypeORM.prototype.findClientFacturasByid = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findOne({
                                where: { id: id }
                            })];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2];
                }
            });
        });
    };
    ClientFacturasTypeORM.prototype.createClient = function (client) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findClientFacturasByid(client.id)];
                    case 1:
                        if (_a.sent())
                            throw 'Cliente ya registrado';
                        return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).save(client)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2];
                }
            });
        });
    };
    ClientFacturasTypeORM.prototype.updateClient = function (client) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var findClientFacturasByid, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findClientFacturasByid(client.id)];
                    case 1:
                        findClientFacturasByid = _a.sent();
                        if (findClientFacturasByid !== undefined && client.id !== findClientFacturasByid.id) {
                            throw 'Cliente no registrado';
                        }
                        return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).save(client)];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2];
                }
            });
        });
    };
    ClientFacturasTypeORM.prototype.deleteClient = function (client) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        client.isActive = false;
                        return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).save(client)];
                    case 1: return [2, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    };
    return ClientFacturasTypeORM;
}());
exports.ClientFacturasTypeORM = ClientFacturasTypeORM;
