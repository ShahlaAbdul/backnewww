import React from 'react'
import "./navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
            <div className="floralstudio">
                <a href=""> Floral Studio</a>
            </div>
            <div className="floralstudio_navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar