import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';


function Login () {
    const login = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    };
    return (
        <div className='login'>
            <div className='container'>
                <button onClick={login}>Google İle Giriş Yap</button>
            </div>
        </div>
    );
}

export default Login;
