const express = require("express");
// 1 creating a new router
const router = new express.Router();
const Student = require("../models/students");

// 2 defining the router
router.get("/kishan", (req, res)=> {
  res.send("HELLO");
})

router.post("/students", async (req, res) => {
  try {
    // console.log(req.body);
    const user = new Student(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser)
  }
  catch (error) {
    res.status(400).send(e)

  }


})


router.get("/students", async (req, res) => {
  try {
      const studentsData = await Student.find();
      res.send(studentsData);
  }
  catch (e) {
    res.send(e);

  }
})


router.get("/students/:id", async (req, res) => {
  try {
      const _id = req.params.id;
      const studentData = await Student.findOne({_id});

      if (!studentData){
        return res.status(404).send()
      }
      else{res.send(studentData);}
      
  }
  catch (e) {
    res.status(500).send(e);

  }
})


router.patch("/students/:id", async(req,res)=>{
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new:true
    })
    res.send(updateStudent)
  } catch (e) {
    return res.status(404).send(e)
    
  }
})
 

router.delete("/students/:id", async (req, res) => {
  try {
    // const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(req.params.id)
    if (!req.params.id){
      return res.status(400).send();
    }
    res.send(deleteStudent)
  }
  catch (e) {
    res.status(500).send(e);

  }
})







module.exports = router;