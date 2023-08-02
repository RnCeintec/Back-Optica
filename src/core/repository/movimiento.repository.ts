import { Movimiento } from '../entities';
export interface MovimientoRepository {
  createMovimiento(movimiento: Movimiento): Promise<Movimiento>;
  updateMovimiento(movimiento: Movimiento): Promise<Movimiento>;

}
