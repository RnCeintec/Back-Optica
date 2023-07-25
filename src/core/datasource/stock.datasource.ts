import { getRepository, Raw } from 'typeorm';

import { Stock } from '../entities/stock';
import { StockRepository } from '../repository/stock.repository';

export class StockTypeORM implements StockRepository {

  async findStockByid(accesorioId : number,tiendaId: number): Promise<Stock | undefined> {
    try {
      return await getRepository(Stock).findOne({
        where: { accesorioId , tiendaId }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createStock(stock:Stock): 
  Promise<Stock> {
    try {
      if (await this.findStockByid(stock.accesorioId,stock.tiendaId)) throw 'Stock ya registrado';
      return await getRepository(Stock).save(stock);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateStock(stock: Stock): 
  Promise<Stock> {
    try {
     
      const  findStockByid = await this.findStockByid(stock.accesorioId ,stock.tiendaId);
      if ( findStockByid !== undefined && stock.accesorioId  !== findStockByid.accesorioId  && stock.tiendaId !== findStockByid.tiendaId){
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
