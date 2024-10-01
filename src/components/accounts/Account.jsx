import React, { useState } from 'react';
import Login from './Login'; 
import Profile from './Profile'; 

const Account = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userid, setUserid] = useState(null);
    const [username, setUsername] = useState('');

    const handleLogin = (userid, username) => {
        setIsLoggedIn(true);
        setUserid(userid);
        setUsername(username);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserid(null);
        setUsername('');
    };

    return (
        <div>
            {isLoggedIn ? (
                <Profile userid={userid} username={username} onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Account;
