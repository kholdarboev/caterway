import React from 'react'
import { Button, Span } from './style'
import CartIcon from '../../Cart/catIcon'

const CartButton = props => {
    return (
        <Button>
            <Span icon >
                <CartIcon />
            </Span>
            <Span > Your Cart</Span>
            <Span badge>
                3
            </Span>
        </Button>
    )
}

export default CartButton
