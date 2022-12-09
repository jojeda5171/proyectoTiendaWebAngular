const Favorite = require('../models/Favorites');

exports.addFavorite = async (req, res) => {
    try {
        let favorite;
        //Crear la inicio
        favorite = new Favorite(req.body);
        await favorite.save();
        res.send(favorite);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el articulo');
    }
};

exports.loadFavorites = async (req, res) => {
    try {
        const favorite = await Favorite.find();
        res.json(favorite);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de articulos');
    }
};