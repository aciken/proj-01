import './nav.css';
import logo from './assets/logo.png';
import { useState } from 'react';

export function Nav(props) {


    const handleScrollToPricing = () => {
        const pricingSection = document.querySelector('.pricing');
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToTools = () => {
        const toolsSection = document.querySelector('.tools');
        toolsSection.scrollIntoView({ behavior: 'smooth' });

    }

    const handleScrollToQuestions = () => {
        const questionsSection = document.querySelector('.questions');
        questionsSection.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <div className="whole-nav">
            <a href="#" className="left-nav-part">
                <img src={logo} alt="Logo" />
            </a>
            <div className="right-nav-part">
                <a href="#" onClick={handleScrollToTools}>Tools</a>
                <a href="#" onClick={handleScrollToQuestions} className='demo-nav'>FAQ</a>
                <a href="#" onClick={handleScrollToPricing}>Pricing</a>
                <a href="#"onClick={props.loginClick} >Login</a>
            </div>
        </div>
    )
}