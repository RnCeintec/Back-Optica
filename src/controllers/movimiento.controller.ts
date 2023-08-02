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
 




