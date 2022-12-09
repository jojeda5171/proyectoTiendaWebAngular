//Rutas para el esquema del inicio
const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');
//api/article
router.post('/', favoritesController.addFavorite);
router.get('/', favoritesController.loadFavorites);

module.exports = router;