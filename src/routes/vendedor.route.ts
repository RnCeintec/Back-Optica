import { Router } from "express";
import multer, { FileFilterCallback } from 'multer';
import path from "path";
import {
  createVendedor,
  updateVendedor,
  deleteVendedor,
  listVendedor,
  searchVendedor,
  guardarFile
} from "../controllers/vendedor.controller";

const router = Router();


router.post("/vendedor", createVendedor);
router.put("/vendedor/:id", updateVendedor);
router.delete("/vendedor/:id", deleteVendedor);
router.get("/vendedor", listVendedor);
router.get("/vendedor/:id", searchVendedor);


export default router;
