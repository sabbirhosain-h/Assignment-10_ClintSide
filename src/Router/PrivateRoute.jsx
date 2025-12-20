import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , Loading} = use(AuthContext)
    const location = useLocation();
    console.log(location);

    if(Loading){ 
        return <div>Loading....</div>
     }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/Login"></Navigate>
};

export default PrivateRoute;