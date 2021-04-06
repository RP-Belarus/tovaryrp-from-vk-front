import React from 'react'

import { Marker } from 'react-leaflet'

const sellerMarker = props => {
    return (
        <Marker
            position={props.position}
        />
    )
}

export default sellerMarker