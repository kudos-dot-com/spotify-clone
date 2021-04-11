const app= require('express')();
const mongoose=require('mongoose');
const {MONGO_URI,PORT}=require('./config');
const cors=require("cors");
require('./models/User');

app.use(cors())
app.use(require('express').json());

// routes middleware
app.use('/api/users',require('./routes/signup'));
app.use('/api/users',require('./routes/login'));
app.use('/api/users',require('./routes/dashboard'));

console.log(MONGO_URI)

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("database connected");
})
mongoose.connection.on('err',()=>{
    console.log("error connecting to database",err);
})

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})

