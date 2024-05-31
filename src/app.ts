import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import register from './routes/register';
import auth from './routes/auth';

import checkDatabaseConnection from "./config/dbHealtCheck";
//import verifyToken from "./middleware/verify-token";
// import perfilController from "./controllers/profile-controller";

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);

checkDatabaseConnection()
  .then(() => {
    const PORT: string | number = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log('Servidor corriendo en el puerto', PORT);
    });
  })
  .catch((error) => {
    console.error(
      "No se pudo iniciar el servidor debido a un error en la base de datos:",
      error
    );
  });
