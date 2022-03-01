
import { LoginScreen } from '../components/LoginScreen'
import arrowImg from '../assets/image/arrow.svg'
import { LoginButton } from '../components/LoginButton'


export const Home = () => {

    return(
        <LoginScreen>
            <h1>Faça login</h1>
            <img src={arrowImg} alt="" />
            <LoginButton />
        </LoginScreen>
    )
}