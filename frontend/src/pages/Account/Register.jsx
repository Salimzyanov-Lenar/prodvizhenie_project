import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUsernameError(null);
        setEmailError(null);
        setPasswordError(null);
        setError(null);

        if (password.length < 8) {
            setPasswordError("Пароль должен быть не менее 8 символов.");
            return;
        }

        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email, first_name: firstName, last_name: lastName }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User registered successfully:', data);
            navigate('/account/login'); // Перенаправляем на страницу входа
        } else {
            const errorData = await response.json();
            if (errorData.username) setUsernameError(errorData.username);
            if (errorData.email) setEmailError(errorData.email);
            if (errorData.password) setPasswordError(errorData.password);
            setError(errorData);
        }
    };

    return (
        <div className="register-page">
            <div className="register-image">
                    <img src="/images/auth_picture.svg" alt="Illustration" />
                </div>
            <div className="register-container">
                <div className="account-register-form">
                    <form onSubmit={handleSubmit} id="register-form">
                        <div className='register-form'>
                            <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="имя" />
                        </div>
                        <div className='register-form'>
                            <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="фамилия" />
                        </div>
                        <div className='register-form'>
                            <div className="input-container">
                                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="имя пользователя" />
                                {usernameError && <div className="tooltip">{usernameError}</div>}
                            </div>
                        </div>
                        <div className='register-form'>
                            <div className="input-container">
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="электронная почта" />
                                {emailError && <div className="tooltip">{emailError}</div>}
                            </div>
                        </div>
                        <div className='register-form'>
                            <div className="input-container">
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="пароль" />
                                {passwordError && <div className="tooltip">{passwordError}</div>}
                            </div>
                        </div>

                    </form>
                    <p>
                        Уже зарегистрированы? <Link to="/account/login">Войти в аккаунт</Link>
                    </p>
                    {error && !error.username && !error.email && <div className="error">{error.detail || 'Ошибка регистрации'}</div>}
                </div>
            </div>
            <div className="button-container">
                <button type="submit" form="register-form">РЕГИСТРАЦИЯ</button>
            </div>
        </div>
    );
};

export default Register;

