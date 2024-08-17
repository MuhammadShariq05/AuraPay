const mongoose = require("mongoose")

// connect
mongoose.connect("mongodb://localhost:27017/paytm");

// schema
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
})

// model
const User = mongoose.model("User",  userSchema);


module.exports = {
  User
}