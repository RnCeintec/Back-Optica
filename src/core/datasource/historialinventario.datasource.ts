import { getRepository, Raw } from 'typeorm';

import { Historialinventario } from '../entities/historialinventario';
import { HistorialinventarioRepository } from '../repository/historialinventario.repository';

export class HistorialinventarioTypeORM implements HistorialinventarioRepository {
  async findHistorialinventarioByid(idhistorial: number): Promise<Historialinventario | undefined> {
    try {
      return await getRepository(Historialinventario).findOne({
        where: { idhistorial }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createHistorialinventario(historialinventario: Historialinventario): Promise<Historialinventario> {
    try {
      if (await this.findHistorialinventarioByid(historialinventario.idhistorial)) throw 'Montura ya registrada';
      return await getRepository(Historialinventario).save(historialinventario);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateHistorialinventario(historialinventario: Historialinventario): Promise<Historialinventario> {
    try {
     
      const  findHistorialinventarioByid = await this.findHistorialinventarioByid(historialinventario.idhistorial);
      if ( findHistorialinventarioByid !== undefined && historialinventario.idhistorial !== findHistorialinventarioByid.idhistorial){
        throw 'Historial no registrado';
      }
      return await getRepository(Historialinventario).save(historialinventario);
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
