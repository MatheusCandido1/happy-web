import Leaftlet from 'leaflet';

import MapMarker from '../assets/images/map-marker.svg';


const mapIcon = Leaftlet.icon({
    iconUrl: MapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

export default mapIcon