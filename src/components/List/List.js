import {useState,useEffect}from 'react';
import styled from 'styled-components'
import axios from 'axios'


const List = () => {
        const lat = '44.7'
        const long='9.67'

        const [apiData,setApiData]= useState({})

        const [historiesData,setHistoriesData] = useState([])

        const getHistoiries = ()=>{
            axios.get('https://apiazure20220422105354.azurewebsites.net/api/histories')
            .then(response =>{
                setHistoriesData(response.data)
            })

        }
        const modifiedApi = ()=>{
            axios.get(
                `http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=yanbo`
            ).then(response =>{
                setApiData(response.data)
            })
        }


        useEffect( ()=> {

            getHistoiries()
            modifiedApi()
        },[])




    return (
        <Div>
           <h1>List</h1>
                <ul>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                    <li>pays 1</li>
                </ul>
        </Div>
    );
};

export default List;


const Div = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 468px;
height: 460px;


border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 4px 2px rgba(235, 219, 219, 0.61);
border-radius: 34px;
`