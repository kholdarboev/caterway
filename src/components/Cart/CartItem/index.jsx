import { Button, List, Span, Title, Wrapper } from './style';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <List>
            <Wrapper>
                <Title>{props.name}</Title>
                <Wrapper.Summary>
                    <Span.Price >{price}</Span.Price>
                    <Span.Amount>x {props.amount}</Span.Amount>
                </Wrapper.Summary>
            </Wrapper>
            <Wrapper.Actions>
                <Button onClick={props.onRemove}>−</Button>
                <Button onClick={props.onAdd}>+</Button>
            </Wrapper.Actions>
        </List> 
    );
};

export default CartItem;
