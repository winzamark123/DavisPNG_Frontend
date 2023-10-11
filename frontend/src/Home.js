import './Home.css';
import LoginBTN from './components/LoginBTN';
import LogoutBTN from './components/LogoutBTN';


function Home() {
  return (
    <div className="Home">
      <div className="container">
        <LoginBTN />
        <LogoutBTN />
        Hi Can YOu Read this? 
      </div>
    </div>
  );
}

export default Home;
