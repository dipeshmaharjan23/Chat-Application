import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";


export const AuthContext = createContext({});

type authProps = {
    children: ReactNode;
}
export const AuthContextProvider = ({ children }: authProps) => {
    const [currentUser, setCurrentUser] = useState<{} | null>({})
    // console.log(currentUser);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        })

        return () => unsub();
    }, [])
    // useEffect(() => {
    //     const user = auth.currentUser;
    //     if (user) {
    //         setCurrentUser(user)
    //     }
    // }, [])


    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>

}