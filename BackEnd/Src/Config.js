import {config} from "dotenv";

config();

export default{
    Host: process.env.HOSTX,
    Database: "FacturArtemis",
    User: "campus",
    Password: "campus2023"
}