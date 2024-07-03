import React, { useState } from 'react'
import Shade from '../../Assets/shade.png'
import './Virtual_card.css'
import Before from '../../Assets/before.png'
import After from '../../Assets/after.png'

export default function Virtual_card() {

    const [virtual_image, setvirtual_image] = useState(Before)

    return (
        <div className='Virtual_container'>
            <div className="vc">
                <div className="left-container">
                    <span>Virtual Try-On</span>
                    <span>Nerver Buy The Wrong Shade Again!</span>
                    <span>Try Now!</span>
                    <img src={Shade} alt="shade" />
                </div>
                <div className="right-container">
                    <div className="wrapper">
                        <img src={virtual_image} alt="virtual_image" onMouseOver={() => setvirtual_image(After)} onMouseLeave={() => setvirtual_image(Before)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
