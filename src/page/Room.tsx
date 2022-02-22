import {LoginScreen} from '../components/LoginScreen'
import { useAuth } from '../hooks/useAuth'

export const Room:React.FC = () => {
    const {user} = useAuth()
    return(
        <LoginScreen>
            <h1>Seja bem vindo {user?.name}</h1>
        </LoginScreen>
    )
}