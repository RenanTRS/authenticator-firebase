import styled from 'styled-components'
import {Button} from './Button'

export const Google = styled(Button)`
    background-color: ${props => props.theme.google.colors.primary};

    &:active{
        background-color: ${props => props.theme.google.colors.secundary};
    }
`   