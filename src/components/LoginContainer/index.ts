import styled, {keyframes} from 'styled-components'

const keyframe = keyframes`
    from{
        opacity: 0;
        transform: translateY(5rem);
    }
    to{
        opacity: 1;
        transform: translateY(0));
    }
`

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    wrap: wrap;
    gap: 2rem;

    animation-name: ${keyframe};
    animation-duration: 1000ms;
    animation-fill-mode: backwards;
`