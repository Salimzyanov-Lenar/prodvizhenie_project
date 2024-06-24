import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

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
            setError(errorData);
        }
    };

    return (
        <div className="account-form">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Фамилия</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Имя пользователя</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    {error && error.username && <div className="error">{error.username}</div>}
                </div>
                <div>
                    <label>Электронная почта</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {error && error.email && <div className="error">{error.email}</div>}
                </div>
                <div>
                    <label>Пароль</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
            {error && !error.username && !error.email && <div className="error">{error.detail || 'Ошибка регистрации'}</div>}
            <p>
                Уже зарегистрированы? <Link to="/account/login">Войти в аккаунт</Link>
            </p>
        </div>
    );
};

export default Register;

