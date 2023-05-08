import React  from 'react';

import { useState, useEffect, createContext, useContext, useMemo, } from 'react';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const registeredUser = async (email, password) => {

    const url = `${urlEndpoint}/users/register`;

    const registrationResponse = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const information = await registrationResponse.json();

    return information;
};

const userLogin = async (email, password) => {

    const url = `${urlEndpoint}/users/login`;

    const loginResponse = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const information = await loginResponse.json();

    return information;
};


export const AuthProvider = ({ children }) => {

    const [userToken, setToken] = useState(null);

    const [userEmail, setEmail] = useState("");

    const [isProcessing, setIsProcessing] = useState(false);

    const [user, setUser] = useState("");

    useEffect(() => {
       
        const userInfo = getUserInfo();
        if (userInfo && userInfo.token) {
            setToken(userInfo.token);
        }
        if (userInfo && userInfo.email) {
            setEmail(userInfo.email);
        }
    }, [isProcessing]);

    const register = async (email, password) => {

        setIsProcessing(true);

        const registerResult = await register(email, password);

        setIsProcessing (false);

        return registerResult;
}

const login = async (email, password) => {

    setIsProcessing(true);

    const loginResult = await login(email, password);

    
    if (loginResult.success) {

        setUser(loginResult.token, email);

        setUser (loginResult.userID)

    }

    setIsProcessing(false);

    return loginResult;
}

const logout = async () => {

    setIsProcessing(true);

    removeUserInfo();

    setToken(null);

    setEmail("");

    setIsProcessing(false);
}

const setUserInfo = (token, email) => {

    localStorage.setItem(

        process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify({

            token,
            email,

            })
    )
}

const getUserInfo = () => {

    return JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY));
}

const removeUserInfo = () => {

    localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);

    return true;
}

const value = useMemo(() => ({

    userToken,

    userEmail,

    isProcessing,

    register,

    login,

    logout,

    user,

}), [userToken]);

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;


}