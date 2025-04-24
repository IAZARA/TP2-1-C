// const express = require('express')
import express from 'express';
// const alumnosRouter = require('./routes/alumnosRoutes')
import alumnosRouter from './routes/alumnosRoutes.js'

const app = express()

const PORT = 3000;

app.use(express.json()) // Para que pueda leer JSON

app.use("/", alumnosRouter) // Manejar middlewares, nos permite conectar nuestro server


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})