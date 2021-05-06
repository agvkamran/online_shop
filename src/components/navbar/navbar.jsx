import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const onBurgerButtonClick = () => {
        setStatus(status === 'open' ? 'close' : 'open');
        setNavbarItemsClass(navbarItemsClass === "navbar_items" ?
            "navbar_items_open" : "navbar_items");
    }

    const [status, setStatus] = useState('close');
    const [navbarItemsClass, setNavbarItemsClass] = useState('navbar_items');

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar_inner'>

                    <div className='logo'>
                        <h1>ECL</h1>
                    </div>

                    <ul className={navbarItemsClass}>
                        <NavLink to='/' className='items' onClick={onBurgerButtonClick}>Home</NavLink>
                        <NavLink to='/electronics' className='items' onClick={onBurgerButtonClick}>Electronics</NavLink>
                        <NavLink to='/fashion' className='items' onClick={onBurgerButtonClick}>Fashion</NavLink>
                        <NavLink to='/sport' className='items' onClick={onBurgerButtonClick}>Sport</NavLink>
                        <NavLink to='/healthandbeauty' className='items' onClick={onBurgerButtonClick}>Health & beauty</NavLink>
                        <NavLink to='/cart' className='items' onClick={onBurgerButtonClick}>Cart</NavLink>
                    </ul>

                    <button className='burger_button' onClick={() => onBurgerButtonClick()}>
                        <span className={status}></span>
                        <span className={status}></span>
                        <span className={status}></span>
                    </button>

                </div>
            </div>
        </div >
    )
}

export default Navbar;

