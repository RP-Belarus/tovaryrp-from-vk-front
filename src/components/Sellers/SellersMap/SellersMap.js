import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const sellersMap = props => {

    // ------  Attribution and Url for OpenStreetMap ----------
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // ------ Параметры карты Leaflet
    const mapCenter = props.mapCenter;
    const mapZoom = props.mapZoom;

    return (
        <div>
            <p>Карта продавцов</p>
            <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{width: '400px', height: '200px'}}
            >
                <TileLayer
                    url={url}
                    attribution={attribution}
                />
            </MapContainer>
        </div>
    )
}

export default sellersMap