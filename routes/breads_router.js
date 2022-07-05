const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const Baker = require('../models/baker');

const getAllBreadsShow = async (req, res) => {
  const foundBakers = await Baker.find().lean();
  const foundBreads = await Bread.find().limit(2).lean();
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
}

const createBread =  (req, res) => {
  try{
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  } catch {
    res.send('error404')
  }

}
const createBreadShow =  (req, res) => {
  Baker.find()
    .then(foundBakers => {
      res.render('new', {
        bakers: foundBakers
      });
    })
  
}

const getBread =  (req, res) => {
  Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.send('404')
    })
  // try{
  //     res.render('show', {
  //         bread: Bread[req.params.arrayIndex],
  //         index: req.params.arrayIndex
  //     });
  // } catch {
  //     res.send('404');
  // }
}
const updateBreadShow =  (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.findById(req.params.id)
        .then(foundBread => {
          console.log(foundBread)
          res.render('edit', {
            bread: foundBread,
            bakers: foundBakers
          })
        })
    })
}
const updateBread = (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }

  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread);
      res.redirect(`/breads/${req.params.id}`);
    });
}
const deleteBread = (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads');
    });
}




// breads.get('/', getAllBreadsShow)
// breads.post('/', createBread)
// Index route
breads
  .route('/')
  .get(getAllBreadsShow)
  .post(createBread)
// New route Show
breads.get('/new',createBreadShow)
// Show route
// breads.get('/:id', getBread);
// Update
// breads.put('/:id', updateBread);  
// Delete
// breads.delete('/:id', deleteBread);
// Individual bread route
breads
  .route('/:id')
  .get(getBread)
  .put(updateBread)
  .delete(deleteBread)
// Edit route
breads.get('/:id/edit', updateBreadShow);

module.exports = breads;
