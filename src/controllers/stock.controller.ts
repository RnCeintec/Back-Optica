
// import { Response, Request } from 'express'
// import {getRepository, ObjectLiteral, FindConditions, In, Like, Raw } from 'typeorm'
// import { Stock } from '../core/entities/stock'
// import { Shop } from '../core/entities'; 
// import { Accesorio } from '../core/entities';

// import { encrypt } from '../utils';
// import { Hateoas } from '../utils';

// export const createStockinventario = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { idproducto,idTienda,canttienda,smt
//     } = req.body


//     const Historial_inventario  = new Historialinventario()
//     Historial_inventario.total = total
//     Historial_inventario.totalfaltantes = totalfaltantes
//     Historial_inventario.totalverificados = totalverificados 
//     Historial_inventario.tienda = tienda

//     const result= await getRepository(Historialinventario).save(Historial_inventario)

//     return res.json({result:result})


//   } catch (error: any) {
//     throw res.status(500).json({ message: error.message ?? error })

//   }


// }





//  export const listaInventario = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { tienda} = req.query;
//     let where:
//     | string
//     | ObjectLiteral
//     | FindConditions<Historialinventario>
//     | FindConditions<Historialinventario>[]
//     | undefined  = {};

//     if (tienda) {

//       const tiendas = await getRepository(Shop).findOne({
//         where: { id: tienda, isActive: true },
//       });

//       if (!tiendas) {
//         return res.status(404).json({ message: "No existe la tienda" })
//       }

//       where = {
//         tienda: tiendas
//       }

//     }

//     var [result, count] = await getRepository(Historialinventario).findAndCount({
//       where: [
//         where
//       ],
//       relations: ['detalleinv'],
//       order: { fecha: "DESC" }

//     }
//     )

//      return result
//       ? res.status(200).json({
//         result,
//         count,
//         pages:1})
//       : res.status(404).json({ message: 'No existen Inventarios' });
//   } catch (error: any) {
//     throw res.status(500).json({ message: error.message ?? error })
//   }
// }
 




