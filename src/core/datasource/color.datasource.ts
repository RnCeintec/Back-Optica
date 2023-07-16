import { getRepository, Raw } from 'typeorm';

import { Color } from '../entities/color';
import { ColorRepository } from '../repository/color.repository';

export class ColorTypeORM implements ColorRepository {
  async findColorByid(id: number): Promise<Color | undefined> {
    try {
      return await getRepository(Color).findOne({
        where: { id }
      });
    } catch (error:any) {
      throw new Error(error);
    }
    
  }

  async createColor(color: Color): Promise<Color> {
    try {
      if (await this.findColorByid(color.id)) throw 'Color ya registrado';
      return await getRepository(Color).save(color);
    } catch (error:any) {
      throw new Error(error);
    }
  }
  
  async updateColor(color: Color): Promise<Color> {
    try {
     
      const findColorByid = await this.findColorByid(color.id);
      if (findColorByid !== undefined && color.id !== findColorByid.id){
        throw 'Color no registrado';
      }
      return await getRepository(Color).save(color);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  async deleteColor(color: Color): Promise<Color> {
    try {
        color.isActive = false;
      return await getRepository(Color).save(color);
    } catch (error:any) {
      throw new Error(error);
    }
  }
}
