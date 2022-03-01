
import { LoginScreen } from '../components/LoginScreen'
import { LoginButton } from '../components/LoginButton'


export const Home = () => {

    return(
        <LoginScreen>
            <h1>Faça login</h1>
            <LoginButton />
        </LoginScreen>
    )
}