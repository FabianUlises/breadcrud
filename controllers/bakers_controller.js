// Model
const Baker = require('../models/baker');
// Seeder
const bakerSeedData = require('../models/baker_seed.js');
// Controllers
// Get all bakers
exports.getBakers = async (req, res) => {
    try {
        // Getting bakers from db with breads
        const bakers = await Baker.find().populate('breads');
        // Sending back data
        res.json(bakers);
    }
    catch (err) {
        res.status(404).render('error');
    }
};
// Get single baker
exports.getBaker = async (req, res) => {
    try {
        // Getting baker from db using params id including breads
        const baker = await Baker.findById(req.params.id)
            .populate({
                path: 'breads',
                options: { limit: 2 }
            });
        res.render('bakerShow', {
            baker: baker
        });
    }
    catch (err) {
        res.status(404).render('error');
    }
};
// Delete single baker
exports.deleteBaker = async (req, res) => {
    // Deleting baker from db
    await Baker.findByIdAndDelete(req.params.id);
    // Redirecting to /breads
    res.status(303).redirect('/breads');
};
// Seed data controller
exports.seedData = async (req, res) => {
    try {
        // Inserting data to db
        await Baker.insertMany(bakerSeedData);
        // Redirecting to /breads
        (res.redirect('/breads'));
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};