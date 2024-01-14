import './loginForm.css';

export function Login(props){

    return(
        <div className="login">
                <h1>Sign In</h1>
                <p>Sign in to your account</p>
                <div className="form-border">
                    <form className="login-form">
                    {/* <input className="login-firstName" type="text" placeholder="First Name"/>
                    <input className="login-lastName" type="text" placeholder="Last Name"/> */}
                        <input className="login-email" type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button className='sign-btn'>Sign In</button>
                    </form>
                    <a href='#' className="forgot">Forgot Password?</a>
                    <p className="sign-up" onClick={props.loginClick}>Dont have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>

    )
}