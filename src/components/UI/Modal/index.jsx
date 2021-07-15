import React, { Fragment } from 'react'
import { Backdrops, Content, Modals } from './style'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <Backdrops onClick={props.onClose} />
}
const ModalOverlay = props => {
    return (
        <Modals>
            <Content>{props.children}</Content>
        </Modals>
    )
}

const Portal = document.getElementById('overlays')
const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, Portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, Portal)}
        </Fragment>
    )
}

export default Modal
