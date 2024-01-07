import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import PostList from './PostList';
import Button from './Button';
import data from '../data.json';


function Mainpage(props) {
    const navigate = useNavigate();
  return (
    <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
  )
}

const Wrapper = styled.div ``
const Container = styled.div ``

export default Mainpage
