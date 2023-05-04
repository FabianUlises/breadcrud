// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { Schema } = mongoose;

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://placekitten.com/200/300' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
    }
});

// Helper methods
breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate}`;
};


// Model and export 
const Bread = mongoose.model('Bread', breadSchema);
module.exports = Bread;