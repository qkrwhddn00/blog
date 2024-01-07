import React from 'react'
import PostListItem from './PostListItem';
import styled from 'styled-components';

function PostList(props) {
    const {posts, onClickItem} = props;
  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div `
`

export default PostList
