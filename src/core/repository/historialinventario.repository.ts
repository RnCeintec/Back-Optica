import { Historialinventario } from '../entities';
export interface HistorialinventarioRepository {
  createHistorialinventario(historialinventario: Historialinventario): Promise<Historialinventario>;
  updateHistorialinventario(historialinventario: Historialinventario): Promise<Historialinventario>;
  // deleteMonturas(historialinventario: Historialinventario): Promise<Historialinventario>;
}
