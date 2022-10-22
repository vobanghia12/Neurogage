import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../loginUI.css";
import {login} from "../hooks/api.hooks";

function Login() {
  //navigate to main admin page after input form submitted
  let navigate = useNavigate();

  // Passing in an object to store each input field from the login UI.
  const [input, setInput] = useState({
    userName: "",
    Password: "",
  });

  const [msg, setMsg] = useState("");

  // This function will be called on the username and password field.
  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput ((prev) => {
      return {...prev, [name]: value};
    });
  };

  /* 
    In the event that the submit button changes state,
    send the data to the server.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    login(input.userName, input.Password)
        .then(() => navigate("/Admin"))
        .catch((e) => {
          console.log(e)
            setMsg("Login fail")
        });
    console.log(input);
  }

  return (
    <body>
      <form onSubmit = {(handleAdm)}>
        <h1>Admin Login</h1>
        <h2>Username</h2>
        <input type = 'text' name = 'userName' onChange = {handleInput}/>
        <h2>Password</h2>
        <input type = 'text' name = 'Password' onChange = {handleInput}/>
        <br></br>
        <button className = "btn" type = 'submit'>Login</button>
        <button className = "btn">Create an account</button>
        <h2>
          {msg}
        </h2>
      </form>
    </body>
      
  );
}

export default Login;
