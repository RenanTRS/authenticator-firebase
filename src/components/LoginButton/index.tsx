
import { Google } from './Google'
import { GitHub } from './GitHub'
import googleImg from '../../assets/image/googleImg.svg'
import githubImg from '../../assets/image/githubImg.svg'
import { LoginContainer } from '../LoginContainer'
import {useAuth} from '../../hooks/useAuth'

export const LoginButton = () => {
    const {user, signInWithGoogle, signInWithGitHub} = useAuth();
    
    const loginGoogle = async () => {
        if(!user){
            await signInWithGoogle()
        }
    }
    const loginGitHub = async () => {
        if(!user){
            await signInWithGitHub()
        }
    }


    return(
        <LoginContainer>
            <Google onClick={loginGoogle}><img src={googleImg} alt="Google" /></Google>
            <GitHub onClick={loginGitHub}><img src={githubImg} alt="GitHub" /></GitHub>
        </LoginContainer>
    )
}