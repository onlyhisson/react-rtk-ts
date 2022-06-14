import React from "react";
import { useAppSelector } from "hooks";
import { selectUser } from "features/users/usersSlice";

export const PostAuthor = ({ userId }: any) => {
  const author = useAppSelector(selectUser(userId));

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
