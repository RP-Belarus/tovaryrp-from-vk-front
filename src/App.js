import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap. См.: https://react-bootstrap.github.io/getting-started/introduction/

import MainPage from './pages/Main'
import LinksPage from './pages/Links'
import ContactsPage from "./pages/Contacts";
import MainNavigation from './components/Navigation/MainNavigation'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        // this.SELLERS_API_URL = 'https://tovaryrp-from-vk.herokuapp.com/sellers'
        this.SELLERS_API_URL = 'http://localhost:3001/sellers'
        this.state = {
            sellersLoaded: false,
            sellers: [],
            productsLoaded: false,
            products: [],
            //selectedSellerId: '-70820274',
            selectedSellerId: '',
            selectedSeller: null,
            //mapCenter: [54.81975,28.15401],
            mapCenter: [54.1,27.9],
            mapZoom: 5
        }
    }

    componentDidMount() {
        fetch(this.SELLERS_API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    sellersLoaded: true,
                    sellers: data,
                    selectedSeller: data.find(seller => seller.vk_owner_id === this.state.selectedSellerId)
                })
            })
    }

    handleSellerClick = (seller_id) => {
        const selectedSeller = this.state.sellers.find(seller => seller.vk_owner_id === seller_id)
        const { lat, lon } = selectedSeller
        const coordinates = [lat, lon]

        // Обнуляем список продуктов и флаг, что продукты загружены
        this.setState({
            products: [],
            productsLoaded: false,
            selectedSellerId: seller_id,
            selectedSeller: selectedSeller,
            mapCenter: coordinates
        })

        // Получаем товары продавца
        fetch(this.SELLERS_API_URL + '/' + seller_id.slice(1))   // slice(1) - удаляем "-" перед seller_id
            .then(response => response.json())
            .then(data => {
                console.log(data.tovary);
                console.log(data.tovary.response !== undefined ? 'Есть товары' : 'Нет товаров');
                if (data.tovary.response !== undefined) {
                    this.setState({
                        products: data.tovary.response.items,
                        productsLoaded: true
                    })
                } else {
                    this.setState({
                        products: [],
                        productsLoaded: true
                    })
                }
            })
    }

    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <MainNavigation/>
                    <main>
                        <Switch>
                            <Redirect from="/" to="/main" exact />
                            <Route path="/main">
                                <MainPage
                                    sellersLoaded={this.state.sellersLoaded}
                                    sellers={this.state.sellers}
                                    selectedSeller={this.state.selectedSeller}
                                    selectedSellerId={this.state.selectedSellerId}
                                    productsLoaded={this.state.productsLoaded}
                                    products={this.state.products}
                                    mapCenter={this.state.mapCenter}
                                    mapZoom={this.state.mapZoom}
                                    onSellerClick={this.handleSellerClick}
                                />
                            </Route>
                            <Route path="/links" component={LinksPage} />
                            <Route path="/contacts" component={ContactsPage} />
                        </Switch>
                    </main>
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default App
