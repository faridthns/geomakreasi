const express = require("express");
const router = express.Router();

// deklarasi controller dan middleware layanan yang sudah dibuat 
const pesertaController = require('../controllers/pesertaController');

// nuat router nya supaya bisa jalan Rest API nya
router.get('/:nama', pesertaController.getByNama);
// router.post('/', validateLayananCreate, layananController.create);
// router.put('/:id', validateLayananUpdate, layananController.update);
// router.delete('/:id', layananController.delete);

module.exports = router;