const express = require("express");
const app = express();
const cors = require('cors')
const userRouter = require("./routes/userRouter");
const connection = require("./db/db");
app.use(cors({}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", userRouter);
app.get("/", (req, res) => {
  res.send("App Running");
});
app.listen(process.env.PORT || 8080, () => {
  connection
    .then(() => {
      console.log("server running");
    })
    .catch((err) => {
      console.log(err);
    });
});
