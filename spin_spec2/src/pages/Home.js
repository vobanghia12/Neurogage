import "../app12.css";
import { useNavigate } from "react-router-dom";
import React from "react";

  export default function Home() {
    let navigate = useNavigate();

    function handleAdminPage() {
      navigate("/Login");
    }

    function handleUserPage() {
      navigate("/User");
    }

    
    return (
      <div className = "admin">
          <h1 className="dashboard-title">
              Welcome!
              Are You a User or Admin?
          </h1>
          <h1 className="dashboard-title">
            <button
                  onClick={handleAdminPage}
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
  