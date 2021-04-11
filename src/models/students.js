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
    email: {
      type: String,
      
      unique: [true, "Email already present"],
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email")
        }
      }
    },
    phone: {
      type: Number,
      
      min: 10,
      unique: true
    },
    address:{
      type:String,
        
    }

  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;