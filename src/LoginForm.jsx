import './loginForm.css';

export function Login(props){

    return(
        <div className="login">
                <h1>Sign In</h1>
                <p>Sign in to your account</p>
                <form className="login-form">
                    <input className="login-email" type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign In</button>
                </form>
                <p className="forgot">Forgot Password?</p>
                <p className="or">OR</p>
                <button className="google">Sign In with Google</button>
                <p className="sign-up" onClick={props.loginClick}>Dont have an account? <a href="#">Sign Up</a></p>
            </div>

    )
}