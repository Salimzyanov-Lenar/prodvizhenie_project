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
                <a href="https://360.yandex.ru/disk/" target="_blank" rel="noopener noreferrer">
                    <button className="account-button-left">обучающие материалы</button>
                </a>
            </div>
            <div className="account-right">
                <div className="account-welcome">
                    <div className="logo-container">
                        <img src="./images/logo.png" alt="Logo" className="account-logo" />
                    </div>
                    <h1>ДОБРО ПОЖАЛОВАТЬ!</h1>
                    <p>Если у вас есть проблемы в продвижении<br /> — напишите нам. <br /><br />Детально опишите ситуацию:<br /> проблемы, результаты, желания, а наша команда экспертов даст индивидуальную обратную связь.<br /><br /> С заботой, ваше ПРОдвижение!</p>
                    <a href="mailto:prodvizhenie@mail.ru">
                        <button className="account-button-right">написать нам</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Account;
