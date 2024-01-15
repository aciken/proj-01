import './loginForm.css';
import {Link} from 'react-router-dom';

export function Login(){

    return(
        <div className="login">
                    <div className="form-border">
                    <p>Log in to your account</p>
                        <form className="login-form">
                            <input className="login-email" type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <a href='#' className="forgot">Forgot Password?</a>
                            <button className='sign-btn'>Sign In</button>
                        </form>

                        <p className="sign-up" >Dont have an account?<Link to="/signup">Sign Up</Link></p>
                    </div>
         </div>


    )
}