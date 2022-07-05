const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) 
    }
)

app.listen(process.env.PORT, () => {
    console.log('I am awake!');
});