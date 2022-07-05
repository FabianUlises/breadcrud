const mongoose = require('mongoose');
const Bread = require('./bread');

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: String,
        required: true
    },
    bio: String
}, { toJSON: { virtuals: true } });

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})
// hooks 
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            // console.log(deleteStatus)
        })
  })

const Baker = mongoose.model('Baker', bakerSchema);
module.exports = Baker;