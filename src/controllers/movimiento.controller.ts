import { Shop } from '../core/entities';
import { Response, Request } from 'express'
import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw, ObjectID } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Movimiento } from '../core/entities/movimiento'
import { DetalleMovimiento } from '../core/entities/detallemovimiento'
import { encrypt } from '../utils';
import { Hateoas } from '../utils';




 export const listamovimiento = async (req: Request, res: Response): Promise<Response> => {
  try {

    const { limit, offset, tienda } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        // ? search && search !== ''
        //   ? undefined
        ? `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Movimiento>
      | FindConditions<Movimiento>[]
      | undefined = {};


      if (tienda != "") {

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



      if(tienda != ""){

    var [result, count] = await getRepository(Movimiento).findAndCount({
        take,
        skip: skip * take,
      where: [
        {  tienda: Like (`${tienda}`), ...where}
      ],
      relations: ['tienda',],
      order: { fecha: "ASC" }
    }
    )
      }

      else
      {
        var [result, count] = await getRepository(Movimiento).findAndCount({
            take,
            skip: skip * take,
          where: [
            {...where}
          ],
          relations: ['tienda',],
          order: { fecha: "ASC" }
        }
        )

      }

      const [hateoasLink, pages] = hateoas.hateoas({ count });
      return result
        ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
        : res.status(404).json({ message: 'No existen movimientos' });
    } catch (error: any) {
      throw res.status(500).json({ message: error.message ?? error })
    }
  


}



export const createmovimiento = async (req: Request, res: Response): Promise<Response> => {
  try {
    

    const {monturasmovimiento,ruc,razonsocial,documento,nrodocumento,fechafacturacion,responsable} = req.body
    const resultall = []

    const movimiento = new Movimiento();
    movimiento.estado = "pendiente"
    movimiento.ruc = ruc
    movimiento.razonsocial = razonsocial
    movimiento.nrodocumento = nrodocumento
    movimiento.documento = documento
    movimiento.fechafacturacion = fechafacturacion
    movimiento.tiendaId = responsable
    // movimiento.userId = recepcion

    const result0 = await getRepository(Movimiento).save(movimiento);

   for ( let datos of monturasmovimiento)  {  

      const detalle_movimiento  = new DetalleMovimiento()
      detalle_movimiento.movimientoId = result0.id
      detalle_movimiento.monturasId = datos.monturasId
      detalle_movimiento.tiendaId =  result0.tiendaId
 
  
    const result = await getRepository(DetalleMovimiento).save(detalle_movimiento);
      

      resultall.push(result);
 
      
     }

    console.log(resultall);

   return  res.json({result: resultall})


    } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
 }

 export const searchMovimiento = async (req: Request, res: Response): Promise<Response> => {

  try {
    //PASAR LAS CATEGPRIAS RELACIONADAS
    const movimiento = await getRepository(Movimiento).findOne({ where: { id: req.params.id }, relations: ['tienda', 'detallesmovimiento'] })
    if (!movimiento ) {
      return res.status(404).json({ message: "No existe movimiento" })
    }
    return res.status(200).json({ result: movimiento})
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}




