import React, { Component } from 'react'

import SellersMap from '../components/Sellers/SellersMap/SellersMap'
import SellersList from '../components/Sellers/SellersList/SellersList'
import ProductsList from '../components/Products/ProductsList'

class MainPage extends Component {

    constructor(props) {
        super(props)
        this.SELLERS_API_URL = 'https://tovaryrp-from-vk.herokuapp.com/sellers'
        this.state = {
            isLoaded: false,
            sellers: [],
            //mapCenter: [54.81975,28.15401],
            mapCenter: [53.8,28.15401],
            mapZoom: 5
        }
    }

    componentDidMount() {
        fetch(this.SELLERS_API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    sellers: data
                })
                console.log(data);
            })
    }

    render() {
        return (
            <>
                <h1>Главная страница</h1>
                <SellersMap
                    mapCenter={this.state.mapCenter}
                    mapZoom={this.state.mapZoom}
                />
                <SellersList
                    sellers={this.state.sellers}
                />
                <hr/>
                <ProductsList/>
            </>
        )
    }
}

export default MainPage