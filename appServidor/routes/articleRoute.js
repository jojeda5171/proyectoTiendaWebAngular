//Rutas para el esquema del inicio
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articlesController');
//api/article
router.post('/', articleController.addArticle);
router.get('/', articleController.loadArticles);

module.exports = router;