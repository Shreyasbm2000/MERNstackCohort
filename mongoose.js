const express = require('express')

const mongoose = require("mongoose");
const app = express()

mongoose.connect("mongodb+srv://shreyas25:IGBfis3ely9Nz2NN@cluster0.bgq5fad.mongodb.net/shreyas")
.then((res)=>{
    console.log("The db is connected");
})
.catch((error)=>{
    console.log(error.message);
})

app.use(express.json());

 const User = mongoose.model('User',{name:String, email:String, password:String});


 app.post('/signup',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

   const existingUser = await User.findOne({email:username});
   if(existingUser){
    return res.status(400).send("User already exist")
   }


    const user = new User({
        name: name,
        email:username,
        password:password
    })
    user.save()
    res.json({
        "msg":"User created succesfully"
    })
 })

 app.listen(3000)