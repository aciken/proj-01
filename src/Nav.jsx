import './nav.css';
import logo from './assets/logo.png';
import { useState } from 'react';

export function Nav() {
    const handleScrollToPricing = () => {
        const pricingSection = document.querySelector('.pricing');
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="whole-nav">
            <a href="#" className="left-nav-part">
                <img src={logo} alt="Logo" />
            </a>
            <div className="right-nav-part">
                <a href="#" onClick={handleScrollToPricing}>Pricing</a>
                <a href="#" className='demo-nav'>Demo</a>
                <a href="#">Next</a>
            </div>
        </div>
    )
}