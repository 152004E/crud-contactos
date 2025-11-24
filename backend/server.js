//importaciones 
//framework de node.js para crear el servidor
import express from "express";
//es para que no bloquee las peticiones
import cors from "cors";
//Es la libreria que conecta node.js con postgres


//sirve para las variables de entorno como el user la contraseña el puerto etc
import dotenv from "dotenv";
import contactoRoute from "./routes/contactos.routes.js"


//configuracion
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//esto es para que cuando se use el post se mande correctamente estos datos de convierten en objetos js 
app.use(express.urlencoded({ extended: true })); 


app.use("/contactos" , contactoRoute)


app.get("/", (req, res) =>{
    res.send("Servidor funcionando")
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{ console.log(`El servidor esta escuchando el puerto ${PORT}`)})
console.log(process.env.DB_USER);


