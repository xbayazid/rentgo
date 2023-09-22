import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <Loader/>
    }
    
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoutes;