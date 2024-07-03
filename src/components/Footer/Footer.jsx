import React from 'react'
import logo from '../../Assets/logo.png'
import './Footer.css'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className="main_footer">
                <div className="footer1">
                    <img src={logo} alt="logo" />
                    <span>amazon</span>
                </div>
                <div className="footer2">
                    <div className="heading">
                        <span>Contact Us</span>
                    </div>
                    <li><i class="fa-solid fa-location-dot"></i>Address</li>
                    <li><i class="fa-solid fa-envelope"></i>Email</li>
                    <li><i class="fa-solid fa-phone"></i>Phone No</li>
                </div>
                <div className="footer3">
                    <div className="heading">
                        <span>Account</span>
                    </div>
                    <li><i class="fa-solid fa-arrow-right-to-bracket"></i>Sign in</li>
                </div>
                <div className="footer4">
                    <div className="heading">
                        <span>Company</span>
                    </div>
                    <li><i class="fa-solid fa-people-group"></i>About Us</li>
                </div>
                <div className="footer5">
                    <div className="heading">
                        <span>Resources</span>
                    </div>
                    <li><i class="fa-solid fa-shield-halved"></i>Safety Privacy & Terms</li>
                </div>
            </div>
            <div className="bottom_footer">
                <span>Copyright ©2024 by Amazon, Inc.
                </span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}
