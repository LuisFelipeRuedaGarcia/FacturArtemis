import {config} from "dotenv";

config();

export default{
    Host: process.env.HOST,
    Database:"FacturArtemis" /* process.env.DATABASE */,
    User: "campus"/* process.env.USUARIO */,
    Password: "campus2023"/* process.env.PASSWORD */
}