import './loginForm.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3001/", {
                email,password
            })

            
        }
        catch(e){
            console.log(e)
        }

    }

    return(
        <div className="login">
                    <div className="form-border">
                    <p>Log in to your account</p>
                        <form className="login-form">
                            <input className="login-email" type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                            <a href='#' className="forgot">Forgot Password?</a>
                            <button className='sign-btn' onClick={submit}>Sign In</button>
                        </form>

                        <p className="sign-up" >Dont have an account?<Link to="/signup">Sign Up</Link></p>
                    </div>
         </div>


    )
}