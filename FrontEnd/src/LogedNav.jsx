import './nav.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import { useState } from 'react';

export function LogedNav(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

    return (
        <div className="whole-nav">
            <a href="#" className="left-nav-part">
                <img src={logo} alt="Logo" />
            </a>
            <div className="right-nav-part">
            <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                <a href="#" className='drop-btn'>Profile</a>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <Link to="/">Usage</Link>
                        <Link to="/">Upgrade</Link>
                        <Link to="/">Log Out</Link>
                    </div>
                )}
            </div>
                {/* <Link to="/">Logout</Link> */}

            </div>
        </div>
    )
}



