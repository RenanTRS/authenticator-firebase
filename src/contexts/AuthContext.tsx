import {createContext, ReactNode, useState} from 'react'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../services/firebase';
import {useNavigate} from 'react-router-dom'

type User = {
    id: string;
    name: string | null;
}
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}
type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
    
        if(result.user){
            const {uid, displayName} = result.user
    
            setUser({
                id: uid,
                name: displayName,
            })
            navigate('/room')
        }
    }

    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    );
}

