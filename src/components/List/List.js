import {useState,useEffect}from 'react';
import styled from 'styled-components'
import axios from 'axios'


const List = () => {

        const [apiData,setApiData]= useState({})

        const [historiesData,setHistoriesData] = useState([])

        var dict = {}

        const getHistoiries = async ()=>{
           
            const response = await axios.get('https://apiazure20220422105354.azurewebsites.net/api/histories?datehist=01/05/2022&page=1&itemsperpage=900')
            setHistoriesData(response.data)
        }

        const getCountries = async (lat, long)=>{
           
            const result = await axios.get(`http://api.geonames.org/countryCodeJSON?lat=${lat}&lng=${long}&username=yanbo`)
            return result.data
        }

        const process = () =>{
             historiesData.forEach((item) => {
                const temp = getCountries(item.lat, item.longe)
                const t = temp.countyName
                dict[t] = item.numVol
                })
        }


        useEffect( ()=> {
            getHistoiries()
        },[])

        process()
        console.log(dict)


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