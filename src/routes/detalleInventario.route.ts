import {Router} from 'express'
import {createHistorialinventario, createDetalleinventario,listaInventario} from '../controllers/detalleinventario.controller'

const router = Router()

router.post('/Historialinventario',createHistorialinventario);
router.post('/Detalleinventario', createDetalleinventario);
router.get('/MonturasInventario', listaInventario);





export default router;