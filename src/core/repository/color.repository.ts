import { Color } from '../entities/color';
export interface ColorRepository {
  createColor(color: Color): Promise<Color>;
  updateColor(color: Color): Promise<Color>;
  deleteColor(color: Color): Promise<Color>;
}