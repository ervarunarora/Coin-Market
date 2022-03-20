import React from 'react'
import {ImRocket} from 'react-icons/im'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <ImRocket className='icon' />
                <h1> Coin <span className='purple'>Market</span></h1>
            </div>
        </Link>
    )
}

export default Navbar