import { Router } from "express";
import {
  createSale,
  updateSale,
  deleteSale,
  listSale,
  searchSale,
  searchSaleXDate,
  searchSaleDetails,
  listaVentas,
} from "../controllers/sales.controller";
import validateUser from "../security/validateUser";

const router = Router();

router.get("/ventas", listaVentas);
router.post("/sale", createSale);
router.put("/sale/:id", [validateUser], updateSale);
router.delete("/sale/:id", deleteSale);
router.get("/sale", listSale);
router.get("/sale/:id", searchSale);
router.get("/SaleFechas", searchSaleXDate);
router.get("/detail/sale/:id", searchSaleDetails);

export default router;
