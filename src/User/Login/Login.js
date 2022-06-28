import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='text-center'>
            <div className='login-input mx-auto '>
                <form onSubmit={handleFormSubmit}>
                    <input ref={emailRef} type="text" className='w-25' placeholder='Enter Your Email' /><br />
                    <input ref={passwordRef} type="text" className='w-25' placeholder='Enter Your Password' /><br />
                    <button className='mt-5 manage-btn w-25' type="submit">Login</button>
                </form><br />

            </div>
            <p className='text-center'>New To CUISINE? <button className='border-0 bg-dark text-white' onClick={navigateRegister}>Register</button></p>
            <div className='text-center'> <Social></Social></div>

        </div>


    );
};

export default Login;