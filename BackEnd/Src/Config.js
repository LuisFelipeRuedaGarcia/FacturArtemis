import {config} from "dotenv";

config();

export default{
     Host: "",
    Database: process.env.DATABASE,
    User: process.env.USUARIO,
    Password: process.env.PASSWORD
}