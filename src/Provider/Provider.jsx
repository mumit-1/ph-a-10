import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation } from 'react-router-dom';

export const AuthProvider = createContext(null);
const Provider = ({children}) => {
 
  const provider = new GoogleAuthProvider();
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
    const logout = () =>{
      return signOut(auth);
    }
    const googleLogIn = () =>{
      return signInWithPopup(auth, provider);
    }
      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => {
      unsubscribe();
    };
  }, []);
    const parcel = {
        dark,
        setDark,
        createAcc,
        loginAcc,
        updateAcc,
        user,
        setUser,
        logout,
        googleLogIn,
      
    }
    return (
        <AuthProvider.Provider value={parcel}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;