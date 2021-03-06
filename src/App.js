import Footer from './components/Footer/Footer';
import Infobox from './components/Infobox/Infobox';
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
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;

