import React, { Fragment } from 'react'
import Button from '../HeaderCartButton'
import { Heading, Title, ImgWrapper, Img } from './style'

const Header = (props) => {
    return (
        <Fragment>
            <Heading>
                <Title>CaterWay</Title>
                <Button />
            </Heading>
            <ImgWrapper>
                <Img src='https://www.betholearycatering.com/wp-content/uploads/2019/03/iStock-899981010-e1553637169940-1.jpg' alt='cater-image' />
            </ImgWrapper>
        </Fragment>
    )
}

export default Header
