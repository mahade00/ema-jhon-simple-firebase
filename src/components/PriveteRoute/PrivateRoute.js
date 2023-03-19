import { reauthenticateWithCredential } from 'firebase/auth';
import React from 'react';
import {  Navigate, redirect, Route, Routes, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    console.log('This is Children: ', children);
    const location = useLocation();
    const { user } = useAuth();   

    console.log('Private Route location', location);

    if (!user.email) {
        return <Navigate to='/login' state={{path:location.pathname}} />
    }


    return children;
}

export default PrivateRoute;