import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className="nav-bar">
        <div className="nav-bar__logo">
            <Link className="nav-bar__logo__link" to="/">
                <img className="nav-bar__logo__link__img" alt="logo" src={require('../../resources/icons/home.svg')}/>
            </Link>
        </div> 
    </nav>;
}

export default NavBar;