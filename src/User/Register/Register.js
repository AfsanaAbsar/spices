import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = e => {
        navigate('/login')
    }
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input ref={nameRef} type="text" placeholder='name' />
                <input ref={emailRef} type="text" placeholder='email' />
                <input ref={passwordRef} type="text" placeholder='password' />
                <button type="submit">Register</button>
            </form>
            <p>allready have? <a onClick={navigateLogin}>login</a></p>
            <Social></Social>
        </div>
    );
};

export default Register;