import pkg from "pg";
//sirve para las variables de entorno como el user la contraseña el puerto etc
import dotenv from "dotenv";

dotenv.config();
const {Pool} = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password :process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port : process.env.DB_PORT
})

export default pool;