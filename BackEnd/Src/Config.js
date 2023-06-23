import {config} from "dotenv";

config();

export default{
    Host: process.env.HOSTX,
    Database: process.env.DATABASEX,
    User: process.env.USERX,
    Password: process.env.PASSWORDX
}