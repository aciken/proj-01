import './signupForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Signup(){


    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');


    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/signup", {
                email,password
            })
            .then(res => {
                if(res.data === "exist"){
                    alert("user already exist")

                }
                else if(res.data === "not exist"){
                    history("/logedPage",{state:{id:email}})
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })

            
        }
        catch(e){
            console.log(e)
        }

    }

    return(
        <div className="signup">
                    <div className="signForm-border">
                    <p>Create your account</p>
                        <form className="signup-form">
                        {/* <input className="sign-firstName" type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>
                        <input className="sign-lastName" type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/> */}
                            <input className="sign-email" type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                            <label className='checkBox-agg'>
                        <input type="checkbox"  />
                        I agree to the terms and conditions
                    </label>
                            <button className='sign-btn' onClick={submit}>Sign Up</button>
                            <p className='login-link'>Already have an account? <Link to="/login">Log In</Link></p>
                        </form>
                    </div>
         </div>


    )
}