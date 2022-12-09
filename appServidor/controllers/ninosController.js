const Nino = require('../models/Ninos');

exports.addNino = async (req, res) => {
    try {
        let nino;
        //Crear la inicio
        nino = new Nino(req.body);
        await nino.save();
        res.send(nino);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el articulo');
    }
};

exports.loadNinos = async (req, res) => {
    try {
        const nino = await Nino.find();
        res.json(nino);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de articulos');
    }
};