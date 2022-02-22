
import { Google } from './Google'
import googleImg from '../../assets/image/googleImg.svg'
import { LoginContainer } from '../LoginContainer'
import {useAuth} from '../../hooks/useAuth'

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
        </LoginContainer>
    )
}