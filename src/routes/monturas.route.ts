import {Router} from 'express'
import {createMonturas,updateMonturas,listMonturas,ultimaMontura,searchMontura,deleteMontura,listMonturasSinComprar,listCompletaMonturas} from '../controllers/monturas.controller'

const router = Router()

router.post('/monturas',createMonturas);
router.put('/monturas/:id',updateMonturas);
router.delete('/monturas/:id',deleteMontura);
router.get('/monturas',listMonturas);
router.get('/ultimaMonturas',ultimaMontura);
router.get('/monturasventa',listMonturasSinComprar);
router.get('/MonturasCompleta',listCompletaMonturas);

router.get('/monturas/:id',searchMontura);


export default router;