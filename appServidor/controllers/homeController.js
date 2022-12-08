const Home = require('../models/Home');

exports.addHome = async (req, res) => {
    try {
        let home;
        //Crear la inicio
        home = new Home(req.body);
        await home.save();
        res.send(home);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el inicio');
    }
};

exports.loadHomes = async (req, res) => {
    try {
        const home = await Home.find();
        res.json(home);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado del inicio');
    }
};