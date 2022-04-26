import Footer from './components/Footer/Footer';
import Infobox from './components/Infobox/Infobox';
import List from './components/List/List';
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import Fade from 'react-reveal/Fade'

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <Infobox />
      <Fade delay={5000}>
      <Wrapper>
        <List/>      
        <Map/>
      </Wrapper>
      </Fade>
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