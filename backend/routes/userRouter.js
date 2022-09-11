const { Router } = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const user = require("../model/userSchema");
const userRouter = Router();
//register
userRouter.post("/signup", async (req, res) => {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    res.status(400).send({ message: "Fill Every Details" });
  }
  const checkEmail = await user.findOne({ email: email });
  if (!checkEmail) {
    const hash = await argon2.hash(password);
    const User = new user({
      name: name,
      email: email,
      password: hash,
      gender: gender,
    });
    User.save();
    res.status(201).send({ message: "User Created", User });
  } else {
    res.status(406).send({ message: "Email Already Exists" });
  }
});

//Login

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const findUser = await user.findOne({ email: email });

  if (findUser) {
    const Password = await argon2.verify(findUser.password, password);
    if (Password) {
      const token = jwt.sign(
        {
          id: findUser._id,
          name: findUser.name,
          email: findUser.email,
          gender: findUser.gender,
        },
        "SEC12345"
      );
      const User = jwt.verify(token, "SEC12345");
      const payload={
        ...User,token
      }
      res.status(202).send({ message: "Logged in sucesss", payload });
    } else {
      res.send({ message: "Wrong Password" });
    }
  } else {
    res.status(401).send({ message: "Fill Correct Details" });
  }
});

//One user

userRouter.get("/user/:id", async (req, res) => {
  const User = await user.findById({ _id: req.params.id });
  const token = req.headers["token"].split(" ")[1];
  try {
    const user = jwt.verify(token, "SEC12345");
    if (user){
      res.send(user)
    }
  } catch (error) {
    res.send({ message:"Somthing Wrong"})
  }
});

module.exports = userRouter;
