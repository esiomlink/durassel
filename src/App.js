import './App.css';
import Dashboard from './components/Dashboard';
import Board from './components/Board';
import logo from './img/fiverr.png'

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <Dashboard />
      <Board />
    </div>
  );
}

export default App;
