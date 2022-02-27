import { createContext, ReactNode, useState, useEffect } from 'react'

import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../services/firebase';
import {useNavigate} from 'react-router-dom'

type User = { //user type
    id: string;
    name: string | null;
}
type AuthContextType = { //context type
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    signInWithGitHub: () => Promise<void>;
    logOut: () => Promise<void>;
}
type AuthContextProviderProps = { //props type
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate()

    //login persistence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                const {uid, displayName} = user

                setUser({
                    id: uid,
                    name: displayName
                })
            }
        })

        return () => {
            unsubscribe()
        }
    },[])

    //Login with google
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider() //get provider
        const result = await signInWithPopup(auth, provider)
    
        if(result.user){
            const {uid, displayName} = result.user
    
            setUser({
                id: uid,
                name: displayName,
            })
        }
    }
    
    //Login with github
    const signInWithGitHub = async () => {
        const provider = new GithubAuthProvider() //get provider
        try{
            const result = await signInWithPopup(auth, provider)

            if(result.user){
                const {uid, displayName} = result.user
                
                setUser({
                    id: uid,
                    name: displayName
                })
            }
        } catch(error){
            console.log(error)
        }
    }

    const logOut = async () => {
        await signOut(auth)
        navigate('/')
    }

    return(
        <AuthContext.Provider value={{user, signInWithGoogle, signInWithGitHub, logOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}