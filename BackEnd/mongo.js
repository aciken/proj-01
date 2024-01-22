const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/proj-01")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));


const UserSchema = new mongoose.Schema({
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


    module.exports = collection;

    

    // const user = new collection({
    //     email: 'adrianmarton@gmail.com',
    //     password: 'dartadiken',
    //   });
    
    // user.save()
    // .then(doc => {
    //   console.log('User saved successfully', doc);
    // })
    // .catch(err => {
    //   console.error(err);
    // });