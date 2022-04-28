import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
 
const markerIcon = new L.Icon({
    iconUrl: require("../../img/markerplane.png"),
    iconSize: [20, 20],});


const Map = () => {

    const [flightData,setFlightData] = useState([])
    const [volData,setVolData] = useState([])
    const [data, setData] = useState([])

    const getFlights = ()=>{
      axios.get('https://apiazure20220422105354.azurewebsites.net/api/histories')
        .then(response =>{
          setFlightData(response.data)
      })
    }

    const getVols = ()=>{
      axios.get('https://apiazure20220422105354.azurewebsites.net/api/vols')
        .then(response =>{
          setVolData(response.data)
      })
    }

    const fetchFinalData = () =>{
      const result =
      flightData.map((x,index) =>{
        var item = {}
        item.id = x.id
        item.numVol = x.numVol
        item.dateHist = x.dateHist
        item.lat = x.lat
        item.longe = x.longe
        item.speed = x.speed
        item.code_comp = volData[index].code_comp
        item.numAvion = volData[index].numAvion
        item.dep = volData[index].dep
        item.arr = volData[index].arr
        return item
      })
      setData(result)
    }

 
  useEffect(()=>{
    getFlights()
    getVols()
    fetchFinalData()
  },[])

  console.log(data)

    return (
        <Div>
        <MapContainer center={[51.505, -0.09]} zoom={5} minZoom={3} maxZoom={20} maxBounds={[
        //south west
        [85, -170],
        //north east
        [-85, 200]
        ]} style={{ width: '80vw', height: '90vh'}}
        >
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=GaGGXp9Fk2x7gfEG8lWP"
                    
                    />
                {data.map( flight => {
                    return(<Marker 
                        position={[flight.lat, flight.longe]}
                            icon={markerIcon}
                        >
                                <Popup>
                                  N° Vol : {flight.numVol}
                                  <br/>
                                  Airline : {flight.numAvion}
                                  <br/>
                                  Model : {flight.code_comp}
                                  <br/>
                                  Depart : {flight.dep}
                                  <br/>
                                  Arival : {flight.arr}
                                  <br/>
                                  Speed : {flight.speed} Km/h
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

display: flex;
align-items: center;
justify-content: center;

`