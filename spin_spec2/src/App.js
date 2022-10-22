import './App.css';
import './app12.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import SessionSubmit from "./pages/sessionSubmit"
import Login from "./pages/Login"
import User from "./pages/User"
import "./app12.css";
import User from "./pages/User";

function App() {

  return (
      <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/User" element={<User />} />
          <Route path="/SessionSubmit" element={<SessionSubmit />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;

