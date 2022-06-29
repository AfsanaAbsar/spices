import React from 'react';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import { Spinner } from 'react-bootstrap';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Spinner animation="grow" className='mx-auto' />
    }





    return (
        <div className='text-center'>
            <div className='login-input mx-auto '>
                <form onSubmit={handleFormSubmit}>
                    <input ref={nameRef} type="text" className='w-25' placeholder='Enter Your Name' /><br />
                    <input ref={emailRef} type="text" className='w-25' placeholder='Enter Your Email' /><br />
                    <input ref={passwordRef} type="text" className='w-25' placeholder='Enter Your Password' /><br />
                    <button className='mt-5 manage-btn w-25' type="submit">Register</button>
                </form>
            </div>


            <p className='text-center mt-5'>Already Have An Account? <button className='border-0 bg-dark text-white' onClick={navigateLogin}>LogIn</button></p>
            <div className='text-center'> <Social></Social></div>
        </div>
    );
};

export default Register;