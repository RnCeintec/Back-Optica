import { Shop } from '../core/entities';
import { Response, Request } from 'express'
import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw, ObjectID } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Historialmovimiento } from '../core/entities/historialmovimiento'
import { updateMonturasInteractor} from '../core/interactor/monturas';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';

export const createHistorialmovimientoTienda = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { monturasId,tiendaId,comentario
    } = req.body

    const montura = await getRepository(Monturas).findOne(monturasId);
    if (!montura) {
      return res.status(404).json({ message: "Dede enviar id de la montura" })
    }



    const Historial_movimiento = new Historialmovimiento()
    Historial_movimiento.monturasId = monturasId
    Historial_movimiento.tiendaId = tiendaId
    Historial_movimiento.indicador = "TRASLADO"
    Historial_movimiento.comentario = comentario

    const result0= await getRepository(Historialmovimiento).save(Historial_movimiento)

    montura.tienda = tiendaId ?? montura.tienda

    const result = await updateMonturasInteractor(montura)


    return res.json({result0:result0,result:result})


  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }




}

export const createmasivoHistorialmovimientoTienda = async (req: Request, res: Response): Promise<Response> => {
  try {
    const datosmovimiento = req.body
     let resultall: Monturas[] = []
     for ( let datos of datosmovimiento)  {  
      

      const montura = await getRepository(Monturas).findOne(datos.monturasId);
      if (!montura) {
        return res.status(404).json({ message: "Dede enviar id de la montura" })
      }
  

    const Historial_movimiento = new Historialmovimiento()
    Historial_movimiento.monturasId = datos.monturasId
    Historial_movimiento.tiendaId = datos.tiendaId
    Historial_movimiento.indicador = "TRASLADO"
    Historial_movimiento.comentario = datos.comentario

    const result0= await getRepository(Historialmovimiento).save(Historial_movimiento)

    montura.tienda = datos.tiendaId ?? montura?.tienda


    const result = await updateMonturasInteractor(montura)


    resultall.push(result);
 
      
    }


   return  res.json({result: resultall})

  


  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }




}







 export const listaHistorialmovimiento = async (req: Request, res: Response): Promise<Response> => {
  try {

    let where:
    | string
    | ObjectLiteral
    | FindConditions<Historialmovimiento>
    | FindConditions<Historialmovimiento>[]
    | undefined  = {};



    var [result, count] = await getRepository(Historialmovimiento).findAndCount({
      where: [
        where
      ]
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
 




