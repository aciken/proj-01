import { Nav } from "./nav";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";
import { Tools } from "./Tools";
import { Footer } from "./Footer";
import { Login } from "./LoginForm";
import './app.css';

export function App() {

  const loginClick = () => {
    const mainPart = document.querySelector('.main-part');
    const loginPart = document.querySelector('.login-part');
    mainPart.classList.toggle('selected');
    loginPart.classList.toggle('selected')
}

  return (
    <div className="whole-app">
      <div className="main-part">
        <Nav loginClick={loginClick}/>
        <Hero loginClick={loginClick}/>
        <Tools />
        <Questions/>
        <Pricing />
        <Footer loginClick={loginClick}/>
        </div>
        <div className="login-part selected">
        <Login loginClick={loginClick} />
        </div>
    </div>
  );
}
