require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');


// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));



// CONTROLLERS
app.use('/breads', require('./routes/breads_router'));
app.use('/bakers', require('./routes/bakers_router'));
// ROUTES
app.get('/', (req, res) => {
    // res.send('Welcome to an App about Breads');
    res.redirect('/breads')
});
app.get('*', (req, res) => {
    res.send('404');
});
module.exports = app;