const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["user","admin"]
    }
},
{
    timestamps:true
}
);

mongoose.model('User',userSchema);