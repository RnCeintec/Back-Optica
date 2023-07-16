"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
var tslib_1 = require("tslib");
var entities_1 = require("../core/entities");
var typeorm_1 = require("typeorm");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var utils_1 = require("../utils");
var getDashboard = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, TotalVentas, TotalProductos, ultimasVentas, hateoas, take, skip, pedidosLunas, cantidad, masVendidos, dateIni, dateFin, gananciaSemanal, startOfMonth, endOfMonth, gananciaMensual, suma, total, suma2, total2, TgananciaSemanal, TgananciaMensual, TotalPagado, TotalAnulado;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search;
                return [4, (0, typeorm_1.getRepository)(entities_1.Sales).count({ where: { estado: "pagado", isActive: true, shop: search }, })];
            case 1:
                TotalVentas = _b.sent();
                return [4, (0, typeorm_1.getRepository)(entities_1.Accesorio).count({ isActive: true })];
            case 2:
                TotalProductos = _b.sent();
                return [4, (0, typeorm_1.getRepository)(entities_1.Sales).findAndCount({
                        where: { isActive: true },
                        order: { fecha_actualizacion: "DESC" },
                        take: 5,
                    })];
            case 3:
                ultimasVentas = _b.sent();
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ?
                            "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                return [4, (0, typeorm_1.createQueryBuilder)(entities_1.Diotrias, "d")
                        .select(["d", "p", "di"])
                        .innerJoin("d.paciente", "p", "d.pacienteId = p.id")
                        .innerJoin("d.diotria_id", "di", "d.diotria_id = di.id")
                        .innerJoin("d.tienda", "t", "d.tienda = t.id")
                        .where('d.tienda =' + search)
                        .orderBy("d.id", "DESC")
                        .groupBy("d.diotria_id")
                        .skip(skip * take)
                        .take(take)
                        .getManyAndCount()];
            case 4:
                pedidosLunas = (_b.sent())[0];
                pedidosLunas = pedidosLunas.filter(function (luna) { return luna.isActive == true; });
                return [4, (0, typeorm_1.getRepository)(entities_1.SalesDetails)
                        .createQueryBuilder("v")
                        .select([
                        "SUM(v.cantidad) as cantidad",
                        "a.descripcion as descripcion",
                        "a.codigo as codigo",
                        "a.stock as stock",
                        "a.precio_sugerido as precio_sugerido",
                    ])
                        .innerJoin("accesorio", "a", "a.id = v.id_producto")
                        .innerJoin("ventas", "s", "s.id = v.ventas")
                        .where('s.shop =' + search)
                        .where("s.estado != 'anulado'")
                        .groupBy("v.id_producto")
                        .orderBy({ "SUM(v.cantidad)": "DESC" })
                        .limit(10)
                        .getRawMany()];
            case 5:
                cantidad = _b.sent();
                masVendidos = cantidad;
                dateIni = (0, dayjs_1.default)().subtract(7, "day").format("YYYY-MM-DD HH:mm:ss");
                dateFin = (0, dayjs_1.default)().add(1, "day").format("YYYY-MM-DD HH:mm:ss");
                return [4, (0, typeorm_1.createQueryBuilder)(entities_1.SalesDetails, "d")
                        .select(["d.salePrice", "d.cantidad"])
                        .innerJoin("ventas", "s", "s.id = d.ventas")
                        .where("d.fecha_creacion BETWEEN '".concat(dateIni, "' AND '").concat(dateFin, "'"))
                        .where('s.shop =' + search)
                        .where("s.estado != 'anulado'")
                        .getManyAndCount()];
            case 6:
                gananciaSemanal = (_b.sent())[0];
                startOfMonth = (0, moment_1.default)().startOf("month").format("YYYY-MM-DD hh:mm");
                endOfMonth = (0, moment_1.default)().endOf("month").format("YYYY-MM-DD hh:mm");
                return [4, (0, typeorm_1.createQueryBuilder)(entities_1.SalesDetails, "d")
                        .select(["d.salePrice", "d.cantidad"])
                        .innerJoin("d.ventas", "s", "d.ventasId = s.id")
                        .where("d.fecha_creacion BETWEEN '".concat(startOfMonth, "' AND '").concat(endOfMonth, "'"))
                        .where('s.shop =' + search)
                        .where("s.estado != 'anulado'")
                        .getManyAndCount()];
            case 7:
                gananciaMensual = (_b.sent())[0];
                suma = 0;
                total = new Array();
                gananciaSemanal.map(function (element) {
                    suma +=
                        element.cantidad * element.salePrice;
                });
                suma2 = 0;
                total2 = new Array();
                gananciaMensual.map(function (element) {
                    suma2 +=
                        element.cantidad * element.salePrice;
                });
                TgananciaSemanal = suma;
                TgananciaMensual = suma2;
                return [4, (0, typeorm_1.getRepository)(entities_1.Sales).count({
                        where: { estado: "pagado", isActive: true, shop: search },
                    })];
            case 8:
                TotalPagado = _b.sent();
                return [4, (0, typeorm_1.getRepository)(entities_1.Sales).count({
                        where: { estado: "anulado", isActive: true, shop: search },
                    })];
            case 9:
                TotalAnulado = _b.sent();
                return [2, res.json({
                        TotalVentas: TotalVentas,
                        TotalPagado: TotalPagado,
                        TotalAnulado: TotalAnulado,
                        TotalProductos: TotalProductos,
                        TgananciaSemanal: TgananciaSemanal,
                        TgananciaMensual: TgananciaMensual,
                        ultimasVentas: ultimasVentas,
                        masVendidos: masVendidos,
                        pedidosLunas: pedidosLunas
                    })];
        }
    });
}); };
exports.getDashboard = getDashboard;
