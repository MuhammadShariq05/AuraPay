const express = require("express");
 // mongodb://localhost:27017/
const mainRouter = require("./routes/index")
const cors = require("cors");


const app = express();

app.use(express.json())
app.use(cors());
app.use("/api/v1", mainRouter);

app.listen(PORT, function(err){
  if(err) console.log(err);
  console.log("Server listening on PORT", PORT)
})