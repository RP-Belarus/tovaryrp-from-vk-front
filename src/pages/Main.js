import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SellersMap from '../components/Sellers/SellersMap/SellersMap'
import SellersList from '../components/Sellers/SellersList/SellersList'
import ProductsList from '../components/Products/ProductsList'

const mainPage = props => {

    return (
        <>
            <h1>Главная страница</h1>
            <Container>
                <Row>
                    <Col>
                        <SellersMap
                            mapCenter={props.mapCenter}
                            mapZoom={props.mapZoom}
                        />
                        <SellersList
                            isLoaded={props.isLoaded}
                            sellers={props.sellers}
                        />
                    </Col>
                    <Col>
                        <ProductsList/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default mainPage