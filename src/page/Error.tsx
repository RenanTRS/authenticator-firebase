import { ErrorPage } from "../components/LoginButton/ErrorPage"
import { LoginScreen } from "../components/LoginScreen"

export const Error = () => {
    return (
        <LoginScreen>
            <ErrorPage>
                <h1>404</h1>
            </ErrorPage>
        </LoginScreen>
    )
}