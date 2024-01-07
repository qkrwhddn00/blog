import React from 'react';
import styled from 'styled-components';


function Button(props) {
    const {title, onClick} = props;
  return (
    <ButtonStyle onClick={onClick}>{title || "button"}</ButtonStyle>
  )
}


const ButtonStyle = styled.button `
width: 100px;
font-size : 20px;
border-radius : 10px;
`
export default Button
