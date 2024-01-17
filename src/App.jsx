import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './MainPage';
import { Login } from "./LoginForm"; 
import { Signup } from "./SignupForm";
import { MainLoged } from "./MainLogedPage";
import './app.css';



export function App() {



  return (
<Router>
<Routes>
   <Route exact path="/" element={<MainPage/>} />
   <Route exact path="/login" element={<Login />} />
   <Route exact path="/signup" element={<Signup/>} />
   <Route exact path="/logedPage" element={<MainLoged/>} />
</Routes>
</Router>
  );
}
