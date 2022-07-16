const Bread = require('../models/bread');
const Baker = require('../models/baker');
const catchAsync = require('./../utils/catchAsync');

// Controllers
exports.getAllBreadsShow = catchAsync ( async(req, res, next) => {

    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find().limit(2).lean();
    res.status(200).render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'BreadCrud'
    });
});
    
exports.getBreadShow = async (req, res) => {
  try {
    const bread = await Bread.findById(req.params.id)
      .populate('baker');
    res.render('show', {
      bread: bread
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    }) 
  }
};


exports.createBread = catchAsync( async (req, res, next) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  await Bread.create(req.body)
  res.redirect('/breads')
});

exports.createBreadShow = async (req, res) => {
  try {
    const bakers = await Baker.find();
    res.render('new', {
      bakers: bakers
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};


exports.updateBreadShow = async (req, res) => {
  try {
    const bread = await Bread.findById(req.params.id);
    const bakers = await Baker.find();
    res.render('edit', {
      bread: bread,
      bakers: bakers
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

exports.updateBread = async (req, res) => {
  try {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    await Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect(`/breads/${req.params.id}`);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      messagE: 'Invalid data sent!'
    });
  }
};

exports.deleteBread = async (req, res) => {
  try {
    await Bread.findByIdAndDelete(req.params.id)
    res.status(303).redirect('/breads');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};