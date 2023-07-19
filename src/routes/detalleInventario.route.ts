import {Router} from 'express'
import {createHistorialinventario, createDetalleinventario,listaInventario,searchDetalleInventario} from '../controllers/detalleinventario.controller'

const router = Router()

router.post('/Historialinventario',createHistorialinventario);
router.post('/Detalleinventario', createDetalleinventario);
router.get('/MonturasInventario', listaInventario);
router.get('/searchDetalleInventario/:id',searchDetalleInventario);






export default router;