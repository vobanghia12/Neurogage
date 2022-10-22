import './App.css';
import AdminUI from './adminUI'; 
import './app12.css';
import { SessionSubmit } from "./sessionSubmit";

function App() {

  return (
    <div className = "common-background">
      <SessionSubmit></SessionSubmit>
      <AdminUI></AdminUI>
    </div>
  );
}

export default App;

