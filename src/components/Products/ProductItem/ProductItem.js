import React from 'react'
import { Card } from 'react-bootstrap'

const productItem = props => (
    <Card style={{ width: '12rem', height: '16rem' }} className="float-left">
        <Card.Body>
            <Card.Img src={props.product.thumb_photo} />
            <Card.Title>
                {props.product.title}
            </Card.Title>
            <Card.Text>
                Цена: {props.product.price.text}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default productItem