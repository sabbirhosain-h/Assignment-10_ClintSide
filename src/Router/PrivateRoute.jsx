import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation} from 'react-router';
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
    
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;