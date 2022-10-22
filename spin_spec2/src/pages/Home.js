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
    let navigate = useNavigate();

    function handleSessionSubmit() {
      navigate("/SessionSubmit");
    }

    function handleUserPage() {
      navigate("/User");
    }

    
    return (
      <div className = "admin">
          <h1 className="dashboard-title">
              Welcome!
              Are You a user or Admin
          </h1>
          <h1 className="dashboard-title">
            <button
                  onClick={handleSessionSubmit}
                  className="btn text-3xl py-4 px-3"
                >
                  Admin
             </button>
             <button
                  onClick={handleUserPage}
                  className="btn text-3xl py-4 px-3"
                >
                  User
             </button>
          </h1>
      </div>
  );
  
  }
  