// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));



// Connecting to mongoose and DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) 
    }
)


// CONTROLLERS
app.use('/breads', require('./routes/breads_router'));
app.use('/bakers', require('./routes/bakers_router'));

// ROUTES
app.get('/', (req, res) => {
    res.status(200).render('welcomePage')
});
app.get('*', (req, res) => {
    res.status(404).render('error');
});

// Server Listening
app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});