import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar/Navbar";

function MainRoutes() {
  

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      ;
    </>
  );
}

export default MainRoutes;
