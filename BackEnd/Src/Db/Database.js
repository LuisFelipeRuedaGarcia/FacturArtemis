import mysql from "promise-mysql";
import Config from "../Config.js";
const Connection = mysql.createConnection({
    host: Config.Host,
    database: Config.Database,
    user: Config.User,
    password: Config.Password
});

const getConnection = () =>{
    return Connection;
}

export default getConnection;