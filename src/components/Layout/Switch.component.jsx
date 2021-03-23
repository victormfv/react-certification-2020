import React from 'react';
import styled from 'styled-components';

function SwitchButton(props) {
    const Switch = styled.label `
    position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input { 
  opacity: 0;
  width: 0;
  height: 0;
  
}
`;

    const Slider = styled.span `

    position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #11344A;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  margin-right:10px;
    &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
    }
    

`;
    return ( 
        <div>
            <Switch>
                <input type="checkbox" checked />
                <Slider />
            </Switch> { props.text } 
        </div>
    )
};

export default SwitchButton;