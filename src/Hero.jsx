import './Hero.css'
import statsImg from './assets/3163925[1].png'

export function Hero(props) {



    return(
        <div className="hero">
            <div className="hero-text">
                <h1>Let the AI do the <span className='boring-part'>boring part</span></h1>
                <p>Leverage our AI based tools so you can delever best possible videos, get more views and subscribers and understand your viewers</p>
                <button onClick={props.loginClick} className='get-started-btn'>Get Started</button>
            </div>   

            <div className='hero-img'>
                <img src={statsImg} alt="" />
            </div>
        </div>
    )
}   