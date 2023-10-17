import './App.css';
import LoginBTN from './components/LoginBTN';
import LogoutBTN from './components/LogoutBTN';
import NavBar from './components/NavBar';
import Photographers from './pages/Photographers';
import AboutUs from './pages/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  navigate('/');
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="*" element={NotFound} />
        </Routes>
      </Router>
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
