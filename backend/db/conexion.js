import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    max: 20, // Máximo de conexiones en el pool
    idleTimeoutMillis: 30000, // Cerrar conexiones inactivas después de 30s
    connectionTimeoutMillis: 2000, // Timeout para nuevas conexiones
});

// Manejar errores del pool
pool.on('error', (err, client) => {
    console.error('Error inesperado en el cliente inactivo', err);
});

export default pool;