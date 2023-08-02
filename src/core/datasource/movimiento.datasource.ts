import { getRepository, Raw } from 'typeorm';

import { Movimiento} from '../entities/movimiento';
import { MovimientoRepository } from '../repository/movimiento.repository';

export class MovimientoTypeORM implements MovimientoRepository {
  async findMovimientoByid(id: number): Promise<Movimiento | undefined> {
    try {
      return await getRepository(Movimiento).findOne({
        where: { id }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createMovimiento(movimiento: Movimiento): Promise<Movimiento> {
    try {
      if (await this.findMovimientoByid(movimiento.id)) throw 'Movimiento ya registrado';
      return await getRepository(Movimiento).save(movimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateMovimiento(movimiento: Movimiento): Promise<Movimiento> {
    try {
     
      const  findMovimientoByid = await this.findMovimientoByid(movimiento.id);
      if ( findMovimientoByid !== undefined && movimiento.id !== findMovimientoByid.id){
        throw 'Historial no registrado';
      }
      return await getRepository(Movimiento).save(movimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }
//   async deleteMonturas(movimiento: Movimiento): Promise<Movimiento> {
//     try {
//       montura.isActive = false;
//       return await getRepository(Monturas).save(montura);
//     } catch (error:any) {
//       throw new Error(error);
//     }
//   }

}
