
import { Google } from './Google'
import googleImg from '../../assets/image/googleImg.svg'
import { LoginContainer } from '../LoginContainer'

export const LoginButton = () => {
    const handleClick = () => {
        console.log('click')
    }
    return(
        <LoginContainer>
            <Google onClick={handleClick}><img src={googleImg} alt="Google" /></Google>
        </LoginContainer>
    )
}