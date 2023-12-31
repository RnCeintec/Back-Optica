import { Shop } from '../core/entities';
import { Response, Request } from 'express'
import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Historialinventario } from '../core/entities/historialinventario'

import { Detalleinventario } from '../core/entities/detalleinventario'

import { createDetalleinventarioInteractor } from  '../core/interactor/inventario';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';



export const createDetalleinventario = async (req: Request, res: Response): Promise<Response> => {
  try {

    const datosinventario = req.body
    const resultall = []


    for ( let datos of datosinventario)  {  

      const detalle_inventario  = new Detalleinventario()
      detalle_inventario.historialinventario = datos.historialId
      detalle_inventario.monturasId = datos.monturasId
  
      const result = await createDetalleinventarioInteractor(detalle_inventario)
      

    resultall.push(result);
 
      
    }


   return  res.json({result: resultall})



    } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
 }




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





 export const listaInventario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { tienda} = req.query;
    let where:
    | string
    | ObjectLiteral
    | FindConditions<Historialinventario>
    | FindConditions<Historialinventario>[]
    | undefined  = {};

    if (tienda) {

      const tiendas = await getRepository(Shop).findOne({
        where: { id: tienda, isActive: true },
      });

      if (!tiendas) {
        return res.status(404).json({ message: "No existe la tienda" })
      }

      where = {
        tienda: tiendas
      }

    }

    var [result, count] = await getRepository(Historialinventario).findAndCount({
      where: [
        where
      ],
      relations: ['detalleinv'],
      order: { fecha: "DESC" }

    }
    )

     return result
      ? res.status(200).json({
        result,
        count,
        pages:1})
      : res.status(404).json({ message: 'No existen Inventarios' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}
 




export const searchDetalleInventario = async (req: Request, res: Response): Promise<Response> => {

  try {
    const detalle = await getRepository(Detalleinventario).find(
      { where: { historialinventario: req.params.id} })
    if (!detalle) {
      return res.status(404).json({ message: "No existe el detalle" })
    }
    return res.status(200).json({ result: detalle })
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}