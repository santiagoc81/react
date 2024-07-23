import React from 'react';
import logo from '../../assets/img/logo.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return (

        <section className="navMenu">
            <a href="../">
                <img className="logo" src={logo} alt="Logo ChanchuStore"/>
            </a>
            <nav className='navbar navbar-expand-lg navbar-dark'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className='nav-link' to='/'>Inicio</Link>
                            <NavLink to= { `/category/herramientas`} className={({ isActive}) => isActive  ? 'nav-link active': 'nav-link'}>Herramientas</NavLink>
                            <NavLink to= { `/category/pinturas`} className={({ isActive}) => isActive  ? 'nav-link active': 'nav-link'}>Pinturas</NavLink>
                            <NavLink to= { `/category/equipamiento`} className={({ isActive}) => isActive  ? 'nav-link active': 'nav-link'}>Equipamiento</NavLink>
                            <CartWidget/>                
                        </div>
                    </div>
                    
            </nav>
        </section>
    )   
}

export default NavBar