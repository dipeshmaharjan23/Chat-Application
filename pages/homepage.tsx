import Router, { useRouter } from 'next/router';
import React, { ReactNode, useContext } from 'react'
import Homepage from '../components/Homepage/Homepage'
import { AuthContext } from '../Context/AuthContext';

type Props = {
    children: ReactNode;
}

const homepage = (props: Props) => {
    const currentUser = useContext(AuthContext)
    console.log(currentUser);
const router= useRouter();
    const ProtectedRoute = ({ children }: Props) => {
        if(!currentUser) {
            return ()=>{
                router.push("/index")
            }
        }
    }
    return (
        <div>
            <Homepage />
        </div>
    )
}

export default homepage