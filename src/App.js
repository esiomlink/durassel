import './App.css';
import Board from './components/Board';
import Navigation from './components/Navigation';
import logo from './img/fiverr.png'

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <Navigation />
      <Board />
    </div>
  );
}

export default App;
