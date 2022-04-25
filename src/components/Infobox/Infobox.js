import React from 'react';
import styled from 'styled-components'
import plane from '../../img/plane.png'

const Infobox = (
  ) => {
  
    return (
      <Div>
        <Container>
          <InfoRaw>
            <InfoColumn>
          
          <TextWrapper>
              <Title>
              Aviation Spot
              </Title>
              <SubTitle>
              Lead Generation Specialist for Online Businesses
              </SubTitle>
              <Text>Welcome to aviations spot you will find within our company all the detailed information about the aviation traffic</Text>
          </TextWrapper>
          </InfoColumn>
          <InfoColumn>
          <ImgWrapper>
            <Img src={plane} alt='alt'></Img>
          </ImgWrapper>
          </InfoColumn>
          </InfoRaw>
        </Container>
      </Div>
    );
};

export default Infobox;

const Div = styled.div`
color: #fff;
  padding: 160px 0;
  background:#101522;
`

const Container = styled.div`
z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`
const InfoRaw = styled.div`display: flex;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`
const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
  `
const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`
const Title = styled.h5`
font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

const SubTitle = styled.h1`
margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  `

const Text = styled.p`
max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;`

const ImgWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
  `

const Img = styled.img`
padding-right: 0;
  border: 0;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
