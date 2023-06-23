import {config} from "dotenv";

config();

export default{
    Host: process.env.HOSTX,
    Database: "FacturArtemis",
    User: process.env.USERX,
    Password: process.env.PASSWORDX
}