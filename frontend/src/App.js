import './App.css';
import LoginBTN from './components/LoginBTN';
import LogoutBTN from './components/LogoutBTN';


function App() {
  return (
    <div className="App">
      <div className="container">
        <LoginBTN />
        <LogoutBTN />
        Hi Can YOu Read this? 
      </div>
    </div>
  );
}

export default App;
