import React from 'react'
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap'

import './SellersList.css'
import Spinner from '../../../components/Spinner/Spinner'

const sellersList = props => (
    <div>
        <p>...или из списка:</p>
        { props.sellersLoaded
            ? (
                <ListGroup variant="flush">
                    {props.sellers.map(seller =>
                        <ListGroupItem
                            key={seller._id}
                            onClick={() => {
                                props.onSellerClick(seller.vk_owner_id);
                            }}
                            action
                        >
                            <Image
                                src={seller.vk_group_info.photo_50}
                                roundedCircle
                                className="float-left list-image"
                            />
                            <span
                                className={(seller.vk_owner_id === props.selectedSellerId) ? "seller-active" : ""}
                            >
                                {seller.name}
                            </span>
                        </ListGroupItem>
                    )}
                </ListGroup>
            ) : (
                <Spinner/>
            )
        }
    </div>
)

export default sellersList