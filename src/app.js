const express = require("express");
require("./db/connect");
const Student = require("./models/students");
const studentRouter = require("./routers/student")

const app = express();
const port = process.env.PORT || 8700;

app.use(express.json());
app.use(studentRouter)

app.listen(port, () => {
  console.log(`connection is up on port : ${port}`)
})