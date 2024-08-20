const mongoose = require("mongoose")
// const bcrypt = require("bcrypt");

// connect
mongoose.connect("mongodb://localhost:27017/paytm");

// schema
const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String
})

const accountSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true
  }
})
// userSchema.methods.createHash = async function(plainTextPassword){
//   // / Hashing user's salt and password with 10 iterations,
//   const saltRounds = 10;

//   const salt = await bcrypt.genSalt(saltRounds);
//   return await bcrypt.hash(plainTextPassword, salt);
// }

// // validating the canditate password with stored hash and hash function
// userSchema.methods.validatePassword = async function (canditatePassword) {
//   return await bcrypt.compare(canditatePassword, this.password_hash)
// }

// model
const Account = mongoose.model("Account", accountSchema)
const User = mongoose.model("User",  userSchema);


module.exports = {
  User,
  Account
  }