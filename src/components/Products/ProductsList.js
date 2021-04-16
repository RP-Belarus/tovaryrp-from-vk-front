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
                {/*<CardGroup>*/}
                    {props.products.map( (product, index) =>
                        <ProductItem
                            product={product}
                        />
                    )}
                {/*</CardGroup>*/}
                </>
            ) : (
                <Spinner/>
            ) }
    </div>
)

export default productsList