//Rutas para el esquema del inicio
const express = require('express');
const router = express.Router();
const launchesControllers = require('../controllers/launchesControllers');
//api/nino
router.post('/', launchesControllers.addLanzamiento);
router.get('/', launchesControllers.loadLanzamientos);

module.exports = router;