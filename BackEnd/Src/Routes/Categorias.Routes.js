import {Router} from "express";
import { methodsHTTP as CategoriaController } from "../Controllers/Categoria.Controller.js";
const router = Router();
router.get("/", CategoriaController.getCategorias  /* (req, res) =>{
     res.send("categorias de FacturArtemis"); 
} */ )
export default router;