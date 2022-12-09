const Launch = require('../models/Launches');

exports.addLanzamiento = async (req, res) => {
    try {
        let lanzamiento;
        //Crear la inicio
        lanzamiento = new Launch(req.body);
        await lanzamiento.save();
        res.send(lanzamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el articulo');
    }
};

exports.loadLanzamientos = async (req, res) => {
    try {
        const lanzamiento = await Launch.find();
        res.json(lanzamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de articulos');
    }
};