const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
var app = express()
app.use(cors());
//Route
app.get('/',function(req,res){
  res.send('hello world')
})
const router = require('./routes/emp')
app.use('/emp',router)
//MongoDB connection
mongoose.connect('mongodb+srv://uasdb:uas123@cluster0.poxbckg.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(8000,function(){
  console.log('Server is Up 8000')
})