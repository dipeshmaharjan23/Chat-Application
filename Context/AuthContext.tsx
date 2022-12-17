import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";


export const AuthContext = createContext({});

type authProps = {
    children: ReactNode;
}
export const AuthContextProvider = ({ children }: authProps) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async(user) => {
            if(user){
                setCurrentUser(user);
            }
        })

        return () => unsub();
    }, [])

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    
}