import React, { useRef, useState } from 'react'
import Inputs from '../../../UI/Input'
import { Button, Form } from './style'

const MealItemForm = props => {

    const [valid, setValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enterAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enterAmountNumber > 5) {
            setValid(false)
            return;

        }
        props.onAddToCart(enterAmountNumber)
    }
    return (
        <Form onSubmit={submitHandler}>
            <Inputs
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <Button>+ Add</Button>
            {!valid && <p>Please enter a valid amount (1-5)</p>}
        </Form>
    )
}

export default MealItemForm
