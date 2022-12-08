const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.use('/api/inicio', require('./routes/homeRoute'))

app.listen(5000, () => {
    console.log('Servidor corriendo en puerto 5000');
});