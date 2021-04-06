import React from 'react'

import { Marker } from 'react-leaflet'

const sellerMarker = props => {
    //let position = [props.lat, props.lon]
    console.log(props.index)
    return (
        <Marker
            key={props.index}
            position={[props.lat, props.lon]}
        />
    )
}

export default sellerMarker