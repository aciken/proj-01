import './loginForm.css';

export function Login(){

    return(
        <div className="login">
                    <div className="form-border">
                    <p>Log in to your account</p>
                        <form className="login-form">
                        {/* <input className="login-firstName" type="text" placeholder="First Name"/>
                        <input className="login-lastName" type="text" placeholder="Last Name"/> */}
                            <input className="login-email" type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <a href='#' className="forgot">Forgot Password?</a>
                            <button className='sign-btn'>Sign In</button>
                        </form>

                        <p className="sign-up" >Dont have an account? <a  href="#">Sign Up</a></p>
                    </div>
         </div>


    )
}