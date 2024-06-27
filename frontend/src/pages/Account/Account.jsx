import React, { useEffect, useState } from 'react';
import './Account.css';

const Account = () => {

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: ''
    });

    useEffect(() => {
        const storedUser = {
            first_name: localStorage.getItem('first_name'),
            last_name: localStorage.getItem('last_name'),
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email')
        };

        setUser(storedUser);
    }, []);

    return (
        <div className="account-main-content">
            <div className="account-left">
                <div className="account-image-container">
                    <div className="account-info">
                        <h1>{user.first_name} {user.last_name}</h1>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <div className="cursor-container">
                            <img src="./images/cursor.png" alt="" className="account-cursor" />
                        </div>
                    </div>
                </div>
                <button className="account-button-left">обучающие материалы</button>
            </div>
            <div className="account-right">
                <div className="account-welcome">
                    <div className="logo-container">
                        <img src="./images/logo.png" alt="Logo" className="account-logo" />
                    </div>
                    <h1>ДОБРО ПОЖАЛОВАТЬ!</h1>
                    <p>текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст </p>
                    <button className="account-button-right">написать нам</button>
                </div>
            </div>
        </div>
    );
};

export default Account;
