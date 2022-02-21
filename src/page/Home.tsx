import React from 'react'
import { LoginScreen } from '../components/LoginScreen'
import arrowImg from '../assets/image/arrow.svg'
import GoogleImg from '../assets/image/googleImg.svg'
import { LoginLink } from '../components/LoginLink'


export const Home = () => {
    return(
        <LoginScreen>
            <h1>Faça login</h1>
            <img src={arrowImg} alt="" />

            <LoginLink color="#C90C0C">
                <a href=""><img src={GoogleImg} alt="Google" /></a>
            </LoginLink>
        </LoginScreen>
    )
}