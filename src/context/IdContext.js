import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const UseProvider = ({children}) => {
    const [resume, setResume] = useState('here')

    return (
        <MyContext.Provider
            value={{
                resume,
                setResume
            }}>
                {children}
        </MyContext.Provider>
    )
}