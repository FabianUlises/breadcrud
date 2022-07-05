const Baker = require('../models/baker');
const bakerSeedData = require('../models/baker_seed.js');

// Controllers
exports.getBakers = async (req, res) => {
    try {
        const bakers = await Baker.find()
            .populate('breads');

        res.json(bakers)
    } catch (err) {
        res.send(err);
    }
};

exports.getBaker =  async (req, res) => {
    try {
        const baker = await Baker.findById(req.params.id)
            .populate({
                path: 'breads',
                options: { limit: 2 }
            })
            
        res.render('bakerShow', {
            baker: baker
        })
    } catch (err) {
        res.send(err)
    }
};

exports.seedData = async (req, res) => {
    try {
        await Baker.insertMany(bakerSeedData);
        (res.redirect('/breads'));
    } catch (err) {
        res.send(err);
    }
};

exports.deleteBaker =  async (req, res) => {
    try {
        await Baker.findByIdAndDelete(req.params.id) ;
        res.status(303).redirect('/breads')
    } catch (err) {
        res.send(err);
    }
};