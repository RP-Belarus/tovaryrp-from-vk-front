import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'react-leaflet-markercluster/dist/styles.min.css'


import SellerMarker from './SellerMarker/SellerMarker'

const sellersMap = props => {
    // ------  Attribution and Url for OpenStreetMap ----------
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // ------ Параметры карты Leaflet
    const mapCenter = props.mapCenter;
    const mapZoom = props.mapZoom;

    return (
        <div>
            <p>Выберите продавца на карте:</p>
            <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{width: '400px', height: '200px'}}
            >
                <TileLayer
                    url={url}
                    attribution={attribution}
                />
                {/*<MarkerClusterGroup>*/}
                    {
                        props.sellers.map((seller, index) =>
                            <SellerMarker
                                key={index}
                                seller={seller}
                                mapCenter={mapCenter}
                                openPopup={props.selectedSellerId === seller.vk_owner_id}
                                onSellerClick={props.onSellerClick}
                            />
                        )
                    }
                {/*</MarkerClusterGroup>*/}
            </MapContainer>
        </div>
    )
}

export default sellersMap