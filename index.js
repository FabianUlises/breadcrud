require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');


// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )




app.use('/breads', require('./routes/breads_router'));
app.use('/bakers', require('./routes/bakers_router'));
// app.get('/', (req, res) => {
//     res.send('Welcome to an App about Breads');
// });
app.get('*', (req, res) => {
    res.send('404');
});
app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});
