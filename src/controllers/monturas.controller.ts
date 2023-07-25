import { Shop } from '../core/entities';
import { Response, Request } from 'express'
import { category, product } from 'security';
import { getRepository, ObjectLiteral, FindConditions, In, Like, Raw } from 'typeorm'
import { Monturas } from '../core/entities/monturas'
import { createMonturasInteractor, updateMonturasInteractor, deleteMonturasInteractor } from '../core/interactor/monturas';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';
import { IngresoMonturas } from '../core/entities/ingreso_monturas';
import { IngresoMonturasDetalle } from '../core/entities/ingreso_monturas_detalle';


export const createMonturas = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { marca, codigo, modelo, tipo, talla, color,
      comentario, costo, venta, descripcionColor,
      tope, idproveedor, documento, numero, cantidad, local_id

    } = req.body
    const ingreso_monturas = new IngresoMonturas()
    ingreso_monturas.documento = documento
    ingreso_monturas.numero_documento = numero
    ingreso_monturas.proveedor = idproveedor

    const ingresoMontura = await getRepository(IngresoMonturas).save(ingreso_monturas)
    for (let i = 0; i < cantidad; i++) {
      const monturas = new Monturas()
      const ingreso_detalle = new IngresoMonturasDetalle()


    
      const monturaId = await getRepository(Monturas).find({
        order: {
          id: "DESC",
        },
        take: 1
      });
      let codigoMontura = ""

      if (monturaId.length > 0) {
        codigoMontura = (monturaId[0].id + 1).toString().padStart(6, "0")
      } else {
        codigoMontura = (1).toString().padStart(6, "0")

      }

      ingreso_detalle.idmontura = "M" + codigoMontura.toString().padStart(6, "0")
      getRepository(IngresoMonturasDetalle).save(ingreso_detalle)


      monturas.idmontura = codigoMontura
      monturas.marca = marca
      monturas.codImpreso = codigo
      monturas.modelo = modelo
      monturas.tipo = tipo
      monturas.talla = talla
      monturas.colorDescripcion = descripcionColor
      monturas.color = color
      monturas.comentario = comentario
      monturas.costo = costo
      monturas.ingreso = ingresoMontura
      monturas.tope = tope
      monturas.venta = venta
      monturas.tienda = local_id// llamar la tienda del usuario 
      const result = await createMonturasInteractor(monturas)





      // return res.json({result:result})
    }
    return res.json({ message: "creado con exito" })

  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
}

export const updateMonturas = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { marca, codigo, modelo, tipo, talla, puente, codImpreso, procedencia, color,
      estuche, comentario, costo, venta, venta_id, enmovimiento, descripcionColor,
      tope, local_id, numero, idproveedor, documento } = req.body
    const montura = await getRepository(Monturas).findOne(req.params.id);
    if (!montura) {
      return res.status(404).json({ message: "Dede enviar id de la montura" })
    }

    montura.marca = marca ?? montura.marca
    montura.codImpreso = codImpreso ?? montura.codImpreso
    montura.modelo = modelo ?? montura.modelo
    montura.tipo = tipo ?? montura.tipo
    montura.talla = talla ?? montura.talla
    montura.puente = puente ?? montura.puente
    montura.colorDescripcion = descripcionColor?? montura.colorDescripcion
    montura.procedencia = procedencia ?? montura.procedencia
    montura.color = color ?? montura.color
    montura.estuche = estuche ?? montura.estuche
    montura.comentario = comentario ?? montura.comentario
    montura.costo = costo ?? montura.costo
    montura.venta = venta ?? montura.venta
    montura.ventas = venta_id ?? montura.ventas
    montura.enmovimiento = enmovimiento ?? montura.enmovimiento
    montura.tope = tope ?? montura.tope
    montura.tienda = local_id ?? montura.tienda

    const result = await updateMonturasInteractor(montura)


   
    return res.json({ result: result })

  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
}

export const deleteMontura = async (req: Request, res: Response): Promise<Response> => {
  try {
    const monturaById = await getRepository(Monturas).findOne({where:{id:req.params.id},relations:["ingreso"]})
    if (!monturaById) {
      return res.status(404).json({ message: "No existe la montura" })
    }

    
    const ingreso = await getRepository(IngresoMonturas).findOne(monturaById.ingreso.id);
    if (!ingreso) {
      return res.status(404).json({ message: "No existe el ingreso de montura" })
    }
    ingreso.isActive = false;
      await getRepository(IngresoMonturas).save(ingreso);

    
      
      const detalle = await getRepository(IngresoMonturasDetalle).findOne({where:{idmontura:"M"+monturaById.idmontura}});
    if (!detalle) {
      return res.status(404).json({ message: "No existe la montura" })
    }
    detalle.isActive = false;
     await getRepository(IngresoMonturasDetalle).save(detalle);
  
     const result = await deleteMonturasInteractor(monturaById)

    return res.json({ result: result })

  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }
}

export const listMonturas = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { limit, offset, search, tienda } = req.query;
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
      | FindConditions<Monturas>
      | FindConditions<Monturas>[]
      | undefined = { isActive: true };

 

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
      var [result, count] = await getRepository(Monturas).findAndCount({
        take,
        skip: skip * take,
        where: [
      
  
          {
            idmontura: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where
          },
          {
            marca: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where
          },
          {
            modelo: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where
          },
          {
            tipo: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where
          },
          {
            id: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where,
          },
          {
            codImpreso: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where,
          }
  
        ],
        relations: ['tienda', 'ventas'],
        order: { fecha_actualizacion: "DESC" }
      });
    }
    else{
      var [result, count] = await getRepository(Monturas).findAndCount({
        take,
        skip: skip * take,
        where: [
      
  
          {
            idmontura: Like(`%${search}%`),
            ...where
          },
          {
            marca: Like(`%${search}%`),
            ...where
          },
          {
            modelo: Like(`%${search}%`),
            ...where
          },
          {
            tipo: Like(`%${search}%`),
            ...where
          },
          {
            id: Like(`%${search}%`),
            ...where,
          },
          {
            codImpreso: Like(`%${search}%`),
            ...where,
          }
  
        ],
        relations: ['tienda', 'ventas'],
        order: { fecha_actualizacion: "DESC" }
      });
    }
    

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    return result
      ? res.status(200).json({
        result,
        count,
        link: hateoasLink,
        pages: pages === 0 ? 1 : pages,
      })
      : res.status(404).json({ message: 'No existen productos' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}
export const ultimaMontura = async (req: Request, res: Response): Promise<Response> => {
  try {

    const montura = await getRepository(Monturas).find({
      order: {
        id: "DESC",
      },
      take: 1
    });
    let id = ""
    if (montura.length > 0) {
      id = (montura[0].id + 1).toString().padStart(6, "0")
    } else {
      id = (1).toString().padStart(6, "0")

    }

    return res.json({ result: { id: id } })




  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }

}

export const searchMontura = async (req: Request, res: Response): Promise<Response> => {

  try {
    //PASAR LAS CATEGPRIAS RELACIONADAS
    const montura = await getRepository(Monturas).findOne({ where: { id: req.params.id }, relations: ['ingreso', 'ingreso.proveedor'] })
    if (!montura) {
      return res.status(404).json({ message: "No existe el montura" })
    }
    return res.status(200).json({ result: montura })
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}

export const listMonturasSinComprar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { limit, offset, search, tienda,ventasExiste  } = req.query;
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
      | FindConditions<Monturas>
      | FindConditions<Monturas>[]
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
    var [result, count] = await getRepository(Monturas).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          venta : Like(`%${search}%`),
            ...where
        },
        

        {
          idmontura: Like(`%${search}%`),
          ...where
        },
        {
          marca: Like(`%${search}%`),
          ...where
        },
        {
          modelo: Like(`%${search}%`),
          ...where
        },
        {
          tipo: Like(`%${search}%`),
          ...where
        },
        {
          id: Like(`%${search}%`),
          ...where,
        }

      ],
      relations: ['tienda', 'ventas'],
      order: { fecha_actualizacion: "DESC" }
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });

if(ventasExiste){
  if(ventasExiste==="0")
  {
    result = result.filter( montura => !montura.ventas)
  }

  if(ventasExiste==="1")
  {
    result = result.filter( montura => montura.ventas)
  }
  

}
    return result
      ? res.status(200).json({
        result,
        count,
        link: hateoasLink,
        pages: pages === 0 ? 1 : pages,
      })
      : res.status(404).json({ message: 'No existen monturas' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}



export const listCompletaMonturas= async (req: Request, res: Response): Promise<Response> => {
  try {
    const { limit, offset, tienda,ventasExiste } = req.query;
    let where:
    | string
    | ObjectLiteral
    | FindConditions<Monturas>
    | FindConditions<Monturas>[]
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
    var [result, count] = await getRepository(Monturas).findAndCount({
      where: [
        where
      ],
   
      relations: ['tienda', 'ventas'],
      order: { fecha_actualizacion: "DESC" }
    });

    
if(ventasExiste){
  if(ventasExiste==="0")
  {
    result = result.filter( montura => !montura.ventas)
  }

  if(ventasExiste==="1")
  {
    result = result.filter( montura => montura.ventas)
  }
  

}
    return result
      ? res.status(200).json({
        result,
        count,
        pages:1,
      })
      : res.status(404).json({ message: 'No existen monturas' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}



