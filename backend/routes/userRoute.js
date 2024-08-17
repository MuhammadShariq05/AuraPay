const express = require("express");
const zod = require("zod")
const userRoute = express.Router();


const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})
userRoute.post("/signup", (req, res) => {
  const {success} = signupSchema.safeParse(req.body)
})

userRoute.post("/signin", (req, res) => {
  
})