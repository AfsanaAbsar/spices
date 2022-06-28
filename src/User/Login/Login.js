import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
import Social from '../Social/Social';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateRegister = e => {
        navigate('/register')
    }

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className=''>
            <div className='login-input container'>
                <form onSubmit={handleFormSubmit}>
                    <input ref={emailRef} type="text" placeholder='email' />
                    <input ref={passwordRef} type="text" placeholder='password' />
                    <button className='mt-5 manage-btn' type="submit">Login</button>
                </form>

            </div>
            <p>new to cuisine? <button className='manage-btn' onClick={navigateRegister}>register</button></p>
            <Social></Social>
        </div>
    );
};

export default Login;