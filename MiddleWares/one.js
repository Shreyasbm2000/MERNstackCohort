const express = require('express')
const app = express()

function isOldEnoughMiddleware(req,res,next){
  const age = req.query.age;
  if(age > 18){
    next();
    }else{
    res.status(403).json({
        msg:"you are not old enough to ride"

                         })
         }
}

app.use(express.json())

app.get('/ride1',isOldEnoughMiddleware,function(req,res){
  res.json({
    msg:"You have successfully riden the ride one"
  })
})


app.listen(3030)
