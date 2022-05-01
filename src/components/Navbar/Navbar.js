import React from 'react';
import styled from 'styled-components'
import {FaAvianex} from 'react-icons/fa'
import { Container } from '../../globalStyles';
import { useState,useEffect } from 'react';

const Navbar = () => {

  const [search,setSearch] = useState("")

    
    return (
        <NavDiv>
            <NavbarContainer>
            <LogoDiv><FaAvianex size='40px' color ='#0975bb' />AviationSpot</LogoDiv>
            </NavbarContainer>
        </NavDiv>
    );
};

export default Navbar;

const NavDiv = styled.div`
background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;
const LogoDiv = styled.div`
    color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  `

