import {Router} from 'express'
import {createHistorialmovimientoTienda,listaHistorialmovimiento,createmasivoHistorialmovimientoTienda} from '../controllers/historialmovimiento.controller'

const router = Router()

router.post('/historialmovimiento',createmasivoHistorialmovimientoTienda);
router.get('/historialmovimiento', listaHistorialmovimiento);


export default router;