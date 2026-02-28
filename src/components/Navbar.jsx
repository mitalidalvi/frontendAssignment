import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <header className='header'>
            <a href="/" className="logo">
                <img 
                    src="https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/Ascencia-Malta-Logo.svg" 
                    alt="Logo" 
                />
            </a>

            <div className="menu-icon" onClick={toggleMenu}>  
                {isOpen ? (  
                    /*  Cross Icon */
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2"/>
                        <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2"/>
                    </svg>
                ) : (
                    /*  Hamburger Icon */
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2"/>
                        <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2"/>
                        <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2"/>
                    </svg>
                )}
            </div>


            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <div id="nav-part">
                    <h4><a href="/" onClick={() => setIsOpen(false)}>HOME</a></h4>
                    <h4><a href="/about" onClick={() => setIsOpen(false)}>ABOUT</a></h4>
                    <h4><a href="/contact" onClick={() => setIsOpen(false)}>CONTACT</a></h4>
                </div>
            </nav>
        </header>
    )
}

export default Navbar