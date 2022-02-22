
import { Google } from './Google'
import googleImg from '../../assets/image/googleImg.svg'
import { LoginContainer } from '../LoginContainer'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../../services/firebase';

export const LoginButton = () => {
    const provider = new  GoogleAuthProvider();
    const register = async () => {
        const user = await signInWithPopup(auth, provider);
        console.log(user)
    }

    return(
        <LoginContainer>
            <Google onClick={register}><img src={googleImg} alt="Google" /></Google>
        </LoginContainer>
    )
}