
import { Google } from './Google'
import { GitHub } from './GitHub'
import googleImg from '../../assets/image/googleImg.svg'
import githubImg from '../../assets/image/githubImg.svg'
import { LoginContainer } from '../LoginContainer'
import {useAuth} from '../../hooks/useAuth'
import {useNavigate} from 'react-router-dom'

export const LoginButton = () => {
    const {user, signInWithGoogle, signInWithGitHub} = useAuth();
    const navigate = useNavigate()
    
    const loginGoogle = async () => {
        if(!user){
            await signInWithGoogle()
        }
        navigate('/room')
    }
    const loginGitHub = async () => {
        if(!user){
            await signInWithGitHub()
        }
        navigate('/room')
    }


    return(
        <LoginContainer>
            <Google onClick={loginGoogle}><img src={googleImg} alt="Google" /></Google>
            <GitHub onClick={loginGitHub}><img src={githubImg} alt="GitHub" /></GitHub>
        </LoginContainer>
    )
}