import './App.css';
//import Admin from './admin'; 
import './app12.css';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import NoPage from "./pages/NoPage";
import "./app12.css";

function App() {

  return (
    <div className = "common-background">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          </Route><Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

