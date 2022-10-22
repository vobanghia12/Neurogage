import logo from './logo.svg';
import './App.css';
import AdminUI from './adminUI'; 
import './app12.css';
function App() {
import { useUsers, useSessions, useEvents, useMetrics } from './hooks/api.hooks';

function App() {

  const users = useUsers();
  const sessions = useSessions();
  const events = useEvents();
  const heartrate = useMetrics("63534de899d0d3c6765cf8de");
  console.log(users, sessions, events, heartrate);

  return (
    <div class = "common-background">
      <h1>Dashboard</h1>
      <AdminUI></AdminUI>
    </div>
    
  );
}

export default App;

