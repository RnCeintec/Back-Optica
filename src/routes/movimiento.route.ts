import {Router} from 'express'
import {listamovimiento} from '../controllers/movimiento.controller'

const router = Router()

// router.post('/historialmovimiento',createmasivoHistorialmovimientoTienda);
router.get('/movimientomontura', listamovimiento);


export default router;