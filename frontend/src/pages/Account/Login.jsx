import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User logged in successfully:', data);
                localStorage.setItem('token', data.token); // Сохраняем токен в localStorage
                localStorage.setItem('username', data.user.username); // Сохраняем имя пользователя в localStorage
                navigate('/'); // Перенаправляем на главную страницу
                window.location.reload(); // Для отображения username на странице
            } else {
                const errorData = await response.json();
                setError(errorData);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError({ detail: 'An unexpected error occurred.' });
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-image">
                    <img src="/images/auth_picture.svg" alt="Illustration" />
                </div>
                <div className="account-login-form">
                    <form onSubmit={handleSubmit} id="login-form">
                        <div className='login-form'>
                            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="имя пользователя" />
                        </div>
                        <div className='login-form'>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="пароль" />
                        </div>
                    </form>
                    <p>
                        Еще нет аккаунта? <Link to="/account/register">Зарегистрироваться</Link>
                    </p>
                    {error && <div className="error">{error.detail || 'Ошибка входа'}</div>}
                </div>
            </div>
            <div className="button-container-login">
                <button type="submit" form="login-form">ВХОД</button>
            </div>
        </div>
    );
};

export default Login;
