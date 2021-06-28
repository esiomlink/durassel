import './App.css';
import Navigation from './components/Navigation';
import logo from './img/fiverr.png'

function App() {
  return (
    <div className='App'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <Navigation />
    </div>
  );
}

export default App;
