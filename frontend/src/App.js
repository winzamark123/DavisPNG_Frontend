import './App.css';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';
import MarketPlacePage from './pages/MarketPlacePage';
import AboutUsPage from './pages/AboutUsPage';
import SettingsPage from './pages/SettingsPage';
import ChoicePage from './pages/ChoicePage';
import LandingPage from './pages/LandingPage';
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
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<AboutUsPage />} />
          <Route path="/marketplace" element={<MarketPlacePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
