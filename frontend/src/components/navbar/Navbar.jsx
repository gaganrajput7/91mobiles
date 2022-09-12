import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../Style.module.css'
function Navbar() {
    const navigate = useNavigate()
  return (
    <div className={styles.nav}>
        <h1 onClick={()=>navigate("/")}>91mobiles</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Navbar;
