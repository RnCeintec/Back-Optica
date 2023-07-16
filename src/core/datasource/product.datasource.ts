import { getRepository, Raw } from 'typeorm';

import { Accesorio } from '../entities/accesorio';
import { ProductRepository } from '../repository/product.repository';

export class ProductTypeORM implements ProductRepository {
  async findProductByid(id: number): Promise<Accesorio | undefined> {
    try {
      return await getRepository(Accesorio).findOne({
        where: { id }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createProduct(product: Accesorio): Promise<Accesorio> {
    try {
      if (await this.findProductByid(product.id)) throw 'Producto ya registrado';
      return await getRepository(Accesorio).save(product);
    } catch (error:any) {
      throw new Error(error);
    }
  }
  async findUser(id: number): Promise<Accesorio | undefined> {
    try {
      return await getRepository(Accesorio).findOne({
        where: { id: true },
      });
    } catch (error:any) {
      throw new Error(error);
    }
  }
  
  async updateProduct(product: Accesorio): Promise<Accesorio> {
    try {
     
      const findProductByid = await this.findProductByid(product.id);
      if (findProductByid !== undefined && product.id !== findProductByid.id){
        throw 'Producto no registrado';
      }
      return await getRepository(Accesorio).save(product);
    } catch (error:any) {
      throw new Error(error);
    }
  }
  async deleteProduct(product: Accesorio): Promise<Accesorio> {
    try {
      product.isActive = false;
      return await getRepository(Accesorio).save(product);
    } catch (error:any) {
      throw new Error(error);
    }
  }
}
