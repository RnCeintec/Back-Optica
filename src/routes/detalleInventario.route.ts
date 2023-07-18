import {Router} from 'express'
import {createHistorialinventario, createDetalleinventario} from '../controllers/detalleinventario.controller'

const router = Router()

router.post('/Historialinventario',createHistorialinventario);
router.post('/Detalleinventario', createDetalleinventario);





export default router;