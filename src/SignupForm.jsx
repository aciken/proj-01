import './signupForm.css';

export function Signup(){

    return(
        <div className="signup">
                    <div className="form-border">
                    <p>Create your account</p>
                        <form className="signup-form">
                        <input className="login-firstName" type="text" placeholder="First Name"/>
                        <input className="login-lastName" type="text" placeholder="Last Name"/>
                            <input className="login-email" type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button className='sign-btn'>Sign Up</button>
                        </form>
                    </div>
         </div>


    )
}