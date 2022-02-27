import {LoginScreen} from '../components/LoginScreen'
import { SignOut } from '../components/SignOut'
import { useAuth } from '../hooks/useAuth'
//import {useNavigate} from 'react-router-dom'

export const Room:React.FC = () => {
    const {user, logOut} = useAuth()
    
    const handleSignOut = async () => {
        await logOut()
    }

    return(
        <LoginScreen>
            <h1>Seja bem vindo {user?.name}</h1>

            <SignOut onClick={handleSignOut}>SignOut</SignOut>
        </LoginScreen>
    )
}