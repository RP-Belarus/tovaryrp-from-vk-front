import React from 'react'
import { Card } from 'react-bootstrap'

const productItem = props => (
    <Card style={{ width: '12rem', height: '18rem' }} className="float-left">
        <Card.Body style={{ overflow: 'auto' }}>
            <Card.Img src={props.product.thumb_photo} />
            <Card.Text>
                {props.product.title}
            </Card.Text>
        </Card.Body>
        <Card.Body>
            Цена: {props.product.price.text}<br/>
            <a href={'http://vk.com/product' + props.product.owner_id + '_' + props.product.id} target="_blank">
                Подробнее
            </a>
        </Card.Body>
    </Card>
)

export default productItem