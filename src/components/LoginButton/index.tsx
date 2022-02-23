
import { Google } from './Google'
import googleImg from '../../assets/image/googleImg.svg'
import githubImg from '../../assets/image/githubImg.svg'
import { LoginContainer } from '../LoginContainer'
import {useAuth} from '../../hooks/useAuth'
import { GitHub } from './GitHub'

export const LoginButton = () => {
    const {user, signInWithGoogle} = useAuth();
    
    const register = async () => {
        if(!user){
            await signInWithGoogle()
        }
    }


    return(
        <LoginContainer>
            <Google onClick={register}><img src={googleImg} alt="Google" /></Google>
            <GitHub><img src={githubImg} alt="GitHub" /></GitHub>
        </LoginContainer>
    )
}