import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './MainPage';
import { Login } from "./LoginForm"; 
import { Signup } from "./SignupForm";
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
<Routes>
   <Route exact path="/" element={<MainPage/>} />
   <Route exact path="/login" element={<Login />} />
   <Route exact path="/signup" element={<Signup/>} />
</Routes>
</Router>
  );
}
