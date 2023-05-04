const express = require('express');
const router = express.Router();
const bakersController = require('./../controllers/bakers_controller');

// Get all bakers route
router.get('/', bakersController.getBakers);

// Individual baker route
router.route('/:id')
    .get(bakersController.getBaker)
    .delete(bakersController.deleteBaker);

// Seed data route
router.get('/data/seed', bakersController.seedData);

module.exports = router;