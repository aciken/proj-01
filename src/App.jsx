import { BrowserRouter as Switch,Router, Route} from 'react-router-dom';
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

<Router>
  <Switch>
    <Route path='/main'>
      <Nav/>
      <Hero />
      <Tools />
      <Questions/>
      <Pricing />
      <Footer />
    </Route>

    <Route path='/login' render={(props) => <Login {...props} />}/>
  </Switch>
</Router>

  );
}
