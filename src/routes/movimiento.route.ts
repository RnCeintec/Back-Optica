import {Router} from 'express'
import {listamovimiento,createmovimiento, searchMovimiento} from '../controllers/movimiento.controller'

const router = Router()

router.get('/movimientomontura', listamovimiento);
router.post('/movimientomontura', createmovimiento);
router.get('/movimientomontura/:id', searchMovimiento);
export default router;
