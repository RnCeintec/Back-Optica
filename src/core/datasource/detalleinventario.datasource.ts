import { getRepository, Raw } from 'typeorm';

import { Detalleinventario } from '../entities/detalleinventario';
import { DetalleinventarioRepository } from '../repository/detalleinventario.repository';

export class DetalleinventarioTypeORM implements DetalleinventarioRepository {

  async findDetalleinventarioByid(iddetalle: number): Promise<Detalleinventario | undefined> {
    try {
      return await getRepository(Detalleinventario).findOne({
        where: { iddetalle }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createDetalleinventario(detalleinventario:Detalleinventario): 
  Promise<Detalleinventario> {
    try {
      if (await this.findDetalleinventarioByid(detalleinventario.iddetalle)) throw 'Montura ya registrada';
      return await getRepository(Detalleinventario).save(detalleinventario);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateDetalleinventario(detalleinventario: Detalleinventario): 
  Promise<Detalleinventario> {
    try {
     
      const  findDetalleinventarioByid = await this.findDetalleinventarioByid(detalleinventario.iddetalle);
      if ( findDetalleinventarioByid !== undefined && detalleinventario.iddetalle !== findDetalleinventarioByid.iddetalle){
        throw 'Historial no registrado';
      }
      return await getRepository(Detalleinventario).save(detalleinventario);
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
