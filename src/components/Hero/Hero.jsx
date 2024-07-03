import React from 'react'
import './Hero.css'
import heroimage from '../../Assets/hero.png';
export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="hero-container1">
          <span>SKIN PROTECTION CREAM</span>
          <div className='text1'>
            <span>Trendy Collection</span>
            <p>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>
        <div className="hero-container2">
          <div className='blue-circle'><img src={heroimage} alt="hero" /></div>
          <div className="text2">
            <div className="icon"><i class="fa-solid fa-bag-shopping"></i></div>
            <div className="signup">
            <span>Best Signup <br />offer </span>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="hero-container3">
          <div className="text3">
            <span>1.5m</span>
            <p>Monthly traffic</p>
          </div>
          <div className="text4">
            <span>100k</span>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
