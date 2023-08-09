import { DetalleMovimientoP } from '../entities';
export interface DetalleMovimientoPRepository {
  createDetalleMovimiento(detallemovimiento: DetalleMovimientoP): Promise<DetalleMovimientoP>;
  updateDetalleMovimiento(detallemovimiento: DetalleMovimientoP): Promise<DetalleMovimientoP>;

}
