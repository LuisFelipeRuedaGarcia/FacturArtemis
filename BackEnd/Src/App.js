import express from "express";
import CategoriaRoutes from "./Routes/Categorias.Routes.js";

const app = express();

app.set("port",5002);
//Routes
app.use("/api/categorias",CategoriaRoutes);
export default app;