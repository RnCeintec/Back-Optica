import { Sales } from "core/entities";
import { Response, Request } from "express";
import { laboratorio } from "security";
import {
  getRepository,
  ObjectLiteral,
  FindConditions,
  In,
  Like,
  Raw,
} from "typeorm";
import { Laboratorio } from "../core/entities/laboratorio";
import {
  createLaboratorioInteractor,
  updateLaboratorioInteractor,
  deleteLaboratorioInteractor,
} from "../core/interactor/laboratorio";
import { encrypt } from "../utils";
import { Hateoas } from "../utils"; //

export const createLaboratorio = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { prodlab, nivel, padre, comisionable } = req.body;
    const laboratorio = new Laboratorio();

    laboratorio.prodlab = prodlab;
    laboratorio.nivel = nivel;
    laboratorio.padre = padre;
    laboratorio.comisionable = comisionable;

    const result = await createLaboratorioInteractor(laboratorio);
    return res.json({ result: result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const updateLaboratorio = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { prodlab, nivel, padre, comisionable } = req.body;
    const laboratorio = await getRepository(Laboratorio).findOne(req.params.id);
    if (!laboratorio) {
      return res.status(404).json({ message: "Dede enviar id de laboratorio" });
    }

    laboratorio.prodlab = prodlab ?? laboratorio.prodlab;
    laboratorio.nivel = nivel ?? laboratorio.nivel;
    laboratorio.padre = padre ?? laboratorio.padre;
    laboratorio.comisionable = comisionable ?? laboratorio.comisionable;

    const result = await updateLaboratorioInteractor(laboratorio);
    return res.json({ result: result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const deleteLaboratorio = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const laboratorioById = await getRepository(Laboratorio).findOne(
      req.params.id
    );
    if (!laboratorioById) {
      return res.status(404).json({ message: "No existe el laboratorio" });
    }
    const result = await deleteLaboratorioInteractor(laboratorioById);
    return res.json({ result: result });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const listLaboratorio = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { limit, offset, search } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Laboratorio>
      | FindConditions<Laboratorio>[]
      | undefined = { isActive: true };

    var [result, count] = await getRepository(Laboratorio).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          prodlab: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          nivel:1,
          ...where,
        },
      ],
      order: { fecha_actualizacion: "DESC" },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    result =result.filter(lab=>lab.nivel===1)

    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: "No existen laboratorioss" });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};


export const listProducto = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { limit, offset, search } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Laboratorio>
      | FindConditions<Laboratorio>[]
      | undefined = { isActive: true };

    var [result, count] = await getRepository(Laboratorio).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          prodlab: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          nivel:2,
          ...where,
        },
      ],
      order: { fecha_actualizacion: "DESC" },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    const aux = result;
    let padres=[0];
    aux.forEach(p=>{
      padres.push(p.padre)
    })

    result =result.filter(lab=>lab.nivel===2)

    result=result.filter(producto=> !padres.includes(producto.id) )

    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: "No existen laboratorios" });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};


export const listProductothisLab = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {
    const { limit, offset, search } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Laboratorio>
      | FindConditions<Laboratorio>[]
      | undefined = { isActive: true };
    

    var [result, count] = await getRepository(Laboratorio).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          prodlab: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          nivel:2,
          ...where,
        },
      ],
      order: { fecha_actualizacion: "DESC" },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });

    result =result.filter(lab=>lab.nivel===2)

    var idLab = parseInt(`${search}`);

    result=result.filter(producto=> producto.padre===idLab )
   
    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: "No existen produtos" });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const listDetallethisProd = async (
  req: Request,
  res: Response
): Promise<Response> => {

  try {
    const { limit, offset, search } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Laboratorio>
      | FindConditions<Laboratorio>[]
      | undefined = { isActive: true };
  

    var [result, count] = await getRepository(Laboratorio).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          prodlab: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
        {
          nivel:3,
          ...where,
        },
      ],
      order: { fecha_actualizacion: "DESC" },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });

    result =result.filter(lab=>lab.nivel===3)

    var idProd = parseInt(`${search}`);

    result=result.filter(producto=> producto.padre===idProd )
   
    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink,
          pages: pages === 0 ? 1 : pages,
        })
      : res.status(404).json({ message: "No existe detalle" });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const searchLaboratorio = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const laboratorio = await getRepository(Laboratorio).findOne(req.params.id);
    if (!laboratorio) {
      return res.status(404).json({ message: "No existe el producto" });
    }
    return res.status(200).json({ result: laboratorio });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};


export const listProductoDetalle = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  try {
    const { limit, offset, search } = req.query;
    const hateoas = new Hateoas({
      limit: limit ? `${limit}` : undefined,
      offset: offset
        ? // ? search && search !== ''
          //   ? undefined
          `${offset}`
        : undefined,
    });
    const take = hateoas.take;
    const skip = hateoas.skip;
    let where:
      | string
      | ObjectLiteral
      | FindConditions<Laboratorio>
      | FindConditions<Laboratorio>[]
      | undefined = { isActive: true };
      

    var [result, count] = await getRepository(Laboratorio).findAndCount({
      take,
      skip: skip * take,
      
      order: { fecha_actualizacion: "DESC" },
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });

    var detalles =result.filter(lab=>lab.nivel===3)

    result =result.filter(lab=>lab.nivel===2)
    result =result.filter(lab=>lab.isActive==true)

    var idLab = parseInt(`${search}`);

    result=result.filter(producto=> producto.padre===idLab )

    var final = [];

    var bandera = false;

    for(var i= 0;i<result.length;i++){
      for(var j= 0;j<detalles.length;j++){
        if(result[i].id === detalles[j].padre){
          bandera = true;
          final.push({id: result[i].id,producto:result[i].prodlab,detalle:detalles[j].prodlab});
        }

        
      }
      if(bandera==false){
        final.push({id: result[i].id,producto:result[i].prodlab,detalle:"SIN DETALLE"});
      }

      bandera = false;
    }

    return res.json({ result: final});
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};
