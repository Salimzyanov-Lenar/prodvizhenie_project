import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

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
        <div className="account-form">
            <h2>Вход в аккаунт</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Пароль</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Войти</button>
            </form>
            {error && <div className="error">{error.detail || 'Ошибка входа'}</div>}
            <p>
                Еще нет аккаунта? <Link to="/account/register">Зарегистрироваться</Link>
            </p>
        </div>
    );
};

export default Login;
