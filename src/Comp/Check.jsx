import React, { Children, useContext, useState } from 'react';
import { AuthProvider } from '../Provider/Provider';
import Login from './Login';

const Check = ({children}) => {
    const [ok,setOK] = useState(true);
    const {user} = useContext(AuthProvider);
    if(user){
        return children;
    }
    else{
        return <Login></Login>;
    }
};

export default Check;