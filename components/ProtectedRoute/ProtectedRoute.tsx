import React, { ReactNode, useContext, useEffect } from 'react'
import { useRouter } from 'next/router';
import { AuthContext } from '../../Context/AuthContext';



// const ProtectedRoute = ({ children }: Props) => {
// const currentUser = useContext(AuthContext)
//     const router = useRouter();

// if (!currentUser) {
//     return () => {
//         router.push("/index")
//     }
// }

//     return <>children</>
// }

// export default ProtectedRoute ;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const currentUser = useContext(AuthContext)
    console.log(currentUser);
    if (!currentUser) {
        router.push("/");
    }

    return <>{children}</>
};

export default ProtectedRoute;