import React from 'react'

import ProductItem from './ProductItem/ProductItem'
import Spinner from '../../components/Spinner/Spinner'
import {CardDeck, CardGroup, Card} from 'react-bootstrap'

const productsList = props => (
    <div>
        <h4>Список товаров</h4>
        {/*<ProductItem/>*/}
        {props.productsLoaded
            ? (props.products.length === 0
                    ? (<i>Товары отсутствуют</i>
                    ) : (
                        <>
                        {/*<CardGroup>*/}
                        {props.products.map((product, index) =>
                            <ProductItem
                                key={index}
                                product={product}
                            />
                        )}
                        {/*</CardGroup>*/}
                        </>
                    )
            ) : (
                <Spinner/>
            )}
    </div>
)

export default productsList