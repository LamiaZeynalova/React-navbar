import React from 'react'

import React from 'react'
import img from "../image/hero_bg.jpg"
import '../layout/Header.css'

const Home = () => {
    return (
        <div>
            <img className='img' src={img} alt="Heroperson" />
            <div className='text'>
                <h2><span>We Fight</span> For</h2>
                <h2>Your Right</h2>
                <p>Another cool free template by the fine folks</p>
                <p>at 
                    <a href="" className='link1'>Colorlib.</a></p>
                <button className='btn'>FREE CONSULTATION</button>
            </div>
        </div>
    )
}

export default Home