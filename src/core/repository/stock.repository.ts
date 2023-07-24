import { Stock } from '../entities';
export interface StockRepository{
  createStock(stock: Stock): Promise<Stock>;
  updateStock(stock: Stock): Promise<Stock>;
  // deleteMonturas(historialinventario: Historialinventario): Promise<Historialinventario>;
}
