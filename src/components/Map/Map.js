import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
 
const markerIcon = new L.Icon({
    iconUrl: require("../../img/markerplane.png"),
    iconSize: [30, 30],});


const Map = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("01/05/2022")//date par défaut qui est la 1ère date remplissage de la base de données
    const [temp,setTemp] = useState("") 
    

    const fetchFinalData = (flightData , volData) =>{
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

    const testFonction = async () =>{
      const reslt1 = await  axios.get(`https://apiazure20220422105354.azurewebsites.net/api/histories?datehist=${search}&page=1&itemsperpage=900`)
      const reslt2 = await axios.get(`https://apiazure20220422105354.azurewebsites.net/api/vols?datehist=${search}&page=1&itemsperpage=900`)
      fetchFinalData(reslt1.data ,reslt2.data)
    }
 
  useEffect(()=>{
    testFonction()
  },[search])
    
 
    return (
        <Div>
        <MapContainer center={[51.505, -0.09]} zoom={5} minZoom={3} maxZoom={20} maxBounds={[
        //south west
        [85, -170],
        //north east
        [-85, 200]
        ]} style={{ width: '100vw', height: '90vh'}}
        >    
              <SearchDiv>
                <SearchInput 
                    placeholder='dd/mm/yyyy'
                    type="text"
                    onChange={event =>{
                      setTemp(event.target.value)
                    }}
                ></SearchInput>
                <SearchButton
                  onClick={()=>setSearch(temp)}
                >Search</SearchButton>
                <p>{data.length} vols trouvés</p>
              </SearchDiv>

                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=GaGGXp9Fk2x7gfEG8lWP"
                    
                    />
                {data.map( flight => {
                    return(<Marker 
                    key={flight.id}
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
justify-content:center;
`


const SearchDiv = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   gap:10px;
   position:absolute;
   z-index:1000;
   top:0;
   right:0;
   margin:10px;
`
const SearchInput = styled.input`
  border-radius:5px;
  border:none;
  height:20px;
  background:#101522;
  color:#fff;
  width:130px;
  padding: 0px 0px 0px 10px;
  font-size: 13px;
`
const SearchButton = styled.button`
border-radius: 4px;
  background: #101522;
  white-space: nowrap;
  padding: 5px 14px;
  color: #fff;
  font-size: 10px;
  outline: none;
  border: none;
`