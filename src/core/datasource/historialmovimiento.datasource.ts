import { getRepository, Raw } from 'typeorm';

import { Historialmovimiento } from '../entities/historialmovimiento';
import { HistorialmovimientoRepository } from '../repository/historialmovimiento.repository';

export class HistorialmovimientoTypeORM implements HistorialmovimientoRepository {
  async findHistorialmovimientoByid(idhistorial: number): Promise<Historialmovimiento | undefined> {
    try {
      return await getRepository(Historialmovimiento).findOne({
        where: { idhistorial }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createHistorialmovimiento(historialmovimiento: Historialmovimiento): Promise<Historialmovimiento> {
    try {
      if (await this.findHistorialmovimientoByid(historialmovimiento.id)) throw 'Montura ya registrada';
      return await getRepository(Historialmovimiento).save(historialmovimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateHistorialmovimiento(historialmovimiento: Historialmovimiento): Promise<Historialmovimiento> {
    try {
     
      const  findHistorialmovimientoByid = await this.findHistorialmovimientoByid(historialmovimiento.id);
      if ( findHistorialmovimientoByid !== undefined && historialmovimiento.id !== findHistorialmovimientoByid.id){
        throw 'Historial no registrado';
      }
      return await getRepository(Historialmovimiento).save(historialmovimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }
//   async deleteMonturas(historialmovimiento: Historialmovimiento): Promise<Historialmovimiento> {
//     try {
//       montura.isActive = false;
//       return await getRepository(Monturas).save(montura);
//     } catch (error:any) {
//       throw new Error(error);
//     }
//   }

}
