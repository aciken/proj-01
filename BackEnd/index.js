const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());




mongoose.connect("mongodb://localhost:27017/proj-01")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));


const UserSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    });



    const collection = mongoose.model('collection', UserSchema);






app.get("/login", cors(), (req, res) =>{

})


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email, password: password });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    console.error(e); // Log the error, but don't send a response here
  }
});




app.get("/signup", cors(), (req, res) =>{

})


app.post("/signup",async(req,res) => {
  const {firstName, lastName, email, password} = req.body;

  const coll = new collection({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await coll.save();
      res.json("not exist");
    }
  } catch (e) {
    console.error(e);
  }
});


app.listen(3000, () => console.log("Server is running on port 3000"));