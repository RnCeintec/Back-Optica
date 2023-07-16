import {
    createColor,
    updateColor,
    deleteColor,
  } from './color.interactor';
  
  import { ColorTypeORM } from '../../datasource/color.datasource';
  
  const colorRepository = new ColorTypeORM();
  
  export const createColortInteractor = createColor(colorRepository);
  
  export const updateColorInteractor = updateColor(colorRepository);
  
  export const deleteColorInteractor = deleteColor(colorRepository);