import { Router } from "express";
import {
  createLaboratorio,
  updateLaboratorio,
  deleteLaboratorio,
  listLaboratorio,
  listProductothisLab,
  listProducto,
  searchLaboratorio,
  listDetallethisProd,
  listProductoDetalle
} from "../controllers/laboratorio.controller";

const router = Router();

router.post("/laboratorio", createLaboratorio);
router.put("/laboratorio/:id", updateLaboratorio);
router.delete("/laboratorio/:id", deleteLaboratorio);
router.get("/laboratorio", listLaboratorio);
router.get("/productolab", listProducto);
router.get("/proxlab", listProductothisLab);
router.get("/proxdetalle", listProductoDetalle);
router.get("/detallexprod", listDetallethisProd);
router.get("/laboratorio/:id", searchLaboratorio);



export default router;
