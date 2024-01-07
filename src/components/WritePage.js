import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from './TextInput';
import Button from './Button';
import styled from 'styled-components';

function WritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <Button></Button>
      </Container>
    </Wrapper>
    
  )
}

export default WritePage
const Wrapper = styled.div `
 padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`;
const Container = styled.div `
width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }`;
