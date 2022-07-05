const express = require('express');
const router = express.Router();
const bakersController = require('./../controllers/bakers_controller')


// Get all bakers
router.get('/', bakersController.getBakers)

// Individual Baker 
router.route('/:id')
    .get(bakersController.getBaker)
    .delete(bakersController.deleteBaker)
    
// Seed data
router.get('/data/seed', bakersController.seedData);

module.exports = router;