import React from 'react';
import './form.css'
import './responsive-form.css'

function Form(props) {
    return (
        <div className='Form'>
            <h1>Login</h1>
            <p className='Forgot'>Don't have an account ? <a href=".">Create Now</a></p>

            <p>Email</p>
            <input type="email" />
            <p>Password</p>
            <input type="password" />

            <button>Login</button>
            <a href='.'>Forgot a password?</a>

            <h2 className="Form__line">Or</h2>

            <button className='Form__buttonForward'><i className="fa-brands fa-facebook fa-xl"></i>Continue with Facebook</button>
            <button className='Form__buttonForward Form__buttonForwardSecond'><i className="fa-brands fa-google"></i>Continue with Google</button>
        </div>
    );
}

export default Form;