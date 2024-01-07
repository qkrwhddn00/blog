import React from 'react'
import CommentListItem from './CommentListItem';
import styled from 'styled-components';
function CommentList(props) {
    const { comments } = props;
  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div `
`
export default CommentList
