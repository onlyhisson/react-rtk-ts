import React, { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated, selectPostOne } from "./postsSlice";
import routes from "routes";

export const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const params = useParams();
  const { id } = params;

  const post = useSelector(selectPostOne(id));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id, title, content }));
      navigate(`${routes.postDetail}/${id}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
