
const app = require('express')();
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const cors = require("cors");
require('./models/User');
require('./models/Playlist_Model.js');


app.use(cors())
app.use(require('express').json());


// routes middleware
app.use('/api/users', require('./routes/signup'));  // file path
app.use('/api/users', require('./routes/login'));
app.use('/api/users', require('./routes/dashboard'));
app.use('/api/playlist', require('./routes/playlist_route'));

console.log(MONGO_URI);
console.log('Time:', Date.now())


// ----------------      mongo db connection(Mongoose)      ---------------
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Database Connected");
})
mongoose.connection.on('err', () => {
    console.log("ERROR connecting to database", err);
})
// --------------------------------------------------------------


// http://localhost:4000/user?name=Niharika&age=11
/* app.get('/user', function (req, res) {
    console.log(req.originalUrl);
    res.send();
}); */


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})

