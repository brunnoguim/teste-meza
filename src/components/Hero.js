import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-imagem" style={{ backgroundImage: "url(/Images/hero.jpg)" }} >
               
            </div>
            <div className="hero-texto" >
                <h1>CAPILAR</h1>
                <h1>FORTALECIMENTO</h1>
                <p>Com suas formulas especiais, os shampoos dermocosméticos ajudam a fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.</p>
            </div>
        </div>
    )
}

export default Hero