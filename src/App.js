import './App.css';
import Dashboard from './components/Dashboard';
import logo from './img/fiverr.png'

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
