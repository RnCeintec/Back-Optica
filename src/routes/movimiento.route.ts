import {Router} from 'express'
import {listamovimiento,createmovimiento, searchMovimiento,deleteMovimiento} from '../controllers/movimiento.controller'

const router = Router()

router.get('/movimientomontura', listamovimiento);
router.post('/movimientomontura', createmovimiento);
router.get('/movimientomontura/:id', searchMovimiento);
router.delete('/movimientomontura/:id',deleteMovimiento);
export default router;
