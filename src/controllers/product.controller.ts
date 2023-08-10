import {Response,Request} from 'express'
import { category, product } from 'security';
import {getRepository, ObjectLiteral, FindConditions,In,Like,Raw} from 'typeorm'
import {Accesorio} from '../core/entities/accesorio'
import {createProductInteractor, updateProductInteractor, deleteProductInteractor} from '../core/interactor/accesorio';
import { encrypt } from '../utils';
import { Hateoas } from '../utils';
import { Stock } from '../core/entities/stock'
import { Shop } from '../core/entities/shop'

export const createProduct = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const {codigo,description,precio_compra,precio_sugerido,precio_minimo,categoria,stock,idTienda} = req.body
        const product = new Accesorio()
        product.codigo = codigo 
        product.stock = stock 
        product.descripcion = description 
        product.precio_compra = precio_compra 
        product.precio_sugerido = precio_sugerido 
        product.precio_minimo = precio_minimo 
       
        // const result =  getRepository(Product).create(product);

        const result = await createProductInteractor(product)


        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const updateProduct = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const {codigo,description,precio_compra,precio_sugerido,precio_minimo,stock,categoria} = req.body
        const product = await getRepository(Accesorio).findOne(req.params.id)
        if(!product){
          return  res.status(404).json({message:"Dede enviar id del producto"})
        }

        product.codigo = codigo ??  product.codigo
        product.stock = stock ??  product.stock
        product.descripcion = description ??  product.descripcion
        product.precio_compra = precio_compra ?? product.precio_compra 
        product.precio_sugerido = precio_sugerido ?? product.precio_sugerido 
        product.precio_minimo = precio_minimo  ??  product.precio_minimo


        const result = await updateProductInteractor(product)
        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const deleteProduct = async (req:Request,res:Response): Promise<Response> =>{
    try{
        const productById= await getRepository(Accesorio).findOne(req.params.id)
        if(!productById){
            return res.status(404).json({message:"No existe el producto"})
        }
        const result = await deleteProductInteractor(productById)
        return res.json({result:result})

    }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})

    }
}

export const listProducts = async (req:Request,res:Response): Promise<Response> =>{
    try {
        const {limit, offset, search } = req.query;
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
        | FindConditions<Accesorio>
        | FindConditions<Accesorio>[]
        | undefined = { isActive: true };
        const  [result, count] = await getRepository(Accesorio).findAndCount({
            take,
            skip: skip * take,
            where : [
                {
                    descripcion: Like(`%${search}%`),
                    ...where
                  },
                  {
                    codigo: Like(`%${search}%`),
                    ...where
                  },
              
                  {
                    id: Like(`%${search}%`),
                    ...where,
              }
          
          ],
       
          order: {fecha_actualizacion:"DESC"}
          });
    
          const [hateoasLink, pages] = hateoas.hateoas({ count });
          return result
            ? res.status(200).json({
                result,
                count,
                link: hateoasLink,
                pages: pages === 0 ? 1 : pages,
              })
            : res.status(404).json({ message: 'No existen productos' });
      }catch(error:any){
        throw res.status(500).json({message: error.message ?? error})
      }
}





export const listProductsParaVenta = async (req:Request,res:Response): Promise<Response> =>{
  try {
      const {limit, offset, search } = req.query;
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
      | FindConditions<Accesorio>
      | FindConditions<Accesorio>[]
      | undefined = { isActive: true };
      var  [result, count] = await getRepository(Accesorio).findAndCount({
          take,
          skip: skip * take,
          where : [
              {
                  descripcion: Like(`%${search}%`),
                  ...where
                },
                {
                  codigo: Like(`%${search}%`),
                  ...where
                },
            
                {
                  id: Like(`%${search}%`),
                  ...where,
            }
        
        ],
     
        order: {fecha_actualizacion:"DESC"}
        });
  
        const [hateoasLink, pages] = hateoas.hateoas({ count });
        result = result.filter(accesorio => accesorio.stock>0)

        return result
          ? res.status(200).json({
              result,
              count,
              link: hateoasLink,
              pages: pages === 0 ? 1 : pages,
            })
          : res.status(404).json({ message: 'No existen productos' });
    }catch(error:any){
      throw res.status(500).json({message: error.message ?? error})
    }
}

export const  searchProduct  = async (req:Request,res:Response): Promise<Response> =>{

  try{
    //PASAR LAS CATEGPRIAS RELACIONADAS
      const producto = await getRepository(Accesorio).findOne({where:{id:req.params.id}})
      if(!producto){
          return res.status(404).json({message:"No existe el producto"})
      }
      return res.status(200).json({result:producto})
  }catch(error:any){
      throw res.status(500).json({message: error.message ?? error})

  }


}


export const createStock = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { idproducto,idTienda,canttienda} = req.body


    const stock  = new Stock()
    stock.accesorio = idproducto;
    stock.tienda = idTienda;
    stock.cant_tienda = canttienda;
    const result= await getRepository(Stock).save(stock);

    return res.json({result:result})


  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })

  }


}




export const listaStock = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {limit, offset, search,tienda } = req.query;


    let where:
    | string
    | ObjectLiteral
    | FindConditions<Stock>
    | FindConditions<Stock>[]
    | undefined  = {};

  
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
      var [result, count] = await getRepository(Stock).findAndCount({
        // take,
        // skip: skip * take,
        where: [

          { cant_tienda: Like(`%${search}%`),
          tienda: Like (`${tienda}`),
            ...where
          }
          // ,{
          //   descripcion: Like(`%${search}%`),
          //   ...where
          // }
      //    , {
      //       codigo: Like(`%${search}%`),
      //       tienda: Like (`${tienda}`),
      //       ...where
      //     },
      
         , {
            accesorioId: Like(`%${search}%`),
            tienda: Like (`${tienda}`),
            ...where,
      }


      
  
        ],
        relations: ['tienda','accesorio'],
        order: { fecha_creacion: "DESC" }
      });
    }
    else
    {
      var [result, count] = await getRepository(Stock).findAndCount({
        // take,
        // skip: skip * take,
        where: [

          { cant_tienda: Like(`%${search}%`),
            ...where
          }
      //     ,
      //     {
      //       descripcion: Like(`%${search}%`),
      //       ...where
      //     },
      //     {
      //       codigo: Like(`%${search}%`),
      //       ...where
      //     },
      
      , {
        accesorioId: Like(`%${search}%`),
        ...where,
  }
      
  
        ],
        relations: ['tienda','accesorio'],
        order: { fecha_creacion: "DESC" }
      });
    }


    

    // const [hateoasLink, pages] = hateoas.hateoas({ count });
    return result
      ? res.status(200).json({
        result,
        count,
        // link: hateoasLink,
        pages: 1,   //pages === 0 ? 1 : pages,
      })
      : res.status(404).json({ message: 'No existen productos' });
  } catch (error: any) {
    throw res.status(500).json({ message: error.message ?? error })
  }
}
 



export const listaProductall = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {limit, offset } = req.query;
   
    let where:
    | string
    | ObjectLiteral
    | FindConditions<Accesorio>
    | FindConditions<Accesorio>[]
    | undefined = { isActive: true };
    const  [result, count] = await getRepository(Accesorio).findAndCount({
      
        where : [
            {
                ...where
              },
              {
                ...where
              },
          
              {
                ...where,
          }
      
      ],
   
      order: {fecha_actualizacion:"DESC"}
      });

      return result
      ? res.status(200).json({
        result,
        count,
        // link: hateoasLink,
        pages: 1, 
          })
        : res.status(404).json({ message: 'No existen productos' });
  }catch(error:any){
    throw res.status(500).json({message: error.message ?? error})
  }
  
}
 