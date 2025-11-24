📱 CRUD de Contactos – React, Node.js y PostgreSQL

Proyecto full stack que permite registrar, listar, editar y eliminar contactos, utilizando:

React + Vite (frontend)

Node.js + Express (backend)

PostgreSQL (base de datos)

🚀 Tecnologías utilizadas
🖥️ Frontend

React (Vite)

Tailwind CSS

FontAwesome Icons

React Router DOM

Componentes personalizados (Boton, Threads, Bienvenida, etc.)

🧠 Backend

Node.js

Express

PostgreSQL (pg Pool)

dotenv

cors

📁 Estructura del proyecto
Proyecto/
│
├── src/                    → Código del frontend (React)
│   ├── components/         → Boton, EditarContacto, Bienvenida, Threads...
│   ├── pages/              → Registar.jsx, ListContact.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── backend/                → Servidor y API
│   ├── server.js
│   ├── db/
│   │   └── conexion.js     → Pool de PostgreSQL
│   ├── routes/
│   │   └── contactos.routes.js
│   └── .env.example        → Variables de entorno de ejemplo
│
├── package.json            → Dependencias del frontend
├── backend/package.json    → Dependencias del backend
├── vite.config.js
└── README.md               → Este archivo

📦 Instalación para quien recibe el ZIP
1️⃣ Extraer el ZIP

Asegúrate de que incluya frontend y backend completos, sin node_modules.

🖥️ 2️⃣ Instalar dependencias
🔵 Frontend (RAÍZ del proyecto)
npm install

🟢 Backend
cd backend
npm install

🧰 3️⃣ Configurar la base de datos (PostgreSQL)

Crear la base de datos:

CREATE DATABASE contactos;

// filepath: backend/db/schema.sql
CREATE DATABASE contactos;

-- Conectar a la BD "contactos" y crear la tabla:
CREATE TABLE contactos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL
);

🔐 4️⃣ Configurar variables de entorno

Copiar .env.example → .env dentro de /backend

DB_USER=postgres
DB_HOST=localhost
DB_PASSWORD=tu_password
DB_NAME=contactos
DB_PORT=5432

PORT=5000

🚀 5️⃣ Ejecutar el proyecto
🟢 Levantar el backend
cd backend
npm run dev

🔵 Levantar el frontend

Desde la raíz:

npm run dev

🔗 Endpoints API (Backend)

Ruta base: http://localhost:5000/contactos

Método	Ruta	Descripción
GET	/	Obtener lista de contactos
POST	/	Crear contacto
PUT	/:id	Actualizar contacto
DELETE	/:id	Eliminar contacto

Todos los handlers están en:
backend/routes/contactos.routes.js

🔍 Archivos clave (referencia rápida)

Frontend:

src/App.jsx

src/pages/Registar.jsx

src/pages/ListContact.jsx

src/components/EditarContacto.jsx

src/components/Boton.jsx

src/components/Bienvenida.jsx

Backend:

backend/server.js

backend/routes/contactos.routes.js

backend/db/conexion.js

⚠ Notas útiles

si no se instalan lo icono npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome


El backend ya tiene CORS habilitado.

Puertos: backend = 5000, frontend = 5173 (por defecto)

No compartas tu .env: solo .env.example.

Asegúrate de incluir assets/ en el ZIP.

Si hay error con la DB, revisa credenciales y que PostgreSQL esté corriendo