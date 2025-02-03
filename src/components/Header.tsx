import React from 'react'
import Logo from '../images/logo.svg'
import Nav from './Nav'
const Header = () => {
    return (
        <>
            <header className="s-header">

                <div className="row s-header__inner width-sixteen-col">

                    <div className="s-header__block">
                        <div className="s-header__logo">
                            <a className="logo" href="index.html">
                                <img src={Logo} alt="Homepage"/>
                            </a>
                        </div>

                        <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                    </div>

                    <Nav/>

                </div>

            </header>
        </>
    )
}

export default Header