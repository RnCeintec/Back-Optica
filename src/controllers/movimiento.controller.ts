import { Historialmovimiento, Shop } from '../core/entities';
import { Response, Request } from 'express'
import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw, ObjectID, Any } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Movimiento } from '../core/entities/movimiento'
import { DetalleMovimiento } from '../core/entities/detallemovimiento'
import { encrypt } from '../utils';
import { Hateoas } from '../utils';
import {  updateMonturasInteractor} from '../core/interactor/monturas';
import { Historialinventario } from '../core/entities';





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
          where: { id: tienda},
        });
  
        if (!tiendas) {
          return res.status(404).json({ message: "No existe la tienda" })
        }
  
        where = {
          tienda: tiendas
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
      order: { fecha: "DESC" }
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
          relations: ['tienda'],
          order: { fecha: "DESC" }
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

    const monturadata = await getRepository(Monturas).findOne(datos.monturasId);
    if (!monturadata) {
      return res.status(404).json({ message: "Dede enviar id de la montura" })
    }


      const detalle_movimiento  = new DetalleMovimiento()
      detalle_movimiento.movimientoId = result0.id
      detalle_movimiento.monturasId = datos.monturasId
      detalle_movimiento.tiendaId =  responsable
 
  
    const result = await getRepository(DetalleMovimiento).save(detalle_movimiento);
      

    monturadata.enmovimiento =  responsable.toString();

    const result2 = await updateMonturasInteractor(monturadata);




    const Historial_movimiento = new Historialmovimiento()
    Historial_movimiento.monturasId = datos.monturasId
    Historial_movimiento.tiendaId = responsable
    Historial_movimiento.indicador = "ENVIO"
    Historial_movimiento.comentario = ""

    const resulth= await getRepository(Historialmovimiento).save(Historial_movimiento)




      resultall.push(result);



     }

 
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





export const deleteMovimiento= async (req: Request, res: Response): Promise<Response> => {
  try {
    const movimiento = await getRepository(Movimiento).findOne({where:{id:req.params.id},relations: ['detallesmovimiento']})

    if (!movimiento ) {
      return res.status(404).json({ message: "No existe movimiento" })
    }

   for ( const detalle of movimiento.detallesmovimiento)
   {
    const montura = await getRepository(Monturas).findOne({where:{id:detalle.monturasId}})
    if (!montura ) {
      return res.status(404).json({ message: "No existe montura" })
    }
    montura.enmovimiento = ""
    const result0 = await updateMonturasInteractor(montura)

    detalle.isActive = false;
    const result2 = await getRepository(DetalleMovimiento).save(detalle);

    const Historial_movimiento = new Historialmovimiento()
    Historial_movimiento.monturasId = detalle.monturasId
    Historial_movimiento.indicador = "CANCELADO" 
    Historial_movimiento.tiendaId = detalle.tiendaId
    Historial_movimiento.comentario = ""
    const result3 = await getRepository(Historialmovimiento).save(Historial_movimiento)

   }

    
   movimiento.estado = "eliminado"

   const result = await getRepository(Movimiento).save(movimiento);
    return res.json({result : result })

  }

catch (error: any) {
  throw res.status(500).json({ message: error.message ?? error })

}
}



export const recibirMovimiento = async(req: Request, res: Response): Promise<Response> => {

  const {idmovimiento,idtienda,recepcion} = req.body

  
  const movimiento = await getRepository(Movimiento).findOne({where:{id:idmovimiento},relations: ['detallesmovimiento']})

  if (!movimiento ) {
    return res.status(404).json({ message: "No existe movimiento" })
  }


  for ( const detalle of movimiento.detallesmovimiento)
  {

   const montura = await getRepository(Monturas).findOne({where:{id:detalle.monturasId}})

   if (!montura ) {
     return res.status(404).json({ message: "No existe montura" })
   }
   montura.enmovimiento = "";
   montura.tienda = idtienda;

 
  const result0 = await updateMonturasInteractor(montura)

   const Historial_movimiento = new Historialmovimiento()
   Historial_movimiento.monturasId = detalle.monturasId
   Historial_movimiento.indicador = "RECEPCIONADO" 
   Historial_movimiento.tiendaId = detalle.tiendaId
   Historial_movimiento.comentario = ""
   const result3 = await getRepository(Historialmovimiento).save(Historial_movimiento)

  }


  movimiento.userId = recepcion
  movimiento.estado = "recibido"


  const result = await getRepository(Movimiento).save(movimiento);
   return res.json({result : result })
  
}


export const listmovimientoventas= async (req: Request, res: Response): Promise<Response> => {
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
        where: { id: tienda},
      });

      if (!tiendas) {
        return res.status(404).json({ message: "No existe la tienda" })
      }

      where = {
        tienda: tiendas
      }

    }

    var [result, count] = await getRepository(Movimiento).findAndCount({
      take,
      skip: skip * take,
      where: [
        {estado : 'pendiente', ...where}
      ],
   
      relations: ['tienda'],
      order: { fecha: "DESC" }
    });

  


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