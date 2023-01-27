const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
         type: 'string',
         required: true
    },
    
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        required: true,
    },
    country:{
        type: 'string',
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    
    lan:{
        type: 'string',
        required: true,
       
    },
    
    state:{
        type: 'string',
        required: true,
    },
   gender:{
        type: 'string',
        required: true,
       
    }
}); 

const curduser = new mongoose.model("curduser",userSchema);


module.exports = curduser;