import React from 'react'

const SellerDescription = props => {
    if (!props.selectedSeller) {
        return (
            <div>
                <p>Ожидаем данные продавца...</p>
            </div>
        )
    }
    return (
        <div>
            <h3>{props.selectedSeller.vk_group_info.vk_name}</h3>
            <img src={props.selectedSeller.vk_group_info.photo_200} alt=""/>
            <p>{props.selectedSeller.vk_group_info.description}</p>
        </div>
    )
}

export default SellerDescription