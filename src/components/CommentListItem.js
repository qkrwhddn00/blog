import React from 'react'
import styled from 'styled-components';
function CommentListItem(props) {
    const {comment} = props ;
  return (
    <div>
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
      
    </div>
  )
}

const Wrapper = styled.div``
const ContentText = styled.div``

export default CommentListItem
