import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import MapMarker from '../assets/images/map-marker.svg';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/screens/orphanages-map.css';

const mapIcon = Leaflet.icon ({
  iconUrl: MapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-19.8402653,-43.953214]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          icon={mapIcon}
          position={[-19.8402653,-43.953214]}
        >
        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
          Lar das meninas
          <Link to="orphanages/1">
            <FiArrowRight size={20} color="#FFF" />
          </Link>
        </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
