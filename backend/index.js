const express = require("express");
 // mongodb://localhost:27017/
const cors = require("cors");
const mainRouter = require("./routes/index");
const PORT = 3000;


const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/v1", mainRouter);

app.listen(PORT, function(err){
  if(err) console.log(err);
  console.log("Server listening on PORT", PORT)
})