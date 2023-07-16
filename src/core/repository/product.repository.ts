import { Accesorio } from '../entities';
export interface ProductRepository {
  createProduct(product: Accesorio): Promise<Accesorio>;
  updateProduct(product: Accesorio): Promise<Accesorio>;
  deleteProduct(product: Accesorio): Promise<Accesorio>;
}
