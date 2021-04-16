import React from 'react'

import ProductItem from './ProductItem/ProductItem'
import Spinner from '../../components/Spinner/Spinner'
import { CardDeck, CardGroup, Card } from 'react-bootstrap'

const productsList = props => (
    <div>
        <h4>Список товаров</h4>
        {/*<ProductItem/>*/}
        { props.productsLoaded
            ? (
                <>
                <CardGroup>
                    {props.products.map( (product, index) =>
                        <ProductItem
                            title={product.title}
                        />
                    )}
                </CardGroup>
                <ul>
                    { props.products.map( (product, index) =>
                        <li
                            key={index}
                        >
                            {product.title}
                        </li>
                    ) }
                </ul>
                </>
            ) : (
                <Spinner/>
            ) }
    </div>
)

export default productsList