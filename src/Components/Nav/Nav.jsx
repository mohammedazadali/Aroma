import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const[isOpen,setIsOpen]=useState(false);
    function navhandle(){
        setIsOpen(!isOpen)
    }
  return (
    <>
    <nav>
    <span onClick={navhandle} className="handburger-menu-btn">{isOpen?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars}/>}</span>
    
    <h2 className="logo">Aroma <sup>&copy;</sup></h2>
        <ul className={`navlinks ${isOpen && 'active'}`}>
            <li className="navlink">
                <Link activeClass='active'  duriation={500}>Home <hr /></Link>
            </li>
            <li className="navlink">
                <Link activeClass='active' duriation={500}>About Us <hr /></Link>
            </li>
            <li className="navlink">
                <Link activeClass='active' duriation={500}>Works <hr /></Link>
            </li>
            <li className="navlink">
                <Link activeClass='active' duriation={500}>Services <hr /></Link>
            </li>
            <li className="navlink">
                <Link activeClass='active' duriation={500}>Testimonials <hr /></Link>
            </li>
            <li className="navlink">
                <Link activeClass='active' duriation={500}>Blog <hr /></Link>
            </li>
        </ul>
        <Link><button className='nav-btn-contact'>Book a call</button></Link>
    </nav>
    </>
  )
}

export default Nav