import Footer from './components/Footer/Footer';
import Infobox from './components/Infobox/Infobox';
import List from './components/List/List';
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Infobox />
      <Wrapper>
        <List/>      
        <Map/>
      </Wrapper>
      <Footer/>
      

    </div>
  );
}

export default App;

const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap: wrap;
flex-direction:row;
align-items: center;
justify-content: space-evenly;
background-color: red;
`