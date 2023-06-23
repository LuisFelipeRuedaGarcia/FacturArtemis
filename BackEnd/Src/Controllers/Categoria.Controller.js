import getConnection from "../Db/Database.js";

const getCategorias = async (req, res) =>{
    /* res.json({"categorias":"Electrodomésticos"}); */
    const Connection = await getConnection();
    const result = await Connection.query("SELECT CategoriaID,CategoriaNombre, Descripcion,	Imagen FROM categorias");
    console.log(result);
    res.json(result);
}

export const methodsHTTP = {
    getCategorias /* : getCategorias */

}