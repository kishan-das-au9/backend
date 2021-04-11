const express = require("express");
// 1 creating a new router
const router = new express.Router();
const todo = require("../models/todos");

// 2 defining the router
router.get("/kishan", (req, res)=> {
  res.send("HELLO");
})

router.post("/todo", async (req, res) => {
  try {
    // console.log(req.body);
    const user = new todo(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser)
  }
  catch (error) {
    res.status(400).send(e)

  }


})


router.get("/todo", async (req, res) => {
  try {
      const todosData = await todo.find();
      res.send(todosData);
  }
  catch (e) {
    res.send(e);

  }
})


router.get("/todo/:id", async (req, res) => {
  try {
      const _id = req.params.id;
      const todoData = await todo.findOne({_id});

      if (!todoData){
        return res.status(404).send()
      }
      else{res.send(todoData);}
      
  }
  catch (e) {
    res.status(500).send(e);

  }
})


router.patch("/todo/:id", async(req,res)=>{
  try {
    const _id = req.params.id;
    const updatetodo = await todo.findByIdAndUpdate(_id, req.body, {
      new:true
    })
    res.send(updatetodo)
  } catch (e) {
    return res.status(404).send(e)
    
  }
})
 

router.delete("/todo/:id", async (req, res) => {
  try {
    // const _id = req.params.id;
    const deletetodo = await todo.findByIdAndDelete(req.params.id)
    if (!req.params.id){
      return res.status(400).send();
    }
    res.send(deletetodo)
  }
  catch (e) {
    res.status(500).send(e);

  }
})







module.exports = router;