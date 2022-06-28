import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { Spinner } from 'react-bootstrap';
const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center'><Spinner animation="grow" /></div>
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default RequireAuth;