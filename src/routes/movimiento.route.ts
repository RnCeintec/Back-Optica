import {Router} from 'express'
import {listamovimiento,createmovimiento, searchMovimiento,deleteMovimiento,listmovimientoventas, recibirMovimiento} from '../controllers/movimiento.controller'

const router = Router()

router.get('/movimientomontura', listamovimiento);
router.get('/movimientomonturaventas', listmovimientoventas);
router.post('/movimientomontura', createmovimiento);
router.post('/movimientomonturaventas', recibirMovimiento);
router.get('/movimientomontura/:id', searchMovimiento);
router.delete('/movimientomontura/:id',deleteMovimiento);
export default router;
