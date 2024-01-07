import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Button from './Button';
import data from '../data.json';

function ViewPage(props) {
  const navigate = useNavigate();
  const {postId} = useParams();

  const post= data.find((item)=> {
    return item.id == postId;
  });

  const [comment,setComment] = useState("");
  return (
    <Wrapper>
      <Container>
        <Button></Button>
      </Container>
    </Wrapper>
  )
}

export default ViewPage

const Wrapper = styled.div ``;
const Container = styled.div ``;

