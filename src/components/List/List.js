import React from 'react';
import styled from 'styled-components'
const List = () => {
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