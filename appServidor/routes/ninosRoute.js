//Rutas para el esquema del inicio
const express = require('express');
const router = express.Router();
const ninoController = require('../controllers/ninosController');
//api/nino
router.post('/', ninoController.addNino);
router.get('/', ninoController.loadNinos);

module.exports = router;