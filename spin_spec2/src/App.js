import './App.css';
import './app12.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import { SessionSubmit } from "./sessionSubmit";
import "./app12.css";

function App() {

  return (
    <div className = "common-background">
      <SessionSubmit />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            </Route><Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<SessionSubmit />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

