const Article = require('../models/Articles');

exports.addArticle = async (req, res) => {
    try {
        let article;
        //Crear la inicio
        article = new Article(req.body);
        await article.save();
        res.send(article);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el articulo');
    }
};

exports.loadArticles = async (req, res) => {
    try {
        const article = await Article.find();
        res.json(article);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de articulos');
    }
};