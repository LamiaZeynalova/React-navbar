import React from 'react'
import img from "../image/hero_bg.jpg.webp"
import '../layout/header.css'

const Home = () => {
    return (
        <div className='imagesection'>
            <img className='image' src={img} alt="Heroperson" />
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