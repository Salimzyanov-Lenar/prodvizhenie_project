import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as Icon} from './menuIcon.svg';
import './Header.css';


export const Header = () => {
    const [isOpen, setOpen] = useState();
    const [username, setUsername] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUsername(null);
        setDropdownOpen(false);
    };

    return (
        <header className="header">
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className="header__nav-list">

                    <li className="header__nav-item">
                        <Link to="/courses">КУРСЫ</Link> 
                    </li>
                    <li className="header__nav-item"> 
                        <Link to="/about">О ПРОЕКТЕ</Link> 
                    </li>
                    <li className="header__nav-item">
                        <Link to="/inspiration">ВДОХНОВЕНИЕ</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/team">КОМАНДА</Link>
                    </li>

                    <li className="header__nav-item">
                        {username ? (
                            <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span>{username}</span>
                                {dropdownOpen && (
                                    <div className="dropdown-menu">
                                        <button onClick={handleLogout}>Выйти</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/account">ЛИЧНЫЙ КАБИНЕТ</Link>
                        )}
                    </li>

                </ul>
            </nav>
            <button className="header__menu-button" onClick={()=> setOpen(!isOpen)}>
                <Icon />
            </button>
        </header>
    );
};

export default Header;