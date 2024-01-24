const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app  = express();
const cron = require('node-cron');
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
    tier:{
      type: String
    },
    usage:{
      type: Number,
      default: 0
    }
    });



    const collection = mongoose.model('collection', UserSchema);






app.get("/login", cors(), (req, res) =>{

})


app.post("/login", async (req, res) => {
  const { email, password} = req.body;

  try {
    const check = await collection.findOne({ email: email, password: password});

    if (check) {
      res.json(check);
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
    tier: "3"
  });

  try {
    const check = await collection.findOne({ email: email });


    if (check) {
      res.json("exist");
    } else {
      await coll.save();
      console.log(coll);
      res.json(coll);
    }
  } catch (e) {
    console.error(e);
  }
});

app.put('/updateUsage', async (req, res) => {
  const { id, usage} = req.body;

  try {
    console.log(id)
    const user = await collection.findOne({ email: id });
    console.log(user)
    if (user) {
      user.usage = usage;
      await user.save();
      res.json({ message: 'Usage updated successfully!' });
    } else{
      res.status(404).json({ message: 'User not found' });
    }
    console.log(id, usage)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// app.put('/updateUsage', async (req, res) => {
//   const { id, usage } = req. body;
//   console.log(id, usage)

//   try {
//     const user = await collection.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.usage = usage;
//     await user.save();

//     res.json({ message: 'Usage updated successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

cron.schedule('23 20 * * *', async () => {
  try {
    // Assuming `collection` is your Mongoose model
    await collection.updateMany({}, { usage: 0 });
    console.log('Usage reset successfully!');
  } catch (error) {
    console.error('Failed to reset usage:', error);
  }
});



app.listen(3000, () => console.log("Server is running on port 3000"));