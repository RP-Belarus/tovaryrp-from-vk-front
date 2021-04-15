import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SellersMap from '../components/Sellers/SellersMap/SellersMap'
import SellersList from '../components/Sellers/SellersList/SellersList'
import SellerDescription from '../components/Sellers/SellerDescription/SellerDescription'
import ProductsList from '../components/Products/ProductsList'
import Intro from '../components/Intro/Intro'

const mainPage = props => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <SellersMap
                            mapCenter={props.mapCenter}
                            mapZoom={props.mapZoom}
                            sellers={props.sellers}
                            onSellerClick={props.onSellerClick}
                            selectedSellerId={props.selectedSellerId}
                        />
                        <SellersList
                            sellersLoaded={props.sellersLoaded}
                            sellers={props.sellers}
                            onSellerClick={props.onSellerClick}
                            selectedSellerId={props.selectedSellerId}
                        />
                    </Col>
                    <Col>
                        { !props.selectedSeller
                            ? (
                                <Intro/>
                            ) : (
                                <div>
                                    <SellerDescription
                                        selectedSeller={props.selectedSeller}
                                    />
                                    <ProductsList
                                        productsLoaded={props.productsLoaded}
                                        products={props.products}
                                    />
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default mainPage