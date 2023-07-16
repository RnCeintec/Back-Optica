"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anularFactura = exports.listFacturas = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var moment_1 = tslib_1.__importDefault(require("moment"));
var facturas_1 = require("../core/entities/facturas");
var utils_1 = require("../utils");
var facturas_2 = require("../core/interactor/facturas");
var parameters_1 = require("../core/entities/parameters");
var EsPago;
(function (EsPago) {
    EsPago["pagado"] = "pagado";
    EsPago["anulado"] = "anulado";
})(EsPago || (EsPago = {}));
var ETipoComprobante;
(function (ETipoComprobante) {
    ETipoComprobante["ticket"] = "ticket";
    ETipoComprobante["boleta"] = "boleta";
    ETipoComprobante["factura"] = "factura";
    ETipoComprobante["nota"] = "nota";
})(ETipoComprobante || (ETipoComprobante = {}));
var listFacturas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, fechaInicio, fechaFin, limit, offset, tienda, hateoas, take, skip, where, fechaInicio2, fechaFin2, _b, facturas, count, _c, hateoasLink, pages, suma_1, totalArray_1, Tfacturas, error_1;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, fechaInicio = _a.fechaInicio, fechaFin = _a.fechaFin, limit = _a.limit, offset = _a.offset, tienda = _a.tienda;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                fechaInicio2 = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD hh:mm");
                fechaFin2 = (0, moment_1.default)().endOf("month").format("YYYY-MM-DD hh:mm");
                return [4, (0, typeorm_1.createQueryBuilder)(facturas_1.Facturas, "f")
                        .select(["f", "v"])
                        .innerJoin("f.ventas", "v", "f.ventasId = v.id")
                        .where("f.fecha_envio BETWEEN '".concat(fechaInicio !== null && fechaInicio !== void 0 ? fechaInicio : fechaInicio2, "' AND '").concat(fechaFin !== null && fechaFin !== void 0 ? fechaFin : fechaFin2, "' "))
                        .where('v.shop =' + tienda)
                        .orderBy("f.fecha_envio", "DESC")
                        .skip(skip * take)
                        .take(take)
                        .getManyAndCount()];
            case 1:
                _b = _e.sent(), facturas = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                suma_1 = 0;
                totalArray_1 = new Array();
                facturas.map(function (element) {
                    suma_1 += +element.ventas.total;
                    totalArray_1.push(suma_1);
                });
                Tfacturas = totalArray_1.reduce(function (a, b) { return a + b; }, 0);
                facturas = facturas.filter(function (factura) { return (factura.ventas.estado == 'anulado' && factura.tipo_comprobante == 'nota') || (factura.ventas.estado != 'anulado'); });
                return [2, facturas
                        ? res.status(200).json({
                            result: facturas,
                            totalFacturas: Tfacturas,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 || isNaN(pages) ? 1 : pages,
                        })
                        : res.status(404).json({ message: "No existen facturas" })];
            case 2:
                error_1 = _e.sent();
                throw res.status(500).json({ message: (_d = error_1.message) !== null && _d !== void 0 ? _d : error_1 });
            case 3: return [2];
        }
    });
}); };
exports.listFacturas = listFacturas;
var anularFactura = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, comprobante, motivo, existe, venta, factura, obtenerParametroNota, correlativo, _existe, anular, update, estado, updateParametro;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, comprobante = _a.comprobante, motivo = _a.motivo;
                return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).findOne({
                        where: { ventas: req.params.id },
                    })];
            case 1:
                existe = _b.sent();
                return [4, (0, typeorm_1.getRepository)(entities_1.Sales).findOne(req.params.id)];
            case 2:
                venta = _b.sent();
                if (!existe) {
                    return [2, res.status(404).json({ message: "No existe el comprobante" })];
                }
                if (!venta) {
                    return [2, res.status(404).json({ message: "No existe la venta" })];
                }
                factura = new facturas_1.Facturas();
                return [4, (0, typeorm_1.getRepository)(parameters_1.Parameters).findOne({
                        where: { tipo_comprobante: "nota" },
                    })];
            case 3:
                obtenerParametroNota = _b.sent();
                if (!obtenerParametroNota) {
                    return [2, res.status(404).json({
                            message: "No existe el correlativo para el tipo de comprobante especificado",
                        })];
                }
                correlativo = "".concat(obtenerParametroNota.correlativo).padStart(8, "0");
                factura.numero_comprobante = "FF02-" + correlativo;
                factura.codigo_anulado = comprobante;
                factura.tipo_comprobante = ETipoComprobante.nota;
                factura.is_nota = 1;
                factura.ventas = venta;
                factura.total = venta.total;
                factura.igv = venta.igv;
                factura.subtotal = venta.subtotal;
                factura.motivo = motivo;
                return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).findOne({
                        where: { codigo_anulado: (0, typeorm_1.Like)("%".concat(comprobante, "%")) },
                    })];
            case 4:
                _existe = _b.sent();
                if (_existe) {
                    return [2, res.status(404).json({ message: "Comprobante ya fue anulado" })];
                }
                return [4, (0, facturas_2.anularFacturaInteractor)(factura)];
            case 5:
                anular = _b.sent();
                update = {
                    correlativo: obtenerParametroNota.correlativo + 1,
                };
                estado = {
                    estado: EsPago.anulado,
                };
                updateParametro = (0, typeorm_1.getRepository)(parameters_1.Parameters).merge(obtenerParametroNota, update);
                (0, typeorm_1.getRepository)(parameters_1.Parameters).save(updateParametro);
                (0, typeorm_1.getRepository)(entities_1.Sales).merge(venta, estado);
                (0, typeorm_1.getRepository)(entities_1.Sales).save(venta);
                return [2, res.json({ result: anular })];
        }
    });
}); };
exports.anularFactura = anularFactura;
