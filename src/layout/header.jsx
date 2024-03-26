import React from 'react';
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className='menu-links'>
                <div className='logo'>
                    <a className='justice' href="/"> Justice<span className='end'>.</span>
                    </a>
                </div>
                <nav className='navHome'>
                    <NavLink className='links' to='/'>Home</NavLink>
                    <NavLink className='links' to='/Practice'>Practice Areas</NavLink>
                    <NavLink className='links' to='/Services'>Services</NavLink>
                    <NavLink className='links' to='/Attorneys'>Attorneys</NavLink>
                    <NavLink className='links' to='/About'>About</NavLink>
                    <NavLink className='links' to='/Contactus'>Contact Us</NavLink>
                </nav>
            </div>
           
        </div>
    )
}

export default Header