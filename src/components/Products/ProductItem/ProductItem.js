import React from 'react'
import { Card } from 'react-bootstrap'

const productItem = props => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Text>
                qqq
            </Card.Text>
        </Card.Body>
    </Card>
)

export default productItem