import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
 
const markerIcon = new L.Icon({
    iconUrl: require("../../img/plane.png"),
    iconSize: [30, 30],});

const Map = () => {
    const [flightData,setFlightData] = useState([])

  useEffect(()=>{
      axios.get('https://localhost:44394/api/histories')
        .then(response =>{
          setFlightData(response.data)
        console.log(response.data)
      })

  },[])

    return (
        <Div>
        <MapContainer center={[51.505, -0.09]} zoom={5} minZoom={3} maxZoom={20} maxBounds={[
        //south west
        [85, -170],
        //north east
        [-85, 200]
        ]} style={{ width: '50vw', height: '70vh'}}
        >
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=GaGGXp9Fk2x7gfEG8lWP"
                    
                    />
                {flightData.map( flight => {
                    return(<Marker 
                        position={[flight.lat, flight.longe]}
                            icon={markerIcon}
                            >
                            <Popup>
                              A pretty CSS3 popup
                            </Popup>
                        </Marker>)
                    

                })
                
                }
        </MapContainer>

      </Div>
    );
};

export default Map;

const Div = styled.div`

background-color: #ffffff;

`

/**(68.508119, -141.636730)
 */