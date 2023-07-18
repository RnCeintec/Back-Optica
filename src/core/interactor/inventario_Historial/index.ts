import {
    createHistorialinventario ,
    updateHistorialinventario,
  } from './Historialinventario.interactor';
  
  import {HistorialinventarioTypeORM  } from '../../datasource/historialinventario.datasource';
  
  const HistorialinventarioRepository = new HistorialinventarioTypeORM();
  
  export const createHistorialinventarioInteractor =  createHistorialinventario(HistorialinventarioRepository );
  
  export const  updateHistorialinventarioInteractor =  updateHistorialinventario(HistorialinventarioRepository);
  
  // export const deleteMonturasInteractor = deleteMonturas(monturasRepository);