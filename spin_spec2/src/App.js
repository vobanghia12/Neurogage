import './App.css';
//import Admin from './admin'; 
import './app12.css';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import NoPage from "./pages/NoPage";
import SessionSubmit from "./pages/sessionSubmit"
import "./app12.css";

function App() {

  return (
      <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/User" element={<User />} />
          <Route path="/SessionSubmit" element={<SessionSubmit />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;

