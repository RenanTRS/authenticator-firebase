import styled from 'styled-components'

export const LoginLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 13.5rem;
    height: 13.5rem;

    background-color: ${props => props.color};

    border-radius: 50%;

    cursor: pointer;

    a{
        display: block;
        padding: 3.5rem;
    }
    img{
        pointer-events: none;
    }
`