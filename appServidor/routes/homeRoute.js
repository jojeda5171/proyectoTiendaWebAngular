//Rutas para el esquema del inicio
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//api/home
router.post('/', homeController.addHome);
router.get('/', homeController.loadHomes);

module.exports = router;