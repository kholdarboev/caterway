import React, { useContext } from 'react'
import { Button, Span } from './style'
import CartIcon from '../../Cart/catIcon'
import CartContext from '../../../store/cart-context'

const CartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount

    }, 0);
    return (
        <Button onClick={props.onClick}>
            <Span icon >
                <CartIcon />
            </Span>
            <Span > Your Cart</Span>
            <Span badge>
                {numberOfCartItems}
            </Span>
        </Button>
    )
}

export default CartButton
