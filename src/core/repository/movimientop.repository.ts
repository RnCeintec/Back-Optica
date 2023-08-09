import { MovimientoP } from '../entities';
export interface MovimientoPRepository {
  createMovimiento(movimiento: MovimientoP ): Promise<MovimientoP>;
  updateMovimiento(movimiento: MovimientoP ): Promise<MovimientoP>;

}
