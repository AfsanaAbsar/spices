import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './Social.css'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()}> Google Sign In </button>

        </div>
    );
};

export default Social;