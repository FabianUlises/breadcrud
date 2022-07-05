const app = require('./app');
const mongoose = require('mongoose');

// Connecting to mongoose and DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}
)

// Server Listening
app.listen(process.env.PORT);