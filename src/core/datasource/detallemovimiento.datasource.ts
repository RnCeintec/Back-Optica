import { getRepository, Raw } from 'typeorm';

import {DetalleMovimiento } from '../entities/detallemovimiento';
import {DetalleMovimientoRepository} from '../repository/detallemovimiento.repository';

export class DetalleMovimientoTypeORM implements DetalleMovimientoRepository{
  async findDetalleMovimientoByid(id: number): Promise<DetalleMovimiento | undefined> {
    try {
      return await getRepository(DetalleMovimiento).findOne({
        where: { id }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createDetalleMovimiento(detallemovimiento: DetalleMovimiento): Promise<DetalleMovimiento> {
    try {
      if (await this.findDetalleMovimientoByid(detallemovimiento.id)) throw 'DetalleMovimiento ya registrado';
      return await getRepository(DetalleMovimiento).save(detallemovimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  
  async updateDetalleMovimiento(detallemovimiento: DetalleMovimiento): Promise<DetalleMovimiento> {
    try {
     
      const  findDetalleMovimientoByid = await this.findDetalleMovimientoByid(detallemovimiento.id);
      if ( findDetalleMovimientoByid !== undefined && detallemovimiento.id !== findDetalleMovimientoByid.id){
        throw 'Historial no registrado';
      }
      return await getRepository(DetalleMovimiento).save(detallemovimiento);
    } catch (error:any) {
      throw new Error(error);
    }
  }
//   async deleteMonturas(detallemovimiento: DetalleMovimiento): Promise<DetalleMovimiento> {
//     try {
//       montura.isActive = false;
//       return await getRepository(Monturas).save(montura);
//     } catch (error:any) {
//       throw new Error(error);
//     }
//   }

}
