import {Router} from 'express'
import {createProduct,updateProduct,deleteProduct,listProducts,searchProduct,listProductsParaVenta} from '../controllers/product.controller'

const router = Router()

router.post('/accesorios',createProduct);
router.put('/accesorios/:id',updateProduct);
router.delete('/accesorios/:id',deleteProduct);
router.get('/accesorios',listProducts);
router.get('/accesoriosVenta',listProductsParaVenta);
router.get('/accesorios/:id',searchProduct);


export default router;