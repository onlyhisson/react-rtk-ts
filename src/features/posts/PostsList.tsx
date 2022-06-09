import React from "react";
import { useAppSelector } from "app/hooks";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectOrderedPosts } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import routes from "routes";
import { IPost } from "./interfaces/post.interface";
import { Container } from "styles/global-styeld";
import { ReactionButtons } from "./ReactionButtons";

export const PostsList = () => {
  const posts = useAppSelector(selectOrderedPosts);

  const renderedPosts = posts.map((post: IPost) => (
    <article className="post-excerpt" key={post.id}>
      <PostTitle>{post.title}</PostTitle>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <div>
        <Link to={`${routes.postDetail}/${post.id}`}>상세보기</Link>
      </div>
      <div>
        <Link to={`${routes.editPost}/${post.id}`}>수정</Link>
      </div>
    </article>
  ));

  return (
    <section>
      <Container>
        <Title>Posts</Title>
        {renderedPosts}
      </Container>
    </section>
  );
};

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
`;

const PostTitle = styled.h3``;
