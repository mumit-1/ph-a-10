import React, { createContext, useContext, useState } from 'react';
import auth from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthProvider = createContext(null);
const Provider = ({children}) => {
    const [dark,setDark] = useState(true);
    const [user,setUser] = useState(null);
    const createAcc = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginAcc = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateAcc = (data) => {
     return updateProfile(auth.currentUser,data);
    }
    const parcel = {
        dark,
        setDark,
        createAcc,
        loginAcc,
        updateAcc,
        user,
        setUser,
    }
    return (
        <AuthProvider.Provider value={parcel}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;