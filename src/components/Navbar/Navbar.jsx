import React from 'react'
import './Navbar.css';
import logo from '../../Assets/logo.png'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <span>amazon</span>
            </div>
            <div className="right-container">
                <nav className="navitems">
                    <ul>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </nav>
                <div className="search">
                    <input type="text" placeholder='Search..' />
                </div>
                <div className="cart_menu">
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                    <span><i class="fa-solid fa-bars"></i></span>
                </div>
            </div>
        </div>
    )
}
