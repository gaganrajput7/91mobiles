import axios from "axios";
import React, { useState } from "react";
import styles from "../Style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Login(){
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const [user, setUser] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend91mobiles.herokuapp.com/signin", user)
      .then((res)=>{
        notify(res.data.message)
    localStorage.setItem("91mobile",JSON.stringify(res.data))
navigate('/')
      })
  }

  return (
    <>
      <div className={styles.formDiv}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            required
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Login;
