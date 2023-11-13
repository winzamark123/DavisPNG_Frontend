import './App.css';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';
import PhotographersPage from './pages/PhotographersPage';
import AboutUsPage from './pages/AboutUsPage';
import "./pages/userLogin/loginStyle.css"

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
      <NavBar />
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/photographers" element={<PhotographersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={NotFound} />
          <Route path="/pages/logInPage" element={<logIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
