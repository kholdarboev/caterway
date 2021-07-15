import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import { Actions, Button, CartItemDetails, Span, Total } from './style'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cardItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cardItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    const cartItems = <CartItemDetails>
        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cardItemRemoveHandler.bind(null, item.id)}
                onAdd={cardItemAddHandler.bind(null, item)}
            />
        ))}
    </CartItemDetails>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <Total>
                <Span>Total Amount</Span>
                <Span>{totalAmount}</Span>
            </Total>
            <Actions>
                <Button close onClick={props.onClose}>Close</Button>
                {hasItems && <Button>Order</Button>}
            </Actions>
        </Modal>
    )
}

export default Cart
