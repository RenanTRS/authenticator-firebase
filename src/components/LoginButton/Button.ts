import styled from 'styled-components'
const tam = '10rem'

export const Button = styled.button`
    width: 13.5rem;
    height: 13.5rem;

    border: none;
    border-radius: 50%;

    cursor: pointer;

    img{
        pointer-events: none;
    }
    @media (max-height:290px){
        width: ${tam};
        height: ${tam};
    }
`