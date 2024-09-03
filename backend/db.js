// backend/db.js
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const mongoURI = "mongodb://127.0.0.1:27017/paytm?" + "replicaSet=rs0";
// Connect to MongoDB with the replica set
MongoClient.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB Replica Set"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  Account,
};
