import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("91mobile"));

  if (!token) {
    navigate("/login");
  }
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default Home;
