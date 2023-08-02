import { Express } from "express";

import userRoute from "./user.router";
import loginRoute from "./auth.route";
import productRoute from "./product.route";
import clientRoute from "./client.route";
import clientfacturaRoute from "./client_factura.route";
import salesRoute from "./sales.route";
import pymentTypesRoute from "./pymentTypes.route";
import shopRoute from "./shop.route";
import dashboardRoute from "./dashboar.route";

import facturasRoute from "./facturas.routes";
import colorRoute from "./color.routes";
import vendedorRoute from "./vendedor.route";
import monturasRoute from "./monturas.route";
import proveedorRoute from "./proveedor.route";
import laboratorioRoute from "./laboratorio.route";
import diotriasRoute from "./diotrias.route";
import detalleInventarioRoute from "./detalleInventario.route";
import HistorialMovimientoRoute from "./historialmovimiento.route";
import movimientoRoute from "./movimiento.route";
export default ({ app, version }: { app: Express; version: string }) => {
  app.use(version, userRoute);
  app.use(version, loginRoute);
  app.use(version, productRoute);
  app.use(version, clientRoute);
  app.use(version, salesRoute);
  app.use(version, pymentTypesRoute);
  app.use(version, shopRoute);
  app.use(version, dashboardRoute);
  app.use(version, vendedorRoute);
  app.use(version, facturasRoute);
  app.use(version, monturasRoute);
  app.use(version, proveedorRoute);
  app.use(version, laboratorioRoute);
  app.use(version, clientfacturaRoute);
  app.use(version, diotriasRoute);
  app.use(version, colorRoute);
  app.use(version,detalleInventarioRoute);
  app.use(version,HistorialMovimientoRoute);
  app.use(version,movimientoRoute);

};
