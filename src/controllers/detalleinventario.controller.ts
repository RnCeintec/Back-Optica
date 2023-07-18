import { Shop } from '../core/entities';
import { Response, Request } from 'express'
import { getRepository, ObjectLiteral, FindConditions, In, Like, Raw } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Historialinventario } from '../core/entities/historialinventario'

import { Detalleinventario } from '../core/entities/detalleinventario'

import { createDetalleinventarioInteractor } from  '../core/interactor/inventario';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';

export const createHistorialinventario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { total,totalfaltantes,totalverificados,tienda
    } = req.body


    const Historial_inventario  = new Historialinventario()
    Historial_inventario.total = total
    Historial_inventario.totalfaltantes = totalfaltantes
    Historial_inventario.totalverificados = totalverificados 
    Historial_inventario.tienda = tienda

    const result= await getRepository(Historialinventario).save(Historial_inventario)

    return res.json({result:result})


  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}


export const createDetalleinventario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {historialId,monturasId
    } = req.body


    const detalle_inventario  = new Detalleinventario()
    detalle_inventario.historialinventario = historialId
    detalle_inventario.monturas = monturasId

    const result = await createDetalleinventarioInteractor(detalle_inventario)

       return res.json({result:result})
    } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
 }

 export const listaInventario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { tienda,ventasExiste } = req.query;
    let where:
    | string
    | ObjectLiteral
    | FindConditions<Historialinventario>
    | FindConditions<Historialinventario>[]
    | undefined = { isActive: true};

    if (tienda) {

      const tiendas = await getRepository(Shop).findOne({
        where: { id: tienda, isActive: true },
         });

      if (!tiendas) {
         return res.status(404).json({ message: "No existe la tienda" })
                  }

      where = {
        tienda: tiendas,
        isActive: true
      }

    }
    var [result, count] = await getRepository(Historialinventario).findAndCount({
      where: [
        where
      ],
   
      relations: ['tienda', 'detalleinv'],
      order: { fecha: "DESC" }
    });

     return result
      ? res.status(200).json({
        result,
        count,
      })
      : res.status(404).json({ message: 'No existen Inventarios' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}