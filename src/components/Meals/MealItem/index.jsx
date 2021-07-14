import React from 'react'
import { Container, List, Title } from './style'

const MealItem = ({ value }) => {
    const price = `$${value.price.toFixed(2)}`;
    return (
        <List>
            <Container>
                <Title>{value.name}</Title>
                <Container>{value.description}</Container>
                <Container price>{price}</Container>
            </Container>
            <Container>

            </Container>
        </List>
    )
}

export default MealItem
