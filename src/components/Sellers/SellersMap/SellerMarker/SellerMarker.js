import React from 'react'

import { Marker, Popup } from 'react-leaflet'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const SellerMarker = props => {

    // См. как сделать Popup на Маркере:  https://stackoverflow.com/questions/56633263/open-pop-up-on-click-outside-of-map
    const defaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [13,41],
        popupAnchor: [1,-33]
    })
    L.Marker.prototype.options.icon = defaultIcon

    const { seller } = props

    return (
        <Marker
            position={[seller.lat, seller.lon]}
        >
            <Popup><b>{seller.name}</b></Popup>
            {/*<Tooltip offset={[0,-28]}><b>{village.village_name}</b></Tooltip>*/}
        </Marker>
    )
}

export default SellerMarker