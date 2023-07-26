import { Historialmovimiento } from '../entities';
export interface HistorialmovimientoRepository {
  createHistorialmovimiento(historialmovimiento: Historialmovimiento): Promise<Historialmovimiento>;
  updateHistorialmovimiento(historialmovimiento: Historialmovimiento): Promise<Historialmovimiento>;
  // deleteMonturas(historialinventario: Historialinventario): Promise<Historialinventario>;
}
