const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter')
const connection = require("./db/db");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/",userRouter)
app.use("/", (req, res) => {
  res.send("App Running");
});
app.listen(process.env.PORT || 8080, () => {
  connection
    .then(() => {
      console.log("server running");
    })
    .catch((err) => {
      console.log(err)
    });
});
