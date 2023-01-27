const mongoose = require('mongoose')

const DB ="mongodb+srv://dbuser:vsXbb9ySjXb3iQoP@cluster0.rq1ghma.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB,{
    useUnifiedTopology: true,
  
    useNewUrlParser: true,

}).then(() => console.log("Connect")).catch((error)=>{
    console.log("not connected")
});