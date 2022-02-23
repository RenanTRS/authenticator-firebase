import styled from 'styled-components'

import {Button} from './Button'

export const GitHub = styled(Button)`
    background-color: ${props => props.theme.github.colors.primary};

    &:active{
        background-color: ${props => props.theme.github.colors.secundary};
    }
`