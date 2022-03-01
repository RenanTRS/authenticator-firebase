
import { Google } from './Google'
import { GitHub } from './GitHub'
import googleImg from '../../assets/image/googleImg.svg'
import githubImg from '../../assets/image/githubImg.svg'
import { LoginContainer } from '../LoginContainer'
import {useAuth} from '../../hooks/useAuth'
import {useNavigate} from 'react-router-dom'

export const LoginButton = () => {
    const {user, isLogged, signInWithGoogle, signInWithGitHub} = useAuth();
    const navigate = useNavigate()
    
    const loginGoogle = async () => {
        try{
            await signInWithGoogle()
            navigate('/room')
        } catch(err){
            console.log(err)
        }
        /*if(user && isLogged){ //Check login
            navigate('/room')
        } else {
            try{
                await signInWithGoogle()
                navigate('/room')
            } catch(err){
                console.log(err)
            }
        }*/
    }

    const loginGitHub = async () => {
        if(user && isLogged){ //Check login
            navigate('/room')
        } else {
            try{
                await signInWithGitHub()
                navigate('/room')
            }catch(err){
                console.log(err)
            }
        }
    }


    return(
        <LoginContainer>
            <Google onClick={loginGoogle}><img src={googleImg} alt="Google" /></Google>
            <GitHub onClick={loginGitHub}><img src={githubImg} alt="GitHub" /></GitHub>
        </LoginContainer>
    )
}