import React, { createContext, useContext, useState } from 'react';

export const AuthProvider = createContext(null);
const Provider = ({children}) => {
    const [dark,setDark] = useState(true);
    const parcel = {
        dark,
        setDark,
    }
    return (
        <AuthProvider.Provider value={parcel}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;