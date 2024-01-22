import './nav.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

export function LogedNav(){
    return (
        <div className="whole-nav">
            <a href="#" className="left-nav-part">
                <img src={logo} alt="Logo" />
            </a>
            <div className="right-nav-part">
                <Link to="/">Logout</Link>

            </div>
        </div>
    )
}

