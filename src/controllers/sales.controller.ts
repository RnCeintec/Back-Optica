import { Client } from '../core/entities/client';
import { ClientFactura } from '../core/entities/client_factura';
import { Parameters } from '../core/entities/parameters';
import { Shop } from '../core/entities/shop';
import { Response, Request } from 'express';
import axios, { AxiosResponse } from 'axios';
// import { sales } from 'security';
import {
  getRepository,
  ObjectLiteral,
  FindConditions,
  In,
  Like,
  Raw,
  createQueryBuilder,
} from 'typeorm';
import { Sales } from '../core/entities/sales';
import {
  createSalestInteractor,
  updateSalesInteractor,
  deleteSalestInteractor,
  validarStockSalestInteractor,
  createSalesDetailstInteractor,
} from '../core/interactor/sales';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';
import { User } from '../core/entities/user';
import { Vendedor } from '../core/entities/vendedor';
import { PymentType } from '../core/entities/pymentTypes';
import { Laboratorio } from '../core/entities/laboratorio';
import { Facturas } from '../core/entities/facturas';
import { product, pymentTypes } from 'security';
import { SalesDetails } from '../core/entities/salesDetails';
import { Accesorio } from '../core/entities/accesorio';
import { isNumber } from 'class-validator';
import dayjs from 'dayjs';
import moment from 'moment';

import { RSA_NO_PADDING } from 'constants';
import { off } from 'process';
import { Monturas } from '../core/entities/monturas';
import { Diotrias } from '../core/entities/dioptrias';

enum EsComprobante {
  'pendiente' = 'pendiente',
  'enviado' = 'enviado',
}
export const createSale = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      tipo_comprobante,
      tipo_pago,
      cliente_facturar_id,
      local_id,
      cliente_id,
      total,
      efectivo,
      usuario_id,
      vendedor,
      diotriasId,
      detalleLunaVenta,
      productos,
    } = req.body;

    //declarando cadenas de facturador
    var url = "https://facturador-optica.ceintec-sys.net.pe/envioSunat/generarXml.php";
    var sendSunat = "https://facturador-optica.ceintec-sys.net.pe/src/sendComprobante.php";
    
    console.log(productos);
   

    const sales = new Sales();
    
    if (!tipo_comprobante) {
      res
        .status(400)
        .json({ message: 'El tipo de comprobante no debe estar en none' });
    }

    const numCompro = await getRepository(Parameters).findOne({
      where: { tipo_comprobante: tipo_comprobante },
    });
    
    if(cliente_id != null){
      var cliente = await getRepository(Client).findOne({
        where: { id: cliente_id, isActive: true },
      });
    }else{
      var cliente = await getRepository(Client).findOne({
        where: { documento: '87654321', isActive: true },
      });
    }

    const clienteFacturar = await getRepository(ClientFactura).findOne({
      where: { id: cliente_facturar_id, isActive: true },
    });

    const usuario = await getRepository(User).findOne({
      where: { id: usuario_id, isActive: true },
    });

    const vendedor_ = await getRepository(Vendedor).findOne({
      where: { id: vendedor, isActive: true },
    });

    const pagos = await getRepository(PymentType).findOne({
      where: { nombre: tipo_pago, isActive: true },
    });

    if(detalleLunaVenta!=null){
      const detalleLuna = await getRepository(Laboratorio).findOne({
        where: { id: detalleLunaVenta.idDetalle, isActive: true },
      });

      if (!detalleLuna)
      return res.status(404).json({ message: 'No existe el detalle del producto' });
    }
    
    if (!numCompro)
      return res
        .status(404)
        .json({ message: 'No existe parametro para el comprobante' });

    if (!cliente)
      return res.status(404).json({ message: 'No existe el cliente' });

    if (!clienteFacturar)
      return res.status(404).json({ message: 'No existe el cliente facturar' });

    if (!vendedor_)
      return res.status(404).json({ message: 'No existe el vendedor' });

    if (!usuario)
      return res.status(404).json({ message: 'No existe el usuario' });

    if (!pagos)
      return res.status(404).json({ message: 'No existe el tipo de pago' });

    const comprobante =
      tipo_comprobante == 'boleta'
        ? 'B002-' + `${numCompro.correlativo}`.padStart(8, '0')
        : tipo_comprobante == 'factura'
        ? 'F002-' + `${numCompro.correlativo}`.padStart(8, '0')
        : 'T002-' + `${numCompro.correlativo}`.padStart(8, '0');

    const subtotal = +(total / 1.18).toFixed(2);

 
    sales.clientes = cliente_id;
    sales.clientesFactura = cliente_facturar_id;
    sales.comprobante = comprobante;
    sales.efectivo = efectivo;
    sales.pymentTypes = pagos.id;
    sales.shop = local_id;
    sales.tipo_comprobante = tipo_comprobante;
    sales.user = usuario_id;
    sales.vendedores = vendedor;
    sales.total = total;
    sales.subtotal = subtotal;
    sales.igv = +(total - subtotal).toFixed(2);

    const igvT = +(total - subtotal).toFixed(2);

    if (productos.length <= 0)
      return res.status(400).json({ message: 'Debe enviar productos' });

      const result = await createSalestInteractor(sales);

      const newDetVenta = await createSalesDetailstInteractor(productos, result);
 
      if(detalleLunaVenta!=null){
        var detalle = [{
            id: detalleLunaVenta.id,
            cantidad: 1,
            producto: detalleLunaVenta.product,
            category: detalleLunaVenta.category,
        }]
        const newDetVentaLuna = await createSalesDetailstInteractor(detalle, result);
       
      }
      
      
  
      productos.map(async (product: any) => {
          if (product.category === "Accesorio") {
            const productoUpdate = await getRepository(Accesorio).findOne({
              where: { id: product.id },
            });
            if (!productoUpdate) {
              return res.status(400).json({ message: 'No existe el accesorio' });
            }
            const newUpdate = { stock: productoUpdate.stock - product.cantidad };
            getRepository(Accesorio).merge(productoUpdate, newUpdate);
            await getRepository(Accesorio).save(productoUpdate);
          
           
          }

          if (product.category == "Montura") {
            const productoUpdate = await getRepository(Monturas).findOne({
              where: { id: product.id },
            });
            if (!productoUpdate) {
              return res.status(400).json({ message: 'No existe la montura' });
            }
            const newUpdate = { ventas: result };
            getRepository(Monturas).merge(productoUpdate, newUpdate);
            await getRepository(Monturas).save(productoUpdate);
        
          
          }

          if (product.category == "Lunas") {
            const productoUpdate = await getRepository(Diotrias).findOne({
              where: { id: product.id},
            });
            if (!productoUpdate) {
              return res.status(400).json({ message: 'No existe la diotria' });
            }

            
            const newUpdate = { venta: result };
            getRepository(Diotrias).merge(productoUpdate, newUpdate);
            await getRepository(Diotrias).save(productoUpdate);
        

       
          }
      });

   
    //inicio incrementando en 1 el correlativo del comprobante
    const update = {
      correlativo: numCompro.correlativo + 1,
    };

   
    getRepository(Parameters).merge(numCompro, update);
    const updateResult = await getRepository(Parameters).save(numCompro);
 
     //fin de incrementando en 1 el correlativo del comprobante


     //generar registro en tabla factura sunat cuando el tipo de comprobante es distinto a ticket
    if (tipo_comprobante != 'ticket') {
      const factura = new Facturas();
      factura.numero_comprobante = comprobante;
      factura.respuesta = '';
      factura.codigo_anulado = '';
      factura.observaciones = '';
      factura.tipo_comprobante = tipo_comprobante;
      factura.ventas = sales;
      factura.is_nota = 0;
      factura.estado = EsComprobante.pendiente;
      factura.total = total;
      factura.igv = igvT;
      factura.subtotal = subtotal;

      const newFactura = await getRepository(Facturas).save(factura);
      //enviar a sunat
      //funcion de num a letras
    var convertirCantidadEnLetras =  function convertirCantidadEnLetras(cantidad: any): string {
      // Definir nombres de números en letras
      const unidades: string[] = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
      const especiales: string[] = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
      const decenas: string[] = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
      const centenas: string[] = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
    
      // Función auxiliar para convertir un número menor a 1000 en letras
      const  convertirNumeroEnLetras = function convertirNumeroEnLetras(numero: any): string {
        if (numero < 10) {
          return unidades[numero];
        } else if (numero < 20) {
          return especiales[numero - 10];
        } else if (numero < 100) {
          const unidad = numero % 10;
          const decena = Math.floor(numero / 10);
          let letras = decenas[decena];
          if (unidad > 0) {
            letras += ` y ${unidades[unidad]}`;
          }
          return letras;
        } else {
          const unidad = numero % 10;
          const decena = Math.floor((numero % 100) / 10);
          const centena = Math.floor(numero / 100);
          let letras = centenas[centena];
          if (decena === 1 && unidad > 0) {
            letras += `to ${unidades[unidad]}`;
          } else {
            if (decena > 0) {
              letras += ` ${decenas[decena]}`;
            }
            if (unidad > 0) {
              letras += ` y ${unidades[unidad]}`;
            }
          }
          return letras;
        }
      }
    
      // Convertir la cantidad en letras
      const partes = cantidad.toString().split('.');
      const cantidadEntera = parseInt(partes[0], 10);
      const cantidadDecimal = partes[1] ? parseInt(partes[1], 10) : 0;
    
      let letras = '';
      if (cantidadEntera === 0) {
        letras = unidades[0];
      } else if (cantidadEntera < 1000000000) {
        const millon = Math.floor(cantidadEntera / 1000000);
        const miles = Math.floor((cantidadEntera % 1000000) / 1000);
        const unidades = cantidadEntera % 1000;
    
        if (millon > 0) {
          letras += `${convertirNumeroEnLetras(millon)} ${millon === 1 ? 'millón' : 'millones'}`;
        }
    
        if (miles > 0) {
          if (letras !== '') {
            letras += ' ';
          }
          letras += `${convertirNumeroEnLetras(miles)} ${miles === 1 ? 'mil' : 'mil'}`;
        }
    
        if (unidades > 0) {
          if (letras !== '') {
            letras += ' ';
          }
          letras += convertirNumeroEnLetras(unidades);
        }
      }
    
      // Agregar la parte decimal si existe
      if (cantidadDecimal > 0) {
        letras += ` con ${cantidadDecimal.toString().padEnd(2, '0')}/100`;
      }
    
      return letras;
    }
      //data para crear el archivo json
    const _pagado:any = total.toFixed(2);

    var product:any = [];

    var tienda = await getRepository(Shop).findOne({
      where: { id: local_id },
    });

    //obteniendo la fecha actual 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    var cabecera = {
      serie: sales.comprobante,
      rucEmpresa: tienda?.num_documento,
      tipoDocumento: tipo_comprobante == 'boleta' ? "03" : "01", //03 boleta y 01 factura
      UBLVersionID: "2.1",
      CustomizationID: "2.0",
      fechaEmision: formattedDate,
      horaEmision: "00:00:00",
      moneda: "PEN",
      nombreEmpresa: tienda?.rz_social,
      representanteLegal: tienda?.num_documento,
      codDomicilioFiscal: "0000", //empresa[0].codigo_sucursal_sunat,
      rucCliente: clienteFacturar.documento,
      razonSocialCliente: clienteFacturar.rz_social,
      codDomicilioFiscalCliente: "0000",
      montoSinIgv: subtotal.toFixed(2),
      igvTotal: +(total - subtotal).toFixed(2),
      totalConIgv: total.toFixed(2),
      codUnidadMedida: "NIU",
      totaEnLetras: (convertirCantidadEnLetras(_pagado)+" SOLES").toUpperCase(),
      formaPago: "Contado",
      cuotas: [],
    };


    productos.forEach((detalle:any) => {
     
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


    var obejtoJSON = { cabecera: cabecera, detalle: product };

    console.log('Objeto JSON',obejtoJSON);



    const headers = {
      "Authorization": "7MfGJa4&j_apwE3jd+wrL54JbAN-CZ",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    // generar xml en el facturador

    await axios.post(url, obejtoJSON, { headers }).then(
      (respuesta) =>{
        console.log(respuesta.data);
         //enviar xml a sunat
    var tipoDocumento =  (tipo_comprobante == 'boleta' ? "03" : "01");

   var nombre = {
    archivo: tienda?.num_documento+"-"+tipoDocumento+"-"+sales.comprobante
    }
    

    axios.post(sendSunat, nombre, { headers }).then(
      (response) =>{
        console.log(response.data); // Maneja la respuesta según tus necesidades

      });

    });

    }

    return res.json({ result: result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const updateSale = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      comprobante,
      tipo_comprobante,
      tipo_pago,
      local_id,
      cliente_id,
      total,
      subtotal,
      igv,
      efectivo,
      usuario_id,
      estado,
    } = req.body;

    const estadoExiste = EsComprobante[estado as keyof typeof EsComprobante];

    if (!estadoExiste)
      return res.status(404).json({ message: 'estado no disponible' });

    const sales = await getRepository(Sales).findOne(req.params.id);
    if (!sales) {
      return res.status(404).json({ message: 'Dede enviar id del producto' });
    }
    if (tipo_pago) {
      const pago = await getRepository(PymentType).findOne({
        where: { nombre: tipo_pago },
      });
      if (!pago) {
        res.status(404).json({ message: 'Método de pago no disponible' });
      }
      sales.pymentTypes = pago?.id ?? sales.pymentTypes;
    }
    sales.clientes = cliente_id ?? sales.clientes;
    sales.comprobante = comprobante ?? sales.comprobante;
    sales.efectivo = efectivo ?? sales.efectivo;
    sales.shop = local_id ?? sales.shop;
    sales.tipo_comprobante = tipo_comprobante ?? sales.tipo_comprobante;
    sales.user = usuario_id ?? sales.user;
    sales.igv = igv ?? sales.igv;
    sales.total = total ?? sales.total;
    sales.subtotal = subtotal ?? sales.subtotal;
    sales.estado = estado ?? sales.estado;
    const result = await updateSalesInteractor(sales);
    return res.json(result);
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const deleteSale = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const salesById = await getRepository(Sales).findOne(req.params.id);
    if (!salesById) {
      return res.status(404).json({ message: 'No existe el producto' });
    }
    const result = await deleteSalestInteractor(salesById);
    return res.json({ result: result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const listSale = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { limit, offset, search, pago } = req.query;
    const arrayPagos = pago && pago !== '' ? `${pago}`.split(',') : [];

    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Sales>
      | FindConditions<Sales>[]
      | undefined = { isActive: true };

    if (arrayPagos.length > 0) {
      where = {
        ...where,
        // pymentTypes: In(arrayPagos),
      };
    }

    const [result, count] = await getRepository(Sales).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          comprobante: Like(`%${search}%`),
          ...where,
        },
        {
          tipo_comprobante: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          clientes: Like(`%${search}%`),
          ...where,
        },
      ],
      relations: ['salesDetails', 'clientes', 'user', 'pymentTypes'],
      order: { fecha_actualizacion: 'DESC' },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: 'No existen ventas' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const listaVentas = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { limit, offset, search, pago } = req.query;

    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });

    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Sales>
      | FindConditions<Sales>[]
      | undefined = { isActive: true };

    const [result, count] = await getRepository(Sales).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          comprobante: Like(`%${search}%`),
          ...where,
        },
        {
          tipo_comprobante: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          clientes: Like(`%${search}%`),
          ...where,
        },
      ],
      relations: ['salesDetails', 'clientes', 'user', 'pymentTypes','clientesFactura','shop'],
      order: { fecha_actualizacion: 'DESC' },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: 'No existen ventas' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const searchSale = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const sales = await getRepository(Sales).findOne({
      where: { id: req.params.id },
      relations: ['clientes', 'user', 'pymentTypes'],
    });
    if (!sales) {
      return res.status(404).json({ message: 'No existe la venta' });
    }
    return res.status(200).json({ result: sales });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const searchSaleXDate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { limit, offset, fechaInicio, fechaFin, tienda } = req.query;

    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Sales>
      | FindConditions<Sales>[]
      | undefined = { isActive: true };

    const fechaInicio2 = moment().startOf('month').format('YYYY-MM-DD hh:mm'); // mes actual
    const fechaFin2 = moment().endOf('month').format('YYYY-MM-DD hh:mm'); // mes actual

    const [ganancias] = await createQueryBuilder(SalesDetails, 'd')
      .select(['s.total', 'd.cantidad', 'd.salePrice'])
      .innerJoin('d.ventas', 's', 'd.ventasId = s.id')
      .where(
        `s.fecha_creacion BETWEEN '${fechaInicio ?? fechaInicio2}' AND '${
          fechaFin ?? fechaFin2
        }' `
      )
      .where('s.shop ='+tienda)
      .groupBy('s.id')
      .orderBy('s.fecha_creacion', 'DESC')
      .getManyAndCount();

      let suma = 0;
      let total = new Array();
      let totalV = 0;
      let totalArray = new Array();
      ganancias.map((element) => {
        suma +=
          element.ventas.total - element.cantidad * element.salePrice;
        totalV += +element.ventas.total;
        totalArray.push(totalV);
        total.push(suma);
      });

    const Tganancia = suma;
    const Tventas = totalV;
    const [result, count] = await createQueryBuilder(Sales, 's')
      .select(['s', 'c', 'u', 'p', 'sd'])
      .innerJoin('s.clientes', 'c', 'c.id = s.clientesId')
      .innerJoin('s.user', 'u', 'u.id = s.userId')
      .innerJoin('s.pymentTypes', 'p', 'p.id = s.pymentTypesId')
      .innerJoin('s.salesDetails', 'sd', 's.id = sd.ventasId')
      // .innerJoin('sd.product', 'pr', 'pr.id = sd.productId')
      .where(
        `s.fecha_creacion BETWEEN '${fechaInicio ?? fechaInicio2}' AND '${
          fechaFin ?? fechaFin2
        }'`
      )
      .where('s.shop ='+tienda)
      .orderBy('s.id', 'DESC')
      .skip(skip * take)
      .take(take)
      .getManyAndCount();

    const [hateoasLink, pages] = hateoas.hateoas({ count });

    return result
      ? res.status(200).json({
          result,
          ganancias: Tganancia,
          totalVentas: Tventas,
          count,
          link: hateoasLink,
          pages: pages === 0 || isNaN(pages) ? 1 : pages,
        })
      : res.status(404).json({ message: 'No existen ventas' });

    // return res.json({ganancias:Tganancia,totalVentas:Tventas,result:vestasXfechas})
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const searchSaleDetails = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const sales = await getRepository(Sales).findOne({
      where: { id: req.params.id },
    });
    if (!sales) {
      return res.status(404).json({ message: 'No existe la venta' });
    }

    const result = await createQueryBuilder(SalesDetails, 'd')
      .select(['d', 'v', 'c'])
      .innerJoin('d.ventas', 'v', 'v.id=d.ventasId ')
      .innerJoin('v.clientes', 'c', 'c.id = v.clientesId')
      .where(`v.id = '${req.params.id}' `)
      .orderBy('v.fecha_creacion', 'DESC')
      .getMany();

    return res.status(200).json({ result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};
