const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    id:{
      type: String
    },

    name: {
      type: String,
    },
    
    description: {
      type: String,
    },

    status:{
      type:String,
    },

    user_assigned:{
      type:String,

    }

  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;