const express = require('express');
const router = express.Router();
const breadsController = require('./../controllers/breads_controller')

// Index route
router
  .route('/')
  .get(breadsController.getAllBreadsShow)
  .post(breadsController.createBread)

// New route Show
router.get('/new',breadsController.createBreadShow)

// Individual bread route
router
  .route('/:id')
  .get(breadsController.getBreadShow)
  .put(breadsController.updateBread)
  .delete(breadsController.deleteBread)

// Edit route
router.get('/:id/edit', breadsController.updateBreadShow);

module.exports = router;
