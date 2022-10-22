import logo from './logo.svg';
import './App.css';
import { useUsers, useSessions, useEvents, useMetrics } from './hooks/api.hooks';

function App() {

  const users = useUsers();
  const sessions = useSessions();
  const events = useEvents();
  const heartrate = useMetrics("63534de899d0d3c6765cf8de");
  console.log(users, sessions, events, heartrate);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit222 <code>src/App.js</code> and save to reload.
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
