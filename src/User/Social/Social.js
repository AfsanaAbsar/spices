import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './Social.css'
import { Spinner } from 'react-bootstrap';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Spinner animation="grow" className='mx-auto' />
    }
    return (
        <div>
            <button className='border-0 w-25 bg-dark text-white pt-2 pb-2' onClick={() => signInWithGoogle()}> Google Sign In </button>

        </div>
    );
};

export default Social;