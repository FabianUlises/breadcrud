const Baker = require('../models/baker');
const bakerSeedData = require('../models/baker_seed.js');
const catchAsync = require('./../utils/catchAsync');

// Controllers
exports.getBakers = catchAsync(async (req, res, next) => {
    const bakers = await Baker.find().populate('breads');
    res.json(bakers);
});

exports.getBaker =  catchAsync(async (req, res, next) => {
    const baker = await Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        });
    res.render('bakerShow', {
        baker: baker
    });
});


exports.deleteBaker =  catchAsync(async (req, res, next) => {
    await Baker.findByIdAndDelete(req.params.id);
    res.status(303).redirect('/breads');
});


exports.seedData = async (req, res) => {
    try {
        await Baker.insertMany(bakerSeedData);
        (res.redirect('/breads'));
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};