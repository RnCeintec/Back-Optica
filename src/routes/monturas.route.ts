import {Router} from 'express'
import {createMonturas,updateMonturas,listMonturas,ultimaMontura,searchMontura,deleteMontura,listMonturasSinComprar,listCompletaMonturas,searchMonturaid } from '../controllers/monturas.controller'

const router = Router()

router.post('/monturas',createMonturas);
router.put('/monturas/:id',updateMonturas);
router.delete('/monturas/:id',deleteMontura);
router.get('/monturas',listMonturas);
router.get('/ultimaMonturas',ultimaMontura);
router.get('/monturasventa',listMonturasSinComprar);
router.get('/MonturasCompleta',listCompletaMonturas);

router.get('/monturas/:id',searchMontura);
router.get('/monturasid/:id',searchMonturaid);



export default router;