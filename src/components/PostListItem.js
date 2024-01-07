import React from 'react'
import styled from 'styled-components';

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
        <TextTitle>{post.title}</TextTitle>
        </Wrapper>
    );
  
}
const TextTitle = styled.div `
`
const Wrapper = styled.div `
`
export default PostListItem
