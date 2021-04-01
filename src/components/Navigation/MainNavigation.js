import React from 'react'
import { NavLink } from 'react-router-dom'

const mainNavigation  = props => (
    <header>
        <div className="main-navigation__logo">
            <h1>Товары РП</h1>
        </div>
        <div className="main-navigation__item">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/links">Ссылки</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
        </div>
    </header>
)

export default mainNavigation