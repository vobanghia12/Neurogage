import logo from './logo.svg';
import './App.css';
import { useUsers, useSessions, useEvents } from './hooks/api.hooks';

function App() {

  const users = useUsers();
  const sessions = useSessions();
  const events = useEvents();
  console.log(users, sessions, events);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
