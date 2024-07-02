import React from 'react';
import logo from '../../img/logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (

        <section className="navMenu">
            <a href="./index.html">
                <img className="logo" src={logo} alt="Logo Chanchustudio"/>
            </a>
            <nav className='navbar navbar-expand-lg'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                            <a className="nav-link" href="./index.html">WebPages</a>
                            <a className="nav-link" href="./index.html">Hosting</a>
                            <CartWidget />                
                        </div>
                    </div>
                    
            </nav>
        </section>
    )   
}

export default NavBar