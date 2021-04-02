import React, { Component } from 'react'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            sellers: []
        }
    }

    componentDidMount() {
        fetch('https://tovaryrp-from-vk.herokuapp.com/sellers')
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
                <p>Продавцы:</p>
                <ul>
                    {this.state.sellers.map(seller =>
                        <li key={seller._id}>
                            <img src={seller.vk_group_info.photo_50}/>
                            {seller.name}
                        </li>
                    )}
                </ul>
            </>
        )
    }
}

export default MainPage