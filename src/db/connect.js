const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kishan_04:kishan2809@cluster0.bgcvf.mongodb.net/students?retryWrites=true&w=majority", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> {
  console.log("connection successful");

}).catch((e)=>{
  console.log("connection rejected")
})
