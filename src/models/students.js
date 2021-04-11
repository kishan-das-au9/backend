const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    id: String,

    task_type: String,

    task_name: Array
      
    

  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;