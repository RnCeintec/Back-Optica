import { Color } from '../../entities/color';
import { ColorRepository } from '../../repository/color.repository';

export const createColor= (colorRepository: ColorRepository) => async (
  color: Color
) => colorRepository.createColor(color);


export const updateColor = (colorRepository: ColorRepository) => async (
    color: Color
) => colorRepository.updateColor(color);


export const deleteColor = (colorRepository: ColorRepository
    ) => async (
        color: Color
) => colorRepository.deleteColor(color);