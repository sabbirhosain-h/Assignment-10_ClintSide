import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from './Loader';

const PrivateRoute = ({children}) => {
    const {user , Loading} = use(AuthContext)
    const location = useLocation();
    

    if(Loading){ 
        return <Loader></Loader>
     }
    if(user){
        return children
    }
  
    return <Navigate state={location.pathname} to={location.pathname}></Navigate>
};

export default PrivateRoute;