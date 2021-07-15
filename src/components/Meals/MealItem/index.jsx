import React, { useContext } from 'react'
import MealItemForm from './MealItemForm';
import { Container, List, Title } from './style'
import CartContext from '../../../store/cart-context'
const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <List>
            <Container>
                <Title>{props.name}</Title>
                <Container>{props.description}</Container>
                <Container price>{price}</Container>
            </Container>
            <Container>
                <MealItemForm onAddToCart={addToCartHandler} />
            </Container>
        </List>
    )
}

export default MealItem
