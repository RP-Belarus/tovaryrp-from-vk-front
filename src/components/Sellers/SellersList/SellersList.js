import React from 'react'

const sellersList = props => (
    <div>
        <p>...или из списка:</p>
        {props.isLoaded
            ? <ul>
                {props.sellers.map(seller =>
                    <li key={seller._id}>
                        <img src={seller.vk_group_info.photo_50}/>
                        {seller.name}
                    </li>
                )}
              </ul>
            : 'загружаем...'
        }
    </div>
)

export default sellersList