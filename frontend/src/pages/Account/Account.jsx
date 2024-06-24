import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Убедитесь, что используете Route
import Login from './Login';
import Register from './Register';
import './Account.css';

const Account = () => {
    return (
        <div className="main-content">
            <h1>Личный кабинет</h1>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Register />} /> {/* Путь по умолчанию */}
            </Routes>
        </div>
    );
};

export default Account;
