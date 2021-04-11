const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    id: String,


    name: String,


    description: String,

    status: String,


    user_assigned: String



  }
)
//mongoose.model('collection','schema)
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;