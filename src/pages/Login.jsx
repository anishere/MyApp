import React from 'react';
import Form from '../components/login/Form'
import imgLogin from '../assets/img/imgLogin.png'
import './login.css'
import './responsive-login.css'

function Login(props) {
    return (
        <div className='Login'>
            <div className='Login__imgLogin'>
                <img src={imgLogin} alt="imgLogin" />
            </div>
            <Form/>
        </div>
    );
}

export default Login;