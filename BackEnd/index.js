const experss = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = experss();
app.use(cors());
app.use(experss.json());

mongoose.connect("mongodb://127.0.0.1:27017/proj-01")

app.get("/getUsers", (req, res) => {
  UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
})