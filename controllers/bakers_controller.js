const Baker = require('../models/baker');
const bakerSeedData = require('../models/baker_seed.js');

exports.getBakers = (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
        .catch(err => {
            console.log('err: ', err)
        })
}
exports.getBaker =  (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
}
exports.seedData = (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
}
exports.deleteBaker =  (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
}