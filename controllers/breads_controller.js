const Bread = require('../models/bread');
const Baker = require('../models/baker');
exports.getAllBreadsShow = async (req, res) => {
    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find().limit(2).lean();
    res.render('index', {
      breads: foundBreads,
      bakers: foundBakers,
      title: 'Index Page'
    })
}
  
exports.createBread =  (req, res) => {
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
exports.createBreadShow =  (req, res) => {
    Baker.find()
      .then(foundBakers => {
        res.render('new', {
          bakers: foundBakers
        });
      })
}
  
exports.getBread =  (req, res) => {
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
exports.updateBreadShow =  (req, res) => {
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
exports.updateBread = (req, res) => {
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
exports.deleteBread = (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
      .then(deletedBread => {
        res.status(303).redirect('/breads');
      });
}