import React from 'react'

const sellersList = props => (
    <div>
        <p>Список продавцов:</p>
        <ul>
            {props.sellers.map(seller =>
                <li key={seller._id}>
                    <img src={seller.vk_group_info.photo_50}/>
                    {seller.name}
                </li>
            )}
        </ul>
    </div>
)

export default sellersList