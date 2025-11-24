import { Router } from "express";
import pool from "../db/conexion.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("select * from contactos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los contactos");
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, telefono } = req.body;

    const result = await pool.query(
      "INSERT INTO contactos (nombre,telefono) VALUES ($1,$2 ) RETURNING *",
      [nombre, telefono]
    );
    res.json({ mensaje: "Contacto creado", contacto: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al guardar contactos");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const { nombre, telefono } = req.body;
    const result = await pool.query(
      "UPDATE contactos set nombre = $1 , telefono = $2 where id = $3 RETURNING *",
      [nombre, telefono , id]
    );

    res.json({ mensaje: "Contacto actualizado", contacto: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el contacto");
  }
});


router.delete("/:id", async (req, res) =>{
  try {
    const id = req.params.id
    const result = await pool.query(
      "DELETE FROM contactos WHERE id = $1",
      [id] 
    )
    res.json({manseje : "Contacto eliminado" })
    
  } catch (error) {
    console.log(error)
    res.status(500).send("No se pudo eliminar el contacto")
  }

})

export default router;
