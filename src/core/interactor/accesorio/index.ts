import {
    createAccesorio,
    updateAccesorio,
    deleteAccesorio,
  } from './accesorio.interactor';
  
  import { ProductTypeORM } from '../../datasource/product.datasource';
  
  const productRepository = new ProductTypeORM();
  
  export const createProductInteractor = createAccesorio(productRepository);
  
  export const updateProductInteractor = updateAccesorio(productRepository);
  
  export const deleteProductInteractor = deleteAccesorio(productRepository);