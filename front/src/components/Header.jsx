import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            HEADER
            <nav>
                <ul>
                    <li><NavLink to="/home">Accueil</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;