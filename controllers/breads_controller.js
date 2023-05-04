// Models
const Bread = require('../models/bread');
const Baker = require('../models/baker');
// Controllers
// Get all breads
exports.getAllBreadsShow = async (req, res) => {
  try {
    // Getting bakers and breads
    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find();
    // const foundBreads = await Bread.find().limit(2).lean();
    res.status(200).render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'BreadCrud'
    });
  }
  catch (err) {
    res.status(404).render('error');
  }
};
// View for single bread
exports.getBreadShow = async (req, res) => {
  try {
    // Getting bread from db using req id
    const bread = await Bread.findById(req.params.id).populate('baker');
    res.render('show', {
      bread: bread,
      title: 'An Emazing Bread'
    });
  }
  catch (err) {
    res.status(400).render('error');
  }
};
// Create a bread
exports.createBread = async (req, res) => {
  try {
    // If no image setting to undefined
    if (!req.body.image) {
      req.body.image = undefined;
    }
    // Setting value for checkbox
    if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true;
    } else {
      req.body.hasGluten = false;
    }
    // Creating bread
    await Bread.create(req.body);
    // Redirecting to /breads
    res.redirect('/breads');
  }
  catch (err) {
    res.status(404).render('error');
  }
};
// View to create a bread
exports.createBreadShow = async (req, res) => {
  try {
    // Getting bakers from db
    const bakers = await Baker.find();
    res.render('new', {
      bakers: bakers
    });
  }
  catch (err) {
    res.status(404).render('error');
  }
};
// View to update bread
exports.updateBreadShow = async (req, res) => {
  try {
    // Getting bread and bakers from db
    const bread = await Bread.findById(req.params.id);
    const bakers = await Baker.find();
    // If no bread or baker throw error
    // FIX: NEED TO ADD NEXT TO FUNCTION PARAMS
    if (!bread) {
      return next(new AppError('No bread found with that ID', 404));
    } else if (!bakers) {
      return next(new AppError('No baker found with that ID', 404));
    }
    res.render('edit', {
      bread: bread,
      bakers: bakers
    });
  }
  catch (err) {
    res.status(404).render('error');
  }
};
// Update a bread
exports.updateBread = async (req, res) => {
  try {
    // Setting value for checkbox
    if (req.body.hasGluten === 'on') {
      req.body.hasGluten = true;
    } else {
      req.body.hasGluten = false;
    }
    // Updating bread with new data
    await Bread.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Redirecting to /breads/:id
    res.redirect(`/breads/${req.params.id}`);
  }
  catch (err) {
    res.status(404).render('error');
  }
};
// Delete a bread
exports.deleteBread = async (req, res) => {
  try {
    // Deleting bread from db using id from params
    const bread = await Bread.findByIdAndDelete(req.params.id);
    // If no bread throw error
    // FIX: NEED TO ADD NEXT TO FUNCTION PARAMS
    if (!bread) {
      return next(new AppError('No bread found with that ID', 404));
    }
    // Redirecting to /breadss
    res.status(303).redirect('/breads');
  }
  catch (err) {
    res.status(404).render('error');
  }
};