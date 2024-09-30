import React, { useState } from 'react';
import Login from './Login'; 
import Profile from './Profile'; 

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('');

    const handleLogin = (userId, userName) => {
        setIsLoggedIn(true);
        setUserId(userId);
        setUserName(userName);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        setUserName('');
    };

    return (
        <div>
            {isLoggedIn ? (
                <Profile userId={userId} username={userName} onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Account;
