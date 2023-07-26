import {Router} from 'express'
import {createHistorialmovimientoTienda,listaHistorialmovimiento} from '../controllers/historialmovimiento.controller'

const router = Router()

router.post('/historialmovimiento',createHistorialmovimientoTienda);
router.get('/historialmovimiento', listaHistorialmovimiento);



export default router;