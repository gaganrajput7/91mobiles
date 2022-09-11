import React from "react";
import styles from '../Style.module.css'
function Signup() {
  return (
    <div className={styles.formDiv}>
      <h1 className="text-2xl">Register</h1>
      <form action="">
        <input type="text" name="name" placeholder="Enter name" />
        <input type="email" name="email" placeholder="Enter email" />
        <input type="text" name="password" placeholder="Enter Password" />
        <select name="gender" id="">
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
