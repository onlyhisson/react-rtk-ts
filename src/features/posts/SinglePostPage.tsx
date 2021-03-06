import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "hooks";
import { selectPostOne } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { IPost } from "./interfaces/post.interface";

export const SinglePostPage = (/* {match} 대신 useParams */) => {
  const params = useParams();
  const { id } = params;

  const post: IPost | undefined = useAppSelector(selectPostOne(id));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <PostAuthor userid={post.user} />
        <TimeAgo userid={post.date} />
      </article>
    </section>
  );
};
