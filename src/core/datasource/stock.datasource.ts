import { getRepository, Raw } from 'typeorm';

import { Stock } from '../entities/stock';
import { StockRepository } from '../repository/stock.repository';

export class StockTypeORM implements StockRepository {

  async findStockByid(idproducto: number,idTienda: number): Promise<Stock | undefined> {
    try {
      return await getRepository(Stock).findOne({
        where: { idproducto, idTienda }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createStock(stock:Stock): 
  Promise<Stock> {
    try {
      if (await this.findStockByid(stock.idproducto,stock.idTienda)) throw 'Stock ya registrado';
      return await getRepository(Stock).save(stock);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateStock(stock: Stock): 
  Promise<Stock> {
    try {
     
      const  findStockByid = await this.findStockByid(stock.idproducto,stock.idTienda);
      if ( findStockByid !== undefined && stock.idproducto !== findStockByid.idproducto && stock.idTienda !== findStockByid.idTienda){
        throw 'no registrado';
      }
      return await getRepository(Stock).save(stock);
    } catch (error:any) {
      throw new Error(error);
    }
  }
//   async deleteMonturas(historialinventario: Historialinventario): Promise<Historialinventario> {
//     try {
//       montura.isActive = false;
//       return await getRepository(Monturas).save(montura);
//     } catch (error:any) {
//       throw new Error(error);
//     }
//   }

}
