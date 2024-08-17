const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken"); 
const userRoute = express.Router();


const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

// Sign up
userRoute.post("/signup", async (req, res) => {
  const {success} = signupSchema.safeParse(req.body);
  if(!success){
    res.status(411).json({
      messege: "Email already taken / Incorrect inputs"
    })
  }

  const existingUser = await User.findOne({
    username: req.body.username
  })

  if(existingUser){
    res.status(411).json({
      messege: "Email already exist"
    })
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })

  const userId = user._id;

  const token = jwt.sign({
    userId
  }, JWT_SECRET);
  res.json({
    messege: "User created successfully",
    token: token
  })
})

userRoute.post("/signin", (req, res) => {
  
})