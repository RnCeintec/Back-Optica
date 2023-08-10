import {Router} from 'express'
import {listamovimientop,createmovimientop, searchMovimientop,deleteMovimientop,listmovimientoventasp, recibirMovimientop} from '../controllers/movimientop.controller'

const router = Router()

router.get('/movimientoproducto', listamovimientop);
router.get('/movimientoproductoventas', listmovimientoventasp);
router.post('/movimientoproducto', createmovimientop);
router.post('/movimientoproductoventas', recibirMovimientop);
router.get('/movimientoproducto/:id', searchMovimientop);
router.delete('/movimientoproducto/:id',deleteMovimientop);
export default router;
