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
                    sellers: data
                })
                //console.log(data);
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
                                    isLoaded={this.state.isLoaded}
                                    sellers={this.state.sellers}
                                    mapCenter={this.state.mapCenter}
                                    mapZoom={this.state.mapZoom}
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
