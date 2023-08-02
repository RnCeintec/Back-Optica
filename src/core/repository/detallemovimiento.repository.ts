import { DetalleMovimiento } from '../entities';
export interface DetalleMovimientoRepository {
  createDetalleMovimiento(detallemovimiento: DetalleMovimiento): Promise<DetalleMovimiento>;
  updateDetalleMovimiento(detallemovimiento: DetalleMovimiento): Promise<DetalleMovimiento>;

}
