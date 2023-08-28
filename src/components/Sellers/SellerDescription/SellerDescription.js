import React from 'react'
import { Image, Media } from 'react-bootstrap'

import './SellerDescription.css'

const SellerDescription = props => {
    if (!props.selectedSeller) {
        return (
            <div>
                <p>Ожидаем данные продавца...</p>
            </div>
        )
    }
    return (
        <div className="description-card">
            <h3>{props.selectedSeller.vk_group_info.vk_name}</h3>
            <Image
                width={150}
                height={150}
                className="description-image"
                src={props.selectedSeller.vk_group_info.photo_200}
                rounded
            />
            <div>{props.selectedSeller.vk_group_info.description}</div>
            <p><a href={'http://vk.com/club' + props.selectedSellerId.slice(1)}
                  target="_blank" rel="noopener noreferrer"
            >Перейти на страницу продавца</a></p>
            <br clear="all"/>
        </div>
    )
}

export default SellerDescription