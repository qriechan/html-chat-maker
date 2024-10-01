import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) {
            onLogin(data.userid, data.username); 
        } else {
            setNotification(data.notification);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/Signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        setNotification(data.notification);
    };

    return (
        <div className='login-page'>

            <h2>{isLoginMode ? 'Log in' : 'Sign up'}</h2>
            <form onSubmit={isLoginMode ? handleLogin : handleSignup} className='login-form'>
                <input
                    type="text"
                    className='login-input'
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br />
                <input
                    type="password"
                    className='login-input'
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <button type="submit" className='login-submit'>{isLoginMode ? 'Log in' : 'Sign up'}</button>
            </form>
            <p>
                {isLoginMode ? 'Need an account?' : 'Already have an account?'} 
                <button onClick={() => setIsLoginMode(!isLoginMode)} className='login-switch'>
                    {isLoginMode ? 'Sign up' : 'Log in'}
                </button>
            </p>
            {notification && <p className='notif'>{notification}</p>}

        </div>
    );
};

export default Login;
