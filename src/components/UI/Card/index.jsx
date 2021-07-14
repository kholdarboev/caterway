import React from 'react'
import { Container } from './style'
const Card = props => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Card
