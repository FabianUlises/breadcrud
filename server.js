const app = require('./app');
const mongoose = require('mongoose');

// Connecting to mongoose and DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) 
    }
)

// Server Listening
app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});