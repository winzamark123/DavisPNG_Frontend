import './App.css';
import LoginBTN from './components/LoginBTN';
import LogoutBTN from './components/LogoutBTN';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <AboutUs />
        <LoginBTN />
        <LogoutBTN />

      </div>
    </div>
  );
}

export default App;
