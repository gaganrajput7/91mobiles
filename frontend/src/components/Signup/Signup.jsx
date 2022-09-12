import React from "react";
import axios from "axios";
import styles from "../Style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const notify = (msg) => {
    toast(msg);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backend91mobiles.herokuapp.com/signup", user)
      .then((res) => {
        notify(res.data.message);
        navigate("/login");
      })
      .catch(({ response }) => {
    notify(response.data.message);
      });
  };

  return (
    <div className={styles.formDiv}>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          required
          onChange={handleChange}
        />
        <select name="gender" id="" required onChange={handleChange}>
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
