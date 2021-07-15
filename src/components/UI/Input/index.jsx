import React from 'react'
import { Container, Input, Label } from './style'

const Inputs = React.forwardRef((props, ref) => {
    return (
        <Container>
            <Label htmlFor={props.input.id}>{props.label}</Label>
            <Input {...props.input} ref={ref} />
        </Container>
    )
})

export default Inputs
