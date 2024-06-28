import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
    <section className="hero-page">
                <div className="home-content">
                <span className='welcome'>Welcome to Aroma</span>
                <br />
                <h1 className='wel-para'>Your Premier Design Solution Software Agency</h1>

                <div className="hero-btn">
                  <button className='get'>Get Started</button>
                  <button className='call'>Book a call</button>
                </div>
                </div>
    </section>
    </>
  )
}

export default Hero