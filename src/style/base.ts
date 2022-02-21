import {createGlobalStyle} from 'styled-components'

export const Base = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        color: #000;
    }
    :root{
        font-size: 62.5%;
    }
`

export const colors = {
    google: {
        primary: "#C90C0C",
        secundary: "#7a0909"
    }
}