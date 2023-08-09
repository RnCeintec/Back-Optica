import {  Shop } from '../core/entities';
import { Response, Request } from 'express'
import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw, ObjectID, Any } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { Accesorio } from '../core/entities';
import { MovimientoP } from '../core/entities/movimientop'
import { DetalleMovimientoP } from '../core/entities/detallemovimientop'
import { encrypt } from '../utils';
import { Hateoas } from '../utils';
import { updateProductInteractor } from '../core/interactor/accesorio';






 export const listamovimientop = async (req: Request, res: Response): Promise<Response> => {
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
      | FindConditions<MovimientoP>
      | FindConditions<MovimientoP>[]
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

    var [result, count] = await getRepository(MovimientoP).findAndCount({
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
        var [result, count] = await getRepository(MovimientoP).findAndCount({
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



export const createmovimientop = async (req: Request, res: Response): Promise<Response> => {
  try {
    

    const {productosmovimiento,responsable} = req.body
    const resultall = []



    const movimientop = new MovimientoP();
    movimientop.estado = "pendiente"
    movimientop.tiendaId = responsable

    // movimientop.userId = recepcion

    const result0 = await getRepository(MovimientoP).save(movimientop);

   for ( let datos of productosmovimiento)  {  

    const accesoriodata = await getRepository(Accesorio).findOne(datos.accesorioId);
    if (!accesoriodata) {
      return res.status(404).json({ message: "Dede enviar id de la montura" })
    }


      const detalle_movimientop  = new DetalleMovimientoP()
      detalle_movimientop.movimientoId = result0.id
      detalle_movimientop.accesorioId = datos.accesorioId 
      detalle_movimientop.tiendaId =  responsable
      detalle_movimientop.cantidad = datos.cantidad
  
    const result = await getRepository(DetalleMovimientoP).save(detalle_movimientop);
      
     const total = accesoriodata.stock - datos.cantidad
    accesoriodata.stock =  total;

    const result2 = await updateProductInteractor(accesoriodata);


      resultall.push(result);



     }

 

   return  res.json({result: resultall})


    } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
 }

 export const searchMovimientop = async (req: Request, res: Response): Promise<Response> => {

  try {
    //PASAR LAS CATEGPRIAS RELACIONADAS
    const movimientop = await getRepository(MovimientoP).findOne({ where: { id: req.params.id }, relations: ['tienda', 'detallesmovimientop'] })
    if (!movimientop ) {
      return res.status(404).json({ message: "No existe movimiento" })
    }
    return res.status(200).json({ result: movimientop})
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}





// export const deleteMovimiento= async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const movimiento = await getRepository(MovimientoP).findOne({where:{id:req.params.id},relations: ['detallesmovimiento']})

//     if (!movimiento ) {
//       return res.status(404).json({ message: "No existe movimiento" })
//     }

//    for ( const detalle of movimiento.detallesmovimiento)
//    {
//     const montura = await getRepository(Monturas).findOne({where:{id:detalle.monturasId}})
//     if (!montura ) {
//       return res.status(404).json({ message: "No existe montura" })
//     }
//     montura.enmovimiento = ""
//     const result0 = await updateMonturasInteractor(montura)

//     detalle.isActive = false;
//     const result2 = await getRepository(DetalleMovimiento).save(detalle);

//     const Historial_movimiento = new Historialmovimiento()
//     Historial_movimiento.monturasId = detalle.monturasId
//     Historial_movimiento.indicador = "CANCELADO" 
//     Historial_movimiento.tiendaId = detalle.tiendaId
//     Historial_movimiento.comentario = ""
//     const result3 = await getRepository(Historialmovimiento).save(Historial_movimiento)

//    }

    
//    movimiento.estado = "eliminado"

//    const result = await getRepository(Movimiento).save(movimiento);
//     return res.json({result : result })

//   }

// catch (error: any) {
//   throw res.status(500).json({ message: error.message ?? error })

// }
// }



// export const recibirMovimientop = async(req: Request, res: Response): Promise<Response> => {

//   const {idmovimiento,idtienda,recepcion} = req.body

  
//   const movimiento = await getRepository(Movimiento).findOne({where:{id:idmovimiento},relations: ['detallesmovimiento']})

//   if (!movimiento ) {
//     return res.status(404).json({ message: "No existe movimiento" })
//   }


//   for ( const detalle of movimiento.detallesmovimiento)
//   {

//    const montura = await getRepository(Monturas).findOne({where:{id:detalle.monturasId}})

//    if (!montura ) {
//      return res.status(404).json({ message: "No existe montura" })
//    }
//    montura.enmovimiento = "";
//    montura.tienda = idtienda;

 
//   const result0 = await updateMonturasInteractor(montura)

//    const Historial_movimiento = new Historialmovimiento()
//    Historial_movimiento.monturasId = detalle.monturasId
//    Historial_movimiento.indicador = "RECEPCIONADO" 
//    Historial_movimiento.tiendaId = detalle.tiendaId
//    Historial_movimiento.comentario = ""
//    const result3 = await getRepository(Historialmovimiento).save(Historial_movimiento)

//   }


//   movimiento.userId = recepcion
//   movimiento.estado = "recibido"


//   const result = await getRepository(Movimiento).save(movimiento);
//    return res.json({result : result })
  
// }



// export const listmovimientoventasp= async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { limit, offset, tienda } = req.query;

//     const hateoas = new Hateoas({
//       limit: limit ? `${limit}` : undefined,
//       offset: offset
//         // ? search && search !== ''
//         //   ? undefined
//         ? `${offset}`
//         : undefined,
//     });

//     const take = hateoas.take;
//     const skip = hateoas.skip;

//     let where:
//     | string
//     | ObjectLiteral
//     | FindConditions<Movimiento>
//     | FindConditions<Movimiento>[]
//     | undefined = {};

  
//     if (tienda != "") {

//       const tiendas = await getRepository(Shop).findOne({
//         where: { id: tienda},
//       });

//       if (!tiendas) {
//         return res.status(404).json({ message: "No existe la tienda" })
//       }

//       where = {
//         tienda: tiendas
//       }

//     }

//     var [result, count] = await getRepository(Movimiento).findAndCount({
//       take,
//       skip: skip * take,
//       where: [
//         {estado : 'pendiente', ...where}
//       ],
   
//       relations: ['tienda'],
//       order: { fecha: "DESC" }
//     });

  


//   const [hateoasLink, pages] = hateoas.hateoas({ count });
//     return result
//       ? res.status(200).json({
//         result,
//         count,
//         link: hateoasLink,
//         pages: pages === 0 ? 1 : pages,
//       })
//       : res.status(404).json({ message: 'No existen movimientos' });
//   } catch (error: any) {
//     throw res.status(500).json({ message: error.message ?? error })
//   }
// }
