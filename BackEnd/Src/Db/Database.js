import mysql from "promise-mysql";
import Config from "../Config.js";
const Connection = mysql.createConnection({
    host: Config.Host,
    database: Config.Database,
    user: "campus"/* Config.User */,
    password: "campus2023" /* Config.Password */
});

const getConnection = () =>{
    return Connection;
}

export default getConnection;