import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SellersMap from '../components/Sellers/SellersMap/SellersMap'
import SellersList from '../components/Sellers/SellersList/SellersList'
import SellerDescription from '../components/Sellers/SellerDescription/SellerDescription'
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
                            sellers={props.sellers}
                        />
                        <SellersList
                            isLoaded={props.isLoaded}
                            sellers={props.sellers}
                            onSellerClick={props.onSellerClick}
                        />
                    </Col>
                    <Col>
                        <SellerDescription
                            selectedSeller={props.selectedSeller}
                        />
                        <ProductsList/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default mainPage