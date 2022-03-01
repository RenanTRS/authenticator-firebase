import styled from 'styled-components'

export const LoginScreen = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 7.6rem;

    height: clamp(27rem, 45vh, 57rem);
    
    h1{
        font-size: clamp(4rem, 11vw, 16.8rem);
        text-align: center;
    }
    @media (max-height: 300px){
        gap: clamp(2rem, 3vh, 7.6rem);
        height: clamp(18rem,5vh,30rem)
    }
`