import Navbar from "../components/Navbar";
import "../app12.css";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
// const Home = () => {
//     return <div>home please work<Navbar></Navbar></div>
//   };
  
//   export default Home;
  

  export default function Home() {
    // function handleAdmin() {
    //   navigate("/Admin");
    // }
    return (
      <div className = "admin">
          <h1 className="dashboard-title">
              Welcome!
              Are You a user or Admin
          </h1>
          {/* <h1 className="dashboard-title">
            <button
                  onClick={handleAdmin}
                  className="btn text-3xl py-4 px-3"
                >
                  Juror
            button </button>
          </h1> */}
      </div>
  );
  
  }
  