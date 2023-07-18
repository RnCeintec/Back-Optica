import {
    createDetalleinventario ,
    updateDetalleinventario ,
  } from './Detalleinventario.interactor';
  
  import { DetalleinventarioTypeORM  } from '../../datasource/detalleinventario.datasource';
  
  const DetalleinventarioRepository = new DetalleinventarioTypeORM();
  
  export const createDetalleinventarioInteractor =  createDetalleinventario(DetalleinventarioRepository);
  
  export const  updateDetalleinventarioInteractor =  updateDetalleinventario(DetalleinventarioRepository);
  
  // export const deleteMonturasInteractor = deleteMonturas(monturasRepository);