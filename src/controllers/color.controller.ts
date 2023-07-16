import {Response,Request} from 'express'
import {getRepository, ObjectLiteral, FindConditions,In,Like,Raw} from 'typeorm'
import {Color} from '../core/entities/color'
import {createColortInteractor, updateColorInteractor, deleteColorInteractor} from '../core/interactor/color';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';


export const createColor = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const {codigo,color} = req.body
        const color_ = new Color()
        color_.codigo = codigo 
        color_.color = color 
        
       
        // const result =  getRepository(Product).create(product);

        const result = await createColortInteractor(color_)
        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const updateColor = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const {codigo,color} = req.body
        const color_ = await getRepository(Color).findOne(req.params.id)
        if(!color_){
          return  res.status(404).json({message:"Dede enviar id del color"})
        }

        color_.codigo = codigo ??  color_.codigo
        color_.color = color ??  color_.color

        const result = await updateColorInteractor(color_)
        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const deleteColor = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const colorById= await getRepository(Color).findOne(req.params.id)
        if(!colorById){
            return res.status(404).json({message:"No existe el color"})
        }
        const result = await deleteColorInteractor(colorById)
        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const listColors = async (
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
      | FindConditions<Color>
      | FindConditions<Color>[]
      | undefined = { isActive: true };

    const [result, count] = await getRepository(Color).findAndCount({
      take,
      skip: skip * take,
      where: [
        {
          color: Like(`%${search}%`),
          ...where,
        },
        {
          codigo: Like(`%${search}%`),
          ...where,
        },
        {
          id: Like(`%${search}%`),
          ...where,
        },
      ],
      
    });

    const [hateoasLink, pages] = hateoas.hateoas({ count });
    return result
      ? res.status(200).json({
          result,
          count,
          link: hateoasLink
        })
      : res.status(404).json({ message: "No existen vendedores" });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error });
  }
};

export const  searchColor = async (req:Request,res:Response): Promise<Response> =>{

  try{
    //PASAR LAS CATEGPRIAS RELACIONADAS
      const color = await getRepository(Color).findOne({where:{id:req.params.id}})
      if(!color){
          return res.status(404).json({message:"No existe el color"})
      }
      return res.status(200).json({result:color})
  }catch(error:any){
      throw res.status(500).json({message: error.message ?? error})

  }


}