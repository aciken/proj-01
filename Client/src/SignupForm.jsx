import './signupForm.css';
import { Link } from 'react-router-dom';

export function Signup(){

    return(
        <div className="signup">
                    <div className="signForm-border">
                    <p>Create your account</p>
                        <form className="signup-form">
                        <input className="sign-firstName" type="text" placeholder="First Name"/>
                        <input className="sign-lastName" type="text" placeholder="Last Name"/>
                            <input className="sign-email" type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <label className='checkBox-agg'>
                        <input type="checkbox"  />
                        I agree to the terms and conditions
                    </label>
                            <button className='sign-btn'>Sign Up</button>
                            <p className='login-link'>Already have an account? <Link to="/login">Log In</Link></p>
                        </form>
                    </div>
         </div>


    )
}