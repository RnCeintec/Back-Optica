import { Detalleinventario } from '../entities';
export interface DetalleinventarioRepository{
  createDetalleinventario(detalleinventario: Detalleinventario): Promise<Detalleinventario>;
  updateDetalleinventario(detalleinventario: Detalleinventario): Promise<Detalleinventario>;
  // deleteMonturas(historialinventario: Historialinventario): Promise<Historialinventario>;
}
