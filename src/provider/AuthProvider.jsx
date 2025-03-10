import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "alia",
        email: "alia@gmail.com"
    })


    const authInfo = {
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;