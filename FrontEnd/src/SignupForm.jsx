import './signupForm.css';
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom';
import { useState} from 'react';

export function Signup(){

    const history = useNavigate()


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');


    async function submit(e) {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:3000/signup', {
            firstName,
            lastName,
            email,
            password,    
          });
      
          if (response.data === 'exist') {
            alert('User already exists');
          } else if (response.data === 'not exist') {
            history('/logedPage', { state: { id: email } });
          }
        } catch (error) {
          alert('Wrong details');
          console.error(error);
        }
      }

    return(
        <div className="signup">
                    <div className="signForm-border">
                    <p>Create your account</p>
                        <form className="signup-form">
                        <input className="sign-firstName" type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>
                        <input className="sign-lastName" type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/>
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