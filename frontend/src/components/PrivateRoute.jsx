import React from 'react';
import { Navigate } from 'react-router-dom';


const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};


const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/account/register" />;
};


export default PrivateRoute;