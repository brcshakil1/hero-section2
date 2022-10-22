import React, { useState } from 'react';

import { RiMenuFoldLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../img/Logo.png';
import './Navbar.css'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href="#students">Students</a></p>
            <p><a href="#industries">Industries</a></p>
            <p><a href="#fee">Fees</a></p>
            <p><a href="about">About Rareblocks</a></p>
        </>
    )
    return (
        <nav className='hero__navbar '>
            <div className="hero__navbar-logo__links">
                <div className="hero__navbar-logo__links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hero__navbar-logo__links-links">
                    <Menu />
                </div>
            </div>
            <div className="hero__navbar-signIn">
                <p>Sign in</p>
                <button type='button'>Create free account</button>
            </div>

            <div className="hero__navbar-mobile__menu">
                {
                    toggleMenu ?
                    <RiCloseLine size={30} onClick= {() => setToggleMenu(false)}/>
                    : <RiMenuFoldLine size={30} onClick= {() => setToggleMenu(true)}/>
                }

                {
                    toggleMenu &&
                    <div className="hero__navbar-mobile__menu-container scale-up-center">
                        <div className="hero__navbar-mobile__menu-links">
                            <Menu />
                         </div>
                        <div className="hero__navbar-mobile__menu-signIn">
                            <p>Sign in</p>
                            <button type='button'>Create free account</button>
                        </div>
                    </div>
    }
            </div>
        </nav>
    );
};

export default Navbar;