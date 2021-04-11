const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    id:{type: String},

    task_type: {type: String, minlength: 3},
    
    task_name: {
      task_id: {type: String},
      name:{type: String}
    }

  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;