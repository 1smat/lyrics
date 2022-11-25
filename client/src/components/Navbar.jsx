import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex'>
                <li className='nav__link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav__link'>
                    <Link to='/songs'>All Song</Link>
                </li>
                <li className='nav__link'>
                    <Link to='/add'>Add song</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
