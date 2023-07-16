import { Sales, Accesorio, SalesDetails, Diotrias } from "../core/entities";

import { Response, Request } from "express";
import {
  getRepository,
  ObjectLiteral,
  FindConditions,
  In,
  Like,
  Raw,
  createQueryBuilder,
} from "typeorm";
import dayjs from "dayjs";
import moment from "moment";
import { Hateoas } from "../utils"; //

export const getDashboard = async (
  req: Request,
  res: Response
): Promise<Response> => {


  const { limit, offset, search } = req.query;

  var TotalVentas = await getRepository(Sales).count( {where: { estado: "pagado", isActive: true, shop: search },});
 
  const TotalProductos = await getRepository(Accesorio).count({ isActive: true });
  const ultimasVentas = await getRepository(Sales).findAndCount({
    where: { isActive: true },
    order: { fecha_actualizacion: "DESC" },
    take: 5,
  });
  

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


  var [pedidosLunas] = await createQueryBuilder(Diotrias, "d")
  .select(["d", "p","di"])
  .innerJoin("d.paciente", "p", "d.pacienteId = p.id")
  .innerJoin("d.diotria_id", "di", "d.diotria_id = di.id")
  .innerJoin("d.tienda", "t", "d.tienda = t.id")
  .where('d.tienda ='+search)
  .orderBy("d.id", "DESC")
  .groupBy("d.diotria_id")
  .skip(skip * take)
  .take(take)
  .getManyAndCount();

  pedidosLunas = pedidosLunas.filter(luna => luna.isActive == true);

  // const masVendidos = await createQueryBuilder(SalesDetails, "d")
  //   .select(["d.cantidad", "p"])
  //   .innerJoin("d.product", "p", "d.productId = p.id")
  //   .orderBy({ "d.fecha_creacion": "DESC" })
  //   .groupBy("d.productId")
  //   .getManyAndCount();

  const cantidad = await getRepository(SalesDetails)
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
    .where('s.shop ='+search)
    .where("s.estado != 'anulado'")
    .groupBy("v.id_producto")
    .orderBy({ "SUM(v.cantidad)": "DESC" })
    .limit(10)
    .getRawMany();

  const masVendidos = cantidad;

  const dateIni = dayjs().subtract(7, "day").format("YYYY-MM-DD HH:mm:ss");
  const dateFin = dayjs().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

  const [gananciaSemanal] = await createQueryBuilder(SalesDetails, "d")
    .select(["d.salePrice", "d.cantidad"])
    .innerJoin("ventas", "s", "s.id = d.ventas")
    // .innerJoin("d.ventas", "s", "d.ventas = s.id")
    .where(`d.fecha_creacion BETWEEN '${dateIni}' AND '${dateFin}'`)
    .where('s.shop ='+search)
    .where("s.estado != 'anulado'")
    .getManyAndCount();



  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD hh:mm"); // mes actual
  const endOfMonth = moment().endOf("month").format("YYYY-MM-DD hh:mm"); // mes actual

  const [gananciaMensual] = await createQueryBuilder(SalesDetails, "d")
    //.select(["s.total", "d.cantidad", "a.precio_compra"])
    .select(["d.salePrice", "d.cantidad"])
    .innerJoin("d.ventas", "s", "d.ventasId = s.id")
    //.innerJoin("accesorio", "a", "a.id = d.id_producto")
    .where(`d.fecha_creacion BETWEEN '${startOfMonth}' AND '${endOfMonth}'`)
    .where('s.shop ='+search)
    .where("s.estado != 'anulado'")
    //.groupBy("s.id")
    .getManyAndCount();
  let suma = 0;
  let total = new Array();
  gananciaSemanal.map((element) => {
    
    
      suma +=
    element.cantidad * element.salePrice;
    
    
    // total.push(suma);
  });
  let suma2 = 0;
  let total2 = new Array();
  gananciaMensual.map((element) => {
    suma2 +=
      element.cantidad * element.salePrice;
    // total2.push(suma2);
  });
  // const TgananciaSemanal = total.reduce((a, b) => a + b, 0);
  // const TgananciaMensual = total2.reduce((a, b) => a + b, 0);

  const TgananciaSemanal = suma;
  const TgananciaMensual = suma2;

  const TotalPagado = await getRepository(Sales).count({
    where: { estado: "pagado", isActive: true, shop: search },
  });
  const TotalAnulado = await getRepository(Sales).count({
    where: { estado: "anulado", isActive: true, shop: search },
  });
  
  
  return res.json({
    TotalVentas,
    TotalPagado,
    TotalAnulado,
    TotalProductos,
    TgananciaSemanal,
    TgananciaMensual,
    ultimasVentas,
    masVendidos,
    pedidosLunas
  });

};
