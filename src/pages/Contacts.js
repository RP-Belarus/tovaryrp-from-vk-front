import React, { Component } from 'react'

class ContactsPage extends Component {
    render() {
        return (
            <>
                <h1>Контакты</h1>
                <p>
                    Информация о товарах автоматически подгружается из "Товаров" социальной сети "Вконтакте".
                    <br/>Чтобы добавить свои товары, вам необходимо сделать это на странице своего сообщества Вконтакте.
                    <br/>Как это сделать, см.:
                </p>
                <ul>
                    <li><a
                        href="https://vk.com/faq18547" rel="noopener noreferrer"
                        target="_blank">Товары в сообществе. Как настроить и пользоваться?</a></li>
                    <li><a
                        href="https://vk.com/faq19047" rel="noopener noreferrer"
                        target="_blank">Как создать товар в сообществе?</a></li>
                </ul>
                <p>
                    Список продавцов пополняется вручную администратором сайта.
                    Чтобы добавить свои товары, свяжитесь с <a
                    href="https://vk.com/dimitrius_brest" target="_blank" rel="noopener noreferrer">Дмитрием Деревицким</a>.
                    <br/>В настоящее время мы добавляем продавцов только из Беларуси. Возможно, в перспективе расширим географию.
                </p>
                <p>
                    Также рекомендуем посетить наше сообщество Вконтакте: <a
                        href="https://vk.com/tovary_rp_bel" rel="noopener noreferrer"
                        target="_blank">"Товары Родовых поместий и ЗКР - Беларусь"</a>
                </p>
            </>
        )
    }
}

export default ContactsPage