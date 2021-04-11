const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    id:{
      type: String
    },
    "image_url": String,

    name: {
      type: String,
      
      minlength: 3
    },
    description: {
      type: String,

    },

    status:{
      type:String,
        
    }

  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;