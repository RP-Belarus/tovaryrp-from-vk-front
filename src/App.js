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
        this.SELLERS_API_URL = 'https://tovaryrp-from-vk.herokuapp.com/sellers'
        this.state = {
            isLoaded: false,
            sellers: [],
            //selectedSellerId: '-70820274',
            selectedSellerId: null,
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
                    isLoaded: true,
                    sellers: data,
                    selectedSeller: data.find(seller => seller.vk_owner_id === this.state.selectedSellerId)
                })
                //console.log(data);
                //console.log('Selected Seller: ', this.state.selectedSeller)
            })
    }

    handleSellerClick = (seller_id) => {
        this.setState({
            selectedSellerId: seller_id,
            selectedSeller: this.state.sellers.find(seller => seller_id === seller.vk_owner_id)
        })
        //console.log('Clicked on seller: ' + this.state.selectedSellerId)
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
                                    isLoaded={this.state.isLoaded}
                                    sellers={this.state.sellers}
                                    selectedSeller={this.state.selectedSeller}
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
