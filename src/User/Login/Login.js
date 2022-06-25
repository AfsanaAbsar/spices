import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input ref={emailRef} type="text" placeholder='email' />
                <input ref={passwordRef} type="text" placeholder='password' />
                <button type="submit">Login</button>
            </form>
            <p>new to cuisine? <a onClick={navigateRegister}>register</a></p>
        </div>
    );
};

export default Login;