import {Router} from 'express'
import {createColor,updateColor,deleteColor,listColors,searchColor} from '../controllers/color.controller'

const router = Router()

router.post('/color',createColor);
router.put('/color/:id',updateColor);
router.delete('/color/:id',deleteColor);
router.get('/color',listColors);
router.get('/color/:id',searchColor);

export default router;