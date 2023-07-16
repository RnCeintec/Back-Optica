"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSaleDetails = exports.searchSaleXDate = exports.searchSale = exports.listaVentas = exports.listSale = exports.deleteSale = exports.updateSale = exports.createSale = void 0;
var tslib_1 = require("tslib");
var client_1 = require("../core/entities/client");
var client_factura_1 = require("../core/entities/client_factura");
var parameters_1 = require("../core/entities/parameters");
var shop_1 = require("../core/entities/shop");
var axios_1 = tslib_1.__importDefault(require("axios"));
var typeorm_1 = require("typeorm");
var sales_1 = require("../core/entities/sales");
var sales_2 = require("../core/interactor/sales");
var utils_1 = require("../utils");
var user_1 = require("../core/entities/user");
var vendedor_1 = require("../core/entities/vendedor");
var pymentTypes_1 = require("../core/entities/pymentTypes");
var laboratorio_1 = require("../core/entities/laboratorio");
var facturas_1 = require("../core/entities/facturas");
var salesDetails_1 = require("../core/entities/salesDetails");
var accesorio_1 = require("../core/entities/accesorio");
var moment_1 = tslib_1.__importDefault(require("moment"));
var monturas_1 = require("../core/entities/monturas");
var dioptrias_1 = require("../core/entities/dioptrias");
var EsComprobante;
(function (EsComprobante) {
    EsComprobante["pendiente"] = "pendiente";
    EsComprobante["enviado"] = "enviado";
})(EsComprobante || (EsComprobante = {}));
var createSale = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, tipo_comprobante_1, tipo_pago, cliente_facturar_id, local_id, cliente_id, total, efectivo, usuario_id, vendedor, diotriasId, detalleLunaVenta, productos, url, sendSunat, sales_3, numCompro, cliente, cliente, clienteFacturar, usuario, vendedor_, pagos, detalleLuna, comprobante, subtotal, igvT, result_1, newDetVenta, detalle, newDetVentaLuna, update, updateResult, factura, newFactura, convertirCantidadEnLetras, _pagado, product, tienda, currentDate, year, month, day, formattedDate, cabecera, obejtoJSON, headers_1, error_1;
    var _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 21, , 22]);
                _a = req.body, tipo_comprobante_1 = _a.tipo_comprobante, tipo_pago = _a.tipo_pago, cliente_facturar_id = _a.cliente_facturar_id, local_id = _a.local_id, cliente_id = _a.cliente_id, total = _a.total, efectivo = _a.efectivo, usuario_id = _a.usuario_id, vendedor = _a.vendedor, diotriasId = _a.diotriasId, detalleLunaVenta = _a.detalleLunaVenta, productos = _a.productos;
                url = "https://facturador-optica.ceintec-sys.net.pe/envioSunat/generarXml.php";
                sendSunat = "https://facturador-optica.ceintec-sys.net.pe/src/sendComprobante.php";
                console.log(productos);
                sales_3 = new sales_1.Sales();
                if (!tipo_comprobante_1) {
                    res
                        .status(400)
                        .json({ message: 'El tipo de comprobante no debe estar en none' });
                }
                return [4, (0, typeorm_1.getRepository)(parameters_1.Parameters).findOne({
                        where: { tipo_comprobante: tipo_comprobante_1 },
                    })];
            case 1:
                numCompro = _c.sent();
                if (!(cliente_id != null)) return [3, 3];
                return [4, (0, typeorm_1.getRepository)(client_1.Client).findOne({
                        where: { id: cliente_id, isActive: true },
                    })];
            case 2:
                cliente = _c.sent();
                return [3, 5];
            case 3: return [4, (0, typeorm_1.getRepository)(client_1.Client).findOne({
                    where: { documento: '87654321', isActive: true },
                })];
            case 4:
                cliente = _c.sent();
                _c.label = 5;
            case 5: return [4, (0, typeorm_1.getRepository)(client_factura_1.ClientFactura).findOne({
                    where: { id: cliente_facturar_id, isActive: true },
                })];
            case 6:
                clienteFacturar = _c.sent();
                return [4, (0, typeorm_1.getRepository)(user_1.User).findOne({
                        where: { id: usuario_id, isActive: true },
                    })];
            case 7:
                usuario = _c.sent();
                return [4, (0, typeorm_1.getRepository)(vendedor_1.Vendedor).findOne({
                        where: { id: vendedor, isActive: true },
                    })];
            case 8:
                vendedor_ = _c.sent();
                return [4, (0, typeorm_1.getRepository)(pymentTypes_1.PymentType).findOne({
                        where: { nombre: tipo_pago, isActive: true },
                    })];
            case 9:
                pagos = _c.sent();
                if (!(detalleLunaVenta != null)) return [3, 11];
                return [4, (0, typeorm_1.getRepository)(laboratorio_1.Laboratorio).findOne({
                        where: { id: detalleLunaVenta.idDetalle, isActive: true },
                    })];
            case 10:
                detalleLuna = _c.sent();
                if (!detalleLuna)
                    return [2, res.status(404).json({ message: 'No existe el detalle del producto' })];
                _c.label = 11;
            case 11:
                if (!numCompro)
                    return [2, res
                            .status(404)
                            .json({ message: 'No existe parametro para el comprobante' })];
                if (!cliente)
                    return [2, res.status(404).json({ message: 'No existe el cliente' })];
                if (!clienteFacturar)
                    return [2, res.status(404).json({ message: 'No existe el cliente facturar' })];
                if (!vendedor_)
                    return [2, res.status(404).json({ message: 'No existe el vendedor' })];
                if (!usuario)
                    return [2, res.status(404).json({ message: 'No existe el usuario' })];
                if (!pagos)
                    return [2, res.status(404).json({ message: 'No existe el tipo de pago' })];
                comprobante = tipo_comprobante_1 == 'boleta'
                    ? 'B002-' + "".concat(numCompro.correlativo).padStart(8, '0')
                    : tipo_comprobante_1 == 'factura'
                        ? 'F002-' + "".concat(numCompro.correlativo).padStart(8, '0')
                        : 'T002-' + "".concat(numCompro.correlativo).padStart(8, '0');
                subtotal = +(total / 1.18).toFixed(2);
                sales_3.clientes = cliente_id;
                sales_3.clientesFactura = cliente_facturar_id;
                sales_3.comprobante = comprobante;
                sales_3.efectivo = efectivo;
                sales_3.pymentTypes = pagos.id;
                sales_3.shop = local_id;
                sales_3.tipo_comprobante = tipo_comprobante_1;
                sales_3.user = usuario_id;
                sales_3.vendedores = vendedor;
                sales_3.total = total;
                sales_3.subtotal = subtotal;
                sales_3.igv = +(total - subtotal).toFixed(2);
                igvT = +(total - subtotal).toFixed(2);
                if (productos.length <= 0)
                    return [2, res.status(400).json({ message: 'Debe enviar productos' })];
                return [4, (0, sales_2.createSalestInteractor)(sales_3)];
            case 12:
                result_1 = _c.sent();
                return [4, (0, sales_2.createSalesDetailstInteractor)(productos, result_1)];
            case 13:
                newDetVenta = _c.sent();
                if (!(detalleLunaVenta != null)) return [3, 15];
                detalle = [{
                        id: detalleLunaVenta.id,
                        cantidad: 1,
                        producto: detalleLunaVenta.product,
                        category: detalleLunaVenta.category,
                    }];
                return [4, (0, sales_2.createSalesDetailstInteractor)(detalle, result_1)];
            case 14:
                newDetVentaLuna = _c.sent();
                _c.label = 15;
            case 15:
                productos.map(function (product) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var productoUpdate, newUpdate, productoUpdate, newUpdate, productoUpdate, newUpdate;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(product.category === "Accesorio")) return [3, 3];
                                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).findOne({
                                        where: { id: product.id },
                                    })];
                            case 1:
                                productoUpdate = _a.sent();
                                if (!productoUpdate) {
                                    return [2, res.status(400).json({ message: 'No existe el accesorio' })];
                                }
                                newUpdate = { stock: productoUpdate.stock - product.cantidad };
                                (0, typeorm_1.getRepository)(accesorio_1.Accesorio).merge(productoUpdate, newUpdate);
                                return [4, (0, typeorm_1.getRepository)(accesorio_1.Accesorio).save(productoUpdate)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                if (!(product.category == "Montura")) return [3, 6];
                                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).findOne({
                                        where: { id: product.id },
                                    })];
                            case 4:
                                productoUpdate = _a.sent();
                                if (!productoUpdate) {
                                    return [2, res.status(400).json({ message: 'No existe la montura' })];
                                }
                                newUpdate = { ventas: result_1 };
                                (0, typeorm_1.getRepository)(monturas_1.Monturas).merge(productoUpdate, newUpdate);
                                return [4, (0, typeorm_1.getRepository)(monturas_1.Monturas).save(productoUpdate)];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6:
                                if (!(product.category == "Lunas")) return [3, 9];
                                return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).findOne({
                                        where: { id: product.id },
                                    })];
                            case 7:
                                productoUpdate = _a.sent();
                                if (!productoUpdate) {
                                    return [2, res.status(400).json({ message: 'No existe la diotria' })];
                                }
                                newUpdate = { venta: result_1 };
                                (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).merge(productoUpdate, newUpdate);
                                return [4, (0, typeorm_1.getRepository)(dioptrias_1.Diotrias).save(productoUpdate)];
                            case 8:
                                _a.sent();
                                _a.label = 9;
                            case 9: return [2];
                        }
                    });
                }); });
                update = {
                    correlativo: numCompro.correlativo + 1,
                };
                (0, typeorm_1.getRepository)(parameters_1.Parameters).merge(numCompro, update);
                return [4, (0, typeorm_1.getRepository)(parameters_1.Parameters).save(numCompro)];
            case 16:
                updateResult = _c.sent();
                if (!(tipo_comprobante_1 != 'ticket')) return [3, 20];
                factura = new facturas_1.Facturas();
                factura.numero_comprobante = comprobante;
                factura.respuesta = '';
                factura.codigo_anulado = '';
                factura.observaciones = '';
                factura.tipo_comprobante = tipo_comprobante_1;
                factura.ventas = sales_3;
                factura.is_nota = 0;
                factura.estado = EsComprobante.pendiente;
                factura.total = total;
                factura.igv = igvT;
                factura.subtotal = subtotal;
                return [4, (0, typeorm_1.getRepository)(facturas_1.Facturas).save(factura)];
            case 17:
                newFactura = _c.sent();
                convertirCantidadEnLetras = function convertirCantidadEnLetras(cantidad) {
                    var unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
                    var especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
                    var decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
                    var centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
                    var convertirNumeroEnLetras = function convertirNumeroEnLetras(numero) {
                        if (numero < 10) {
                            return unidades[numero];
                        }
                        else if (numero < 20) {
                            return especiales[numero - 10];
                        }
                        else if (numero < 100) {
                            var unidad = numero % 10;
                            var decena = Math.floor(numero / 10);
                            var letras_1 = decenas[decena];
                            if (unidad > 0) {
                                letras_1 += " y ".concat(unidades[unidad]);
                            }
                            return letras_1;
                        }
                        else {
                            var unidad = numero % 10;
                            var decena = Math.floor((numero % 100) / 10);
                            var centena = Math.floor(numero / 100);
                            var letras_2 = centenas[centena];
                            if (decena === 1 && unidad > 0) {
                                letras_2 += "to ".concat(unidades[unidad]);
                            }
                            else {
                                if (decena > 0) {
                                    letras_2 += " ".concat(decenas[decena]);
                                }
                                if (unidad > 0) {
                                    letras_2 += " y ".concat(unidades[unidad]);
                                }
                            }
                            return letras_2;
                        }
                    };
                    var partes = cantidad.toString().split('.');
                    var cantidadEntera = parseInt(partes[0], 10);
                    var cantidadDecimal = partes[1] ? parseInt(partes[1], 10) : 0;
                    var letras = '';
                    if (cantidadEntera === 0) {
                        letras = unidades[0];
                    }
                    else if (cantidadEntera < 1000000000) {
                        var millon = Math.floor(cantidadEntera / 1000000);
                        var miles = Math.floor((cantidadEntera % 1000000) / 1000);
                        var unidades_1 = cantidadEntera % 1000;
                        if (millon > 0) {
                            letras += "".concat(convertirNumeroEnLetras(millon), " ").concat(millon === 1 ? 'millón' : 'millones');
                        }
                        if (miles > 0) {
                            if (letras !== '') {
                                letras += ' ';
                            }
                            letras += "".concat(convertirNumeroEnLetras(miles), " ").concat(miles === 1 ? 'mil' : 'mil');
                        }
                        if (unidades_1 > 0) {
                            if (letras !== '') {
                                letras += ' ';
                            }
                            letras += convertirNumeroEnLetras(unidades_1);
                        }
                    }
                    if (cantidadDecimal > 0) {
                        letras += " con ".concat(cantidadDecimal.toString().padEnd(2, '0'), "/100");
                    }
                    return letras;
                };
                _pagado = total.toFixed(2);
                product = [];
                return [4, (0, typeorm_1.getRepository)(shop_1.Shop).findOne({
                        where: { id: local_id },
                    })];
            case 18:
                tienda = _c.sent();
                currentDate = new Date();
                year = currentDate.getFullYear();
                month = String(currentDate.getMonth() + 1).padStart(2, '0');
                day = String(currentDate.getDate()).padStart(2, '0');
                formattedDate = "".concat(year, "-").concat(month, "-").concat(day);
                cabecera = {
                    serie: sales_3.comprobante,
                    rucEmpresa: tienda === null || tienda === void 0 ? void 0 : tienda.num_documento,
                    tipoDocumento: tipo_comprobante_1 == 'boleta' ? "03" : "01",
                    UBLVersionID: "2.1",
                    CustomizationID: "2.0",
                    fechaEmision: formattedDate,
                    horaEmision: "00:00:00",
                    moneda: "PEN",
                    nombreEmpresa: tienda === null || tienda === void 0 ? void 0 : tienda.rz_social,
                    representanteLegal: tienda === null || tienda === void 0 ? void 0 : tienda.num_documento,
                    codDomicilioFiscal: "0000",
                    rucCliente: clienteFacturar.documento,
                    razonSocialCliente: clienteFacturar.rz_social,
                    codDomicilioFiscalCliente: "0000",
                    montoSinIgv: subtotal.toFixed(2),
                    igvTotal: +(total - subtotal).toFixed(2),
                    totalConIgv: total.toFixed(2),
                    codUnidadMedida: "NIU",
                    totaEnLetras: (convertirCantidadEnLetras(_pagado) + " SOLES").toUpperCase(),
                    formaPago: "Contado",
                    cuotas: [],
                };
                productos.forEach(function (detalle) {
                    product.push({
                        cantidad: detalle.cantidad,
                        descripcion: detalle.producto,
                        precioUnitario: detalle.precio / 1.18,
                        precioSinIgv: detalle.precio / 1.18,
                        precioConIgv: detalle.precio,
                        igvPrecio: detalle.precio - detalle.precio / 1.18,
                        codProducto: detalle.id,
                        totalDescuento: "0",
                        tipoIgv: "10",
                        codTributo: "1000",
                    });
                });
                obejtoJSON = { cabecera: cabecera, detalle: product };
                console.log('Objeto JSON', obejtoJSON);
                headers_1 = {
                    "Authorization": "7MfGJa4&j_apwE3jd+wrL54JbAN-CZ",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };
                return [4, axios_1.default.post(url, obejtoJSON, { headers: headers_1 }).then(function (respuesta) {
                        console.log(respuesta.data);
                        var tipoDocumento = (tipo_comprobante_1 == 'boleta' ? "03" : "01");
                        var nombre = {
                            archivo: (tienda === null || tienda === void 0 ? void 0 : tienda.num_documento) + "-" + tipoDocumento + "-" + sales_3.comprobante
                        };
                        axios_1.default.post(sendSunat, nombre, { headers: headers_1 }).then(function (response) {
                            console.log(response.data);
                        });
                    })];
            case 19:
                _c.sent();
                _c.label = 20;
            case 20: return [2, res.json({ result: result_1 })];
            case 21:
                error_1 = _c.sent();
                throw res.status(500).json({ message: (_b = error_1.message) !== null && _b !== void 0 ? _b : error_1 });
            case 22: return [2];
        }
    });
}); };
exports.createSale = createSale;
var updateSale = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, comprobante, tipo_comprobante, tipo_pago, local_id, cliente_id, total, subtotal, igv, efectivo, usuario_id, estado, estadoExiste, sales, pago, result, error_2;
    var _b, _c;
    return tslib_1.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, , 6]);
                _a = req.body, comprobante = _a.comprobante, tipo_comprobante = _a.tipo_comprobante, tipo_pago = _a.tipo_pago, local_id = _a.local_id, cliente_id = _a.cliente_id, total = _a.total, subtotal = _a.subtotal, igv = _a.igv, efectivo = _a.efectivo, usuario_id = _a.usuario_id, estado = _a.estado;
                estadoExiste = EsComprobante[estado];
                if (!estadoExiste)
                    return [2, res.status(404).json({ message: 'estado no disponible' })];
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findOne(req.params.id)];
            case 1:
                sales = _d.sent();
                if (!sales) {
                    return [2, res.status(404).json({ message: 'Dede enviar id del producto' })];
                }
                if (!tipo_pago) return [3, 3];
                return [4, (0, typeorm_1.getRepository)(pymentTypes_1.PymentType).findOne({
                        where: { nombre: tipo_pago },
                    })];
            case 2:
                pago = _d.sent();
                if (!pago) {
                    res.status(404).json({ message: 'Método de pago no disponible' });
                }
                sales.pymentTypes = (_b = pago === null || pago === void 0 ? void 0 : pago.id) !== null && _b !== void 0 ? _b : sales.pymentTypes;
                _d.label = 3;
            case 3:
                sales.clientes = cliente_id !== null && cliente_id !== void 0 ? cliente_id : sales.clientes;
                sales.comprobante = comprobante !== null && comprobante !== void 0 ? comprobante : sales.comprobante;
                sales.efectivo = efectivo !== null && efectivo !== void 0 ? efectivo : sales.efectivo;
                sales.shop = local_id !== null && local_id !== void 0 ? local_id : sales.shop;
                sales.tipo_comprobante = tipo_comprobante !== null && tipo_comprobante !== void 0 ? tipo_comprobante : sales.tipo_comprobante;
                sales.user = usuario_id !== null && usuario_id !== void 0 ? usuario_id : sales.user;
                sales.igv = igv !== null && igv !== void 0 ? igv : sales.igv;
                sales.total = total !== null && total !== void 0 ? total : sales.total;
                sales.subtotal = subtotal !== null && subtotal !== void 0 ? subtotal : sales.subtotal;
                sales.estado = estado !== null && estado !== void 0 ? estado : sales.estado;
                return [4, (0, sales_2.updateSalesInteractor)(sales)];
            case 4:
                result = _d.sent();
                return [2, res.json(result)];
            case 5:
                error_2 = _d.sent();
                throw res.status(500).json({ message: (_c = error_2.message) !== null && _c !== void 0 ? _c : error_2 });
            case 6: return [2];
        }
    });
}); };
exports.updateSale = updateSale;
var deleteSale = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var salesById, result, error_3;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findOne(req.params.id)];
            case 1:
                salesById = _b.sent();
                if (!salesById) {
                    return [2, res.status(404).json({ message: 'No existe el producto' })];
                }
                return [4, (0, sales_2.deleteSalestInteractor)(salesById)];
            case 2:
                result = _b.sent();
                return [2, res.json({ result: result })];
            case 3:
                error_3 = _b.sent();
                throw res.status(500).json({ message: (_a = error_3.message) !== null && _a !== void 0 ? _a : error_3 });
            case 4: return [2];
        }
    });
}); };
exports.deleteSale = deleteSale;
var listSale = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, pago, arrayPagos, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, error_4;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search, pago = _a.pago;
                arrayPagos = pago && pago !== '' ? "".concat(pago).split(',') : [];
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ?
                            "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                if (arrayPagos.length > 0) {
                    where = tslib_1.__assign({}, where);
                }
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ comprobante: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ tipo_comprobante: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ clientes: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                        relations: ['salesDetails', 'clientes', 'user', 'pymentTypes'],
                        order: { fecha_actualizacion: 'DESC' },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen ventas' })];
            case 2:
                error_4 = _e.sent();
                throw res.status(500).json({ message: (_d = error_4.message) !== null && _d !== void 0 ? _d : error_4 });
            case 3: return [2];
        }
    });
}); };
exports.listSale = listSale;
var listaVentas = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, search, pago, hateoas, take, skip, where, _b, result, count, _c, hateoasLink, pages, error_5;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset, search = _a.search, pago = _a.pago;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ?
                            "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findAndCount({
                        take: take,
                        skip: skip * take,
                        where: [
                            tslib_1.__assign({ comprobante: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ tipo_comprobante: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ id: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                            tslib_1.__assign({ clientes: (0, typeorm_1.Like)("%".concat(search, "%")) }, where),
                        ],
                        relations: ['salesDetails', 'clientes', 'user', 'pymentTypes', 'clientesFactura', 'shop'],
                        order: { fecha_actualizacion: 'DESC' },
                    })];
            case 1:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen ventas' })];
            case 2:
                error_5 = _e.sent();
                throw res.status(500).json({ message: (_d = error_5.message) !== null && _d !== void 0 ? _d : error_5 });
            case 3: return [2];
        }
    });
}); };
exports.listaVentas = listaVentas;
var searchSale = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var sales, error_6;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findOne({
                        where: { id: req.params.id },
                        relations: ['clientes', 'user', 'pymentTypes'],
                    })];
            case 1:
                sales = _b.sent();
                if (!sales) {
                    return [2, res.status(404).json({ message: 'No existe la venta' })];
                }
                return [2, res.status(200).json({ result: sales })];
            case 2:
                error_6 = _b.sent();
                throw res.status(500).json({ message: (_a = error_6.message) !== null && _a !== void 0 ? _a : error_6 });
            case 3: return [2];
        }
    });
}); };
exports.searchSale = searchSale;
var searchSaleXDate = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, fechaInicio, fechaFin, tienda, hateoas, take, skip, where, fechaInicio2, fechaFin2, ganancias, suma_1, total_1, totalV_1, totalArray_1, Tganancia, Tventas, _b, result, count, _c, hateoasLink, pages, error_7;
    var _d;
    return tslib_1.__generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 3, , 4]);
                _a = req.query, limit = _a.limit, offset = _a.offset, fechaInicio = _a.fechaInicio, fechaFin = _a.fechaFin, tienda = _a.tienda;
                hateoas = new utils_1.Hateoas({
                    limit: limit ? "".concat(limit) : undefined,
                    offset: offset
                        ? "".concat(offset)
                        : undefined,
                });
                take = hateoas.take;
                skip = hateoas.skip;
                where = { isActive: true };
                fechaInicio2 = (0, moment_1.default)().startOf('month').format('YYYY-MM-DD hh:mm');
                fechaFin2 = (0, moment_1.default)().endOf('month').format('YYYY-MM-DD hh:mm');
                return [4, (0, typeorm_1.createQueryBuilder)(salesDetails_1.SalesDetails, 'd')
                        .select(['s.total', 'd.cantidad', 'd.salePrice'])
                        .innerJoin('d.ventas', 's', 'd.ventasId = s.id')
                        .where("s.fecha_creacion BETWEEN '".concat(fechaInicio !== null && fechaInicio !== void 0 ? fechaInicio : fechaInicio2, "' AND '").concat(fechaFin !== null && fechaFin !== void 0 ? fechaFin : fechaFin2, "' "))
                        .where('s.shop =' + tienda)
                        .groupBy('s.id')
                        .orderBy('s.fecha_creacion', 'DESC')
                        .getManyAndCount()];
            case 1:
                ganancias = (_e.sent())[0];
                suma_1 = 0;
                total_1 = new Array();
                totalV_1 = 0;
                totalArray_1 = new Array();
                ganancias.map(function (element) {
                    suma_1 +=
                        element.ventas.total - element.cantidad * element.salePrice;
                    totalV_1 += +element.ventas.total;
                    totalArray_1.push(totalV_1);
                    total_1.push(suma_1);
                });
                Tganancia = suma_1;
                Tventas = totalV_1;
                return [4, (0, typeorm_1.createQueryBuilder)(sales_1.Sales, 's')
                        .select(['s', 'c', 'u', 'p', 'sd'])
                        .innerJoin('s.clientes', 'c', 'c.id = s.clientesId')
                        .innerJoin('s.user', 'u', 'u.id = s.userId')
                        .innerJoin('s.pymentTypes', 'p', 'p.id = s.pymentTypesId')
                        .innerJoin('s.salesDetails', 'sd', 's.id = sd.ventasId')
                        .where("s.fecha_creacion BETWEEN '".concat(fechaInicio !== null && fechaInicio !== void 0 ? fechaInicio : fechaInicio2, "' AND '").concat(fechaFin !== null && fechaFin !== void 0 ? fechaFin : fechaFin2, "'"))
                        .where('s.shop =' + tienda)
                        .orderBy('s.id', 'DESC')
                        .skip(skip * take)
                        .take(take)
                        .getManyAndCount()];
            case 2:
                _b = _e.sent(), result = _b[0], count = _b[1];
                _c = hateoas.hateoas({ count: count }), hateoasLink = _c[0], pages = _c[1];
                return [2, result
                        ? res.status(200).json({
                            result: result,
                            ganancias: Tganancia,
                            totalVentas: Tventas,
                            count: count,
                            link: hateoasLink,
                            pages: pages === 0 || isNaN(pages) ? 1 : pages,
                        })
                        : res.status(404).json({ message: 'No existen ventas' })];
            case 3:
                error_7 = _e.sent();
                throw res.status(500).json({ message: (_d = error_7.message) !== null && _d !== void 0 ? _d : error_7 });
            case 4: return [2];
        }
    });
}); };
exports.searchSaleXDate = searchSaleXDate;
var searchSaleDetails = function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var sales, result, error_8;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, typeorm_1.getRepository)(sales_1.Sales).findOne({
                        where: { id: req.params.id },
                    })];
            case 1:
                sales = _b.sent();
                if (!sales) {
                    return [2, res.status(404).json({ message: 'No existe la venta' })];
                }
                return [4, (0, typeorm_1.createQueryBuilder)(salesDetails_1.SalesDetails, 'd')
                        .select(['d', 'v', 'c'])
                        .innerJoin('d.ventas', 'v', 'v.id=d.ventasId ')
                        .innerJoin('v.clientes', 'c', 'c.id = v.clientesId')
                        .where("v.id = '".concat(req.params.id, "' "))
                        .orderBy('v.fecha_creacion', 'DESC')
                        .getMany()];
            case 2:
                result = _b.sent();
                return [2, res.status(200).json({ result: result })];
            case 3:
                error_8 = _b.sent();
                throw res.status(500).json({ message: (_a = error_8.message) !== null && _a !== void 0 ? _a : error_8 });
            case 4: return [2];
        }
    });
}); };
exports.searchSaleDetails = searchSaleDetails;
