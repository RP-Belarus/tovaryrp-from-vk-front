import React, { useRef, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { Marker, Popup, useMap } from 'react-leaflet'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import './SellerMarker.css'

const SellerMarker = props => {

    // См. как сделать Popup на Маркере:  https://stackoverflow.com/questions/56633263/open-pop-up-on-click-outside-of-map
    const defaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [13,41],
        popupAnchor: [1,-33]
    })
    L.Marker.prototype.options.icon = defaultIcon

    const map = useMap()
    const markerRef = useRef(null)

    const { seller, openPopup } = props

    useEffect(() => {
        map.flyTo(props.mapCenter)
        if (openPopup) markerRef.current.openPopup()
    }, [openPopup])

    return (
        <Marker
            ref={markerRef}
            position={[seller.lat, seller.lon]}
            eventHandlers={{
                click: () => {
                    props.onSellerClick(seller.vk_owner_id)
                }
            }}
        >
            <Popup>
                <table><tbody>
                <tr>
                    <td>
                        <Image
                            className="float-left popup-image"
                            src={seller.vk_group_info.photo_50}
                            roundedCircle
                        />
                    </td>
                    <td>
                        <span>{seller.name}</span>
                    </td>
                </tr>
                </tbody></table>
            </Popup>
            {/*<Tooltip offset={[0,-28]}><b>{village.village_name}</b></Tooltip>*/}
        </Marker>
    )
}

export default SellerMarker