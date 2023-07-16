import { product } from 'security';
import { Accesorio } from '../../entities/accesorio';
import { ProductRepository } from '../../repository/product.repository';

export const createAccesorio= (accesorioRepository: ProductRepository) => async (
  accesorio: Accesorio
) => accesorioRepository.createProduct(accesorio);


export const updateAccesorio = (accesorioRepository: ProductRepository) => async (
  accesorio: Accesorio
) => accesorioRepository.updateProduct(accesorio);


export const deleteAccesorio = (accesorioRepository: ProductRepository
    ) => async (
      accesorio: Accesorio
) => accesorioRepository.deleteProduct(accesorio);
