const Bread = require('../models/bread');
const Baker = require('../models/baker');

// Controllers
exports.getAllBreadsShow = async(req, res) => {
  try {
    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find();
    // const foundBreads = await Bread.find().limit(2).lean();
    res.status(200).render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'BreadCrud'
    });
  }
  catch(err) {
    res.status(404).render('error')
  }
};
    
exports.getBreadShow = async (req, res) => {
  try {
    const bread = await Bread.findById(req.params.id).populate('baker');
    res.render('show', {
      bread: bread,
      title: 'An Emazing Bread'
    })
  }
  catch(err) {
    res.status(400).render('error');
  }
};


exports.createBread = async (req, res) => {
  try {
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
  }
  catch(err) {
    res.status(404).render('error')
  }
};

exports.createBreadShow = async (req, res) => {
  try {
    const bakers = await Baker.find();
    res.render('new', {
      bakers: bakers
    });
  }
  catch(err) {
    res.status(404).render('error')
  }
};


exports.updateBreadShow = async (req, res) => {
  try {
    const bread = await Bread.findById(req.params.id);
    const bakers = await Baker.find();
    if(!bread) {
      return next(new AppError('No bread found with that ID', 404));
    } else if(!bakers) {
      return next(new AppError('No baker found with that ID', 404));
    }

    res.render('edit', {
      bread: bread,
      bakers: bakers
    });
  }
  catch(err) {
    res.status(404).render('error')
  }
};

exports.updateBread = async (req, res) => {
  try {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    await Bread.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/breads/${req.params.id}`);
  }
  catch(err) {
    res.status(404).render('error')
  }
};

exports.deleteBread = async (req, res) => {
  try {
    const bread = await Bread.findByIdAndDelete(req.params.id)
    if(!bread) {
      return next(new AppError('No bread found with that ID', 404));
    }
  
    res.status(303).redirect('/breads');
  }
  catch(err) {
    res.status(404).render('error')

  }
};