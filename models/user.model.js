const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  name:{
    types:String, 
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel