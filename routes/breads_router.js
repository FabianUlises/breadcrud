const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const Baker = require('../models/baker');

// Index route
breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean();
  const foundBreads = await Bread.find().limit(2).lean();
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
})


// Create route
breads.post('/', (req, res) => {
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

})



// New route
breads.get('/new', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      res.render('new', {
        bakers: foundBakers
      });
    })
  
})



// Show route
breads.get('/:id', (req, res) => {
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
});



// Edit route
breads.get('/:id/edit', (req, res) => {
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
});


  // Update
breads.put('/:id', (req, res) => {
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
});
// Delete
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads');
    });
});

module.exports = breads;