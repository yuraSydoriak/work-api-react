import React from "react";
import Post from "./Post";
import styled from "styled-components";

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Posts = ({ hits }) => {
  return (
    <PostsWrapper>
      {hits.map(
        ({
          author,
          created_at,
          num_comments,
          objectID,
          title,
          points,
          url
        }) => (
          <Post
            key={objectID}
            author={author}
            created_at={created_at}
            num_comments={num_comments}
            title={title}
            points={points}
            url={url}
          />
        )
      )}
    </PostsWrapper>
  );
};

export default Posts;
