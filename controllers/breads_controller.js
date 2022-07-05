const Bread = require('../models/bread');
const Baker = require('../models/baker');

// Controllers
exports.getAllBreadsShow = async (req, res) => {
  try {
    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find().limit(2).lean();
    res.status(200).render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'BreadCrud'
    })
  } catch (err) {
      res.status(404).send('not found')
  }
};
  
exports.createBread = async (req, res) => {
  try{
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
  } catch (err) {
      res.send('error404')
  }
};

exports.createBreadShow = async (req, res) => {
  try {
    const bakers = await Baker.find();
    res.render('new', {
      bakers: bakers
    });
  } catch (err) {
      res.send('error404')
  }
};
  
exports.getBread = async (req, res) => {
  try {
    const bread = await Bread.findById(req.params.id)
      .populate('baker');
    res.render('show', {
      bread: bread
    })
  } catch (err) {
      res.send('404')
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
        res.json(err);
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
      res.send(err)
  }
};

exports.deleteBread = async (req, res) => {
  try {
    await Bread.findByIdAndDelete(req.params.id)
    res.status(303).redirect('/breads');
  } catch (err) {
      res.send('error404')
  }        
};